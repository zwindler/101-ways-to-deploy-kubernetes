# Improvement Report - 101 Ways to Deploy Kubernetes

**Date:** 2026-03-11
**Scope:** Code quality, performance, SEO, accessibility, UX, and build/DX review (content excluded)
**Last updated:** 2026-03-21

---

## Code Quality & Architecture

### 1. ~~Dead/duplicate demo page~~ DONE

**File:** `src/pages/demo.astro`

~~The demo page is a leftover development page with its own parallel filtering logic, hardcoded categories, and a `<script id="solutions-data">` approach that duplicates the main page's architecture differently. It gets deployed to production as `/demo`.~~

**Resolved:** Removed `src/pages/demo.astro` entirely. Build now produces a single page (`/index.html`) instead of two.

---

### 2. ~~Duplicated inline `<script>` per card (major)~~ DONE

**File:** `src/components/SolutionCard.astro`

~~The component uses `define:vars` to inject a unique `cardId` per card, meaning the entire modal init script (~115 lines) is **duplicated inline for every single solution** (~100+ times in the output HTML). With 100+ solutions, that's ~11,500 lines of near-identical JS in the HTML.~~

**Resolved:** Replaced the per-card `<script define:vars>` with a single delegated event listener in `index.astro` that reads `data-card-id` from the clicked element. Solution data is stored as lightweight `<script type="application/json">` blocks per card. The ~115-line modal init script is now a single shared module.

---

### 3. ~~Inline `onerror` handlers in `<img>` tags~~ DONE

**File:** `src/components/SolutionCard.astro:179`

~~Large JS strings are embedded in `onerror` attributes. This is fragile, hard to maintain, and could conflict with Content Security Policy (CSP).~~

**Resolved:** Removed all inline `onerror` attributes from `<img>` tags in both the card template and modal builder. Replaced with a single delegated `error` event listener (capture phase) in `index.astro` that detects `img.icon-img` elements and applies the letter-fallback. CSP-compatible and centrally maintainable.

---

### 4. ~~Typed data loading~~ DONE

**File:** `src/pages/index.astro:13`

~~The YAML data is cast as `{ solutions: any[] }`. A Props interface in `SolutionCard.astro` already defines the shape.~~

**Resolved:** Created `src/types.ts` with shared `Solution` and `Reference` interfaces. `index.astro` now uses `Solution[]` instead of `any[]`. `SolutionCard.astro` imports from the shared type file instead of defining its own inline interface.

---

### 5. ~~`fs.readFileSync` for data loading~~ DONE

**Files:** `src/pages/index.astro`

~~The page uses `fs.readFileSync` + `js-yaml` to load data at build time. Astro supports content collections and Vite plugins for importing YAML directly.~~

**Resolved:** Installed `@rollup/plugin-yaml` and configured it as a Vite plugin in `astro.config.mjs`. `index.astro` now uses `import solutionsData from '../../data/solutions.yaml'` instead of `fs.readFileSync` + `js-yaml`. Added `src/env.d.ts` with a `.yaml` module type declaration for TypeScript support. Moved `js-yaml` and `@types/js-yaml` to `devDependencies` (only used by the validation script now).

---

## Performance

### 6. ~~All 100+ modals rendered in HTML~~ DONE

**File:** `src/components/SolutionCard.astro`

~~Each `SolutionCard` renders a full modal (`<div id="modal-...">`) in the initial HTML, even though 99% will never be opened. This results in a massive DOM size for a static page.~~

**Resolved:** Modals are now rendered lazily on click. The modal HTML is built client-side from JSON data stored in `<script type="application/json">` blocks. A singleton overlay element is reused across all cards. Zero modal DOM nodes exist on initial page load.

---

### 7. ~~External images with no fallback dimensions~~ DONE

**File:** `src/components/SolutionCard.astro:174`

~~Every card loads an `icon_url` from random external domains (GitHub avatars, CDNs, etc.) with no `width`/`height` attributes. This causes layout shifts (CLS) and provides no size hints for the browser.~~

**Resolved:** Added explicit `width="80" height="80"` (card) and `width="128" height="128"` (modal) attributes to all icon `<img>` tags. Also added `decoding="async"` alongside the existing `loading="lazy"` for better rendering performance.

---

### 8. ~~No image optimization~~ DONE

**File:** `data/solutions.yaml` (all `icon_url` entries)

~~External images are loaded as-is (many are large PNGs/SVGs). There is no resizing, format conversion, or proxying.~~

**Resolved:** Added `fetchpriority="low"` to all icon `<img>` tags (card and modal) since icons are not LCP candidates. Added `content-visibility: auto` with `contain-intrinsic-size` on `.solution-item` elements for off-screen rendering optimization. Created an optional `scripts/optimize-icons.mjs` script (`npm run optimize-icons`) that downloads external icons to `public/icons/` for local caching. Full build-time image proxying was not implemented as it adds network dependencies and complexity to the build pipeline.

---

### 9. ~~Google Fonts loaded synchronously~~ DONE

