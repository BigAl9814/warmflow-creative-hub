import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Copy, MapPin, ExternalLink, Phone, Mail, Globe, Star, ArrowRight, Search, CheckCircle2 } from "lucide-react";
import { u as useSeo, a as Seo, B as Button, t as toast, G as GOOGLE_MAPS_URL, P as PHONE_TEL, b as PHONE_DISPLAY, E as EMAIL, d as ADDRESS, A as ADDRESS_LINE } from "../main.mjs";
import "vite-react-ssg";
import "react-helmet-async";
import "@tanstack/react-query";
import "next-themes";
import "sonner";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
import "@radix-ui/react-accordion";
const BUSINESS_NAME = "Ottr Plumr Plumbing & Heating";
const LEGAL_NAME = "Canalside Mechanical LTD";
const WEBSITE = "https://plumr.ca";
const HOURS = "Mon–Fri 8:00 AM – 4:00 PM · 24/7 Emergency Service";
const CATEGORY_PRIMARY = "Plumber";
const CATEGORY_SECONDARY = ["Heating Contractor", "HVAC Contractor", "Drainage Service"];
const SERVICE_AREAS = [
  "Welland, ON",
  "St. Catharines, ON",
  "Niagara Falls, ON",
  "Thorold, ON",
  "Lincoln, ON",
  "Grimsby, ON",
  "Pelham, ON",
  "Fort Erie, ON",
  "Port Colborne, ON",
  "Niagara-on-the-Lake, ON",
  "West Lincoln, ON",
  "Wainfleet, ON"
];
const DIRECTORIES = [
  {
    group: "Tier 1 — Highest Priority",
    items: [
      { name: "Google Business Profile", url: "https://www.google.com/business/", why: "Single biggest local SEO signal. Verify, complete every field, post weekly." },
      { name: "Bing Places for Business", url: "https://www.bingplaces.com/", why: "Powers Bing, DuckDuckGo, and ChatGPT search results." },
      { name: "Apple Business Connect", url: "https://businessconnect.apple.com/", why: "Powers Apple Maps, Siri, and Spotlight on every iPhone." },
      { name: "Facebook Business Page", url: "https://www.facebook.com/business/pages", why: "High-trust NAP citation + customer reviews." }
    ]
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
      { name: "Here Maps Listing", url: "https://places.here.com/", why: "Powers Garmin, Amazon Alexa, BMW navigation." }
    ]
  },
  {
    group: "Tier 3 — Trade-Specific (Plumbing & Home Services)",
    items: [
      { name: "HomeStars", url: "https://homestars.com/", why: "Canada's #1 home-services review site. Critical for plumbers." },
      { name: "Houzz Pro", url: "https://www.houzz.com/pro", why: "Renovation & home-services discovery; strong for higher-ticket jobs." },
      { name: "Better Business Bureau (BBB)", url: "https://www.bbb.org/get-accredited", why: "Trust signal on Google + appears in many local searches." },
      { name: "Angi (formerly Angie's List)", url: "https://pro.angi.com/", why: "US-led but indexed in Canada; lead-gen for plumbing." },
      { name: "Trusted Pros", url: "https://www.trustedpros.ca/", why: "Canadian trades & contractor directory." },
      { name: "Porch", url: "https://porch.com/pro/become-a-pro", why: "Home-services lead generation network." }
    ]
  },
  {
    group: "Tier 4 — Local & Regional",
    items: [
      { name: "Greater Niagara Chamber of Commerce", url: "https://www.gncc.ca/", why: "Local credibility + backlink to plumr.ca." },
      { name: "Welland-Pelham Chamber of Commerce", url: "https://www.wellandpelhamchamber.com/", why: "Hyper-local citation for your home city." },
      { name: "Niagara This Week (Local Biz Directory)", url: "https://www.niagarathisweek.com/", why: "Regional news directory listing." },
      { name: "Tourism Niagara / regional listings", url: "https://www.niagararegion.ca/", why: "Government-domain backlinks where available." }
    ]
  },
  {
    group: "Tier 5 — Social & Reputation",
    items: [
      { name: "Instagram Business", url: "https://business.instagram.com/", why: "Visual proof of completed jobs; bio contains NAP." },
      { name: "LinkedIn Company Page", url: "https://www.linkedin.com/company/setup/new/", why: "B2B credibility for commercial plumbing leads." },
      { name: "TikTok Business", url: "https://www.tiktok.com/business/en", why: "Increasingly used by homeowners to find local trades." },
      { name: "Nextdoor Business", url: "https://business.nextdoor.com/", why: "Hyper-local neighbour-to-neighbour recommendations." }
    ]
  }
];
const COPY_FIELDS = [
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
  { label: "Secondary Categories", value: CATEGORY_SECONDARY.join(", ") }
];
const SHORT_DESCRIPTION = "Trusted Niagara plumber & heating contractor based in Welland. Residential & commercial service: drains, water heaters, sump pumps, furnaces, boilers. 24/7 emergency response.";
const LONG_DESCRIPTION = "Ottr Plumr Plumbing & Heating is a Welland-based plumbing and heating company serving the entire Niagara Region. A division of Canalside Mechanical LTD, we handle residential and commercial plumbing, water heater install and replacement, sump pump systems, drain cleaning, leak detection, furnace and boiler service, and 24/7 emergency response. Our licensed and insured team brings big-shop technical quality with neighbour-level honesty — upfront pricing, warrantied workmanship, and a clean job site every time.";
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
  "Audit yearly with a NAP scanner (Whitespark, BrightLocal, Moz Local)."
];
const ContactCopyRow = ({ label, value }) => {
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
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3 py-3 border-b border-border/60 last:border-b-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider font-semibold text-foreground/60", children: label }),
      /* @__PURE__ */ jsx("div", { className: "font-mono text-sm md:text-base text-primary mt-0.5 break-words", children: value })
    ] }),
    /* @__PURE__ */ jsxs(
      Button,
      {
        type: "button",
        size: "sm",
        variant: "outline",
        onClick: onCopy,
        "aria-label": `Copy ${label}`,
        className: "shrink-0",
        children: [
          copied ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-accent" }) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "ml-1 hidden sm:inline", children: copied ? "Copied" : "Copy" })
        ]
      }
    )
  ] });
};
const NapPage = () => {
  const seo = {
    title: "NAP Consistency Checklist | Ottr Plumr Internal SEO Tool",
    description: "Internal NAP (Name, Address, Phone) consistency checklist for Ottr Plumr — directory submissions, copy-paste fields, and local SEO best practices.",
    canonicalPath: "/nap",
    noIndex: true
  };
  useSeo(seo);
  const copyAll = async () => {
    const block = COPY_FIELDS.map((f) => `${f.label}: ${f.value}`).join("\n");
    await navigator.clipboard.writeText(block);
    toast({ title: "All NAP fields copied", description: "Paste into any directory form." });
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Seo, { ...seo }),
    /* @__PURE__ */ jsxs("section", { className: "bg-gradient-hero py-16 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "container max-w-4xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-card/80 backdrop-blur border-2 border-foreground/10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3.5 w-3.5" }),
          " Internal · Not indexed"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent mt-5", children: "Local SEO toolkit" }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-6xl text-primary mt-1 leading-[0.95]", children: [
          "NAP consistency",
          /* @__PURE__ */ jsx("br", {}),
          "checklist"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mt-5 text-lg max-w-2xl", children: "One source of truth for your business Name, Address, and Phone — plus a directory submission checklist so every citation across the web matches exactly. Consistent NAP is the #1 local-SEO ranking signal Google uses." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "water-band h-10 mt-12", "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container py-14", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1.4fr_1fr] gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "stamp-card p-7 md:p-9", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 mb-5", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "Canonical NAP" }),
            /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-primary mt-1", children: "Use these exact values everywhere" })
          ] }),
          /* @__PURE__ */ jsxs(Button, { onClick: copyAll, variant: "hero", size: "sm", children: [
            /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" }),
            " Copy all"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "rounded-2xl border-2 border-border/60 bg-card px-5", children: COPY_FIELDS.map((f) => /* @__PURE__ */ jsx(ContactCopyRow, { label: f.label, value: f.value }, f.label)) })
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "stamp-card p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "font-script text-xl text-accent", children: "Short description" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/80 mt-2", children: SHORT_DESCRIPTION }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "mt-3",
              onClick: () => {
                navigator.clipboard.writeText(SHORT_DESCRIPTION);
                toast({ title: "Short description copied" });
              },
              children: [
                /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" }),
                " Copy"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "stamp-card p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "font-script text-xl text-accent", children: "Long description" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/80 mt-2", children: LONG_DESCRIPTION }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "mt-3",
              onClick: () => {
                navigator.clipboard.writeText(LONG_DESCRIPTION);
                toast({ title: "Long description copied" });
              },
              children: [
                /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" }),
                " Copy"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-deep text-primary-foreground rounded-[var(--radius)] p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-display text-lg", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }),
            " Quick links"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2 mt-3 text-sm", children: [
            /* @__PURE__ */ jsxs("a", { className: "hover:underline inline-flex items-center gap-1.5", target: "_blank", rel: "noopener noreferrer", href: GOOGLE_MAPS_URL, children: [
              /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" }),
              " Google Maps listing"
            ] }),
            /* @__PURE__ */ jsxs("a", { className: "hover:underline inline-flex items-center gap-1.5", href: `tel:${PHONE_TEL}`, children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5" }),
              " ",
              PHONE_DISPLAY
            ] }),
            /* @__PURE__ */ jsxs("a", { className: "hover:underline inline-flex items-center gap-1.5", href: `mailto:${EMAIL}`, children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5" }),
              " ",
              EMAIL
            ] }),
            /* @__PURE__ */ jsxs("a", { className: "hover:underline inline-flex items-center gap-1.5", href: WEBSITE, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5" }),
              " ",
              WEBSITE
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container pb-14", children: /* @__PURE__ */ jsxs("div", { className: "stamp-card p-7 md:p-9", children: [
      /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "Service-area cities" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-primary mt-1 mb-2", children: "Add all 12 to Google Business Profile" }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground/75 mb-5", children: "Paste each city exactly as written — Google matches on string, not concept." }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: SERVICE_AREAS.map((city) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            navigator.clipboard.writeText(city);
            toast({ title: "Copied", description: city });
          },
          className: "px-4 py-2 rounded-full bg-secondary text-sm font-semibold inline-flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors",
          children: [
            /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" }),
            " ",
            city
          ]
        },
        city
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/40 py-16", children: /* @__PURE__ */ jsxs("div", { className: "container max-w-4xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "Action plan" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-primary mt-1", children: "Local SEO checklist" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/75 mt-3 max-w-2xl mx-auto", children: "Work top-to-bottom. Each item compounds your local rankings. Re-audit every 6 months." })
      ] }),
      /* @__PURE__ */ jsx("ol", { className: "space-y-3", children: CHECKLIST.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "stamp-card p-5 flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "h-9 w-9 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center font-display", children: i + 1 }),
        /* @__PURE__ */ jsx("span", { className: "pt-1.5", children: item })
      ] }, item)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "Citation building" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-primary mt-1", children: "Directories to claim" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/75 mt-3", children: "Submit your canonical NAP to every directory below. Track which ones you've completed." })
      ] }),
      DIRECTORIES.map((group) => /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-accent text-accent-foreground grid place-items-center shadow-soft", children: /* @__PURE__ */ jsx(Star, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-primary", children: group.group })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: group.items.map((d) => /* @__PURE__ */ jsxs(
          "a",
          {
            href: d.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "stamp-card p-5 hover:-translate-y-0.5 transition-transform group",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "font-display text-lg text-primary group-hover:underline", children: d.name }),
                /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4 text-foreground/50 mt-1 shrink-0" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/70 mt-1.5", children: d.why })
            ]
          },
          d.name
        )) })
      ] }, group.group))
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-deep text-primary-foreground py-16", children: /* @__PURE__ */ jsxs("div", { className: "container max-w-3xl", children: [
      /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-primary-glow text-center", children: "Pro tips" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl text-center mt-1 mb-8", children: "Avoid the most common NAP mistakes" }),
      /* @__PURE__ */ jsx("ul", { className: "grid sm:grid-cols-2 gap-4", children: [
        ["Pick ONE phone format.", "289-488-1007 — never (289) 488-1007 in some places and 2894881007 in others."],
        ["Use Suite/Unit consistently.", "If you ever add one, use the same abbreviation everywhere ('Suite 2', not mixed)."],
        ["Don't keyword-stuff.", "'Ottr Plumr' — never 'Ottr Plumr Best Plumber Welland'. Google penalises it."],
        ["Match casing.", "St. Catharines (with the period) — not 'St Catharines'."],
        ["Don't use a tracking number.", "Use your real published number on every directory; use call-tracking only on your own site."],
        ["Watch for duplicate listings.", "Old or auto-generated profiles split your authority. Claim and merge them."]
      ].map(([t, d]) => /* @__PURE__ */ jsxs("li", { className: "bg-card text-foreground rounded-2xl p-5 shadow-soft", children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-primary", children: t }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-foreground/75 mt-1", children: d })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container py-14", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[2rem] bg-accent text-accent-foreground p-8 md:p-12 shadow-pop text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl", children: "Done? Back to the site." }),
      /* @__PURE__ */ jsx("p", { className: "opacity-90 mt-2", children: "This page is internal-only and excluded from search engines." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-card text-primary hover:bg-card/90", children: /* @__PURE__ */ jsxs(Link, { to: "/", children: [
          "Back to Home ",
          /* @__PURE__ */ jsx(ArrowRight, {})
        ] }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "hero", children: /* @__PURE__ */ jsxs("a", { href: "https://search.google.com/search-console", target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsx(Search, { className: "h-4 w-4" }),
          " Open Search Console"
        ] }) })
      ] })
    ] }) })
  ] });
};
export {
  NapPage as default
};
