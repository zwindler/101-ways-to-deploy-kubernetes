# Improvement Report - 101 Ways to Deploy Kubernetes

**Date:** 2026-03-11
**Scope:** Code quality, performance, SEO, accessibility, UX, and build/DX review (content excluded)

---

## Code Quality & Architecture

### 1. Dead/duplicate demo page

**File:** `src/pages/demo.astro`

The demo page is a leftover development page with its own parallel filtering logic, hardcoded categories, and a `<script id="solutions-data">` approach that duplicates the main page's architecture differently. It gets deployed to production as `/demo`.

**Recommendation:** Remove it or exclude it from builds.

---

### 2. Duplicated inline `<script>` per card (major)

**File:** `src/components/SolutionCard.astro:706`

The component uses `define:vars` to inject a unique `cardId` per card, meaning the entire modal init script (~115 lines) is **duplicated inline for every single solution** (~100+ times in the output HTML). With 100+ solutions, that's ~11,500 lines of near-identical JS in the HTML.

**Recommendation:** Use a single delegated event listener on the document that reads `data-card-id` from the clicked element.

---

### 3. Inline `onerror` handlers in `<img>` tags

**File:** `src/components/SolutionCard.astro:179`, `src/components/SolutionCard.astro:470`

Large JS strings are embedded in `onerror` attributes. This is fragile, hard to maintain, and could conflict with Content Security Policy (CSP).

**Recommendation:** Move the fallback logic to a shared JS function.

---

### 4. Typed data loading

**File:** `src/pages/index.astro:13`

The YAML data is cast as `{ solutions: any[] }`. A Props interface in `SolutionCard.astro` already defines the shape.

**Recommendation:** Extract a shared `Solution` type in a `src/types.ts` file and use it everywhere instead of `any[]`.

---

### 5. `fs.readFileSync` for data loading

**Files:** `src/pages/index.astro`, `src/pages/demo.astro`

Both pages use `fs.readFileSync` + `js-yaml` to load data at build time. Astro supports content collections and Vite plugins for importing YAML directly.

**Recommendation:** Use Astro content collections or a Vite YAML plugin for cleaner, type-safe data loading.

---

## Performance

### 6. All 100+ modals rendered in HTML

**File:** `src/components/SolutionCard.astro:446-704`

Each `SolutionCard` renders a full modal (`<div id="modal-...">`) in the initial HTML, even though 99% will never be opened. This results in a massive DOM size for a static page.

**Recommendation:** Render modals lazily -- create the DOM on click from a `<template>` element or from data attributes.

---

### 7. External images with no fallback dimensions

**File:** `src/components/SolutionCard.astro:174`, `src/components/SolutionCard.astro:465`

Every card loads an `icon_url` from random external domains (GitHub avatars, CDNs, etc.) with no `width`/`height` attributes. This causes layout shifts (CLS) and provides no size hints for the browser.

**Recommendation:** Add explicit `width`/`height` attributes or use `aspect-ratio` in CSS.

---

### 8. No image optimization

**File:** `data/solutions.yaml` (all `icon_url` entries)

External images are loaded as-is (many are large PNGs/SVGs). There is no resizing, format conversion, or proxying.

**Recommendation:** Consider proxying and optimizing images at build time, or at minimum set appropriate `width`/`height` constraints and add `decoding="async"` alongside the existing `loading="lazy"`.

---

### 9. Google Fonts loaded synchronously

**File:** `src/layouts/Layout.astro:24`

Inter is loaded from Google Fonts via a render-blocking `<link>`. While `display=swap` is used in the URL, the CSS file itself is still render-blocking.

**Recommendation:** Self-host the font or use `<link rel="preload" as="style">` to avoid the render-blocking chain.

---

## SEO & Accessibility

### 10. Favicon path ignores `base`

**File:** `src/layouts/Layout.astro:21`

The favicon is hardcoded as `href="/favicon.svg"` but the site is deployed under `/101-ways-to-deploy-kubernetes/`. This means the favicon won't load in production.

**Recommendation:** Use `import.meta.env.BASE_URL` or a relative path.

---

### 11. Missing `og:image` and `og:url` meta tags

**File:** `src/layouts/Layout.astro`

The layout has `og:title` and `og:description` but no `og:image` or `og:url`, which are important for social media previews (Twitter, LinkedIn, Slack, etc.).

**Recommendation:** Add `og:image` (with a preview screenshot or banner) and `og:url` meta tags.

---

### 12. Missing `twitter:card` meta tags

**File:** `src/layouts/Layout.astro`

No Twitter Card metadata is present.

**Recommendation:** Add `twitter:card`, `twitter:title`, and `twitter:description` meta tags.

---

### 13. Cards are clickable divs, not semantic elements

**File:** `src/components/SolutionCard.astro:162`

