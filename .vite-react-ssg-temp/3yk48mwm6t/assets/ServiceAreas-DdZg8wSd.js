import { jsxDEV } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV(Seo, { ...seo }, void 0, false, {
      fileName: "/dev-server/src/pages/ServiceAreas.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-hero py-16 md:py-24", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "container text-center max-w-3xl", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Where we work" }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceAreas.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h1", { className: "font-display text-5xl md:text-6xl text-primary mt-1", children: "Serving every city in the Niagara Region" }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceAreas.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 mt-5 text-lg", children: "Twelve cities. One trusted local team. Pick yours below for service details and quick contact." }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceAreas.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceAreas.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "water-band h-10 mt-12", "aria-hidden": "true" }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceAreas.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/ServiceAreas.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container pt-12 md:pt-16", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto space-y-5 text-center", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 text-base md:text-lg leading-relaxed", children: "Ottr Plumr is headquartered in Welland and runs service vans across the entire Niagara Region — from St. Catharines and Niagara Falls to lakeshore Crystal Beach, from wine country in Lincoln and Beamsville to rural West Lincoln and Wainfleet. We don't subcontract. The same licensed local team that answers your call shows up at your door, in a marked van, with the right tools and the right plan." }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceAreas.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 text-base md:text-lg leading-relaxed", children: "Each city below has its own page with the local context that actually matters: common plumbing & heating issues we see in your area, the neighbourhoods we cover, and a direct line to book service. If your community is in Niagara, we're your local crew." }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceAreas.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/ServiceAreas.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/ServiceAreas.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-16 md:py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: CITIES.map((c) => /* @__PURE__ */ jsxDEV(
      Link,
      {
        to: `/service-areas/${c.slug}`,
        className: "stamp-card p-6 group hover:-translate-y-1 transition-transform block",
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "h-11 w-11 rounded-xl bg-primary text-primary-foreground grid place-items-center shadow-soft group-hover:bg-accent transition-colors", children: /* @__PURE__ */ jsxDEV(MapPin, { className: "h-5 w-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/ServiceAreas.tsx",
              lineNumber: 65,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/ServiceAreas.tsx",
              lineNumber: 64,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-xl text-primary", children: c.name }, void 0, false, {
              fileName: "/dev-server/src/pages/ServiceAreas.tsx",
              lineNumber: 67,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/ServiceAreas.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/75 line-clamp-3", children: c.blurb }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceAreas.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent", children: [
            "View services ",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/ServiceAreas.tsx",
              lineNumber: 71,
              columnNumber: 31
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/ServiceAreas.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, void 0)
        ]
      },
      c.slug,
      true,
      {
        fileName: "/dev-server/src/pages/ServiceAreas.tsx",
        lineNumber: 58,
        columnNumber: 13
      },
      void 0
    )) }, void 0, false, {
      fileName: "/dev-server/src/pages/ServiceAreas.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/ServiceAreas.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-deep text-primary-foreground py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container text-center max-w-2xl", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl md:text-4xl", children: "Not sure if we cover your street?" }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceAreas.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "opacity-85 mt-3", children: "If you're in Niagara, we're your local crew. Give us a call." }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceAreas.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mt-6", children: /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, children: [
        /* @__PURE__ */ jsxDEV(Phone, {}, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceAreas.tsx",
          lineNumber: 84,
          columnNumber: 44
        }, void 0),
        " Call ",
        PHONE_DISPLAY
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceAreas.tsx",
        lineNumber: 84,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceAreas.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceAreas.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/ServiceAreas.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/ServiceAreas.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/ServiceAreas.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, void 0);
};
export {
  ServiceAreasPage as default
};
