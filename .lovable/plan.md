
Goal: fix the Google structured-data issue without reintroducing risky markup.

What I found:
- The current template already uses a valid parent type in `index.html`: `@type: "Plumber"`.
- The current source no longer shows `aggregateRating` in the main schema files I checked.
- So your suggested JSON-LD shape is structurally valid in general, but adding `aggregateRating` back here would likely recreate the same policy problem rather than solve it.

Why I would not add that snippet back:
- Google’s issue here is not just nesting syntax. For local business markup, `aggregateRating` is often rejected when it is self-serving or not clearly backed by visible, first-party reviews on the same page.
- This codebase currently has only 3 hardcoded testimonials in `src/lib/site.ts`, while the flagged values were `4.9` and `50`.
- Several internal pages still attach `Review` schema (`Home.tsx`, `ServiceArea.tsx`, `ServiceCity.tsx`) even though I need to verify whether those same reviews are visibly rendered on each of those pages.

Implementation plan:
1. Do a full structured-data audit
- Read every page using `jsonLd`.
- Confirm exactly which pages emit `Plumber`, `PlumbingService`, `Service`, `FAQPage`, `BreadcrumbList`, and `Review`.

2. Normalize the business schema
- Create one shared business-schema helper so the site emits a single consistent `Plumber`/business entity instead of slightly different shapes across pages.
- Keep safe properties only: name, url, phone, email, address, geo, areaServed, opening hours, map.

3. Do not restore `aggregateRating`
- Keep `aggregateRating` fully removed from source and generated output.
- Keep the regression guard, but tighten it if needed to scan the generated build output too.

4. Make review markup policy-safe
- Remove `review` schema from any page where those testimonials are not visibly shown on that same page.
- Keep `Review` schema only on pages with matching visible review content, or add visible review sections to those pages if you want to retain review markup there.
- If needed, simplify further by keeping review schema on the homepage only.

5. Verify the real live output path-by-path
- Check homepage, one service page, one city page, and one service+city page after rebuild/publish.
- Confirm no `aggregateRating` exists anywhere and that any remaining `Review` schema is paired with visible content.

6. Final Google recovery step
- After publish, re-test the exact flagged URL in Search Console with “Test live URL” and request indexing again.

Technical details:
- Your proposed object is valid Schema.org:
  `Plumber -> aggregateRating -> AggregateRating`
- But for this site, the safer fix is not “nest it correctly”; it is “avoid unsupported/self-serving rating claims entirely.”
- The better long-term setup is:
  - one canonical business schema
  - page-specific `Service` / `BreadcrumbList` / `FAQPage`
  - `Review` only where reviews are visibly present
  - no sitewide `aggregateRating`

Files likely involved:
- `index.html`
- `src/hooks/use-seo.ts`
- `src/pages/Home.tsx`
- `src/pages/Services.tsx`
- `src/pages/Service.tsx`
- `src/pages/ServiceArea.tsx`
- `src/pages/ServiceCity.tsx`
- `src/lib/site.ts`
- `src/test/no-aggregate-rating.test.ts`

Expected outcome:
- No more risky rating markup in the build.
- Cleaner, more defensible JSON-LD.
- Better chance Google clears the warning after recrawl, instead of rejecting a newly re-added `aggregateRating`.