The card has `cursor-pointer` on a `<div>` but uses JS click handlers for modal opening. Screen readers won't announce these as interactive elements.

**Recommendation:** Add `role="button"` and `tabindex="0"` at minimum. Also handle `keydown` for Enter and Space keys. Alternatively, wrap cards in a `<button>` or `<a>` element.

---

### 14. Modal focus trap missing

**File:** `src/components/SolutionCard.astro:764`

When a modal opens, focus moves to the close button, but there is no focus trap. Users can tab out of the modal into the page behind it.

**Recommendation:** Implement a focus trap so keyboard users remain within the modal while it's open.

---

## UX & Functionality

### 15. No URL-based filter state

**File:** `src/pages/index.astro:103-113`

Filters and search are entirely in JS memory. Refreshing the page or sharing a link loses the filter state.

**Recommendation:** Encode filters in URL query parameters (e.g., `?category=Desktop&oss=true&q=k3s`) so users can bookmark and share filtered views.

---

### 16. No sort option

There is no way to sort solutions (by name, stars, category, etc.).

**Recommendation:** Add a sort dropdown with options like "Name (A-Z)", "Stars (high to low)", "Category", etc.

---

### 17. Category count not shown

**File:** `src/components/FilterBar.astro:45-52`

The filter pills just show the category name (e.g., "Desktop", "Managed"). Users have no sense of how many solutions exist in each category.

**Recommendation:** Show counts alongside category names, e.g., "Desktop (18)", "Managed (25)".

---

### 18. Mobile: filter content hidden by default with no visual cue

**File:** `src/components/FilterBar.astro:41`

On mobile, `filter-content` is `hidden` by default. Users might not realize filters exist. The filter count badge helps, but it only appears after filtering.

**Recommendation:** Add a subtle visual indicator or hint that filters are available, or show the most important filter (category) by default on mobile.

---

### 19. Search doesn't highlight matches

**File:** `src/pages/index.astro:124-133`

When searching, matching cards are shown/hidden but the matching text isn't highlighted, making it hard to see why a particular card matched.

**Recommendation:** Highlight the matching text within visible cards when a search query is active.

---

## Build & Developer Experience

### 20. No YAML validation in CI

**File:** `.github/workflows/ci.yml`

The CI pipeline only runs `npm run build`. There is a `data/schema.yaml` that documents the data structure, but no actual validation step runs against `solutions.yaml`.

**Recommendation:** Add a schema validation step (e.g., with `ajv`, a JSON Schema validator, or a simple Node.js script) to catch data errors in PRs.

---

### 21. No lint/format tooling

No ESLint, Prettier, or any code formatting is configured. For a collaborative open-source project, this leads to inconsistent code style in contributions.

**Recommendation:** Add Prettier and optionally ESLint with Astro plugin. Add a format check step to CI.

---

### 22. Outdated dependency versions

**File:** `package.json`

`astro: ^5.0.5` is used but the Tailwind integration `@astrojs/tailwind: ^5.1.2` is for the older Tailwind CSS v3 approach. Astro 5 works better with the newer integration patterns.

**Recommendation:** Audit and update dependencies. Check compatibility between Astro 5 and the Tailwind integration version.

---

### 23. `astro check` in build step

**File:** `package.json:8`

The build script is `"build": "astro check && astro build"`. Running type checking on every build is fine for CI but slows down local development.

**Recommendation:** Separate the scripts: `"build": "astro build"` and `"check": "astro check"`. Update CI to run both explicitly.

---

## Priority Summary

| Priority | # | Issue | Impact |
|----------|---|-------|--------|
| **High** | 2 | Inline script per card (~100x duplication) | Page size, parse time |
| **High** | 6 | All modals in DOM at load | DOM size, memory |
| **High** | 15 | No URL-based filter state | UX, shareability |
| **High** | 10 | Favicon path ignores `base` | Broken in production |
| **Medium** | 1 | Remove/exclude demo page | Clean deployment |
| **Medium** | 4 | Extract shared types, stop using `any` | Maintainability |
| **Medium** | 20 | Add YAML validation to CI | Data quality |
| **Medium** | 13-14 | Accessibility (card roles, focus trap) | A11y compliance |
| **Medium** | 3 | Inline `onerror` handlers | Maintainability, CSP |
| **Medium** | 7 | Images missing dimensions | CLS / performance |
| **Medium** | 11-12 | Missing OG/Twitter meta tags | Social sharing |
| **Low** | 16 | Add sort options | UX polish |
| **Low** | 17 | Show category counts in filter pills | UX polish |
| **Low** | 19 | Highlight search matches | UX polish |
| **Low** | 21 | Add linting/formatting | DX for contributors |
| **Low** | 5 | Use content collections for data | DX, type safety |
| **Low** | 8-9 | Image optimization, font loading | Performance polish |
| **Low** | 22-23 | Dependency audit, split build/check | DX, build speed |
