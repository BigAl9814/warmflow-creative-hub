import { jsxs, jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Seo, { ...seo }),
    /* @__PURE__ */ jsxs("section", { className: "bg-gradient-hero py-16 md:py-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "container text-center max-w-3xl", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "Our services" }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-6xl text-primary mt-1", children: [
          "Everything plumbing.",
          /* @__PURE__ */ jsx("br", {}),
          "Everything heating."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mt-5 text-lg", children: "From a dripping tap to a full commercial install — one trusted local team for it all." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "water-band h-10 mt-12", "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container pt-12 md:pt-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto space-y-5 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-foreground/80 text-base md:text-lg leading-relaxed", children: "Ottr Plumr is a full-service plumbing & heating company serving the Niagara Region — residential, commercial, and emergency. We handle the everyday stuff (leaks, drains, fixture installs, water heaters, furnace tune-ups) and the bigger projects (re-pipes, bathroom and kitchen renos, boiler conversions, backflow systems, sump pump retrofits). One licensed local crew, one phone number, every job warrantied." }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground/75 text-base md:text-lg leading-relaxed", children: "Below is what we do, organized by category. Each page goes deep — what's included, common questions, pros and cons where there's a real choice to make, and city-specific service pages for every community in Niagara." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: SERVICES.map((s) => /* @__PURE__ */ jsxs("article", { className: "stamp-card p-7 flex flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-soft", children: /* @__PURE__ */ jsx(s.icon, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-primary", children: s.title })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground/80", children: s.shortDesc }),
      /* @__PURE__ */ jsx("ul", { className: "grid sm:grid-cols-2 gap-2 mt-5", children: s.points.slice(0, 4).map((p) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-accent mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsx("span", { children: p })
      ] }, p)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 pt-5 border-t border-border/60", children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "deep", className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxs(Link, { to: `/services/${s.slug}`, children: [
        "Learn more ",
        /* @__PURE__ */ jsx(ArrowRight, {})
      ] }) }) })
    ] }, s.slug)) }) }),
    /* @__PURE__ */ jsxs("section", { className: "container pb-16 md:pb-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "How we work" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-primary mt-1", children: "A simple, honest process" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/75 mt-4", children: "No hourly meters running silently in the background. No hidden line items tacked on at the end. If we uncover something unexpected during the work, we stop and re-quote before continuing — you decide what happens next. Here's exactly what happens when you book Ottr Plumr." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: [
        { step: "1", title: "You call or book", desc: "Phone, online form, or email — we confirm the appointment and give you a clear arrival window." },
        { step: "2", title: "We diagnose first", desc: "We arrive, listen, look, and find the actual root cause — not just the loudest symptom." },
        { step: "3", title: "Flat-rate quote", desc: "We write up the fix, walk you through any options (with pros & cons where it matters), and you decide. No pressure." },
        { step: "4", title: "Clean, warrantied work", desc: "Drop cloths down, work done right, mess cleaned up, written warranty in your inbox before we drive away." }
      ].map((s) => /* @__PURE__ */ jsxs("article", { className: "stamp-card p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-2xl bg-accent text-accent-foreground grid place-items-center font-display text-2xl shadow-soft mb-4", children: s.step }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-primary mb-2", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/75", children: s.desc })
      ] }, s.step)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-deep text-primary-foreground py-16", children: /* @__PURE__ */ jsxs("div", { className: "container text-center max-w-2xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl", children: "Don't see what you need?" }),
      /* @__PURE__ */ jsx("p", { className: "opacity-85 mt-3", children: "If it involves pipes or heat, we can probably handle it. Just ask." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-3 mt-6", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: "tel:+12894881007", children: [
          /* @__PURE__ */ jsx(Phone, {}),
          " Call 289-488-1007"
        ] }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-card text-primary hover:bg-card/90", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
          "Get a Quote ",
          /* @__PURE__ */ jsx(ArrowRight, {})
        ] }) })
      ] })
    ] }) })
  ] });
};
export {
  ServicesPage as default
};
