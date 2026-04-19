import { jsxDEV } from "react/jsx-dev-runtime";
import { useLocation, Link } from "react-router-dom";
import { Phone, Home, Wrench, ArrowRight, MapPin, Mail, BookOpen } from "lucide-react";
import { u as useSeo, a as Seo, B as Button, P as PHONE_TEL, b as PHONE_DISPLAY, J as JOBBER_BOOK_URL, S as SERVICES, C as CITIES } from "../main.mjs";
import { useEffect } from "react";
import "vite-react-ssg";
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
const NotFound = () => {
  const location = useLocation();
  const seo = {
    title: "Page Not Found | Ottr Plumr Plumbing & Heating",
    description: "We couldn't find that page. Browse our plumbing & heating services, Niagara service areas, or call Ottr Plumr at 289-488-1007 for 24/7 help.",
    noIndex: true
  };
  useSeo(seo);
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  const topServices = SERVICES.slice(0, 6);
  const topCities = CITIES.slice(0, 8);
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-hero", children: [
    /* @__PURE__ */ jsxDEV(Seo, { ...seo }, void 0, false, {
      fileName: "/dev-server/src/pages/NotFound.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-16 md:py-24", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-3xl text-accent", children: "Whoops" }, void 0, false, {
          fileName: "/dev-server/src/pages/NotFound.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h1", { className: "font-display text-7xl md:text-8xl text-primary mt-2", children: "404" }, void 0, false, {
          fileName: "/dev-server/src/pages/NotFound.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-xl text-foreground/80", children: "That page sprung a leak — we couldn't find it." }, void 0, false, {
          fileName: "/dev-server/src/pages/NotFound.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-3 text-foreground/70", children: "The link may be broken, or the page may have moved. Try one of the shortcuts below, or give us a call — we're available 24/7 for plumbing & heating emergencies in the Niagara Region." }, void 0, false, {
          fileName: "/dev-server/src/pages/NotFound.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex flex-wrap gap-3 justify-center", children: [
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, "aria-label": `Call Ottr Plumr at ${PHONE_DISPLAY}`, children: [
            /* @__PURE__ */ jsxDEV(Phone, {}, void 0, false, {
              fileName: "/dev-server/src/pages/NotFound.tsx",
              lineNumber: 48,
              columnNumber: 17
            }, void 0),
            " Call ",
            PHONE_DISPLAY
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "outline", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: "Book Online" }, void 0, false, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 51,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "ghost", size: "lg", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", children: [
            /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
              fileName: "/dev-server/src/pages/NotFound.tsx",
              lineNumber: 58,
              columnNumber: 17
            }, void 0),
            " Home"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 57,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/NotFound.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "rounded-3xl border-2 border-foreground/10 bg-card p-6 md:p-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "rounded-full bg-primary/10 p-2 text-primary", children: /* @__PURE__ */ jsxDEV(Wrench, { className: "h-5 w-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/NotFound.tsx",
              lineNumber: 69,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/NotFound.tsx",
              lineNumber: 68,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-2xl text-primary", children: "Popular services" }, void 0, false, {
              fileName: "/dev-server/src/pages/NotFound.tsx",
              lineNumber: 71,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: topServices.map((s) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: `/services/${s.slug}`,
              className: "group flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors",
              children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold", children: s.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/NotFound.tsx",
                  lineNumber: 80,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" }, void 0, false, {
                  fileName: "/dev-server/src/pages/NotFound.tsx",
                  lineNumber: 81,
                  columnNumber: 21
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/NotFound.tsx",
              lineNumber: 76,
              columnNumber: 19
            },
            void 0
          ) }, s.slug, false, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "link", className: "mt-3 px-3", children: /* @__PURE__ */ jsxDEV(Link, { to: "/services", children: [
            "See all services ",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/NotFound.tsx",
              lineNumber: 87,
              columnNumber: 53
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 86,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/NotFound.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "rounded-3xl border-2 border-foreground/10 bg-card p-6 md:p-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "rounded-full bg-accent/15 p-2 text-accent", children: /* @__PURE__ */ jsxDEV(MapPin, { className: "h-5 w-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/NotFound.tsx",
              lineNumber: 95,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/NotFound.tsx",
              lineNumber: 94,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-2xl text-primary", children: "Service areas" }, void 0, false, {
              fileName: "/dev-server/src/pages/NotFound.tsx",
              lineNumber: 97,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 93,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "grid grid-cols-2 gap-1.5", children: topCities.map((c) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: `/service-areas/${c.slug}`,
              className: "block rounded-xl px-3 py-2 text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors font-semibold",
              children: c.name
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/NotFound.tsx",
              lineNumber: 102,
              columnNumber: 19
            },
            void 0
          ) }, c.slug, false, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 101,
            columnNumber: 17
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 99,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "link", className: "mt-3 px-3", children: /* @__PURE__ */ jsxDEV(Link, { to: "/service-areas", children: [
            "All Niagara service areas ",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/NotFound.tsx",
              lineNumber: 112,
              columnNumber: 67
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 111,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/NotFound.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-10 max-w-5xl mx-auto rounded-3xl bg-primary text-primary-foreground p-6 md:p-8", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-2xl", children: "Still can't find what you need?" }, void 0, false, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary-foreground/80 mt-1", children: "Our team is here to help — by phone, email, or contact form." }, void 0, false, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/NotFound.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "secondary", size: "lg", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contact", children: [
            /* @__PURE__ */ jsxDEV(Mail, {}, void 0, false, {
              fileName: "/dev-server/src/pages/NotFound.tsx",
              lineNumber: 129,
              columnNumber: 19
            }, void 0),
            " Contact us"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 128,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "secondary", size: "lg", children: /* @__PURE__ */ jsxDEV(Link, { to: "/blog", children: [
            /* @__PURE__ */ jsxDEV(BookOpen, {}, void 0, false, {
              fileName: "/dev-server/src/pages/NotFound.tsx",
              lineNumber: 134,
              columnNumber: 19
            }, void 0),
            " Read the blog"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 133,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 132,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/NotFound.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/NotFound.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/NotFound.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, void 0);
};
export {
  NotFound as default
};
