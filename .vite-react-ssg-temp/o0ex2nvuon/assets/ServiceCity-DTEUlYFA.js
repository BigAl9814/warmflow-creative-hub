import { jsx, jsxs } from "react/jsx-runtime";
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
  if (!service || !city) return /* @__PURE__ */ jsx(Navigate, { to: "/services", replace: true });
  const Icon = service.icon;
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const otherCities = CITIES.filter((c) => c.slug !== city.slug).slice(0, 6);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Seo, { ...seo }),
    /* @__PURE__ */ jsxs("section", { className: "bg-gradient-hero py-16 md:py-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "container max-w-4xl text-center", children: [
        /* @__PURE__ */ jsxs("nav", { className: "text-sm text-foreground/70 flex flex-wrap justify-center items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Link, { to: "/services", className: "hover:underline", children: "Services" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx(Link, { to: `/services/${service.slug}`, className: "hover:underline", children: service.title }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary", children: city.name })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-16 w-16 rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-soft mx-auto mt-6", children: /* @__PURE__ */ jsx(Icon, { className: "h-8 w-8" }) }),
        /* @__PURE__ */ jsxs("p", { className: "font-script text-2xl text-accent mt-4", children: [
          service.title,
          " in"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl md:text-6xl text-primary mt-1", children: [
          city.name,
          ", Ontario"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-foreground/80 mt-5 text-lg", children: [
          "Local ",
          service.title.toLowerCase(),
          " for ",
          city.name,
          " homes and businesses — same-day service, honest pricing, and workmanship warrantied in writing."
        ] }),
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
        /* @__PURE__ */ jsxs("p", { className: "font-script text-2xl text-accent", children: [
          "Trusted ",
          service.title.toLowerCase(),
          " in ",
          city.name
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl text-primary", children: [
          "Why ",
          city.name,
          " chooses Ottr Plumr"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 text-lg leading-relaxed", children: city.blurb }),
        service.longDesc.map((p, i) => /* @__PURE__ */ jsx("p", { className: "text-foreground/80 text-lg leading-relaxed", children: p }, i)),
        city.neighbourhoods && city.neighbourhoods.length > 0 && /* @__PURE__ */ jsxs("p", { className: "text-foreground/80 text-lg leading-relaxed", children: [
          "We service every corner of ",
          city.name,
          " — including ",
          city.neighbourhoods.slice(0, -1).join(", "),
          city.neighbourhoods.length > 1 ? ", and " : "",
          city.neighbourhoods[city.neighbourhoods.length - 1],
          " — usually same-day for ",
          service.title.toLowerCase(),
          " calls."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "stamp-card p-7 h-fit", children: [
        /* @__PURE__ */ jsxs("h3", { className: "font-display text-xl text-primary mb-4", children: [
          service.title,
          " includes"
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: service.points.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-accent mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsx("span", { children: p })
        ] }, p)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-6 border-t border-foreground/10", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider font-semibold text-foreground/60 mb-1", children: "Serving" }),
          /* @__PURE__ */ jsxs("p", { className: "font-display text-lg text-primary inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-accent" }),
            " ",
            city.name,
            ", ON"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/40 py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "What's included" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl text-primary mt-1", children: [
          service.title,
          " specialties for ",
          city.name
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-5", children: service.whatWeDo.map((w) => /* @__PURE__ */ jsxs("article", { className: "stamp-card p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-primary mb-2", children: w.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/75", children: w.desc })
      ] }, w.title)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-script text-2xl text-accent", children: [
          "More in ",
          city.name
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl text-primary mt-1", children: [
          "Other services we offer in ",
          city.name
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: otherServices.map((s) => {
        const OIcon = s.icon;
        return /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/services/${s.slug}/${city.slug}`,
            className: "stamp-card p-6 hover:shadow-soft transition-shadow group",
            children: [
              /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-4 shadow-soft", children: /* @__PURE__ */ jsx(OIcon, { className: "h-6 w-6" }) }),
              /* @__PURE__ */ jsxs("h3", { className: "font-display text-xl text-primary mb-1 group-hover:underline", children: [
                s.title,
                " in ",
                city.name
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/75", children: s.shortDesc })
            ]
          },
          s.slug
        );
      }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/40 py-16", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-script text-2xl text-accent", children: [
          service.title,
          " elsewhere in Niagara"
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl text-primary mt-1", children: [
          "We also offer ",
          service.title.toLowerCase(),
          " in"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2", children: otherCities.map((c) => /* @__PURE__ */ jsxs(
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
        c.slug
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "FAQs" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl text-primary mt-1", children: [
          service.title,
          " in ",
          city.name,
          " — common questions"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("article", { className: "stamp-card p-6", children: [
          /* @__PURE__ */ jsxs("h3", { className: "font-display text-lg text-primary", children: [
            "Do you offer ",
            service.title.toLowerCase(),
            " in ",
            city.name,
            "?"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-foreground/75 mt-2", children: [
            "Yes — Ottr Plumr provides ",
            service.title.toLowerCase(),
            " throughout",
            " ",
            city.name,
            " and the surrounding Niagara Region, with same-day appointments and 24/7 emergency response."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "stamp-card p-6", children: [
          /* @__PURE__ */ jsxs("h3", { className: "font-display text-lg text-primary", children: [
            "How fast can a plumber get to ",
            city.name,
            "?"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-foreground/75 mt-2", children: [
            "From our Welland shop we typically reach ",
            city.name,
            " the same day for non-emergencies and within the hour for true emergencies. Call ",
            PHONE_DISPLAY,
            " to dispatch."
          ] })
        ] }),
        service.faqs.map((f) => /* @__PURE__ */ jsxs("article", { className: "stamp-card p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-primary", children: f.q }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/75 mt-2", children: f.a })
        ] }, f.q))
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-deep text-primary-foreground py-16", children: /* @__PURE__ */ jsxs("div", { className: "container text-center max-w-2xl", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl", children: [
        "Need ",
        service.title.toLowerCase(),
        " in ",
        city.name,
        " today?"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "opacity-85 mt-3", children: "Same-day service. Honest pricing. Warrantied work." }),
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
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 text-sm opacity-80", children: [
        /* @__PURE__ */ jsxs(Link, { to: `/services/${service.slug}`, className: "hover:underline inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Wrench, { className: "h-3.5 w-3.5" }),
          " All ",
          service.title.toLowerCase()
        ] }),
        /* @__PURE__ */ jsx("span", { className: "mx-3", children: "·" }),
        /* @__PURE__ */ jsxs(Link, { to: `/service-areas/${city.slug}`, className: "hover:underline inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }),
          " All services in ",
          city.name
        ] })
      ] })
    ] }) })
  ] });
};
export {
  ServiceCityPage as default
};
