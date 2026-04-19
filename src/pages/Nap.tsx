import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Building2, CheckCircle2, Copy, ExternalLink, Facebook, Globe,
  Mail, MapPin, Phone, Search, ShieldCheck, Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useSeo, Seo, type SeoOptions } from "@/hooks/use-seo";
import {
  ADDRESS, ADDRESS_LINE, EMAIL, GOOGLE_MAPS_URL, PHONE_DISPLAY, PHONE_TEL,
} from "@/lib/site";

const BUSINESS_NAME = "Ottr Plumr Plumbing & Heating";
const LEGAL_NAME = "Canalside Mechanical LTD";
const WEBSITE = "https://plumr.ca";
const HOURS = "Mon–Fri 8:00 AM – 4:00 PM · 24/7 Emergency Service";
const CATEGORY_PRIMARY = "Plumber";
const CATEGORY_SECONDARY = ["Heating Contractor", "HVAC Contractor", "Drainage Service"];

const SERVICE_AREAS = [
  "Welland, ON", "St. Catharines, ON", "Niagara Falls, ON", "Thorold, ON",
  "Lincoln, ON", "Grimsby, ON", "Pelham, ON", "Fort Erie, ON",
  "Port Colborne, ON", "Niagara-on-the-Lake, ON", "West Lincoln, ON", "Wainfleet, ON",
];

type DirectoryItem = {
  name: string;
  url: string;
  why: string;
};

const DIRECTORIES: { group: string; items: DirectoryItem[] }[] = [
  {
    group: "Tier 1 — Highest Priority",
    items: [
      { name: "Google Business Profile", url: "https://www.google.com/business/", why: "Single biggest local SEO signal. Verify, complete every field, post weekly." },
      { name: "Bing Places for Business", url: "https://www.bingplaces.com/", why: "Powers Bing, DuckDuckGo, and ChatGPT search results." },
      { name: "Apple Business Connect", url: "https://businessconnect.apple.com/", why: "Powers Apple Maps, Siri, and Spotlight on every iPhone." },
      { name: "Facebook Business Page", url: "https://www.facebook.com/business/pages", why: "High-trust NAP citation + customer reviews." },
    ],
  },
  {
    group: "Tier 2 — Major Canadian Directories",
    items: [
      { name: "Yelp Canada", url: "https://biz.yelp.ca/", why: "Reviews + citation. Auto-syndicates to Yahoo, Bing, Apple Maps." },
      { name: "YellowPages.ca", url: "https://www.yellowpages.ca/", why: "Top Canadian business directory; strong local SEO weight." },
      { name: "411.ca", url: "https://411.ca/business/", why: "Free Canadian business listing." },
      { name: "Canada411", url: "https://www.canada411.ca/", why: "Phone-first directory most Canadians still search." },
      { name: "Cylex Canada", url: "https://www.cylex.ca/", why: "National Canadian business directory." },
      { name: "n49.com", url: "https://www.n49.com/", why: "Canadian-specific reviews and listings." },
      { name: "Foursquare / Factual", url: "https://business.foursquare.com/", why: "Powers Uber, Snap, Twitter location data." },
      { name: "TomTom MyPlaces", url: "https://places.tomtom.com/", why: "Powers in-car navigation across many vehicle brands." },
      { name: "Here Maps Listing", url: "https://places.here.com/", why: "Powers Garmin, Amazon Alexa, BMW navigation." },
    ],
  },
  {
    group: "Tier 3 — Trade-Specific (Plumbing & Home Services)",
    items: [
      { name: "HomeStars", url: "https://homestars.com/", why: "Canada's #1 home-services review site. Critical for plumbers." },
      { name: "Houzz Pro", url: "https://www.houzz.com/pro", why: "Renovation & home-services discovery; strong for higher-ticket jobs." },
      { name: "Better Business Bureau (BBB)", url: "https://www.bbb.org/get-accredited", why: "Trust signal on Google + appears in many local searches." },
      { name: "Angi (formerly Angie's List)", url: "https://pro.angi.com/", why: "US-led but indexed in Canada; lead-gen for plumbing." },
      { name: "Trusted Pros", url: "https://www.trustedpros.ca/", why: "Canadian trades & contractor directory." },
      { name: "Porch", url: "https://porch.com/pro/become-a-pro", why: "Home-services lead generation network." },
    ],
  },
  {
    group: "Tier 4 — Local & Regional",
    items: [
      { name: "Greater Niagara Chamber of Commerce", url: "https://www.gncc.ca/", why: "Local credibility + backlink to plumr.ca." },
      { name: "Welland-Pelham Chamber of Commerce", url: "https://www.wellandpelhamchamber.com/", why: "Hyper-local citation for your home city." },
      { name: "Niagara This Week (Local Biz Directory)", url: "https://www.niagarathisweek.com/", why: "Regional news directory listing." },
      { name: "Tourism Niagara / regional listings", url: "https://www.niagararegion.ca/", why: "Government-domain backlinks where available." },
    ],
  },
  {
    group: "Tier 5 — Social & Reputation",
    items: [
      { name: "Instagram Business", url: "https://business.instagram.com/", why: "Visual proof of completed jobs; bio contains NAP." },
      { name: "LinkedIn Company Page", url: "https://www.linkedin.com/company/setup/new/", why: "B2B credibility for commercial plumbing leads." },
      { name: "TikTok Business", url: "https://www.tiktok.com/business/en", why: "Increasingly used by homeowners to find local trades." },
      { name: "Nextdoor Business", url: "https://business.nextdoor.com/", why: "Hyper-local neighbour-to-neighbour recommendations." },
    ],
  },
];