**File:** `src/layouts/Layout.astro`

~~Inter is loaded from Google Fonts via a render-blocking `<link>`. While `display=swap` is used in the URL, the CSS file itself is still render-blocking.~~

**Resolved:** Google Fonts dependency removed. Inter is now self-hosted under `public/fonts/` with a local `@font-face` declaration using `font-display: swap`. This eliminates the render-blocking CSS request to `fonts.googleapis.com` and the subsequent font download from `fonts.gstatic.com`, removing a 3-hop critical request chain (750ms+ savings per PageSpeed Insights).

---

## SEO & Accessibility

### 10. ~~Favicon path ignores `base`~~ DONE

**File:** `src/layouts/Layout.astro:21`

~~The favicon is hardcoded as `href="/favicon.svg"` but the site is deployed under `/101-ways-to-deploy-kubernetes/`. This means the favicon won't load in production.~~

**Resolved:** Changed to use `import.meta.env.BASE_URL` prefix so the favicon resolves correctly under any base path.

---

### 11. ~~Missing `og:image` and `og:url` meta tags~~ DONE

**File:** `src/layouts/Layout.astro`

~~The layout has `og:title` and `og:description` but no `og:image` or `og:url`, which are important for social media previews (Twitter, LinkedIn, Slack, etc.).~~

**Resolved:** Added `og:url` and `og:image` meta tags to `Layout.astro`. The site URL is derived from the known GitHub Pages deployment URL. Note: `og:image` currently points to the SVG favicon; for richer social previews, a dedicated PNG/JPG banner image could be added later.

---

### 12. ~~Missing `twitter:card` meta tags~~ DONE

**File:** `src/layouts/Layout.astro`

~~No Twitter Card metadata is present.~~

**Resolved:** Added `twitter:card` (summary), `twitter:title`, and `twitter:description` meta tags to `Layout.astro`.

---

### 13. ~~Cards are clickable divs, not semantic elements~~ DONE

**File:** `src/components/SolutionCard.astro:162`

~~The card has `cursor-pointer` on a `<div>` but uses JS click handlers for modal opening. Screen readers won't announce these as interactive elements.~~

**Resolved:** Added `role="button"`, `tabindex="0"`, and `aria-label` to each card wrapper div. Added a delegated `keydown` handler in `index.astro` that opens the modal on Enter or Space key press. Cards are now fully keyboard-navigable and screen-reader-accessible.

---

### 14. ~~Modal focus trap missing~~ DONE

**File:** `src/pages/index.astro` (modal manager script)

~~When a modal opens, focus moves to the close button, but there is no focus trap. Users can tab out of the modal into the page behind it.~~

**Resolved:** Implemented a focus trap in the modal manager. When a modal opens, a `keydown` listener traps Tab/Shift+Tab within the modal's focusable elements (links, buttons, inputs). The trap is removed when the modal closes. Keyboard users can no longer accidentally tab into the page behind the modal.

---

## UX & Functionality

### 15. ~~No URL-based filter state~~ DONE

**File:** `src/pages/index.astro`

~~Filters and search are entirely in JS memory. Refreshing the page or sharing a link loses the filter state.~~

**Resolved:** Filters and search are now serialized to URL query parameters (e.g., `?q=k3s&category=Desktop&oss=1`). URL is updated via `history.replaceState` on every change. On page load, state is restored from URL params via a `filters-restore` event that syncs SearchBar and FilterBar UI. Users can now bookmark and share filtered views.

---

### 16. ~~No sort option~~ CANCELLED

~~There is no way to sort solutions (by name, stars, category, etc.).~~

**Cancelled:** User decided this is not valuable for the current use case.

---

### 17. ~~Category count not shown~~ CANCELLED

**File:** `src/components/FilterBar.astro:45-52`

~~The filter pills just show the category name (e.g., "Desktop", "Managed"). Users have no sense of how many solutions exist in each category.~~

**Cancelled:** User decided this would bloat the display, especially on mobile.

---

### 18. ~~Mobile: filter content hidden by default with no visual cue~~ DONE

**File:** `src/components/FilterBar.astro:41`

~~On mobile, `filter-content` is `hidden` by default. Users might not realize filters exist. The filter count badge helps, but it only appears after filtering.~~

**Resolved:** Added a pulsing "— tap to refine" hint text next to the "Filters" label in the mobile toggle button. The hint uses Tailwind's `animate-pulse` for subtle attention-drawing and is removed on first interaction (when the user taps the filter toggle).

---

### 19. ~~Search doesn't highlight matches~~ DONE

**File:** `src/pages/index.astro:124-133`

~~When searching, matching cards are shown/hidden but the matching text isn't highlighted, making it hard to see why a particular card matched.~~

**Resolved:** Added search match highlighting with `<mark>` tags in card `<h3>` headings. Original text is stored in `data-original-text` for clean restoration when the search is cleared. The highlight uses case-insensitive regex matching.

---

## Build & Developer Experience

### 20. ~~No YAML validation in CI~~ DONE

**File:** `.github/workflows/ci.yml`

