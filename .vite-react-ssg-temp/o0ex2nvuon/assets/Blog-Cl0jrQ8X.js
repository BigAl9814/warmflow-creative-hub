import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { e as POSTS, u as useSeo, a as Seo } from "../main.mjs";
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
const Blog = () => {
  const seo = {
    title: "Niagara Plumbing & Heating Tips | Ottr Plumr Blog",
    description: "Expert plumbing & heating advice for Niagara homeowners — frozen pipes, water heater life, sump pump prep, furnace tune-ups & emergency tips from local licensed pros.",
    canonicalPath: "/blog",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Ottr Plumr — Niagara Plumbing & Heating Blog",
      url: "https://plumr.ca/blog",
      blogPost: POSTS.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `https://plumr.ca/blog/${p.slug}`,
        datePublished: p.publishedAt,
        author: { "@type": "Organization", name: "Ottr Plumr Plumbing & Heating" }
      }))
    }
  };
  useSeo(seo);
  return /* @__PURE__ */ jsxs("div", { className: "container py-16 md:py-20", children: [
    /* @__PURE__ */ jsx(Seo, { ...seo }),
    /* @__PURE__ */ jsxs("header", { className: "max-w-3xl mb-12", children: [
      /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "From the field" }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl text-primary mt-1", children: "Plumbing & heating advice for Niagara homeowners" }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mt-4 text-lg", children: "Honest, local, no-fluff guides written by working plumbers in the Niagara Region." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: POSTS.map((p) => /* @__PURE__ */ jsx("article", { className: "stamp-card overflow-hidden flex flex-col group", children: /* @__PURE__ */ jsxs(Link, { to: `/blog/${p.slug}`, className: "p-7 flex flex-col h-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs text-foreground/60 mb-3", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5" }),
          " ",
          new Date(p.publishedAt).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" }),
          " ",
          p.readMinutes,
          " min"
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-xl text-primary mb-2 group-hover:text-accent transition-colors leading-tight", children: p.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/75 flex-1", children: p.excerpt }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 pt-5 border-t border-foreground/10 flex items-center justify-between", children: [
        p.city && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-xs text-foreground/60", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }),
          " ",
          p.city
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-sm font-semibold text-accent", children: [
          "Read ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }, p.slug)) })
  ] });
};
export {
  Blog as default
};
