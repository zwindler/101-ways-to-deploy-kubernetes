#!/usr/bin/env node
/**
 * Validates data/solutions.yaml against the schema documented in data/schema.yaml.
 * Exit code 0 = valid, 1 = errors found.
 *
 * Usage: node scripts/validate-solutions.mjs
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { load } from 'js-yaml';

const VALID_CATEGORIES = [
  'Desktop',
  'InfraAsCode',
  'KubernetesInKubernetes',
  'KubernetesOS',
  'Managed',
  'ManagementPlatform',
  'Other',
  'Selfhosted',
];

const VALID_LANGUAGES = [
  'en',
  'fr',
  'de',
  'es',
  'zh',
  'ja',
  'pt',
  'ko',
  'it',
  'ru',
  'nl',
  'pl',
  'tr',
  'ar',
  'hi',
];

const VALID_REF_TYPES = ['article', 'book', 'video', 'tutorial', 'documentation', 'talk'];

const VALID_ICON_BG = ['light', 'dark'];

const errors = [];

function err(index, name, msg) {
  errors.push(`  [${index}] "${name}": ${msg}`);
}

// ---- Load ----

const yamlPath = join(process.cwd(), 'data', 'solutions.yaml');
let data;
try {
  const raw = readFileSync(yamlPath, 'utf8');
  data = load(raw);
} catch (e) {
  console.error(`Failed to parse solutions.yaml: ${e.message}`);
  process.exit(1);
}

if (!data || !Array.isArray(data.solutions)) {
  console.error('solutions.yaml must have a top-level "solutions" array');
  process.exit(1);
}

const solutions = data.solutions;
const names = new Set();

// ---- Validate each solution ----

solutions.forEach((s, i) => {
  const label = s?.name || `(index ${i})`;

  // Required fields
  if (!s.name || typeof s.name !== 'string') {
    err(i, label, 'missing or invalid "name" (required string)');
  }

  if (!s.category || typeof s.category !== 'string') {
    err(i, label, 'missing or invalid "category" (required string)');
  } else if (!VALID_CATEGORIES.includes(s.category)) {
    err(
      i,
      label,
      `invalid category "${s.category}". Must be one of: ${VALID_CATEGORIES.join(', ')}`,
    );
  }

  if (!s.url || typeof s.url !== 'string') {
    err(i, label, 'missing or invalid "url" (required string)');
  } else if (!/^https?:\/\//.test(s.url)) {
    err(i, label, `url must start with http:// or https:// (got "${s.url}")`);
  }

  // Duplicate name check
  if (s.name) {
    const lower = s.name.toLowerCase();
    if (names.has(lower)) {
      err(i, label, 'duplicate solution name');
    }
    names.add(lower);
  }

  // Optional field types
  if (s.icon_url !== undefined && typeof s.icon_url !== 'string') {
    err(i, label, '"icon_url" must be a string');
  }

  if (s.icon_background_color !== undefined && !VALID_ICON_BG.includes(s.icon_background_color)) {
    err(
      i,
      label,
      `invalid "icon_background_color" "${s.icon_background_color}". Must be: ${VALID_ICON_BG.join(', ')}`,
    );
  }

  if (s.publisher !== undefined && typeof s.publisher !== 'string') {
    err(i, label, '"publisher" must be a string');
  }

  if (s.description !== undefined && typeof s.description !== 'string') {
    err(i, label, '"description" must be a string');
  }

  if (s.license !== undefined && typeof s.license !== 'string') {
    err(i, label, '"license" must be a string');
  }

  if (s.open_source !== undefined && typeof s.open_source !== 'boolean') {
    err(i, label, '"open_source" must be a boolean');
  }

  if (s.abandoned !== undefined && typeof s.abandoned !== 'boolean') {
    err(i, label, '"abandoned" must be a boolean');
  }

  if (s.production_ready !== undefined && typeof s.production_ready !== 'boolean') {
    err(i, label, '"production_ready" must be a boolean');
  }

  if (s.stars !== undefined && (typeof s.stars !== 'number' || s.stars < 0)) {
    err(i, label, '"stars" must be a non-negative number');
  }

  // Arrays
  for (const field of ['based_on', 'tags', 'cloud_providers']) {
    if (s[field] !== undefined) {
      if (!Array.isArray(s[field])) {
        err(i, label, `"${field}" must be an array`);
      } else if (s[field].some((v) => typeof v !== 'string')) {
        err(i, label, `"${field}" must be an array of strings`);
      }
    }
  }

  // References
  if (s.references !== undefined) {
    if (!Array.isArray(s.references)) {
      err(i, label, '"references" must be an array');
    } else {
      s.references.forEach((ref, ri) => {
        const refLabel = ref?.title || `ref[${ri}]`;

        if (!ref.title || typeof ref.title !== 'string') {
          err(i, label, `reference "${refLabel}": missing or invalid "title"`);
        }

        if (!ref.url || typeof ref.url !== 'string') {
          err(i, label, `reference "${refLabel}": missing or invalid "url"`);
        }

        if (!ref.language || typeof ref.language !== 'string') {
          err(i, label, `reference "${refLabel}": missing "language"`);
        } else if (!VALID_LANGUAGES.includes(ref.language)) {
          err(
            i,
            label,
            `reference "${refLabel}": invalid language "${ref.language}". Must be one of: ${VALID_LANGUAGES.join(', ')}`,
          );
        }

        if (!ref.type || typeof ref.type !== 'string') {
          err(i, label, `reference "${refLabel}": missing "type"`);
        } else if (!VALID_REF_TYPES.includes(ref.type)) {
          err(
            i,
            label,
            `reference "${refLabel}": invalid type "${ref.type}". Must be one of: ${VALID_REF_TYPES.join(', ')}`,
          );
        }

        if (ref.description !== undefined && typeof ref.description !== 'string') {
          err(i, label, `reference "${refLabel}": "description" must be a string`);
        }
      });
    }
  }
});

// ---- Report ----

console.log(`Validated ${solutions.length} solutions.`);

if (errors.length > 0) {
  console.error(`\nFound ${errors.length} error(s):\n`);
  errors.forEach((e) => console.error(e));
  process.exit(1);
} else {
  console.log('All solutions are valid.');
}