~~The CI pipeline only runs `npm run build`. There is a `data/schema.yaml` that documents the data structure, but no actual validation step runs against `solutions.yaml`.~~

**Resolved:** Created `scripts/validate-solutions.mjs` — a comprehensive validation script that checks all 123 solutions against the schema (required fields, enum values, types, duplicate detection, reference structure). Added `npm run validate` script and integrated it into the CI workflow before the build step.

---

### 21. ~~No lint/format tooling~~ DONE

~~No ESLint, Prettier, or any code formatting is configured. For a collaborative open-source project, this leads to inconsistent code style in contributions.~~

**Resolved:** Installed Prettier with `prettier-plugin-astro`. Added `.prettierrc` config (semicolons, single quotes, trailing commas, 100 char width) and `.prettierignore`. Added `npm run format` and `npm run format:check` scripts. Integrated `format:check` into the CI workflow. All project files formatted consistently.

---

### 22. ~~Outdated dependency versions~~ DONE

**File:** `package.json`

~~`astro: ^5.0.5` is used but the Tailwind integration `@astrojs/tailwind: ^5.1.2` is for the older Tailwind CSS v3 approach. Astro 5 works better with the newer integration patterns.~~

**Resolved:** Updated all dependencies to latest within their semver ranges: `astro` 5.0.5 -> 5.18.1, `@astrojs/check` 0.9.4 -> 0.9.8, `@types/node` 25.1.0 -> 25.5.0. Fixed 4 npm audit vulnerabilities (devalue, h3, rollup, svgo). Major version upgrades (Astro 6, Tailwind 4, @astrojs/tailwind 6) were intentionally skipped — they require dedicated migration work. Moved `js-yaml`, `@types/js-yaml`, and `@rollup/plugin-yaml` to `devDependencies`.

---

### 23. ~~`astro check` in build step~~ DONE

**File:** `package.json:8`

~~The build script is `"build": "astro check && astro build"`. Running type checking on every build is fine for CI but slows down local development.~~

**Resolved:** Split into separate scripts: `"build": "astro build"` and `"check": "astro check"`. CI workflow updated to run `npm run check` as a separate step before `npm run build`. Local `npm run build` is now faster since it skips type checking.

---

## PageSpeed Insights (2026-03-21)

### 24. ~~Forced layout reflow (44ms)~~ DONE

**Source:** PageSpeed "Avoid forced reflow" audit

~~JavaScript is reading geometric properties (e.g., `offsetWidth`, `scrollHeight`) after DOM mutations, causing a synchronous layout recalculation. PageSpeed attributes 44ms to "[non attributed]" forced reflow.~~

**Resolved:** Refactored the staggered card animation to batch all DOM writes inside a single `requestAnimationFrame` callback and use `style.cssText` for atomic property assignment. This eliminates the per-card read-write interleaving that caused layout thrashing.

---

## Priority Summary

| Priority   | #     | Issue                                      | Status    | Impact                |
| ---------- | ----- | ------------------------------------------ | --------- | --------------------- |
| **High**   | 2     | Inline script per card (~100x duplication) | DONE      | Page size, parse time |
| **High**   | 6     | All modals in DOM at load                  | DONE      | DOM size, memory      |
| **High**   | 15    | No URL-based filter state                  | DONE      | UX, shareability      |
| **High**   | 10    | Favicon path ignores `base`                | DONE      | Broken in production  |
| **High**   | 9     | Google Fonts render-blocking (750ms)       | DONE      | LCP, critical chain   |
| **Medium** | 1     | Remove/exclude demo page                   | DONE      | Clean deployment      |
| **Medium** | 4     | Extract shared types, stop using `any`     | DONE      | Maintainability       |
| **Medium** | 3     | Inline `onerror` handlers                  | DONE      | Maintainability, CSP  |
| **Medium** | 7     | Images missing dimensions                  | DONE      | CLS / performance     |
| **Medium** | 13-14 | Accessibility (card roles, focus trap)     | DONE      | A11y compliance       |
| **Medium** | 11-12 | Missing OG/Twitter meta tags               | DONE      | Social sharing        |
| **Medium** | 24    | Forced layout reflow (44ms)                | DONE      | Runtime performance   |
| **Medium** | 20    | Add YAML validation to CI                  | DONE      | Data quality          |
| **Low**    | 5     | Use Vite YAML plugin for data loading      | DONE      | DX, type safety       |
| **Low**    | 19    | Highlight search matches                   | DONE      | UX polish             |
| **Low**    | 21    | Add linting/formatting                     | DONE      | DX for contributors   |
| **Low**    | 16    | Add sort options                           | CANCELLED | UX polish             |
| **Low**    | 17    | Show category counts in filter pills       | CANCELLED | UX polish             |
| **Low**    | 8     | Image optimization                         | DONE      | Performance polish    |
| **Low**    | 18    | Mobile filter visibility hint              | DONE      | UX polish             |
| **Low**    | 22-23 | Dependency audit, split build/check        | DONE      | DX, build speed       |
