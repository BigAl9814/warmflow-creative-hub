import { jsx, jsxs } from "react/jsx-runtime";
import { useParams, Navigate, Link } from "react-router-dom";
import { Phone, CalendarCheck, Lightbulb, AlertTriangle, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { C as CITIES, P as PHONE_TEL, E as EMAIL, R as REVIEWS, u as useSeo, a as Seo, B as Button, b as PHONE_DISPLAY, J as JOBBER_BOOK_URL, S as SERVICES, F as FAQ } from "../main.mjs";
import "vite-react-ssg";
import "react";
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
const ServiceAreaPage = () => {
  const { slug } = useParams();
  const city = CITIES.find((c) => c.slug === slug);
  const seo = {
    title: city ? `${city.name} Plumber & Heating | 24/7 Local | Ottr Plumr` : "Service Area | Ottr Plumr",
    description: city ? `Looking for a plumber in ${city.name}? Ottr Plumr handles drain cleaning, water heater install, sump pumps, furnaces & 24/7 emergency plumbing. Same-day, licensed & local. Call 289-488-1007.` : "Niagara plumbing & heating service areas.",
    canonicalPath: city ? `/service-areas/${city.slug}` : "/service-areas",
    noIndex: !city,
    jsonLd: city ? [
      {
        "@context": "https://schema.org",
        "@type": "PlumbingService",
        name: `Ottr Plumr — ${city.name}`,
        telephone: PHONE_TEL,
        email: EMAIL,
        url: `https://plumr.ca/service-areas/${city.slug}`,
        areaServed: { "@type": "City", name: city.name, containedInPlace: "Niagara Region, Ontario, Canada" },
        address: {
          "@type": "PostalAddress",
          addressLocality: city.name,
          addressRegion: "ON",
          addressCountry: "CA"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "50"
        },
        review: REVIEWS.map((r) => ({
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: r.name },
          reviewBody: r.quote
        }))
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://plumr.ca/" },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://plumr.ca/service-areas" },
          { "@type": "ListItem", position: 3, name: city.name, item: `https://plumr.ca/service-areas/${city.slug}` }
        ]
      }
    ] : void 0
  };
  useSeo(seo);
  if (!city) return /* @__PURE__ */ jsx(Navigate, { to: "/service-areas", replace: true });
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Seo, { ...seo }),
    /* @__PURE__ */ jsxs("section", { className: "bg-gradient-hero py-16 md:py-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "container max-w-4xl text-center", children: [
        /* @__PURE__ */ jsxs("nav", { "aria-label": "Breadcrumb", className: "text-sm text-foreground/70 flex flex-wrap justify-center items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:underline", children: "Home" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx(Link, { to: "/service-areas", className: "hover:underline", children: "Service Areas" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary", children: city.name })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent mt-4", children: "Local service in" }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-6xl text-primary mt-1", children: [
          city.name,
          " plumbing & heating"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mt-5 text-lg", children: city.blurb }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-3 mt-7", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: `tel:${PHONE_TEL}`, children: [
            /* @__PURE__ */ jsx(Phone, {}),
            " Call ",
            PHONE_DISPLAY
          ] }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "deep", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsx(CalendarCheck, {}),
            " Book Online"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "water-band h-10 mt-12", "aria-hidden": "true" })
    ] }),
    (city.longDesc || city.commonIssues || city.localNotes) && /* @__PURE__ */ jsx("section", { className: "container py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-5", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-script text-2xl text-accent", children: [
          "About ",
          city.name
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl text-primary", children: [
          "Plumbing & heating in ",
          city.name
        ] }),
        city.longDesc && /* @__PURE__ */ jsx("p", { className: "text-foreground/80 text-lg leading-relaxed", children: city.longDesc }),
        city.localNotes && /* @__PURE__ */ jsxs("div", { className: "stamp-card p-5 flex items-start gap-3 bg-water/30", children: [
          /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-accent shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-foreground/85", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary", children: "Local tip:" }),
            " ",
            city.localNotes
          ] })
        ] })
      ] }),
      city.commonIssues && city.commonIssues.length > 0 && /* @__PURE__ */ jsxs("aside", { className: "stamp-card p-7 h-fit", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-accent" }),
          /* @__PURE__ */ jsxs("h3", { className: "font-display text-xl text-primary", children: [
            "What we see in ",
            city.name
          ] })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: city.commonIssues.map((issue) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-accent mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground/80", children: issue })
        ] }, issue)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container py-16 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-script text-2xl text-accent", children: [
          "What we offer in ",
          city.name
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl text-primary mt-1", children: "Full-service, every service" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/75 mt-4", children: "One trusted local crew for every plumbing and heating need — residential or commercial." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: SERVICES.map((s) => {
        const SIcon = s.icon;
        return /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/services/${s.slug}/${city.slug}`,
            className: "stamp-card p-6 group hover:shadow-soft transition-shadow",
            children: [
              /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-4 shadow-soft group-hover:bg-accent transition-colors", children: /* @__PURE__ */ jsx(SIcon, { className: "h-6 w-6" }) }),
              /* @__PURE__ */ jsxs("h3", { className: "font-display text-xl text-primary mb-1 group-hover:underline", children: [
                s.title,
                " in ",
                city.name
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/75", children: s.shortDesc })
            ]
          },
          s.slug
        );
      }) })
    ] }),
    city.neighbourhoods && city.neighbourhoods.length > 0 && /* @__PURE__ */ jsx("section", { className: "container pb-8", children: /* @__PURE__ */ jsxs("div", { className: "stamp-card p-8 md:p-10", children: [
      /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "Neighbourhoods we serve" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl text-primary mt-1 mb-5", children: [
        "Across ",
        city.name
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: city.neighbourhoods.map((n) => /* @__PURE__ */ jsxs(
        "span",
        {
          className: "px-4 py-2 rounded-full bg-secondary text-sm font-semibold inline-flex items-center gap-1.5",
          children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5 text-accent" }),
            " ",
            n
          ]
        },
        n
      )) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-8", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "Nearby cities" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-primary mt-1", children: "We also serve these Niagara communities" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2", children: CITIES.filter((c) => c.slug !== city.slug).map((c) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/service-areas/${c.slug}`,
          className: "px-4 py-2 rounded-full bg-card border-2 border-foreground/10 text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors inline-flex items-center gap-1.5",
          children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 text-accent" }),
            "Plumbing in ",
            c.name
          ]
        },
        c.slug
      )) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-deep text-primary-foreground py-16", children: /* @__PURE__ */ jsxs("div", { className: "container text-center max-w-2xl", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl", children: [
        "Need a ",
        city.name,
        " plumber today?"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "opacity-85 mt-3", children: "24/7 emergency service. Honest pricing. Warrantied work." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-3 mt-6", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: `tel:${PHONE_TEL}`, children: [
          /* @__PURE__ */ jsx(Phone, {}),
          " ",
          PHONE_DISPLAY
        ] }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-card text-primary hover:bg-card/90", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
          "Get a Quote ",
          /* @__PURE__ */ jsx(ArrowRight, {})
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(FAQ, {})
  ] });
};
export {
  ServiceAreaPage as default
};
