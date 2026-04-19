

## Root cause

The exact `FAQPage` block Google quoted is the global `FAQS` array from `src/lib/site.ts` ("What plumbing services do you offer?", "Are you available for emergency...", etc.).

It is being emitted on **multiple URLs** with identical content:

1. `src/pages/Home.tsx` — emits it directly inside `useSeo` jsonLd (lines 67–75), then renders `<FAQ injectSchema={false} />` to avoid double-injection on the same page. Good.
2. `src/pages/ServiceArea.tsx` — renders `<FAQ />` (line 217) with the **default `injectSchema=true`**, so the `FAQ` component injects the **same generic FAQPage schema** on every `/areas/:city` page (12 cities).

That's 13 URLs publishing the identical FAQPage entity → Google flags it as duplicate structured data.

(`Service.tsx` and `ServiceCity.tsx` also emit FAQPage, but those use service-specific FAQs from `src/lib/services.ts`, so each is unique content. Those are fine.)

## Fix

Pick ONE canonical home for the generic FAQPage and stop emitting it everywhere else.

**Step 1 — stop ServiceArea pages from injecting the duplicate FAQ schema**

In `src/pages/ServiceArea.tsx`, change:
```
<FAQ />
```
to:
```
<FAQ injectSchema={false} />
```

The visible FAQ accordion still renders. Only the duplicated JSON-LD goes away.

**Step 2 — keep the canonical FAQPage on the homepage only**

`Home.tsx` keeps the FAQPage block in its `jsonLd`. No change needed there.

**Step 3 — harden the FAQ component default**

Flip the default in `src/components/FAQ.tsx` from `injectSchema = true` to `injectSchema = false`. This way any future page that drops `<FAQ />` in won't silently re-create the duplicate. Pages that genuinely want the schema must opt in explicitly.

**Step 4 — regression guard**

Extend `src/test/no-aggregate-rating.test.ts` (or add a sibling test) to fail the build if more than one source file injects the generic `FAQS`-based FAQPage JSON-LD. Concretely: grep for `FAQS.map` adjacent to `"FAQPage"` and assert ≤ 1 match across the repo.

## What this does NOT change

- Service-specific FAQPage schemas on `Service.tsx` and `ServiceCity.tsx` (unique content per URL — keep them).
- Visible FAQ accordions on any page.
- Titles, canonicals, breadcrumbs, Plumber/PlumbingService schemas.

## After deploy

Re-test one ServiceArea URL (e.g. `/areas/st-catharines`) in Google Search Console → URL Inspection → Test live URL. The FAQPage duplicate warning should clear after Google re-crawls the affected URLs.

