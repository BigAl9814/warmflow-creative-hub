import { jsxs, jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs("div", { className: "bg-gradient-hero", children: [
    /* @__PURE__ */ jsx(Seo, { ...seo }),
    /* @__PURE__ */ jsxs("section", { className: "container py-16 md:py-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-3xl text-accent", children: "Whoops" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-7xl md:text-8xl text-primary mt-2", children: "404" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-xl text-foreground/80", children: "That page sprung a leak — we couldn't find it." }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-foreground/70", children: "The link may be broken, or the page may have moved. Try one of the shortcuts below, or give us a call — we're available 24/7 for plumbing & heating emergencies in the Niagara Region." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3 justify-center", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: `tel:${PHONE_TEL}`, "aria-label": `Call Ottr Plumr at ${PHONE_DISPLAY}`, children: [
            /* @__PURE__ */ jsx(Phone, {}),
            " Call ",
            PHONE_DISPLAY
          ] }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "lg", children: /* @__PURE__ */ jsx("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: "Book Online" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", size: "lg", children: /* @__PURE__ */ jsxs(Link, { to: "/", children: [
            /* @__PURE__ */ jsx(Home, {}),
            " Home"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border-2 border-foreground/10 bg-card p-6 md:p-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "rounded-full bg-primary/10 p-2 text-primary", children: /* @__PURE__ */ jsx(Wrench, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-primary", children: "Popular services" })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: topServices.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/services/${s.slug}`,
              className: "group flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors",
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: s.title }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" })
              ]
            }
          ) }, s.slug)) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "link", className: "mt-3 px-3", children: /* @__PURE__ */ jsxs(Link, { to: "/services", children: [
            "See all services ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border-2 border-foreground/10 bg-card p-6 md:p-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "rounded-full bg-accent/15 p-2 text-accent", children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-primary", children: "Service areas" })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-2 gap-1.5", children: topCities.map((c) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: `/service-areas/${c.slug}`,
              className: "block rounded-xl px-3 py-2 text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors font-semibold",
              children: c.name
            }
          ) }, c.slug)) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "link", className: "mt-3 px-3", children: /* @__PURE__ */ jsxs(Link, { to: "/service-areas", children: [
            "All Niagara service areas ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 max-w-5xl mx-auto rounded-3xl bg-primary text-primary-foreground p-6 md:p-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl", children: "Still can't find what you need?" }),
          /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/80 mt-1", children: "Our team is here to help — by phone, email, or contact form." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "secondary", size: "lg", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
            /* @__PURE__ */ jsx(Mail, {}),
            " Contact us"
          ] }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "secondary", size: "lg", children: /* @__PURE__ */ jsxs(Link, { to: "/blog", children: [
            /* @__PURE__ */ jsx(BookOpen, {}),
            " Read the blog"
          ] }) })
        ] })
      ] }) })
    ] })
  ] });
};
export {
  NotFound as default
};
