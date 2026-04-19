
You're asking about `vite-plugin-prerender` — but I want to flag something important before we change anything.

## Current state

This project **already has full static pre-rendering** via `vite-react-ssg`, which is a more capable solution than `vite-plugin-prerender`. Looking at `src/main.tsx`, `src/App.tsx`, and `vite.config.ts`:

- Every route (`/`, `/services`, `/services/:slug`, `/services/:service/:city`, `/service-areas/:slug`, `/blog/:slug`, etc.) is pre-rendered to a real `.html` file at build time via `getStaticPaths`.
- Each page injects unique `<title>`, meta description, canonical, and JSON-LD into the static HTML through the `<Head>` component used in `useSeo`.
- We verified earlier with `curl` that the live site serves unique pre-rendered HTML per URL — Google sees the full content without executing JS.

## Why `vite-plugin-prerender` would be a downgrade

| | `vite-react-ssg` (current) | `vite-plugin-prerender` |
|---|---|---|
| Approach | True SSR build — renders React on Node at build time | Spins up headless Chromium, snapshots rendered DOM |
| Dynamic routes | First-class via `getStaticPaths` | Must hand-list every URL in config |
| Per-route `<head>` | Built-in via `<Head>` component | Captured from DOM, fragile |
| Build speed | Fast (no browser) | Slow (launches Puppeteer per page) |
| Status | Actively maintained | Largely unmaintained, Puppeteer-based |

Swapping in `vite-plugin-prerender` would mean tearing out a working SSR pipeline and replacing it with a slower, more brittle DOM-snapshot approach — and we'd have to manually enumerate ~50+ service-city URLs in the Vite config instead of generating them from `SERVICES` × `CITIES`.

## Recommendation

**Do nothing in code.** The SEO concern that prompted this (duplicate content, missing pre-rendered HTML) is already solved by `vite-react-ssg`.

If something specific made you think pre-rendering was missing — a page that looks blank in "View Source", a tool reporting JS-only content, an audit flagging a particular URL — tell me which URL and what symptom, and I'll investigate that specific case rather than swap the build system.

## If you still want to switch

I'd push back, but if there's a concrete reason (e.g. you want to drop SSG entirely and only snapshot a handful of pages), let me know the goal and I'll plan the migration. Otherwise, no changes needed.
