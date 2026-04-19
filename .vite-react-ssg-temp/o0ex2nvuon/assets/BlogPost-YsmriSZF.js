import { jsx, jsxs } from "react/jsx-runtime";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, MapPin, ArrowRight, Phone, ArrowLeft } from "lucide-react";
import { f as getPostBySlug, u as useSeo, e as POSTS, a as Seo, B as Button, P as PHONE_TEL, b as PHONE_DISPLAY, J as JOBBER_BOOK_URL } from "../main.mjs";
import NotFound from "./NotFound-CTMB8Tuu.js";
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
const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const seo = {
    title: post ? `${post.title} | Ottr Plumr Blog` : "Post not found",
    description: (post == null ? void 0 : post.metaDescription) ?? "Plumbing & heating advice from Ottr Plumr.",
    canonicalPath: post ? `/blog/${post.slug}` : "/blog",
    jsonLd: post ? {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      author: {
        "@type": "Organization",
        name: "Ottr Plumr Plumbing & Heating",
        url: "https://plumr.ca"
      },
      publisher: {
        "@type": "Organization",
        name: "Ottr Plumr Plumbing & Heating",
        logo: {
          "@type": "ImageObject",
          url: "https://plumr.ca/og-image.jpg"
        }
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://plumr.ca/blog/${post.slug}`
      }
    } : void 0,
    noIndex: !post
  };
  useSeo(seo);
  if (!post) return /* @__PURE__ */ jsx(NotFound, {});
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  return /* @__PURE__ */ jsxs("article", { className: "container py-12 md:py-16", children: [
    /* @__PURE__ */ jsx(Seo, { ...seo }),
    /* @__PURE__ */ jsxs("nav", { "aria-label": "Breadcrumb", className: "text-sm text-foreground/60 mb-6", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:underline", children: "Home" }),
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:underline", children: "Blog" }),
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsx("span", { className: "text-foreground/80", children: post.title })
    ] }),
    /* @__PURE__ */ jsxs("header", { className: "max-w-3xl mb-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 text-xs text-foreground/60 mb-4", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5" }),
          new Date(post.publishedAt).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" }),
          " ",
          post.readMinutes,
          " min read"
        ] }),
        post.city && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }),
          " ",
          post.city
        ] })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl text-primary leading-tight", children: post.title }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground/80 mt-4", children: post.excerpt })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_320px] gap-10 max-w-5xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "prose-content space-y-5 text-foreground/85 leading-relaxed", children: [
        post.body.map((b, i) => {
          if (b.type === "h2")
            return /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl md:text-3xl text-primary mt-8 mb-2", children: b.text }, i);
          if (b.type === "h3")
            return /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-primary mt-6 mb-1", children: b.text }, i);
          if (b.type === "ul")
            return /* @__PURE__ */ jsx("ul", { className: "list-disc pl-6 space-y-2", children: b.items.map((it, j) => /* @__PURE__ */ jsx("li", { children: it }, j)) }, i);
          return /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg", children: b.text }, i);
        }),
        (post.serviceSlug || post.citySlug) && /* @__PURE__ */ jsxs("div", { className: "mt-10 p-6 rounded-2xl bg-secondary/60 border-2 border-foreground/10", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-lg text-primary mb-3", children: "Need a hand?" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 text-sm", children: [
            post.serviceSlug && post.service && /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/services/${post.serviceSlug}`,
                className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-card border-2 border-foreground/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors",
                children: [
                  post.service,
                  " ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                ]
              }
            ),
            post.citySlug && post.city && /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/service-areas/${post.citySlug}`,
                className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-card border-2 border-foreground/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors",
                children: [
                  "Service in ",
                  post.city,
                  " ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                ]
              }
            ),
            post.serviceSlug && post.citySlug && /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/services/${post.serviceSlug}/${post.citySlug}`,
                className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors",
                children: [
                  post.service,
                  " in ",
                  post.city,
                  " ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "stamp-card p-6 bg-gradient-deep text-primary-foreground border-0", children: [
          /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-primary-glow", children: "Need help now?" }),
          /* @__PURE__ */ jsx("p", { className: "font-display text-xl mt-1", children: "24/7 service across Niagara" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-2", children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", className: "w-full", children: /* @__PURE__ */ jsxs("a", { href: `tel:${PHONE_TEL}`, children: [
              /* @__PURE__ */ jsx(Phone, {}),
              " ",
              PHONE_DISPLAY
            ] }) }),
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "w-full bg-card/10 border-primary-foreground/30 text-primary-foreground hover:bg-card/20 hover:text-primary-foreground", children: /* @__PURE__ */ jsx("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: "Book Online" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          " Back to all posts"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-16 pt-12 border-t border-foreground/10", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-primary mb-6", children: "More from the blog" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-5", children: related.map((p) => /* @__PURE__ */ jsxs(Link, { to: `/blog/${p.slug}`, className: "stamp-card p-5 hover:-translate-y-1 transition-transform", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-primary mb-2 leading-tight", children: p.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/70 line-clamp-3", children: p.excerpt })
      ] }, p.slug)) })
    ] })
  ] });
};
export {
  BlogPost as default
};
