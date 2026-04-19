import { jsxDEV } from "react/jsx-dev-runtime";
import { useParams, Navigate, Link } from "react-router-dom";
import { Phone, CalendarCheck, Lightbulb, AlertTriangle, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { C as CITIES, P as PHONE_TEL, E as EMAIL, R as REVIEWS, u as useSeo, a as Seo, B as Button, b as PHONE_DISPLAY, J as JOBBER_BOOK_URL, S as SERVICES, F as FAQ } from "../main.mjs";
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
const ServiceAreaPage = () => {
  const { slug } = useParams();
  const city = CITIES.find((c) => c.slug === slug);
  const seo = {
    title: city ? `${city.name} Plumber & Heating | 24/7 Local | Ottr Plumr` : "Service Area | Ottr Plumr",
    description: city ? `Looking for a plumber in ${city.name}? Ottr Plumr handles drain cleaning, water heater install, sump pumps, furnaces & 24/7 emergency plumbing. Same-day, licensed & local. Call 289-488-1007.` : "Niagara plumbing & heating service areas.",
    canonicalPath: city ? `/service-areas/${city.slug}` : "/service-areas",
    noIndex: !city,
    jsonLd: city ? [
      {
        "@context": "https://schema.org",
        "@type": "PlumbingService",
        name: `Ottr Plumr — ${city.name}`,
        telephone: PHONE_TEL,
        email: EMAIL,
        url: `https://plumr.ca/service-areas/${city.slug}`,
        areaServed: { "@type": "City", name: city.name, containedInPlace: "Niagara Region, Ontario, Canada" },
        address: {
          "@type": "PostalAddress",
          addressLocality: city.name,
          addressRegion: "ON",
          addressCountry: "CA"
        },
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
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://plumr.ca/" },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://plumr.ca/service-areas" },
          { "@type": "ListItem", position: 3, name: city.name, item: `https://plumr.ca/service-areas/${city.slug}` }
        ]
      }
    ] : void 0
  };
  useSeo(seo);
  if (!city) return /* @__PURE__ */ jsxDEV(Navigate, { to: "/service-areas", replace: true }, void 0, false, {
    fileName: "/dev-server/src/pages/ServiceArea.tsx",
    lineNumber: 67,
    columnNumber: 21
  }, void 0);
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV(Seo, { ...seo }, void 0, false, {
      fileName: "/dev-server/src/pages/ServiceArea.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-hero py-16 md:py-24", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "container max-w-4xl text-center", children: [
        /* @__PURE__ */ jsxDEV("nav", { "aria-label": "Breadcrumb", className: "text-sm text-foreground/70 flex flex-wrap justify-center items-center gap-1.5", children: [
          /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:underline", children: "Home" }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { children: "/" }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(Link, { to: "/service-areas", className: "hover:underline", children: "Service Areas" }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { children: "/" }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-primary", children: city.name }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent mt-4", children: "Local service in" }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h1", { className: "font-display text-5xl md:text-6xl text-primary mt-1", children: [
          city.name,
          " plumbing & heating"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 mt-5 text-lg", children: city.blurb }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-3 mt-7", children: [
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, children: [
            /* @__PURE__ */ jsxDEV(Phone, {}, void 0, false, {
              fileName: "/dev-server/src/pages/ServiceArea.tsx",
              lineNumber: 89,
              columnNumber: 44
            }, void 0),
            " Call ",
            PHONE_DISPLAY
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "deep", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsxDEV(CalendarCheck, {}, void 0, false, {
              fileName: "/dev-server/src/pages/ServiceArea.tsx",
              lineNumber: 93,
              columnNumber: 17
            }, void 0),
            " Book Online"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 91,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceArea.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "water-band h-10 mt-12", "aria-hidden": "true" }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceArea.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/ServiceArea.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, void 0),
    (city.longDesc || city.commonIssues || city.localNotes) && /* @__PURE__ */ jsxDEV("section", { className: "container py-16 md:py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2 space-y-5", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: [
          "About ",
          city.name
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 106,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl md:text-4xl text-primary", children: [
          "Plumbing & heating in ",
          city.name
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, void 0),
        city.longDesc && /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 text-lg leading-relaxed", children: city.longDesc }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 111,
          columnNumber: 17
        }, void 0),
        city.localNotes && /* @__PURE__ */ jsxDEV("div", { className: "stamp-card p-5 flex items-start gap-3 bg-water/30", children: [
          /* @__PURE__ */ jsxDEV(Lightbulb, { className: "h-5 w-5 text-accent shrink-0 mt-0.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 115,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/85", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-primary", children: "Local tip:" }, void 0, false, {
              fileName: "/dev-server/src/pages/ServiceArea.tsx",
              lineNumber: 117,
              columnNumber: 21
            }, void 0),
            " ",
            city.localNotes
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 116,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 114,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceArea.tsx",
        lineNumber: 105,
        columnNumber: 13
      }, void 0),
      city.commonIssues && city.commonIssues.length > 0 && /* @__PURE__ */ jsxDEV("aside", { className: "stamp-card p-7 h-fit", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxDEV(AlertTriangle, { className: "h-5 w-5 text-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 125,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-xl text-primary", children: [
            "What we see in ",
            city.name
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 126,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 124,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2.5", children: city.commonIssues.map((issue) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-4 w-4 text-accent mt-0.5 shrink-0" }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 131,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-foreground/80", children: issue }, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 132,
            columnNumber: 23
          }, void 0)
        ] }, issue, true, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 130,
          columnNumber: 21
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 128,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceArea.tsx",
        lineNumber: 123,
        columnNumber: 15
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/ServiceArea.tsx",
      lineNumber: 104,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/ServiceArea.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-16 md:py-20", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: [
          "What we offer in ",
          city.name
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl md:text-5xl text-primary mt-1", children: "Full-service, every service" }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 145,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mt-4", children: "One trusted local crew for every plumbing and heating need — residential or commercial." }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceArea.tsx",
        lineNumber: 143,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: SERVICES.map((s) => {
        const SIcon = s.icon;
        return /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: `/services/${s.slug}/${city.slug}`,
            className: "stamp-card p-6 group hover:shadow-soft transition-shadow",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-4 shadow-soft group-hover:bg-accent transition-colors", children: /* @__PURE__ */ jsxDEV(SIcon, { className: "h-6 w-6" }, void 0, false, {
                fileName: "/dev-server/src/pages/ServiceArea.tsx",
                lineNumber: 160,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/ServiceArea.tsx",
                lineNumber: 159,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-xl text-primary mb-1 group-hover:underline", children: [
                s.title,
                " in ",
                city.name
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/ServiceArea.tsx",
                lineNumber: 162,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/75", children: s.shortDesc }, void 0, false, {
                fileName: "/dev-server/src/pages/ServiceArea.tsx",
                lineNumber: 165,
                columnNumber: 17
              }, void 0)
            ]
          },
          s.slug,
          true,
          {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 154,
            columnNumber: 15
          },
          void 0
        );
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceArea.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/ServiceArea.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, void 0),
    city.neighbourhoods && city.neighbourhoods.length > 0 && /* @__PURE__ */ jsxDEV("section", { className: "container pb-8", children: /* @__PURE__ */ jsxDEV("div", { className: "stamp-card p-8 md:p-10", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Neighbourhoods we serve" }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceArea.tsx",
        lineNumber: 175,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl text-primary mt-1 mb-5", children: [
        "Across ",
        city.name
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceArea.tsx",
        lineNumber: 176,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2", children: city.neighbourhoods.map((n) => /* @__PURE__ */ jsxDEV(
        "span",
        {
          className: "px-4 py-2 rounded-full bg-secondary text-sm font-semibold inline-flex items-center gap-1.5",
          children: [
            /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-3.5 w-3.5 text-accent" }, void 0, false, {
              fileName: "/dev-server/src/pages/ServiceArea.tsx",
              lineNumber: 183,
              columnNumber: 19
            }, void 0),
            " ",
            n
          ]
        },
        n,
        true,
        {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 179,
          columnNumber: 17
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceArea.tsx",
        lineNumber: 177,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/ServiceArea.tsx",
      lineNumber: 174,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/ServiceArea.tsx",
      lineNumber: 173,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-16", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-8", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Nearby cities" }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 194,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl text-primary mt-1", children: "We also serve these Niagara communities" }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 195,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceArea.tsx",
        lineNumber: 193,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-2", children: CITIES.filter((c) => c.slug !== city.slug).map((c) => /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: `/service-areas/${c.slug}`,
          className: "px-4 py-2 rounded-full bg-card border-2 border-foreground/10 text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors inline-flex items-center gap-1.5",
          children: [
            /* @__PURE__ */ jsxDEV(MapPin, { className: "h-3.5 w-3.5 text-accent" }, void 0, false, {
              fileName: "/dev-server/src/pages/ServiceArea.tsx",
              lineNumber: 206,
              columnNumber: 15
            }, void 0),
            "Plumbing in ",
            c.name
          ]
        },
        c.slug,
        true,
        {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 201,
          columnNumber: 13
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceArea.tsx",
        lineNumber: 199,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/ServiceArea.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-deep text-primary-foreground py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container text-center max-w-2xl", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl md:text-4xl", children: [
        "Need a ",
        city.name,
        " plumber today?"
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceArea.tsx",
        lineNumber: 215,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "opacity-85 mt-3", children: "24/7 emergency service. Honest pricing. Warrantied work." }, void 0, false, {
        fileName: "/dev-server/src/pages/ServiceArea.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-3 mt-6", children: [
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, children: [
          /* @__PURE__ */ jsxDEV(Phone, {}, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 219,
            columnNumber: 44
          }, void 0),
          " ",
          PHONE_DISPLAY
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 219,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 218,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, size: "lg", className: "bg-card text-primary hover:bg-card/90", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contact", children: [
          "Get a Quote ",
          /* @__PURE__ */ jsxDEV(ArrowRight, {}, void 0, false, {
            fileName: "/dev-server/src/pages/ServiceArea.tsx",
            lineNumber: 222,
            columnNumber: 47
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 222,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/ServiceArea.tsx",
          lineNumber: 221,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/ServiceArea.tsx",
        lineNumber: 217,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/ServiceArea.tsx",
      lineNumber: 214,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/ServiceArea.tsx",
      lineNumber: 213,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(FAQ, {}, void 0, false, {
      fileName: "/dev-server/src/pages/ServiceArea.tsx",
      lineNumber: 228,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/ServiceArea.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, void 0);
};
export {
  ServiceAreaPage as default
};
