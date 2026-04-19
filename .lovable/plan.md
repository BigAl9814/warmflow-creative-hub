
## Found the real source

The fake `aggregateRating` lives in **`index.html` lines 78-82** — a static `<script type="application/ld+json">` block in the HTML template itself. Because every pre-rendered page is built from this template, that block ships with every URL. The previous cleanup only touched the React page files (`Home.tsx`, `Service.tsx`, etc.), which is why the offending JSON-LD kept appearing.

## Fix

Edit `index.html`:

1. Remove lines 78-82 (the `aggregateRating` property) and the trailing comma on line 77's `]` boundary so the JSON stays valid.
2. Leave the rest of the `Plumber` schema intact (name, address, geo, areaServed, openingHours, sameAs).

Result — the static block becomes a clean `Plumber` LocalBusiness schema with no rating claims. The per-page React-rendered JSON-LD already emits real `Review` objects from `REVIEWS`, which is policy-compliant.

## Verify

- `grep -r "aggregateRating\|AggregateRating" index.html src/` → must return zero matches.
- After deploy, re-test in Google Search Console → URL Inspection → "Test live URL".

## Not changing

- The per-page `Review` arrays in `Home.tsx` / `ServiceArea.tsx` / `ServiceCity.tsx` — those are legitimate (named author + visible quote on page).
- Any titles, canonicals, SSG output, or visible UI.
