import { jsxDEV } from "react/jsx-dev-runtime";
import { useParams, Navigate, Link } from "react-router-dom";
import { Phone, CalendarCheck, CheckCircle2, ThumbsUp, ThumbsDown, MapPin, ArrowRight } from "lucide-react";
import { g as getServiceBySlug, P as PHONE_TEL, u as useSeo, S as SERVICES, a as Seo, B as Button, b as PHONE_DISPLAY, J as JOBBER_BOOK_URL, C as CITIES } from "../main.mjs";
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
const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const seo = {
    title: service ? `${service.title} in Niagara | Same-Day Service | Ottr Plumr` : "Service | Ottr Plumr",
    description: (service == null ? void 0 : service.metaDescription) ?? "Plumbing & heating services in the Niagara Region.",
    canonicalPath: service ? `/services/${service.slug}` : "/services",
    noIndex: !service,
    jsonLd: service ? [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.metaDescription,
        provider: {
          "@type": "PlumbingService",
          name: "Ottr Plumr",
          telephone: PHONE_TEL,
          areaServed: "Niagara Region, Ontario, Canada",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "50"
          }
        },
        areaServed: "Niagara Region, Ontario",
        url: `https://plumr.ca/services/${service.slug}`
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://plumr.ca/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://plumr.ca/services" },
          { "@type": "ListItem", position: 3, name: service.title, item: `https://plumr.ca/services/${service.slug}` }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
      }
    ] : void 0
  };
  useSeo(seo);
  if (!service) return /* @__PURE__ */ jsxDEV(Navigate, { to: "/services", replace: true }, void 0, false, {
    fileName: "/dev-server/src/pages/Service.tsx",
    lineNumber: 62,
    columnNumber: 24
  }, void 0);
  const Icon = service.icon;
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV(Seo, { ...seo }, void 0, false, {
      fileName: "/dev-server/src/pages/Service.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-hero py-16 md:py-24", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "container max-w-4xl text-center", children: [
        /* @__PURE__ */ jsxDEV("nav", { "aria-label": "Breadcrumb", className: "text-sm text-foreground/70 flex flex-wrap justify-center items-center gap-1.5", children: [
          /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:underline", children: "Home" }, void 0, false, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { children: "/" }, void 0, false, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(Link, { to: "/services", className: "hover:underline", children: "Services" }, void 0, false, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { children: "/" }, void 0, false, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-primary", children: service.title }, void 0, false, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "h-16 w-16 rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-soft mx-auto mt-6", children: /* @__PURE__ */ jsxDEV(Icon, { className: "h-8 w-8" }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent mt-4", children: service.title }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h1", { className: "font-display text-4xl md:text-6xl text-primary mt-1", children: service.hero }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 mt-5 text-lg", children: service.shortDesc }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-3 mt-7", children: [
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, children: [
            /* @__PURE__ */ jsxDEV(Phone, {}, void 0, false, {
              fileName: "/dev-server/src/pages/Service.tsx",
              lineNumber: 90,
              columnNumber: 44
            }, void 0),
            " Call ",
            PHONE_DISPLAY
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 89,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "deep", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsxDEV(CalendarCheck, {}, void 0, false, {
              fileName: "/dev-server/src/pages/Service.tsx",
              lineNumber: 94,
              columnNumber: 17
            }, void 0),
            " Book Online"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "water-band h-10 mt-12", "aria-hidden": "true" }, void 0, false, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Service.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-16 md:py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2 space-y-5", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "About this service" }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 105,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl md:text-4xl text-primary", children: [
          service.title,
          " in the Niagara Region"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, void 0),
        service.longDesc.map((p, i) => /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 text-lg leading-relaxed", children: p }, i, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 110,
          columnNumber: 15
        }, void 0))
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("aside", { className: "stamp-card p-7 h-fit", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-xl text-primary mb-4", children: "What's included" }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2.5", children: service.points.map((p) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-4 w-4 text-accent mt-0.5 shrink-0" }, void 0, false, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 118,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { children: p }, void 0, false, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 119,
            columnNumber: 19
          }, void 0)
        ] }, p, true, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 117,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Service.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Service.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-secondary/40 py-16 md:py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "What we do" }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 130,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl text-primary mt-1", children: [
          "Specialties under ",
          service.title
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 131,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-5", children: service.whatWeDo.map((w) => /* @__PURE__ */ jsxDEV("article", { className: "stamp-card p-6", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-xl text-primary mb-2", children: w.title }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 136,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/75", children: w.desc }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 137,
          columnNumber: 17
        }, void 0)
      ] }, w.title, true, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 135,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 133,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Service.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Service.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, void 0),
    service.prosCons && /* @__PURE__ */ jsxDEV("section", { className: "container py-16 md:py-20", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Help me choose" }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 148,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl md:text-4xl text-primary mt-1", children: service.prosCons.title }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 149,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mt-4", children: service.prosCons.intro }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 152,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6", children: service.prosCons.items.map((item) => /* @__PURE__ */ jsxDEV("article", { className: "stamp-card p-7 flex flex-col", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-2xl text-primary", children: item.name }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 157,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/70 mt-1 mb-5", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-accent", children: "Best for:" }, void 0, false, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 159,
            columnNumber: 19
          }, void 0),
          " ",
          item.bestFor
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 158,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-5 flex-1", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-2.5", children: [
              /* @__PURE__ */ jsxDEV(ThumbsUp, { className: "h-4 w-4 text-accent" }, void 0, false, {
                fileName: "/dev-server/src/pages/Service.tsx",
                lineNumber: 164,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "font-display text-sm uppercase tracking-wide text-primary", children: "Pros" }, void 0, false, {
                fileName: "/dev-server/src/pages/Service.tsx",
                lineNumber: 165,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Service.tsx",
              lineNumber: 163,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: item.pros.map((p) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-sm text-foreground/80", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-4 w-4 text-accent mt-0.5 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/Service.tsx",
                lineNumber: 170,
                columnNumber: 27
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { children: p }, void 0, false, {
                fileName: "/dev-server/src/pages/Service.tsx",
                lineNumber: 171,
                columnNumber: 27
              }, void 0)
            ] }, p, true, {
              fileName: "/dev-server/src/pages/Service.tsx",
              lineNumber: 169,
              columnNumber: 25
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/Service.tsx",
              lineNumber: 167,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 162,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-2.5", children: [
              /* @__PURE__ */ jsxDEV(ThumbsDown, { className: "h-4 w-4 text-foreground/60" }, void 0, false, {
                fileName: "/dev-server/src/pages/Service.tsx",
                lineNumber: 178,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "font-display text-sm uppercase tracking-wide text-primary", children: "Cons" }, void 0, false, {
                fileName: "/dev-server/src/pages/Service.tsx",
                lineNumber: 179,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Service.tsx",
              lineNumber: 177,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: item.cons.map((c) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-sm text-foreground/80", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "mt-1 h-1.5 w-1.5 rounded-full bg-foreground/40 shrink-0", "aria-hidden": "true" }, void 0, false, {
                fileName: "/dev-server/src/pages/Service.tsx",
                lineNumber: 184,
                columnNumber: 27
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { children: c }, void 0, false, {
                fileName: "/dev-server/src/pages/Service.tsx",
                lineNumber: 185,
                columnNumber: 27
              }, void 0)
            ] }, c, true, {
              fileName: "/dev-server/src/pages/Service.tsx",
              lineNumber: 183,
              columnNumber: 25
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/Service.tsx",
              lineNumber: 181,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 176,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 161,
          columnNumber: 17
        }, void 0)
      ] }, item.name, true, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 156,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 154,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-center text-sm text-foreground/70 mt-8 max-w-xl mx-auto", children: [
        "Still not sure? Call ",
        /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, className: "font-semibold text-primary hover:underline", children: PHONE_DISPLAY }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 195,
          columnNumber: 34
        }, void 0),
        " — we'll walk through your specific home, budget, and usage in about ten minutes. No pressure, no commitment."
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 194,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Service.tsx",
      lineNumber: 146,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-16 md:py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Why Ottr Plumr" }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 203,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl md:text-4xl text-primary mt-1", children: "Local. Honest. Warrantied." }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 204,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mt-4", children: "We earn the call back by doing the job right the first time — and being straight with you about what your home or business actually needs." }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 207,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 202,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { className: "grid gap-3", children: service.whyUs.map((w) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 stamp-card p-4", children: [
        /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-5 w-5 text-accent mt-0.5 shrink-0" }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 215,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: w }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 216,
          columnNumber: 17
        }, void 0)
      ] }, w, true, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 214,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 212,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Service.tsx",
      lineNumber: 201,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Service.tsx",
      lineNumber: 200,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-secondary/40 py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container max-w-3xl", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Common questions" }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 226,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl text-primary mt-1", children: [
          service.title,
          " FAQs"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 227,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 225,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: service.faqs.map((f) => /* @__PURE__ */ jsxDEV("article", { className: "stamp-card p-6", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-lg text-primary", children: f.q }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 234,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mt-2", children: f.a }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 235,
          columnNumber: 17
        }, void 0)
      ] }, f.q, true, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 233,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 231,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Service.tsx",
      lineNumber: 224,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Service.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-16", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Where we work" }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 244,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl text-primary mt-1", children: [
          service.title,
          " across the Niagara Region"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 245,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mt-3", children: [
          "Local ",
          service.title.toLowerCase(),
          " in every city — pick yours."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 248,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 243,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-2", children: CITIES.map((c) => /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: `/services/${service.slug}/${c.slug}`,
          className: "px-4 py-2 rounded-full bg-card border-2 border-foreground/10 text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors inline-flex items-center gap-1.5",
          children: [
            /* @__PURE__ */ jsxDEV(MapPin, { className: "h-3.5 w-3.5 text-accent" }, void 0, false, {
              fileName: "/dev-server/src/pages/Service.tsx",
              lineNumber: 259,
              columnNumber: 15
            }, void 0),
            service.title,
            " in ",
            c.name
          ]
        },
        c.slug,
        true,
        {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 254,
          columnNumber: 13
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 252,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Service.tsx",
      lineNumber: 242,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-16", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Explore more" }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 268,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl text-primary mt-1", children: "Other services" }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 269,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 267,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: others.map((s) => {
        const OIcon = s.icon;
        return /* @__PURE__ */ jsxDEV(Link, { to: `/services/${s.slug}`, className: "stamp-card p-6 hover:shadow-soft transition-shadow group", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-4 shadow-soft", children: /* @__PURE__ */ jsxDEV(OIcon, { className: "h-6 w-6" }, void 0, false, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 277,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 276,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-xl text-primary mb-1 group-hover:underline", children: s.title }, void 0, false, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 279,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/75", children: s.shortDesc }, void 0, false, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 280,
            columnNumber: 17
          }, void 0)
        ] }, s.slug, true, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 275,
          columnNumber: 15
        }, void 0);
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 271,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Service.tsx",
      lineNumber: 266,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-deep text-primary-foreground py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container text-center max-w-2xl", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl md:text-4xl", children: [
        "Ready to book ",
        service.title.toLowerCase(),
        "?"
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 289,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "opacity-85 mt-3", children: "Same-day service available across the Niagara Region." }, void 0, false, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 290,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-3 mt-6", children: [
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, children: [
          /* @__PURE__ */ jsxDEV(Phone, {}, void 0, false, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 293,
            columnNumber: 44
          }, void 0),
          " ",
          PHONE_DISPLAY
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 293,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 292,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, size: "lg", className: "bg-card text-primary hover:bg-card/90", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contact", children: [
          "Get a Quote ",
          /* @__PURE__ */ jsxDEV(ArrowRight, {}, void 0, false, {
            fileName: "/dev-server/src/pages/Service.tsx",
            lineNumber: 296,
            columnNumber: 47
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 296,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Service.tsx",
          lineNumber: 295,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Service.tsx",
        lineNumber: 291,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Service.tsx",
      lineNumber: 288,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Service.tsx",
      lineNumber: 287,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Service.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, void 0);
};
export {
  ServicePage as default
};
