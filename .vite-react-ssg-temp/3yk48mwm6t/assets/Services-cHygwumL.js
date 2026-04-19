import { jsxDEV } from "react/jsx-dev-runtime";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { S as SERVICES, u as useSeo, a as Seo, B as Button } from "../main.mjs";
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
const ServicesPage = () => {
  const seo = {
    title: "Niagara Plumbing & Heating Services | Ottr Plumr",
    description: "Full-service plumber & HVAC in Niagara — drain cleaning, water heater install & repair, sump pumps, leak detection, furnace & boiler service. Same-day, licensed, warrantied. Call 289-488-1007.",
    canonicalPath: "/services",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://plumr.ca/services/${s.slug}`,
        name: s.title
      }))
    }
  };
  useSeo(seo);
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV(Seo, { ...seo }, void 0, false, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-hero py-16 md:py-24", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "container text-center max-w-3xl", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Our services" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h1", { className: "font-display text-5xl md:text-6xl text-primary mt-1", children: [
          "Everything plumbing.",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 33,
            columnNumber: 33
          }, void 0),
          "Everything heating."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 mt-5 text-lg", children: "From a dripping tap to a full commercial install — one trusted local team for it all." }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "water-band h-10 mt-12", "aria-hidden": "true" }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container pt-12 md:pt-16", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto space-y-5 text-center", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 text-base md:text-lg leading-relaxed", children: "Ottr Plumr is a full-service plumbing & heating company serving the Niagara Region — residential, commercial, and emergency. We handle the everyday stuff (leaks, drains, fixture installs, water heaters, furnace tune-ups) and the bigger projects (re-pipes, bathroom and kitchen renos, boiler conversions, backflow systems, sump pump retrofits). One licensed local crew, one phone number, every job warrantied." }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 text-base md:text-lg leading-relaxed", children: "Below is what we do, organized by category. Each page goes deep — what's included, common questions, pros and cons where there's a real choice to make, and city-specific service pages for every community in Niagara." }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-16 md:py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6", children: SERVICES.map((s) => /* @__PURE__ */ jsxDEV("article", { className: "stamp-card p-7 flex flex-col", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "h-14 w-14 rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-soft", children: /* @__PURE__ */ jsxDEV(s.icon, { className: "h-7 w-7" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 60,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 59,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-2xl text-primary", children: s.title }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 62,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 58,
        columnNumber: 15
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80", children: s.shortDesc }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 64,
        columnNumber: 15
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { className: "grid sm:grid-cols-2 gap-2 mt-5", children: s.points.slice(0, 4).map((p) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-sm", children: [
        /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-4 w-4 text-accent mt-0.5 shrink-0" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 68,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { children: p }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 69,
          columnNumber: 21
        }, void 0)
      ] }, p, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 67,
        columnNumber: 19
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 65,
        columnNumber: 15
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-6 pt-5 border-t border-border/60", children: /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "deep", className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxDEV(Link, { to: `/services/${s.slug}`, children: [
        "Learn more ",
        /* @__PURE__ */ jsxDEV(ArrowRight, {}, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 76,
          columnNumber: 32
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 75,
        columnNumber: 19
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 73,
        columnNumber: 15
      }, void 0)
    ] }, s.slug, true, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, void 0)) }, void 0, false, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container pb-16 md:pb-20", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "How we work" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl text-primary mt-1", children: "A simple, honest process" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mt-4", children: "No hourly meters running silently in the background. No hidden line items tacked on at the end. If we uncover something unexpected during the work, we stop and re-quote before continuing — you decide what happens next. Here's exactly what happens when you book Ottr Plumr." }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: [
        { step: "1", title: "You call or book", desc: "Phone, online form, or email — we confirm the appointment and give you a clear arrival window." },
        { step: "2", title: "We diagnose first", desc: "We arrive, listen, look, and find the actual root cause — not just the loudest symptom." },
        { step: "3", title: "Flat-rate quote", desc: "We write up the fix, walk you through any options (with pros & cons where it matters), and you decide. No pressure." },
        { step: "4", title: "Clean, warrantied work", desc: "Drop cloths down, work done right, mess cleaned up, written warranty in your inbox before we drive away." }
      ].map((s) => /* @__PURE__ */ jsxDEV("article", { className: "stamp-card p-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "h-12 w-12 rounded-2xl bg-accent text-accent-foreground grid place-items-center font-display text-2xl shadow-soft mb-4", children: s.step }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 102,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-lg text-primary mb-2", children: s.title }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 105,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/75", children: s.desc }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 106,
          columnNumber: 15
        }, void 0)
      ] }, s.step, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-deep text-primary-foreground py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container text-center max-w-2xl", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl md:text-4xl", children: "Don't see what you need?" }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "opacity-85 mt-3", children: "If it involves pipes or heat, we can probably handle it. Just ask." }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-3 mt-6", children: [
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+12894881007", children: [
          /* @__PURE__ */ jsxDEV(Phone, {}, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 118,
            columnNumber: 42
          }, void 0),
          " Call 289-488-1007"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 118,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 117,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, size: "lg", className: "bg-card text-primary hover:bg-card/90", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contact", children: [
          "Get a Quote ",
          /* @__PURE__ */ jsxDEV(ArrowRight, {}, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 121,
            columnNumber: 47
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 121,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 113,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Services.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, void 0);
};
export {
  ServicesPage as default
};
