import { jsxDEV } from "react/jsx-dev-runtime";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, MapPin, ArrowRight, Phone, ArrowLeft } from "lucide-react";
import { f as getPostBySlug, u as useSeo, e as POSTS, a as Seo, B as Button, P as PHONE_TEL, b as PHONE_DISPLAY, J as JOBBER_BOOK_URL } from "../main.mjs";
import NotFound from "./NotFound-D-nFjAvm.js";
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
  if (!post) return /* @__PURE__ */ jsxDEV(NotFound, {}, void 0, false, {
    fileName: "/dev-server/src/pages/BlogPost.tsx",
    lineNumber: 48,
    columnNumber: 21
  }, void 0);
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  return /* @__PURE__ */ jsxDEV("article", { className: "container py-12 md:py-16", children: [
    /* @__PURE__ */ jsxDEV(Seo, { ...seo }, void 0, false, {
      fileName: "/dev-server/src/pages/BlogPost.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("nav", { "aria-label": "Breadcrumb", className: "text-sm text-foreground/60 mb-6", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:underline", children: "Home" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogPost.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("span", { className: "mx-2", children: "/" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogPost.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(Link, { to: "/blog", className: "hover:underline", children: "Blog" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogPost.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("span", { className: "mx-2", children: "/" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogPost.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("span", { className: "text-foreground/80", children: post.title }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogPost.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/BlogPost.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("header", { className: "max-w-3xl mb-10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center gap-3 text-xs text-foreground/60 mb-4", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsxDEV(Calendar, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogPost.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, void 0),
          new Date(post.publishedAt).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogPost.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsxDEV(Clock, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogPost.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, void 0),
          " ",
          post.readMinutes,
          " min read"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogPost.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, void 0),
        post.city && /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsxDEV(MapPin, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogPost.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, void 0),
          " ",
          post.city
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogPost.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogPost.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h1", { className: "font-display text-4xl md:text-5xl text-primary leading-tight", children: post.title }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogPost.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-foreground/80 mt-4", children: post.excerpt }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogPost.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/BlogPost.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-[1fr_320px] gap-10 max-w-5xl", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "prose-content space-y-5 text-foreground/85 leading-relaxed", children: [
        post.body.map((b, i) => {
          if (b.type === "h2")
            return /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-2xl md:text-3xl text-primary mt-8 mb-2", children: b.text }, i, false, {
              fileName: "/dev-server/src/pages/BlogPost.tsx",
              lineNumber: 88,
              columnNumber: 17
            }, void 0);
          if (b.type === "h3")
            return /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-xl text-primary mt-6 mb-1", children: b.text }, i, false, {
              fileName: "/dev-server/src/pages/BlogPost.tsx",
              lineNumber: 94,
              columnNumber: 17
            }, void 0);
          if (b.type === "ul")
            return /* @__PURE__ */ jsxDEV("ul", { className: "list-disc pl-6 space-y-2", children: b.items.map((it, j) => /* @__PURE__ */ jsxDEV("li", { children: it }, j, false, {
              fileName: "/dev-server/src/pages/BlogPost.tsx",
              lineNumber: 102,
              columnNumber: 21
            }, void 0)) }, i, false, {
              fileName: "/dev-server/src/pages/BlogPost.tsx",
              lineNumber: 100,
              columnNumber: 17
            }, void 0);
          return /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg", children: b.text }, i, false, {
            fileName: "/dev-server/src/pages/BlogPost.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, void 0);
        }),
        (post.serviceSlug || post.citySlug) && /* @__PURE__ */ jsxDEV("div", { className: "mt-10 p-6 rounded-2xl bg-secondary/60 border-2 border-foreground/10", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "font-display text-lg text-primary mb-3", children: "Need a hand?" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogPost.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-3 text-sm", children: [
            post.serviceSlug && post.service && /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: `/services/${post.serviceSlug}`,
                className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-card border-2 border-foreground/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors",
                children: [
                  post.service,
                  " ",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-3.5 w-3.5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/BlogPost.tsx",
                    lineNumber: 123,
                    columnNumber: 36
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/BlogPost.tsx",
                lineNumber: 119,
                columnNumber: 19
              },
              void 0
            ),
            post.citySlug && post.city && /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: `/service-areas/${post.citySlug}`,
                className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-card border-2 border-foreground/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors",
                children: [
                  "Service in ",
                  post.city,
                  " ",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-3.5 w-3.5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/BlogPost.tsx",
                    lineNumber: 131,
                    columnNumber: 44
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/BlogPost.tsx",
                lineNumber: 127,
                columnNumber: 19
              },
              void 0
            ),
            post.serviceSlug && post.citySlug && /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: `/services/${post.serviceSlug}/${post.citySlug}`,
                className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors",
                children: [
                  post.service,
                  " in ",
                  post.city,
                  " ",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-3.5 w-3.5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/BlogPost.tsx",
                    lineNumber: 139,
                    columnNumber: 51
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/BlogPost.tsx",
                lineNumber: 135,
                columnNumber: 19
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogPost.tsx",
            lineNumber: 117,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogPost.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogPost.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("aside", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "stamp-card p-6 bg-gradient-deep text-primary-foreground border-0", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-primary-glow", children: "Need help now?" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogPost.tsx",
            lineNumber: 150,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "font-display text-xl mt-1", children: "24/7 service across Niagara" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogPost.tsx",
            lineNumber: 151,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-4 space-y-2", children: [
            /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", className: "w-full", children: /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, children: [
              /* @__PURE__ */ jsxDEV(Phone, {}, void 0, false, {
                fileName: "/dev-server/src/pages/BlogPost.tsx",
                lineNumber: 154,
                columnNumber: 46
              }, void 0),
              " ",
              PHONE_DISPLAY
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogPost.tsx",
              lineNumber: 154,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogPost.tsx",
              lineNumber: 153,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "outline", className: "w-full bg-card/10 border-primary-foreground/30 text-primary-foreground hover:bg-card/20 hover:text-primary-foreground", children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: "Book Online" }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogPost.tsx",
              lineNumber: 157,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogPost.tsx",
              lineNumber: 156,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogPost.tsx",
            lineNumber: 152,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogPost.tsx",
          lineNumber: 149,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent", children: [
          /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogPost.tsx",
            lineNumber: 162,
            columnNumber: 13
          }, void 0),
          " Back to all posts"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogPost.tsx",
          lineNumber: 161,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogPost.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/BlogPost.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "mt-16 pt-12 border-t border-foreground/10", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-2xl text-primary mb-6", children: "More from the blog" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogPost.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-5", children: related.map((p) => /* @__PURE__ */ jsxDEV(Link, { to: `/blog/${p.slug}`, className: "stamp-card p-5 hover:-translate-y-1 transition-transform", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-lg text-primary mb-2 leading-tight", children: p.title }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogPost.tsx",
          lineNumber: 173,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/70 line-clamp-3", children: p.excerpt }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogPost.tsx",
          lineNumber: 174,
          columnNumber: 15
        }, void 0)
      ] }, p.slug, true, {
        fileName: "/dev-server/src/pages/BlogPost.tsx",
        lineNumber: 172,
        columnNumber: 13
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogPost.tsx",
        lineNumber: 170,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/BlogPost.tsx",
      lineNumber: 168,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/BlogPost.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, void 0);
};
export {
  BlogPost as default
};