const COPY_FIELDS: { label: string; value: string }[] = [
  { label: "Business Name", value: BUSINESS_NAME },
  { label: "Legal Name", value: LEGAL_NAME },
  { label: "Street Address", value: ADDRESS.street },
  { label: "City", value: ADDRESS.city },
  { label: "Province", value: ADDRESS.region },
  { label: "Postal Code", value: ADDRESS.postalCode },
  { label: "Country", value: "Canada" },
  { label: "Full Address (single line)", value: ADDRESS_LINE },
  { label: "Phone (display)", value: PHONE_DISPLAY },
  { label: "Phone (international)", value: PHONE_TEL },
  { label: "Email", value: EMAIL },
  { label: "Website", value: WEBSITE },
  { label: "Hours", value: HOURS },
  { label: "Primary Category", value: CATEGORY_PRIMARY },
  { label: "Secondary Categories", value: CATEGORY_SECONDARY.join(", ") },
];

const SHORT_DESCRIPTION =
  "Trusted Niagara plumber & heating contractor based in Welland. Residential & commercial service: drains, water heaters, sump pumps, furnaces, boilers. 24/7 emergency response.";

const LONG_DESCRIPTION =
  "Ottr Plumr Plumbing & Heating is a Welland-based plumbing and heating company serving the entire Niagara Region. A division of Canalside Mechanical LTD, we handle residential and commercial plumbing, water heater install and replacement, sump pump systems, drain cleaning, leak detection, furnace and boiler service, and 24/7 emergency response. Our licensed and insured team brings big-shop technical quality with neighbour-level honesty — upfront pricing, warrantied workmanship, and a clean job site every time.";

const CHECKLIST = [
  "Verify Google Business Profile (postcard, phone, or video).",
  "Use the EXACT business name, address, and phone from the panel below — every directory.",
  "Pick 'Plumber' as the primary category everywhere it's offered.",
  "Add all 12 Niagara service-area cities to your Google Business Profile.",
  "Upload 10+ photos: logo, mascot, vehicle wrap, completed jobs, team.",
  "Post a Google update at least every 7 days (offers, jobs, tips).",
  "Reply to every review (positive and negative) within 48 hours.",
  "Add UTM-tagged website link on Google Business Profile (utm_source=gbp).",
  "Match website footer NAP exactly to GBP NAP — character for character.",
  "Submit sitemap.xml to Google Search Console + Bing Webmaster Tools.",
  "Keep hours updated — especially holidays — to avoid 'closed' penalties.",
  "Audit yearly with a NAP scanner (Whitespark, BrightLocal, Moz Local).",
];

