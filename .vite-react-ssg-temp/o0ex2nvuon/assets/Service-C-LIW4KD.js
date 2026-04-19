import { jsx, jsxs } from "react/jsx-runtime";
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
  if (!service) return /* @__PURE__ */ jsx(Navigate, { to: "/services", replace: true });
  const Icon = service.icon;
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Seo, { ...seo }),
    /* @__PURE__ */ jsxs("section", { className: "bg-gradient-hero py-16 md:py-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "container max-w-4xl text-center", children: [
        /* @__PURE__ */ jsxs("nav", { "aria-label": "Breadcrumb", className: "text-sm text-foreground/70 flex flex-wrap justify-center items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:underline", children: "Home" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx(Link, { to: "/services", className: "hover:underline", children: "Services" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary", children: service.title })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-16 w-16 rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-soft mx-auto mt-6", children: /* @__PURE__ */ jsx(Icon, { className: "h-8 w-8" }) }),
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent mt-4", children: service.title }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-6xl text-primary mt-1", children: service.hero }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mt-5 text-lg", children: service.shortDesc }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-3 mt-7", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: `tel:${PHONE_TEL}`, children: [
            /* @__PURE__ */ jsx(Phone, {}),
            " Call ",
            PHONE_DISPLAY
          ] }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "deep", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsx(CalendarCheck, {}),
            " Book Online"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "water-band h-10 mt-12", "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-5", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "About this service" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl text-primary", children: [
          service.title,
          " in the Niagara Region"
        ] }),
        service.longDesc.map((p, i) => /* @__PURE__ */ jsx("p", { className: "text-foreground/80 text-lg leading-relaxed", children: p }, i))
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "stamp-card p-7 h-fit", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-primary mb-4", children: "What's included" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: service.points.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-accent mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsx("span", { children: p })
        ] }, p)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/40 py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "What we do" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl text-primary mt-1", children: [
          "Specialties under ",
          service.title
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-5", children: service.whatWeDo.map((w) => /* @__PURE__ */ jsxs("article", { className: "stamp-card p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-primary mb-2", children: w.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/75", children: w.desc })
      ] }, w.title)) })
    ] }) }),
    service.prosCons && /* @__PURE__ */ jsxs("section", { className: "container py-16 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "Help me choose" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl text-primary mt-1", children: service.prosCons.title }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/75 mt-4", children: service.prosCons.intro })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: service.prosCons.items.map((item) => /* @__PURE__ */ jsxs("article", { className: "stamp-card p-7 flex flex-col", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-primary", children: item.name }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-foreground/70 mt-1 mb-5", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-accent", children: "Best for:" }),
          " ",
          item.bestFor
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-5 flex-1", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2.5", children: [
              /* @__PURE__ */ jsx(ThumbsUp, { className: "h-4 w-4 text-accent" }),
              /* @__PURE__ */ jsx("span", { className: "font-display text-sm uppercase tracking-wide text-primary", children: "Pros" })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: item.pros.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm text-foreground/80", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-accent mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: p })
            ] }, p)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2.5", children: [
              /* @__PURE__ */ jsx(ThumbsDown, { className: "h-4 w-4 text-foreground/60" }),
              /* @__PURE__ */ jsx("span", { className: "font-display text-sm uppercase tracking-wide text-primary", children: "Cons" })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: item.cons.map((c) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm text-foreground/80", children: [
              /* @__PURE__ */ jsx("span", { className: "mt-1 h-1.5 w-1.5 rounded-full bg-foreground/40 shrink-0", "aria-hidden": "true" }),
              /* @__PURE__ */ jsx("span", { children: c })
            ] }, c)) })
          ] })
        ] })
      ] }, item.name)) }),
      /* @__PURE__ */ jsxs("p", { className: "text-center text-sm text-foreground/70 mt-8 max-w-xl mx-auto", children: [
        "Still not sure? Call ",
        /* @__PURE__ */ jsx("a", { href: `tel:${PHONE_TEL}`, className: "font-semibold text-primary hover:underline", children: PHONE_DISPLAY }),
        " — we'll walk through your specific home, budget, and usage in about ten minutes. No pressure, no commitment."
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "Why Ottr Plumr" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl text-primary mt-1", children: "Local. Honest. Warrantied." }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/75 mt-4", children: "We earn the call back by doing the job right the first time — and being straight with you about what your home or business actually needs." })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "grid gap-3", children: service.whyUs.map((w) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 stamp-card p-4", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-accent mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: w })
      ] }, w)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/40 py-16", children: /* @__PURE__ */ jsxs("div", { className: "container max-w-3xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "Common questions" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl text-primary mt-1", children: [
          service.title,
          " FAQs"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: service.faqs.map((f) => /* @__PURE__ */ jsxs("article", { className: "stamp-card p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-primary", children: f.q }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/75 mt-2", children: f.a })
      ] }, f.q)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "Where we work" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl text-primary mt-1", children: [
          service.title,
          " across the Niagara Region"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-foreground/75 mt-3", children: [
          "Local ",
          service.title.toLowerCase(),
          " in every city — pick yours."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2", children: CITIES.map((c) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/services/${service.slug}/${c.slug}`,
          className: "px-4 py-2 rounded-full bg-card border-2 border-foreground/10 text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors inline-flex items-center gap-1.5",
          children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 text-accent" }),
            service.title,
            " in ",
            c.name
          ]
        },
        c.slug
      )) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "container py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "Explore more" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-primary mt-1", children: "Other services" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: others.map((s) => {
        const OIcon = s.icon;
        return /* @__PURE__ */ jsxs(Link, { to: `/services/${s.slug}`, className: "stamp-card p-6 hover:shadow-soft transition-shadow group", children: [
          /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-4 shadow-soft", children: /* @__PURE__ */ jsx(OIcon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-primary mb-1 group-hover:underline", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/75", children: s.shortDesc })
        ] }, s.slug);
      }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-deep text-primary-foreground py-16", children: /* @__PURE__ */ jsxs("div", { className: "container text-center max-w-2xl", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl", children: [
        "Ready to book ",
        service.title.toLowerCase(),
        "?"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "opacity-85 mt-3", children: "Same-day service available across the Niagara Region." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-3 mt-6", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: `tel:${PHONE_TEL}`, children: [
          /* @__PURE__ */ jsx(Phone, {}),
          " ",
          PHONE_DISPLAY
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
  ServicePage as default
};
