
## What I found

- The current `index.html` no longer contains `aggregateRating`.
- The current `src/pages/Home.tsx` JSON-LD contains real `Review` objects, not `aggregateRating`.
- A read-only fetch of the published site HTML also shows no `aggregateRating` / `reviewCount` / `ratingValue` in the response.

That means the codebase appears clean now. The issue is most likely one of these:
1. Google is showing an older crawl/render snapshot.
2. The live site Google tested was an older deployment or different URL variant.
3. A stale cached JS bundle was rendered when Google last visited.

## Plan

1. Confirm the exact URL Google flagged
- Match the Search Console issue to the exact URL/property Google is testing (`plumr.ca`, `www`, homepage vs route).

2. Re-verify the live deployment in default mode
- Fetch the exact flagged URL and inspect the final HTML/output again.
- Compare what Google pasted with the currently served assets to confirm whether it was an older build.

3. Republish / refresh if needed
- If the flagged URL is serving an older version anywhere, publish the current clean build so every variant serves the same schema.

4. Add a regression guard
- Add a build-time check that fails if `aggregateRating` or `AggregateRating` appears anywhere in source or generated HTML.
- This prevents the same issue from coming back silently.

5. Final verification
- Re-check the live homepage and 1–2 internal pages after publish.
- Then use Google Search Console “Test live URL” and request reindexing.

## Technical details

- The HTML you pasted earlier included a `page-jsonld` script with `aggregateRating`, which suggests Google rendered an older bundle.
- The current repo and current fetched live HTML do not contain that field anymore.
- So the next step is deployment/crawl verification, not more schema removal in source.
