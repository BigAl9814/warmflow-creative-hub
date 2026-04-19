import { jsxDEV } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between gap-3 py-3 border-b border-border/60 last:border-b-0", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-xs uppercase tracking-wider font-semibold text-foreground/60", children: label }, void 0, false, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "font-mono text-sm md:text-base text-primary mt-0.5 break-words", children: value }, void 0, false, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 143,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Nap.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      Button,
      {
        type: "button",
        size: "sm",
        variant: "outline",
        onClick: onCopy,
        "aria-label": `Copy ${label}`,
        className: "shrink-0",
        children: [
          copied ? /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-4 w-4 text-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 153,
            columnNumber: 19
          }, void 0) : /* @__PURE__ */ jsxDEV(Copy, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 153,
            columnNumber: 70
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "ml-1 hidden sm:inline", children: copied ? "Copied" : "Copy" }, void 0, false, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 154,
            columnNumber: 9
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 145,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Nap.tsx",
    lineNumber: 140,
    columnNumber: 5
  }, void 0);
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
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV(Seo, { ...seo }, void 0, false, {
      fileName: "/dev-server/src/pages/Nap.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-hero py-16 md:py-20", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "container max-w-4xl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 bg-card/80 backdrop-blur border-2 border-foreground/10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: [
          /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 182,
            columnNumber: 13
          }, void 0),
          " Internal · Not indexed"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 181,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent mt-5", children: "Local SEO toolkit" }, void 0, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 184,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h1", { className: "font-display text-5xl md:text-6xl text-primary mt-1 leading-[0.95]", children: [
          "NAP consistency",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 186,
            columnNumber: 28
          }, void 0),
          "checklist"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 185,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 mt-5 text-lg max-w-2xl", children: "One source of truth for your business Name, Address, and Phone — plus a directory submission checklist so every citation across the web matches exactly. Consistent NAP is the #1 local-SEO ranking signal Google uses." }, void 0, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 188,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "water-band h-10 mt-12", "aria-hidden": "true" }, void 0, false, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 194,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Nap.tsx",
      lineNumber: 179,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-14", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-[1.4fr_1fr] gap-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "stamp-card p-7 md:p-9", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between gap-4 mb-5", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Canonical NAP" }, void 0, false, {
              fileName: "/dev-server/src/pages/Nap.tsx",
              lineNumber: 203,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl text-primary mt-1", children: "Use these exact values everywhere" }, void 0, false, {
              fileName: "/dev-server/src/pages/Nap.tsx",
              lineNumber: 204,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 202,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { onClick: copyAll, variant: "hero", size: "sm", children: [
            /* @__PURE__ */ jsxDEV(Copy, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/Nap.tsx",
              lineNumber: 207,
              columnNumber: 17
            }, void 0),
            " Copy all"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 206,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 201,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl border-2 border-border/60 bg-card px-5", children: COPY_FIELDS.map((f) => /* @__PURE__ */ jsxDEV(ContactCopyRow, { label: f.label, value: f.value }, f.label, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 212,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 210,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 200,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("aside", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "stamp-card p-6", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "font-script text-xl text-accent", children: "Short description" }, void 0, false, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 219,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/80 mt-2", children: SHORT_DESCRIPTION }, void 0, false, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 220,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(
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
                /* @__PURE__ */ jsxDEV(Copy, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Nap.tsx",
                  lineNumber: 230,
                  columnNumber: 17
                }, void 0),
                " Copy"
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/Nap.tsx",
              lineNumber: 221,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 218,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "stamp-card p-6", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "font-script text-xl text-accent", children: "Long description" }, void 0, false, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 234,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/80 mt-2", children: LONG_DESCRIPTION }, void 0, false, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 235,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(
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
                /* @__PURE__ */ jsxDEV(Copy, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Nap.tsx",
                  lineNumber: 245,
                  columnNumber: 17
                }, void 0),
                " Copy"
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/Nap.tsx",
              lineNumber: 236,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 233,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-deep text-primary-foreground rounded-[var(--radius)] p-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 font-display text-lg", children: [
            /* @__PURE__ */ jsxDEV(MapPin, { className: "h-5 w-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/Nap.tsx",
              lineNumber: 250,
              columnNumber: 17
            }, void 0),
            " Quick links"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 249,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid gap-2 mt-3 text-sm", children: [
            /* @__PURE__ */ jsxDEV("a", { className: "hover:underline inline-flex items-center gap-1.5", target: "_blank", rel: "noopener noreferrer", href: GOOGLE_MAPS_URL, children: [
              /* @__PURE__ */ jsxDEV(ExternalLink, { className: "h-3.5 w-3.5" }, void 0, false, {
                fileName: "/dev-server/src/pages/Nap.tsx",
                lineNumber: 254,
                columnNumber: 19
              }, void 0),
              " Google Maps listing"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Nap.tsx",
              lineNumber: 253,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("a", { className: "hover:underline inline-flex items-center gap-1.5", href: `tel:${PHONE_TEL}`, children: [
              /* @__PURE__ */ jsxDEV(Phone, { className: "h-3.5 w-3.5" }, void 0, false, {
                fileName: "/dev-server/src/pages/Nap.tsx",
                lineNumber: 257,
                columnNumber: 19
              }, void 0),
              " ",
              PHONE_DISPLAY
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Nap.tsx",
              lineNumber: 256,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("a", { className: "hover:underline inline-flex items-center gap-1.5", href: `mailto:${EMAIL}`, children: [
              /* @__PURE__ */ jsxDEV(Mail, { className: "h-3.5 w-3.5" }, void 0, false, {
                fileName: "/dev-server/src/pages/Nap.tsx",
                lineNumber: 260,
                columnNumber: 19
              }, void 0),
              " ",
              EMAIL
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Nap.tsx",
              lineNumber: 259,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("a", { className: "hover:underline inline-flex items-center gap-1.5", href: WEBSITE, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsxDEV(Globe, { className: "h-3.5 w-3.5" }, void 0, false, {
                fileName: "/dev-server/src/pages/Nap.tsx",
                lineNumber: 263,
                columnNumber: 19
              }, void 0),
              " ",
              WEBSITE
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Nap.tsx",
              lineNumber: 262,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 252,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 248,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 217,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Nap.tsx",
      lineNumber: 199,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Nap.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container pb-14", children: /* @__PURE__ */ jsxDEV("div", { className: "stamp-card p-7 md:p-9", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Service-area cities" }, void 0, false, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 274,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl text-primary mt-1 mb-2", children: "Add all 12 to Google Business Profile" }, void 0, false, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 275,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mb-5", children: "Paste each city exactly as written — Google matches on string, not concept." }, void 0, false, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 278,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2", children: SERVICE_AREAS.map((city) => /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => {
            navigator.clipboard.writeText(city);
            toast({ title: "Copied", description: city });
          },
          className: "px-4 py-2 rounded-full bg-secondary text-sm font-semibold inline-flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors",
          children: [
            /* @__PURE__ */ jsxDEV(Copy, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/Nap.tsx",
              lineNumber: 291,
              columnNumber: 17
            }, void 0),
            " ",
            city
          ]
        },
        city,
        true,
        {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 283,
          columnNumber: 15
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 281,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Nap.tsx",
      lineNumber: 273,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Nap.tsx",
      lineNumber: 272,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-secondary/40 py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container max-w-4xl", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Action plan" }, void 0, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 302,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl text-primary mt-1", children: "Local SEO checklist" }, void 0, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 303,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mt-3 max-w-2xl mx-auto", children: "Work top-to-bottom. Each item compounds your local rankings. Re-audit every 6 months." }, void 0, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 304,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 301,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("ol", { className: "space-y-3", children: CHECKLIST.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "stamp-card p-5 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "h-9 w-9 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center font-display", children: i + 1 }, void 0, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 311,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "pt-1.5", children: item }, void 0, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 314,
          columnNumber: 17
        }, void 0)
      ] }, item, true, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 310,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 308,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Nap.tsx",
      lineNumber: 300,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Nap.tsx",
      lineNumber: 299,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-16", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Citation building" }, void 0, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 324,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl text-primary mt-1", children: "Directories to claim" }, void 0, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 325,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mt-3", children: "Submit your canonical NAP to every directory below. Track which ones you've completed." }, void 0, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 326,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 323,
        columnNumber: 9
      }, void 0),
      DIRECTORIES.map((group) => /* @__PURE__ */ jsxDEV("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "h-10 w-10 rounded-xl bg-accent text-accent-foreground grid place-items-center shadow-soft", children: /* @__PURE__ */ jsxDEV(Star, { className: "h-5 w-5" }, void 0, false, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 335,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 334,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-2xl text-primary", children: group.group }, void 0, false, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 337,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 333,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-4", children: group.items.map((d) => /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: d.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "stamp-card p-5 hover:-translate-y-0.5 transition-transform group",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "font-display text-lg text-primary group-hover:underline", children: d.name }, void 0, false, {
                  fileName: "/dev-server/src/pages/Nap.tsx",
                  lineNumber: 349,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV(ExternalLink, { className: "h-4 w-4 text-foreground/50 mt-1 shrink-0" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Nap.tsx",
                  lineNumber: 350,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Nap.tsx",
                lineNumber: 348,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/70 mt-1.5", children: d.why }, void 0, false, {
                fileName: "/dev-server/src/pages/Nap.tsx",
                lineNumber: 352,
                columnNumber: 19
              }, void 0)
            ]
          },
          d.name,
          true,
          {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 341,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 339,
          columnNumber: 13
        }, void 0)
      ] }, group.group, true, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 332,
        columnNumber: 11
      }, void 0))
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Nap.tsx",
      lineNumber: 322,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-deep text-primary-foreground py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container max-w-3xl", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-primary-glow text-center", children: "Pro tips" }, void 0, false, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 363,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl md:text-4xl text-center mt-1 mb-8", children: "Avoid the most common NAP mistakes" }, void 0, false, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 364,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { className: "grid sm:grid-cols-2 gap-4", children: [
        ["Pick ONE phone format.", "289-488-1007 — never (289) 488-1007 in some places and 2894881007 in others."],
        ["Use Suite/Unit consistently.", "If you ever add one, use the same abbreviation everywhere ('Suite 2', not mixed)."],
        ["Don't keyword-stuff.", "'Ottr Plumr' — never 'Ottr Plumr Best Plumber Welland'. Google penalises it."],
        ["Match casing.", "St. Catharines (with the period) — not 'St Catharines'."],
        ["Don't use a tracking number.", "Use your real published number on every directory; use call-tracking only on your own site."],
        ["Watch for duplicate listings.", "Old or auto-generated profiles split your authority. Claim and merge them."]
      ].map(([t, d]) => /* @__PURE__ */ jsxDEV("li", { className: "bg-card text-foreground rounded-2xl p-5 shadow-soft", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "font-display text-primary", children: t }, void 0, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 377,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-foreground/75 mt-1", children: d }, void 0, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 378,
          columnNumber: 17
        }, void 0)
      ] }, t, true, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 376,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 367,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Nap.tsx",
      lineNumber: 362,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Nap.tsx",
      lineNumber: 361,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-14", children: /* @__PURE__ */ jsxDEV("div", { className: "rounded-[2rem] bg-accent text-accent-foreground p-8 md:p-12 shadow-pop text-center", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl", children: "Done? Back to the site." }, void 0, false, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 387,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "opacity-90 mt-2", children: "This page is internal-only and excluded from search engines." }, void 0, false, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 388,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-5 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, size: "lg", className: "bg-card text-primary hover:bg-card/90", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", children: [
          "Back to Home ",
          /* @__PURE__ */ jsxDEV(ArrowRight, {}, void 0, false, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 391,
            columnNumber: 41
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 391,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 390,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, size: "lg", variant: "hero", children: /* @__PURE__ */ jsxDEV("a", { href: "https://search.google.com/search-console", target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsxDEV(Search, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/Nap.tsx",
            lineNumber: 395,
            columnNumber: 17
          }, void 0),
          " Open Search Console"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 394,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Nap.tsx",
          lineNumber: 393,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Nap.tsx",
        lineNumber: 389,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Nap.tsx",
      lineNumber: 386,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Nap.tsx",
      lineNumber: 385,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Nap.tsx",
    lineNumber: 177,
    columnNumber: 5
  }, void 0);
};
export {
  NapPage as default
};
