import { jsxDEV } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV("div", { className: "container py-16 md:py-20", children: [
    /* @__PURE__ */ jsxDEV(Seo, { ...seo }, void 0, false, {
      fileName: "/dev-server/src/pages/Blog.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("header", { className: "max-w-3xl mb-12", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "From the field" }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h1", { className: "font-display text-4xl md:text-5xl text-primary mt-1", children: "Plumbing & heating advice for Niagara homeowners" }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 mt-4 text-lg", children: "Honest, local, no-fluff guides written by working plumbers in the Niagara Region." }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Blog.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: POSTS.map((p) => /* @__PURE__ */ jsxDEV("article", { className: "stamp-card overflow-hidden flex flex-col group", children: /* @__PURE__ */ jsxDEV(Link, { to: `/blog/${p.slug}`, className: "p-7 flex flex-col h-full", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 text-xs text-foreground/60 mb-3", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsxDEV(Calendar, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 47,
            columnNumber: 66
          }, void 0),
          " ",
          new Date(p.publishedAt).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" })
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsxDEV(Clock, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 48,
            columnNumber: 66
          }, void 0),
          " ",
          p.readMinutes,
          " min"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 46,
        columnNumber: 15
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-xl text-primary mb-2 group-hover:text-accent transition-colors leading-tight", children: p.title }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 50,
        columnNumber: 15
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/75 flex-1", children: p.excerpt }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 53,
        columnNumber: 15
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-5 pt-5 border-t border-foreground/10 flex items-center justify-between", children: [
        p.city && /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1 text-xs text-foreground/60", children: [
          /* @__PURE__ */ jsxDEV(MapPin, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 57,
            columnNumber: 21
          }, void 0),
          " ",
          p.city
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 56,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1 text-sm font-semibold text-accent", children: [
          "Read ",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 61,
            columnNumber: 24
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 60,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 54,
        columnNumber: 15
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Blog.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, void 0) }, p.slug, false, {
      fileName: "/dev-server/src/pages/Blog.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, void 0)) }, void 0, false, {
      fileName: "/dev-server/src/pages/Blog.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Blog.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, void 0);
};
export {
  Blog as default
};
