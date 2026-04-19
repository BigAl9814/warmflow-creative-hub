

## Root cause

Google's "found 12 times" report is from a **prior crawl** of the 12 `/areas/:city` pages (and likely service pages too) — back when `ServiceArea.tsx` and `ServiceCity.tsx` were each emitting the same 3 `Review` objects pulled from the shared `REVIEWS` array. We already removed those, and the live site currently returns **zero** matches for `Donald W Hawken` on every URL I checked (`/`, `/areas/welland`, `/services/drain-cleaning`, `/services/drain-cleaning/welland`).

So: source is clean for ServiceArea/ServiceCity. The only remaining `Review` JSON-LD source in the repo is `src/pages/Home.tsx` (lines 54–59).

## What to do

The safest move is to also strip the Review JSON-LD from the homepage. Reasons:
- Even on a single URL, Google has been picky about self-published `Review` markup with identical text reused across crawls/snapshots.
- The visible testimonial cards on the homepage (`REVIEWS.map` at line 267) stay exactly as-is — users still see the reviews.
- This eliminates every remaining `"@type":"Review"` from the site, which guarantees the "duplicate Review" warning cannot recur after the next recrawl.

If you'd rather keep Review schema on the homepage (it is policy-allowed there since the reviews are visibly rendered on that exact page), the alternative is to leave Home.tsx alone and just wait for Google to recrawl the city/service pages, where the schema is already gone.

## Plan

**Step 1 — Remove Review JSON-LD from `src/pages/Home.tsx`**
- Delete lines 54–59 (the `review: REVIEWS.map(...)` block) inside the `PlumbingService` jsonLd.
- Keep the visible testimonials section (line 267 onwards) untouched.
- Keep `REVIEWS` import only if still used by the visible section (it is).

**Step 2 — Add a regression guard**
- Create `src/test/no-review-schema.test.ts` that fails the build if any source file in `src/` (excluding `lib/site.ts` which defines the `REVIEWS` array) contains both `REVIEWS.map` and `"@type": "Review"` / `"Review"` together. Mirrors the existing FAQ guard.

**Step 3 — Verify after publish**
- Confirm every URL returns 0 matches for the review text:
  - `/`
  - `/areas/welland`, `/areas/st-catharines`
  - `/services/drain-cleaning`, `/services/drain-cleaning/welland`
- Then in Google Search Console: URL Inspection → Test live URL → Request Indexing on one of the flagged URLs.

## What does NOT change

- Visible testimonial section on the homepage — stays.
- `REVIEWS` array in `src/lib/site.ts` — stays (it powers the visible cards).
- `PlumbingService`, `FAQPage`, `BreadcrumbList`, `Service` schemas — all kept.
- Titles, canonicals, SSG, UI — untouched.

## Files to edit

- `src/pages/Home.tsx` — drop the `review:` array from the PlumbingService jsonLd.
- `src/test/no-review-schema.test.ts` — new regression guard.

