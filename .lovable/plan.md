

## Audit & Plan: SEO + Conversion Improvements

I've reviewed your existing codebase. **Good news:** much of what you listed already exists. Here's the honest breakdown of what's already built vs. what's actually missing.

### Already Built (no work needed)
- City pages: `/service-areas/:city` (12 cities) — `ServiceArea.tsx`
- Service+city combo pages: `/services/:service/:city` — `ServiceCity.tsx`
- Service detail pages: `/services/:slug` — `Service.tsx`
- Blog system: `Blog.tsx` + `BlogPost.tsx` with `POSTS` array
- NAP page + consistent header/footer phone
- FAQ schema on homepage + service pages
- Plumber schema on every page (`@id: #business`)
- Before/after gallery component exists

### Real Gaps Worth Fixing

**1. URL structure for city pages (SEO)**
Currently `/service-areas/welland`. Competitors rank with `/welland-plumber`. Add SEO-friendly aliases that redirect/render the same content (or rename routes + 301 in sitemap). Recommend: keep current routes, add new `/:city-plumber` routes that render `ServiceArea`.

**2. Homepage H1 keyword targeting**
Current H1 is brand-led ("Niagara's local plumbing & heating you can trust"). Add ranking-focused H1: **"Plumber in Welland & Niagara Region | 24/7 Emergency Plumbing"** — keep current line as H2/subhead.

**3. Service page depth**
Service pages need: causes, symptoms, what we do, price ranges, per-service FAQ. Expand `SERVICES` data in `src/lib/services.ts` with these fields, then render on `Service.tsx` and `ServiceCity.tsx`.

**4. City page depth + uniqueness**
Each `ServiceArea` page should have unique copy (neighborhood mentions, local landmarks, common local issues) — currently they're templated. Add `localContent` field per city in `src/lib/cities.ts`.

**5. Internal linking**
Add cross-link blocks:
- Service page → "Available in [12 cities]" grid
- City page → "Our services in [city]" grid (already partial)
- Blog post → related service + related city links
- Footer → top service+city combos

**6. Embedded Google Map**
Add iframe map on Contact + each city page (centered on that city).

**7. Blog content funnel**
You have the system but need posts. Add 6 high-intent articles to `POSTS`:
- Sump pump failure during storms
- Cost to replace water heater in Niagara
- Signs your main drain is clogged
- When to call an emergency plumber
- Tankless vs tank water heaters
- Frozen pipes in Niagara winters

**8. Stronger CTAs**
Sticky CTA exists. Add urgency badges ("Same-Day Available", "24/7 Live Dispatch") near top of each service/city page.

### Proposed Implementation (3 phases)

**Phase 1 — Quick wins (high impact, low effort)**
- Rewrite homepage H1 + intro for keyword targeting
- Add unique 2-paragraph local content per city in `cities.ts`
- Add embedded Google Map to Contact + city pages
- Add urgency CTA strip to service + city page tops

**Phase 2 — Content depth**
- Expand `services.ts` with: causes, symptoms, process, price-range, per-service FAQ (3–5 Qs each)
- Render expanded sections on `Service.tsx` and `ServiceCity.tsx`
- Add per-service FAQ schema (unique per page → no duplicate warnings)

**Phase 3 — Internal linking + content**
- "Cities we serve" grid block on each Service page
- "Related services" block on each City page
- Related-links block on blog posts
- Write 6 new blog posts in `POSTS`

### Files involved
- `src/pages/Home.tsx` — H1 rewrite
- `src/lib/cities.ts` — add `localContent`, `landmarks`, `neighborhoods`
- `src/lib/services.ts` — add `causes`, `symptoms`, `process`, `priceRange`, `faqs`
- `src/lib/posts.ts` — 6 new posts
- `src/pages/Service.tsx` + `ServiceCity.tsx` — render new fields, add city grid
- `src/pages/ServiceArea.tsx` — render local content, add map, services grid
- `src/pages/Contact.tsx` — add map
- `src/pages/BlogPost.tsx` — related links

### Out of scope (already done or risky)
- FAQ schema (exists; adding more to city pages risks duplicate warnings until content is unique — Phase 2 handles this safely)
- Plumber/LocalBusiness schema (already present and clean)
- Before/after photos (component exists — use it more, but no new code)

### Recommendation
Approve **Phase 1 first** — biggest visible impact, ships in one pass. Phases 2 and 3 are larger content jobs we can sequence after.

