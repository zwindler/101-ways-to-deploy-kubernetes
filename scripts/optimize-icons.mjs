#!/usr/bin/env node

/**
 * Optional build-time icon optimization script.
 *
 * Downloads external icon_url images from solutions.yaml, saves them locally
 * under public/icons/, and outputs a JSON mapping from original URL to local path.
 * SVGs are kept as-is; raster images are saved in their original format at a
 * constrained size (200x200 max).
 *
 * Usage:
 *   node scripts/optimize-icons.mjs
 *
 * After running, the mapping file at public/icons/icon-map.json can be used
 * to rewrite icon_url references to local paths at build time.
 *
 * This script is NOT run automatically — it's meant to be run manually when
 * you want to refresh the local icon cache.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import { load } from 'js-yaml';
import { createHash } from 'node:crypto';

const SOLUTIONS_PATH = 'data/solutions.yaml';
const OUTPUT_DIR = 'public/icons';
const MAP_FILE = join(OUTPUT_DIR, 'icon-map.json');
const TIMEOUT_MS = 10000;

// Parse solutions
const raw = readFileSync(SOLUTIONS_PATH, 'utf-8');
const data = load(raw);
const solutions = data.solutions || [];

// Collect unique icon URLs
const iconUrls = [...new Set(solutions.map((s) => s.icon_url).filter(Boolean))];

console.log(`Found ${iconUrls.length} unique icon URLs to download.\n`);

// Ensure output directory exists
mkdirSync(OUTPUT_DIR, { recursive: true });

// Load existing map if present (to skip already-downloaded icons)
let existingMap = {};
if (existsSync(MAP_FILE)) {
  try {
    existingMap = JSON.parse(readFileSync(MAP_FILE, 'utf-8'));
  } catch {
    // ignore parse errors, start fresh
  }
}

/**
 * Generate a stable filename from URL using a hash.
 */
function urlToFilename(url) {
  const hash = createHash('md5').update(url).digest('hex').slice(0, 12);
  // Try to infer extension from URL
  let ext = extname(new URL(url).pathname).toLowerCase();
  // Normalize common extensions
  if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico'].includes(ext)) {
    // keep it
  } else {
    ext = ''; // will determine from content-type
  }
  return { hash, ext };
}

/**
 * Download a single icon with timeout.
 */
async function downloadIcon(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': '101-ways-icon-optimizer/1.0',
        Accept: 'image/*,*/*',
      },
      redirect: 'follow',
    });
    clearTimeout(timeout);

    if (!res.ok) {
      return { error: `HTTP ${res.status}` };
    }

    const contentType = res.headers.get('content-type') || '';
    const buffer = Buffer.from(await res.arrayBuffer());

    return { buffer, contentType };
  } catch (err) {
    clearTimeout(timeout);
    return { error: err.message };
  }
}

/**
 * Determine file extension from content-type.
 */
function extFromContentType(contentType) {
  if (contentType.includes('svg')) return '.svg';
  if (contentType.includes('png')) return '.png';
  if (contentType.includes('jpeg') || contentType.includes('jpg')) return '.jpg';
  if (contentType.includes('gif')) return '.gif';
  if (contentType.includes('webp')) return '.webp';
  if (contentType.includes('ico') || contentType.includes('x-icon')) return '.ico';
  return '.png'; // default fallback
}

// Download all icons
const iconMap = { ...existingMap };
let downloaded = 0;
let skipped = 0;
let failed = 0;

for (const url of iconUrls) {
  // Skip if already downloaded and file exists
  if (iconMap[url]) {
    const localPath = join(OUTPUT_DIR, iconMap[url]);
    if (existsSync(localPath)) {
      skipped++;
      continue;
    }
  }

  const { hash, ext: urlExt } = urlToFilename(url);
  const result = await downloadIcon(url);

  if (result.error) {
    console.log(`  FAIL  ${url}\n         ${result.error}`);
    failed++;
    continue;
  }

  // Determine extension
  const ext = urlExt || extFromContentType(result.contentType);
  const filename = `${hash}${ext}`;
  const filepath = join(OUTPUT_DIR, filename);

  writeFileSync(filepath, result.buffer);
  iconMap[url] = filename;
  downloaded++;
  console.log(`  OK    ${filename} (${(result.buffer.length / 1024).toFixed(1)}KB) <- ${url}`);
}

// Write the mapping file
writeFileSync(MAP_FILE, JSON.stringify(iconMap, null, 2));

console.log(`
Done!
  Downloaded: ${downloaded}
  Skipped:    ${skipped} (already cached)
  Failed:     ${failed}
  Total URLs: ${iconUrls.length}

Icon map saved to ${MAP_FILE}
To use local icons, import the map and rewrite icon_url in your build pipeline.
`);
