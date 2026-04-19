import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { C as CITIES, u as useSeo, a as Seo, B as Button, P as PHONE_TEL, b as PHONE_DISPLAY } from "../main.mjs";
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
const ServiceAreasPage = () => {
  const seo = {
    title: "Plumber Near Me — Niagara Region Service Areas | Ottr Plumr",
    description: "Local plumbing & heating in St. Catharines, Niagara Falls, Welland, Thorold, Lincoln, Grimsby, Fort Erie, Pelham & more. Same-day service across the Niagara Region. Call 289-488-1007.",
    canonicalPath: "/service-areas",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: CITIES.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://plumr.ca/service-areas/${c.slug}`,
        name: c.name
      }))
    }
  };
  useSeo(seo);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Seo, { ...seo }),
    /* @__PURE__ */ jsxs("section", { className: "bg-gradient-hero py-16 md:py-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "container text-center max-w-3xl", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "Where we work" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-primary mt-1", children: "Serving every city in the Niagara Region" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mt-5 text-lg", children: "Twelve cities. One trusted local team. Pick yours below for service details and quick contact." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "water-band h-10 mt-12", "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container pt-12 md:pt-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto space-y-5 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-foreground/80 text-base md:text-lg leading-relaxed", children: "Ottr Plumr is headquartered in Welland and runs service vans across the entire Niagara Region — from St. Catharines and Niagara Falls to lakeshore Crystal Beach, from wine country in Lincoln and Beamsville to rural West Lincoln and Wainfleet. We don't subcontract. The same licensed local team that answers your call shows up at your door, in a marked van, with the right tools and the right plan." }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground/75 text-base md:text-lg leading-relaxed", children: "Each city below has its own page with the local context that actually matters: common plumbing & heating issues we see in your area, the neighbourhoods we cover, and a direct line to book service. If your community is in Niagara, we're your local crew." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: CITIES.map((c) => /* @__PURE__ */ jsxs(
      Link,
      {
        to: `/service-areas/${c.slug}`,
        className: "stamp-card p-6 group hover:-translate-y-1 transition-transform block",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-xl bg-primary text-primary-foreground grid place-items-center shadow-soft group-hover:bg-accent transition-colors", children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsx("h2", { className: "font-display text-xl text-primary", children: c.name })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/75 line-clamp-3", children: c.blurb }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent", children: [
            "View services ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ]
      },
      c.slug
    )) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-deep text-primary-foreground py-16", children: /* @__PURE__ */ jsxs("div", { className: "container text-center max-w-2xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl", children: "Not sure if we cover your street?" }),
      /* @__PURE__ */ jsx("p", { className: "opacity-85 mt-3", children: "If you're in Niagara, we're your local crew. Give us a call." }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-6", children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: `tel:${PHONE_TEL}`, children: [
        /* @__PURE__ */ jsx(Phone, {}),
        " Call ",
        PHONE_DISPLAY
      ] }) }) })
    ] }) })
  ] });
};
export {
  ServiceAreasPage as default
};
