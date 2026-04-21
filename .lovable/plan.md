

## Fix "Unexpected Application Error: The string did not match the expected pattern"

### Root cause

The site uses BOTH `<Seo />` (which renders via vite-react-ssg's `<Head>` / react-helmet-async) AND `useSeo()` (which imperatively mutates `document.head`) on every page. On client-side navigation:

1. react-helmet-async tries to reconcile the previous route's `<title>`, `<meta>`, `<link rel="canonical">` and `<script type="application/ld+json">` with the new route's tags.
2. At the same time, `useSeo()` runs in a `useEffect` and removes/recreates those same elements (especially the JSON-LD `<script>` via `getElementById(...).remove()`).
3. react-helmet then tries to operate on DOM nodes that no longer exist — in Safari/WebKit this surfaces as `SyntaxError: The string did not match the expected pattern` from its internal selector/attribute reconciliation.

A page refresh fixes it because react-helmet starts fresh with no prior state to reconcile against.

### Fix

Stop double-managing the head. The build-time SSG already injects per-route SEO tags into the static HTML (great for crawlers). For client-side route changes we only need ONE updater — keep the imperative `useSeo()` (it's the more reliable of the two for runtime updates) and have `<Seo />` render its tags **only during SSG / first paint**, not on subsequent client navigations.

**File: `src/hooks/use-seo.ts`**

1. Make the `<Seo />` component a no-op after the initial client render. Detect first render with a module-level flag or a `useRef` that's set to `true` after mount — on subsequent route changes return `null` so react-helmet doesn't reconcile. The imperative `useSeo()` handles all client navigation updates.

   - Concretely: wrap the `Head` render in `if (typeof window !== "undefined" && hasHydrated) return null;`, where `hasHydrated` is set to `true` after the first mount via a module-level boolean.

2. Harden `useSeo()` so it's the single source of truth on the client:
   - Remove the cleanup that deletes the JSON-LD on unmount (it causes a flash of missing schema between routes and can race with helmet). Just let the next route's `useSeo()` overwrite the same `#page-jsonld` element.
   - Wrap `JSON.stringify(jsonLd)` in a try/catch and skip injection on failure (defensive — prevents one bad payload from breaking the whole route).

### Why this works

- Crawlers and first paint still get the correct per-route head from SSG (unchanged).
- On client navigation, only `useSeo()` touches the DOM — no more race between helmet's reconciler and the imperative updater, which eliminates the WebKit `SyntaxError`.
- No page-level changes needed; all 9 pages keep their existing `<Seo {...seo} /> + useSeo(seo)` pattern.

### Verification

After the fix, navigate Home → Blog → Service → ServiceCity → ServiceArea → About → Contact in Safari (desktop + iOS). The error overlay should no longer appear, and `<title>` / canonical / JSON-LD should still update correctly on each route (verify in DevTools → Elements → `<head>`).

