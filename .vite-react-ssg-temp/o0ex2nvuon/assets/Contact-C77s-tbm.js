import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { Phone, CalendarCheck, UserCircle2, Mail, MapPin, Clock } from "lucide-react";
import { u as useSeo, E as EMAIL, B as Button, P as PHONE_TEL, J as JOBBER_BOOK_URL, c as JOBBER_CLIENT_HUB_URL, G as GOOGLE_MAPS_URL, A as ADDRESS_LINE, d as ADDRESS } from "../main.mjs";
import "vite-react-ssg";
import "react-router-dom";
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
const JOBBER_FORM_STYLESHEET = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
const JOBBER_FORM_SCRIPT = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
const JOBBER_CLIENTHUB_ID = "e4833ce1-922c-4bca-b73d-06aca55b449b-1453871";
const JOBBER_FORM_URL = "https://clienthub.getjobber.com/client_hubs/e4833ce1-922c-4bca-b73d-06aca55b449b/public/work_request/embedded_work_request_form?form_id=1453871";
const ContactPage = () => {
  const seo = {
    title: "Contact Ottr Plumr | 24/7 Niagara Plumber — Free Quote",
    description: "Book a Niagara plumber today — call 289-488-1007 or message us for fast, free quotes on plumbing, heating, drains, water heaters & emergency service. 187 King St, Welland, ON. 24/7 response.",
    canonicalPath: "/contact",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Ottr Plumr",
      url: "https://plumr.ca/contact",
      mainEntity: {
        "@type": "PlumbingService",
        name: "Ottr Plumr Plumbing & Heating",
        telephone: PHONE_TEL,
        email: EMAIL,
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.region,
          postalCode: ADDRESS.postalCode,
          addressCountry: ADDRESS.country
        }
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE_TEL,
        email: EMAIL,
        contactType: "customer service",
        areaServed: "CA-ON",
        availableLanguage: ["English"]
      }
    }
  };
  useSeo(seo);
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!document.querySelector(`link[href="${JOBBER_FORM_STYLESHEET}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = JOBBER_FORM_STYLESHEET;
      link.media = "screen";
      document.head.appendChild(link);
    }
    const script = document.createElement("script");
    script.src = JOBBER_FORM_SCRIPT;
    script.setAttribute("clienthub_id", JOBBER_CLIENTHUB_ID);
    script.setAttribute("form_url", JOBBER_FORM_URL);
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-gradient-hero py-16 md:py-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "container text-center max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "Get in touch" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-primary mt-1", children: "Let's get it fixed." }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mt-5 text-lg", children: "Call, email, or send us a message — a real local technician answers, and we respond fast because plumbing problems don't wait." }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/75 mt-4 text-base", children: "Most non-emergency calls are scheduled same-day or next-day. Emergencies (active leaks, no water, no heat, sewage backups) get priority dispatch around the clock. Quotes are always free, always in writing, always before any work begins." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "water-band h-10 mt-12", "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "container py-16 md:py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "stamp-card p-7 md:p-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-primary mb-2", children: "Request a quote" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/70 mb-6", children: "Tell us a bit about the job and we'll get right back to you." }),
        /* @__PURE__ */ jsx("div", { id: JOBBER_CLIENTHUB_ID }),
        /* @__PURE__ */ jsx("noscript", { children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-foreground/70", children: [
          "Please enable JavaScript to load our request form, or email",
          " ",
          /* @__PURE__ */ jsx("a", { href: `mailto:${EMAIL}`, className: "underline", children: EMAIL }),
          "."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-deep text-primary-foreground rounded-[var(--radius)] p-7 shadow-pop", children: [
          /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-primary-glow", children: "Need help now?" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl mt-1", children: "Call 289-488-1007" }),
          /* @__PURE__ */ jsx("p", { className: "opacity-85 mt-2 text-sm", children: "24/7 emergency service across Niagara." }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-2 mt-5", children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: `tel:${PHONE_TEL}`, children: [
              /* @__PURE__ */ jsx(Phone, {}),
              " Call now"
            ] }) }),
            /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-card text-primary hover:bg-card/90", children: /* @__PURE__ */ jsxs("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsx(CalendarCheck, {}),
              " Book Online"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: JOBBER_CLIENT_HUB_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-4 inline-flex items-center gap-1.5 text-sm opacity-90 hover:opacity-100 hover:underline",
              children: [
                /* @__PURE__ */ jsx(UserCircle2, { className: "h-4 w-4" }),
                " Existing customer? Open Client Hub →"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "stamp-card p-6 space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0", children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-display text-primary", children: "Phone" }),
              /* @__PURE__ */ jsx("a", { href: "tel:+12894881007", className: "text-foreground/80 hover:underline", children: "289-488-1007" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-display text-primary", children: "Email" }),
              /* @__PURE__ */ jsx("a", { href: "mailto:info@plumr.ca", className: "text-foreground/80 hover:underline", children: "info@plumr.ca" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0", children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-display text-primary", children: "Office" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: GOOGLE_MAPS_URL,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-foreground/80 hover:underline block",
                  children: ADDRESS_LINE
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-foreground/60 text-xs mt-1", children: "Serving every city in the Niagara Region" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0", children: /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-display text-primary", children: "Hours" }),
              /* @__PURE__ */ jsxs("div", { className: "text-foreground/80", children: [
                /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground", children: "24 / 7 Emergency Service" }),
                "Regular hours: Mon–Fri, 8 AM – 4 PM",
                /* @__PURE__ */ jsx("div", { className: "text-foreground/60 text-xs mt-1", children: "After-hours rates apply on evenings & weekends" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "container pb-16 md:pb-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-8", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "Find us" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl text-primary mt-1", children: "Visit our Welland office" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/75 mt-3", children: /* @__PURE__ */ jsx("a", { href: GOOGLE_MAPS_URL, target: "_blank", rel: "noopener noreferrer", className: "hover:underline font-semibold", children: ADDRESS_LINE }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "rounded-[2rem] overflow-hidden border-4 border-foreground/10 shadow-pop", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          title: "Map showing Ottr Plumr at 187 King St, Welland, ON L3B 3J4",
          src: "https://www.google.com/maps?q=187+King+St,+Welland,+ON+L3B+3J4&output=embed",
          width: "100%",
          height: "450",
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade",
          className: "w-full h-[360px] md:h-[450px] block",
          allowFullScreen: true
        }
      ) })
    ] })
  ] });
};
export {
  ContactPage as default
};