const ContactCopyRow = ({ label, value }: { label: string; value: string }) => {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast({ title: "Copied!", description: `${label} copied to clipboard.` });
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast({ title: "Copy failed", description: "Select the text manually." });
    }
  };
  return (
    <div className="flex items-start justify-between gap-3 py-3 border-b border-border/60 last:border-b-0">
      <div className="min-w-0 flex-1">
        <div className="text-xs uppercase tracking-wider font-semibold text-foreground/60">{label}</div>
        <div className="font-mono text-sm md:text-base text-primary mt-0.5 break-words">{value}</div>
      </div>
      <Button
        type="button"
        size="sm"
        variant="outline"
        onClick={onCopy}
        aria-label={`Copy ${label}`}
        className="shrink-0"
      >
        {copied ? <CheckCircle2 className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
        <span className="ml-1 hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
      </Button>
    </div>
  );
};

const NapPage = () => {
  const seo: SeoOptions = {
    title: "NAP Consistency Checklist | Ottr Plumr Internal SEO Tool",
    description:
      "Internal NAP (Name, Address, Phone) consistency checklist for Ottr Plumr — directory submissions, copy-paste fields, and local SEO best practices.",
    canonicalPath: "/nap",
    noIndex: true,
  };
  useSeo(seo);

  const copyAll = async () => {
    const block = COPY_FIELDS.map((f) => `${f.label}: ${f.value}`).join("\n");
    await navigator.clipboard.writeText(block);
    toast({ title: "All NAP fields copied", description: "Paste into any directory form." });
  };

  return (
    <div>
      <Seo {...seo} />
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur border-2 border-foreground/10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <ShieldCheck className="h-3.5 w-3.5" /> Internal · Not indexed
          </div>
          <p className="font-script text-2xl text-accent mt-5">Local SEO toolkit</p>
          <h1 className="font-display text-5xl md:text-6xl text-primary mt-1 leading-[0.95]">
            NAP consistency<br />checklist
          </h1>
          <p className="text-foreground/80 mt-5 text-lg max-w-2xl">
            One source of truth for your business Name, Address, and Phone — plus a directory
            submission checklist so every citation across the web matches exactly. Consistent NAP is
            the #1 local-SEO ranking signal Google uses.
          </p>
        </div>
        <div className="water-band h-10 mt-12" aria-hidden="true" />
      </section>

      {/* CANONICAL NAP */}
      <section className="container py-14">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
          <div className="stamp-card p-7 md:p-9">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div>
                <p className="font-script text-2xl text-accent">Canonical NAP</p>
                <h2 className="font-display text-3xl text-primary mt-1">Use these exact values everywhere</h2>
              </div>
              <Button onClick={copyAll} variant="hero" size="sm">
                <Copy className="h-4 w-4" /> Copy all
              </Button>
            </div>
            <div className="rounded-2xl border-2 border-border/60 bg-card px-5">
              {COPY_FIELDS.map((f) => (
                <ContactCopyRow key={f.label} label={f.label} value={f.value} />
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="stamp-card p-6">
              <p className="font-script text-xl text-accent">Short description</p>
              <p className="text-sm text-foreground/80 mt-2">{SHORT_DESCRIPTION}</p>
              <Button
                size="sm"
                variant="outline"
                className="mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(SHORT_DESCRIPTION);
                  toast({ title: "Short description copied" });
                }}
              >
                <Copy className="h-4 w-4" /> Copy
              </Button>
            </div>
            <div className="stamp-card p-6">
              <p className="font-script text-xl text-accent">Long description</p>
              <p className="text-sm text-foreground/80 mt-2">{LONG_DESCRIPTION}</p>
              <Button
                size="sm"
                variant="outline"
                className="mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(LONG_DESCRIPTION);
                  toast({ title: "Long description copied" });
                }}
              >
                <Copy className="h-4 w-4" /> Copy
              </Button>
            </div>
            <div className="bg-gradient-deep text-primary-foreground rounded-[var(--radius)] p-6">
              <div className="flex items-center gap-2 font-display text-lg">
                <MapPin className="h-5 w-5" /> Quick links
              </div>
              <div className="grid gap-2 mt-3 text-sm">
                <a className="hover:underline inline-flex items-center gap-1.5" target="_blank" rel="noopener noreferrer" href={GOOGLE_MAPS_URL}>
                  <ExternalLink className="h-3.5 w-3.5" /> Google Maps listing
                </a>
                <a className="hover:underline inline-flex items-center gap-1.5" href={`tel:${PHONE_TEL}`}>
                  <Phone className="h-3.5 w-3.5" /> {PHONE_DISPLAY}
                </a>
                <a className="hover:underline inline-flex items-center gap-1.5" href={`mailto:${EMAIL}`}>
                  <Mail className="h-3.5 w-3.5" /> {EMAIL}
                </a>
                <a className="hover:underline inline-flex items-center gap-1.5" href={WEBSITE} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-3.5 w-3.5" /> {WEBSITE}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="container pb-14">
        <div className="stamp-card p-7 md:p-9">
          <p className="font-script text-2xl text-accent">Service-area cities</p>
          <h2 className="font-display text-3xl text-primary mt-1 mb-2">
            Add all 12 to Google Business Profile
          </h2>
          <p className="text-foreground/75 mb-5">
            Paste each city exactly as written — Google matches on string, not concept.
          </p>
          <div className="flex flex-wrap gap-2">
            {SERVICE_AREAS.map((city) => (
              <button
                key={city}
                onClick={() => {
                  navigator.clipboard.writeText(city);
                  toast({ title: "Copied", description: city });
                }}
                className="px-4 py-2 rounded-full bg-secondary text-sm font-semibold inline-flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Copy className="h-3.5 w-3.5" /> {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-secondary/40 py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <p className="font-script text-2xl text-accent">Action plan</p>
            <h2 className="font-display text-4xl text-primary mt-1">Local SEO checklist</h2>
            <p className="text-foreground/75 mt-3 max-w-2xl mx-auto">
              Work top-to-bottom. Each item compounds your local rankings. Re-audit every 6 months.
            </p>
          </div>
          <ol className="space-y-3">
            {CHECKLIST.map((item, i) => (
              <li key={item} className="stamp-card p-5 flex items-start gap-4">
                <div className="h-9 w-9 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center font-display">
                  {i + 1}
                </div>
                <span className="pt-1.5">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DIRECTORIES */}
      <section className="container py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="font-script text-2xl text-accent">Citation building</p>
          <h2 className="font-display text-4xl text-primary mt-1">Directories to claim</h2>
          <p className="text-foreground/75 mt-3">
            Submit your canonical NAP to every directory below. Track which ones you've completed.
          </p>
        </div>

        {DIRECTORIES.map((group) => (
          <div key={group.group} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl bg-accent text-accent-foreground grid place-items-center shadow-soft">
                <Star className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl text-primary">{group.group}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {group.items.map((d) => (
                <a
                  key={d.name}
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stamp-card p-5 hover:-translate-y-0.5 transition-transform group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="font-display text-lg text-primary group-hover:underline">{d.name}</div>
                    <ExternalLink className="h-4 w-4 text-foreground/50 mt-1 shrink-0" />
                  </div>
                  <p className="text-sm text-foreground/70 mt-1.5">{d.why}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* TIPS */}
      <section className="bg-gradient-deep text-primary-foreground py-16">
        <div className="container max-w-3xl">
          <p className="font-script text-2xl text-primary-glow text-center">Pro tips</p>
          <h2 className="font-display text-3xl md:text-4xl text-center mt-1 mb-8">
            Avoid the most common NAP mistakes
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              ["Pick ONE phone format.", "289-488-1007 — never (289) 488-1007 in some places and 2894881007 in others."],
              ["Use Suite/Unit consistently.", "If you ever add one, use the same abbreviation everywhere ('Suite 2', not mixed)."],
              ["Don't keyword-stuff.", "'Ottr Plumr' — never 'Ottr Plumr Best Plumber Welland'. Google penalises it."],
              ["Match casing.", "St. Catharines (with the period) — not 'St Catharines'."],
              ["Don't use a tracking number.", "Use your real published number on every directory; use call-tracking only on your own site."],
              ["Watch for duplicate listings.", "Old or auto-generated profiles split your authority. Claim and merge them."],
            ].map(([t, d]) => (
              <li key={t as string} className="bg-card text-foreground rounded-2xl p-5 shadow-soft">
                <div className="font-display text-primary">{t}</div>
                <div className="text-sm text-foreground/75 mt-1">{d}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container py-14">
        <div className="rounded-[2rem] bg-accent text-accent-foreground p-8 md:p-12 shadow-pop text-center">
          <h2 className="font-display text-3xl">Done? Back to the site.</h2>
          <p className="opacity-90 mt-2">This page is internal-only and excluded from search engines.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-card text-primary hover:bg-card/90">
              <Link to="/">Back to Home <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="hero">
              <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">
                <Search className="h-4 w-4" /> Open Search Console
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NapPage;
