
## The actual problem

You pasted JSON-LD containing:

```json
"aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "50" }
```

Google flags this as a **structured data violation**. Two reasons:

1. **Self-serving / unverifiable rating.** Schema.org `aggregateRating` on `LocalBusiness`/`PlumbingService` must reflect reviews collected and displayed *on your own site*. We don't render 50 actual reviews on the page — only the 3 testimonials in `REVIEWS`. Google's policy explicitly disallows aggregate ratings that aren't backed by visible reviews on the same page.
2. **Hardcoded numbers (`"4.9"`, `"50"`) with no source.** This is the exact pattern Google calls out as spam in its Rich Results guidelines and can trigger a "Manual action: Spammy structured markup" in Search Console.

Either of these will (a) prevent star-rating rich results from showing and (b) at worst, cause a manual penalty.

## Where it lives

The block was injected somewhere in the JSON-LD that `useSeo` / `<Seo>` emits. Searching `src/` for `aggregateRating` will pinpoint it (likely `src/pages/Home.tsx` or a shared schema helper). I'll find every occurrence and remove all of them — index page, service pages, city pages, anywhere it was added.

## Fix (in default mode)

**Step 1 — Remove all `aggregateRating` from JSON-LD**
- Grep `src/` for `aggregateRating` and `AggregateRating`.
- Delete those properties from every JSON-LD object that emits them (Home, Services, Service, ServiceCity, ServiceArea, ServiceAreas, About — wherever present).
- Leave the rest of the `PlumbingService` / `LocalBusiness` schema intact (name, address, geo, areaServed, openingHours, telephone, etc.).

**Step 2 — Replace with something legitimate (optional but recommended)**
Two safe options — pick one when you approve:

- **A. Drop ratings entirely.** Cleanest. No risk. You lose star eligibility but keep all other rich-result features (LocalBusiness card, FAQ, Service).
- **B. Emit only real, verifiable `Review` items.** Convert the 3 entries in `REVIEWS` (`src/lib/site.ts`) into individual `Review` objects with `author` (Person), `reviewBody`, and a `reviewRating` of 5 each. Render the same 3 quotes visibly on the page (already done on Home). No `aggregateRating` field — Google can compute it from the 3 reviews if/when it wants to. This is policy-compliant because every rating is backed by visible content with a named author.

I recommend **B** — keeps you eligible for review snippets without lying about volume.

**Step 3 — Verify**
- After the edit, run the build and grep `dist/` for `aggregateRating` / `AggregateRating` — should return zero matches.
- Spot-check 2–3 pre-rendered HTML files to confirm the JSON-LD parses and the new `Review` array is well-formed.
- Tell you to re-submit the URL in Google Search Console → URL Inspection → "Test live URL" so Google re-evaluates the structured data.

## What this does NOT change

- Titles, descriptions, canonicals, per-route HTML — all untouched. The earlier SSG work stays as-is.
- The visible testimonial section on the homepage stays as-is.
- FAQPage, PlumbingService, LocalBusiness, Service schemas — all kept, just without the fake aggregate rating.

## Decision needed

Which option do you want for Step 2?
- **A** — strip ratings entirely, ship the cleanup.
- **B** — replace with 3 real `Review` entries from `REVIEWS` (recommended).
