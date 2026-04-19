import { jsxDEV } from "react/jsx-dev-runtime";
import { useParams, Navigate, Link } from "react-router-dom";
import { Phone, CalendarCheck, CheckCircle2, MapPin, ArrowRight, Wrench } from "lucide-react";
import { g as getServiceBySlug, C as CITIES, b as PHONE_DISPLAY, P as PHONE_TEL, E as EMAIL, R as REVIEWS, u as useSeo, S as SERVICES, a as Seo, B as Button, J as JOBBER_BOOK_URL } from "../main.mjs";
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
const ServiceCityPage = () => {
  const { service: serviceSlug, city: citySlug } = useParams();
  const service = getServiceBySlug(serviceSlug);
  const city = CITIES.find((c) => c.slug === citySlug);
  const seo = {
    title: service && city ? `${service.title} ${city.name} | 24/7 Local | Ottr Plumr` : "Service | Ottr Plumr",
    description: service && city ? `Need ${service.title.toLowerCase()} in ${city.name}? Ottr Plumr offers same-day, licensed, warrantied service with upfront pricing. 24/7 emergency response across Niagara. Call ${PHONE_DISPLAY}.` : "Plumbing & heating in the Niagara Region.",
    canonicalPath: service && city ? `/services/${service.slug}/${city.slug}` : "/services",
    noIndex: !(service && city),
    jsonLd: service && city ? [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${service.title} in ${city.name}`,
        description: `${service.title} for homes and businesses in ${city.name}, Ontario. ${service.shortDesc}`,
        serviceType: service.title,
        provider: {
          "@type": "PlumbingService",
          name: "Ottr Plumr Plumbing & Heating",
          telephone: PHONE_TEL,
          email: EMAIL,
          url: "https://plumr.ca/",
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
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: "Niagara Region, Ontario, Canada"
        },
        url: `https://plumr.ca/services/${service.slug}/${city.slug}`
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://plumr.ca/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://plumr.ca/services" },
          { "@type": "ListItem", position: 3, name: service.title, item: `https://plumr.ca/services/${service.slug}` },
          { "@type": "ListItem", position: 4, name: city.name, item: `https://plumr.ca/services/${service.slug}/${city.slug}` }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Do you offer ${service.title.toLowerCase()} in ${city.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes — Ottr Plumr provides ${service.title.toLowerCase()} throughout ${city.name} and the surrounding Niagara Region, with same-day appointments and 24/7 emergency response.`
            }
          },
          {
            "@type": "Question",
            name: `How fast can a plumber get to ${city.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `From our Welland shop we typically reach ${city.name} the same day for non-emergencies and within the hour for true emergencies. Call ${PHONE_DISPLAY} to dispatch.`
            }
          },
          ...service.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a }
          }))
        ]
      }
    ] : void 0
  };
  useSeo(seo);
  if (!service || !city) return /* @__PURE__ */ jsxDEV(Navigate, { to: "/services", replace: true }, void 0, false, {
    fileName: "/dev-server/src/pages/ServiceCity.tsx",
    lineNumber: 106,
    columnNumber: 33
  }, void 0);
  const Icon = service.icon;
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const otherCities = CITIES.filter((c) => c.slug !== city.slug).slice(0, 6);
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV(Seo, { ...seo }, void 0, false, {
      fileName: "/dev-server/src/pages/ServiceCity.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-hero py-16 md:py-24", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "container max-w-4xl text-center", children: [
        /* @__PURE__ */ jsxDEV("nav", { className: "text-sm text-foreground/70 flex flex-wrap justify-center items-center gap-1.5", children: [
          /* @__PURE__ */ jsxDEV(Link, { to: "/services", className: "hover:underline", children: "Services" }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 119,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { children: "/" }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 120,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(Link, { to: `/services/${service.slug}`, className: "hover:underline", children: service.title }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 121,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { children: "/" }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-primary", children: city.name }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 125,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "h-16 w-16 rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-soft mx-auto mt-6", children: /* @__PURE__ */ jsxDEV(Icon, { className: "h-8 w-8" }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent mt-4", children: [
          service.title,
          " in"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 130,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h1", { className: "font-display text-4xl md:text-6xl text-primary mt-1", children: [
          city.name,
          ", Ontario"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 mt-5 text-lg", children: [
          "Local ",
          service.title.toLowerCase(),
          " for ",
          city.name,
          " homes and businesses — same-day service, honest pricing, and workmanship warrantied in writing."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-3 mt-7", children: [
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, children: [
            /* @__PURE__ */ jsxDEV(Phone, {}, void 0, false, {
              fileName: "/dev-server/src/pages/ServiceCity.tsx",
              lineNumber: 143,
              columnNumber: 44
            }, void 0),
            " Call ",
            PHONE_DISPLAY
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 142,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "deep", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsxDEV(CalendarCheck, {}, void 0, false, {
              fileName: "/dev-server/src/pages/ServiceCity.tsx",
              lineNumber: 147,
              columnNumber: 17
            }, void 0),
            " Book Online"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 146,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 145,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "water-band h-10 mt-12", "aria-hidden": "true" }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/ServiceCity.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-16 md:py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2 space-y-5", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: [
          "Trusted ",
          service.title.toLowerCase(),
          " in ",
          city.name
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 158,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl md:text-4xl text-primary", children: [
          "Why ",
          city.name,
          " chooses Ottr Plumr"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 161,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 text-lg leading-relaxed", children: city.blurb }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 164,
          columnNumber: 13
        }, void 0),
        service.longDesc.map((p, i) => /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 text-lg leading-relaxed", children: p }, i, false, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, void 0)),
        city.neighbourhoods && city.neighbourhoods.length > 0 && /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 text-lg leading-relaxed", children: [
          "We service every corner of ",
          city.name,
          " — including ",
          city.neighbourhoods.slice(0, -1).join(", "),
          city.neighbourhoods.length > 1 ? ", and " : "",
          city.neighbourhoods[city.neighbourhoods.length - 1],
          " — usually same-day for ",
          service.title.toLowerCase(),
          " calls."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 173,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 157,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("aside", { className: "stamp-card p-7 h-fit", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-xl text-primary mb-4", children: [
          service.title,
          " includes"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 183,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2.5", children: service.points.map((p) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-4 w-4 text-accent mt-0.5 shrink-0" }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 189,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { children: p }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 190,
            columnNumber: 19
          }, void 0)
        ] }, p, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 188,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 186,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-6 pt-6 border-t border-foreground/10", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs uppercase tracking-wider font-semibold text-foreground/60 mb-1", children: "Serving" }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 195,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "font-display text-lg text-primary inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxDEV(MapPin, { className: "h-4 w-4 text-accent" }, void 0, false, {
              fileName: "/dev-server/src/pages/ServiceCity.tsx",
              lineNumber: 199,
              columnNumber: 17
            }, void 0),
            " ",
            city.name,
            ", ON"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 198,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 194,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/ServiceCity.tsx",
      lineNumber: 156,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/ServiceCity.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-secondary/40 py-16 md:py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "What's included" }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 209,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl text-primary mt-1", children: [
          service.title,
          " specialties for ",
          city.name
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 210,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 208,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-5", children: service.whatWeDo.map((w) => /* @__PURE__ */ jsxDEV("article", { className: "stamp-card p-6", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-xl text-primary mb-2", children: w.title }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 217,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/75", children: w.desc }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 220,
          columnNumber: 17
        }, void 0)
      ] }, w.title, true, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 216,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 214,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/ServiceCity.tsx",
      lineNumber: 207,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/ServiceCity.tsx",
      lineNumber: 206,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-16", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: [
          "More in ",
          city.name
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 229,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl text-primary mt-1", children: [
          "Other services we offer in ",
          city.name
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 230,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 228,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: otherServices.map((s) => {
        const OIcon = s.icon;
        return /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: `/services/${s.slug}/${city.slug}`,
            className: "stamp-card p-6 hover:shadow-soft transition-shadow group",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-4 shadow-soft", children: /* @__PURE__ */ jsxDEV(OIcon, { className: "h-6 w-6" }, void 0, false, {
                fileName: "/dev-server/src/pages/ServiceCity.tsx",
                lineNumber: 244,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/ServiceCity.tsx",
                lineNumber: 243,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-xl text-primary mb-1 group-hover:underline", children: [
                s.title,
                " in ",
                city.name
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/ServiceCity.tsx",
                lineNumber: 246,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/75", children: s.shortDesc }, void 0, false, {
                fileName: "/dev-server/src/pages/ServiceCity.tsx",
                lineNumber: 249,
                columnNumber: 17
              }, void 0)
            ]
          },
          s.slug,
          true,
          {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 238,
            columnNumber: 15
          },
          void 0
        );
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 234,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/ServiceCity.tsx",
      lineNumber: 227,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-secondary/40 py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: [
          service.title,
          " elsewhere in Niagara"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 259,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl text-primary mt-1", children: [
          "We also offer ",
          service.title.toLowerCase(),
          " in"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 262,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 258,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-2", children: otherCities.map((c) => /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: `/services/${service.slug}/${c.slug}`,
          className: "px-4 py-2 rounded-full bg-card border-2 border-foreground/10 text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors",
          children: [
            service.title,
            " in ",
            c.name
          ]
        },
        c.slug,
        true,
        {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 268,
          columnNumber: 15
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 266,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/ServiceCity.tsx",
      lineNumber: 257,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/ServiceCity.tsx",
      lineNumber: 256,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-16 md:py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "FAQs" }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 283,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl text-primary mt-1", children: [
          service.title,
          " in ",
          city.name,
          " — common questions"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 284,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 282,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV("article", { className: "stamp-card p-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-lg text-primary", children: [
            "Do you offer ",
            service.title.toLowerCase(),
            " in ",
            city.name,
            "?"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 290,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mt-2", children: [
            "Yes — Ottr Plumr provides ",
            service.title.toLowerCase(),
            " throughout",
            " ",
            city.name,
            " and the surrounding Niagara Region, with same-day appointments and 24/7 emergency response."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 293,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 289,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("article", { className: "stamp-card p-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-lg text-primary", children: [
            "How fast can a plumber get to ",
            city.name,
            "?"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 300,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mt-2", children: [
            "From our Welland shop we typically reach ",
            city.name,
            " the same day for non-emergencies and within the hour for true emergencies. Call ",
            PHONE_DISPLAY,
            " to dispatch."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 303,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 299,
          columnNumber: 13
        }, void 0),
        service.faqs.map((f) => /* @__PURE__ */ jsxDEV("article", { className: "stamp-card p-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-lg text-primary", children: f.q }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 311,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mt-2", children: f.a }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 312,
            columnNumber: 17
          }, void 0)
        ] }, f.q, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 310,
          columnNumber: 15
        }, void 0))
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 288,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/ServiceCity.tsx",
      lineNumber: 281,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/ServiceCity.tsx",
      lineNumber: 280,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-deep text-primary-foreground py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container text-center max-w-2xl", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl md:text-4xl", children: [
        "Need ",
        service.title.toLowerCase(),
        " in ",
        city.name,
        " today?"
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 321,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "opacity-85 mt-3", children: "Same-day service. Honest pricing. Warrantied work." }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 324,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-3 mt-6", children: [
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, children: [
          /* @__PURE__ */ jsxDEV(Phone, {}, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 329,
            columnNumber: 44
          }, void 0),
          " ",
          PHONE_DISPLAY
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 329,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 328,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, size: "lg", className: "bg-card text-primary hover:bg-card/90", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contact", children: [
          "Get a Quote ",
          /* @__PURE__ */ jsxDEV(ArrowRight, {}, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 332,
            columnNumber: 47
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 332,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 331,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 327,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-6 text-sm opacity-80", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: `/services/${service.slug}`, className: "hover:underline inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsxDEV(Wrench, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 337,
            columnNumber: 15
          }, void 0),
          " All ",
          service.title.toLowerCase()
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 336,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "mx-3", children: "·" }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 339,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(Link, { to: `/service-areas/${city.slug}`, className: "hover:underline inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsxDEV(MapPin, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceCity.tsx",
            lineNumber: 341,
            columnNumber: 15
          }, void 0),
          " All services in ",
          city.name
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceCity.tsx",
          lineNumber: 340,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceCity.tsx",
        lineNumber: 335,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/ServiceCity.tsx",
      lineNumber: 320,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/ServiceCity.tsx",
      lineNumber: 319,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/ServiceCity.tsx",
    lineNumber: 113,
    columnNumber: 5
  }, void 0);
};
export {
  ServiceCityPage as default
};
