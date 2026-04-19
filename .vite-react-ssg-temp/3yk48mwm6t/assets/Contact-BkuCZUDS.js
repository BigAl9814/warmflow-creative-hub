import { jsxDEV } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-hero py-16 md:py-24", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "container text-center max-w-2xl", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Get in touch" }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h1", { className: "font-display text-5xl md:text-6xl text-primary mt-1", children: "Let's get it fixed." }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 mt-5 text-lg", children: "Call, email, or send us a message — a real local technician answers, and we respond fast because plumbing problems don't wait." }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mt-4 text-base", children: "Most non-emergency calls are scheduled same-day or next-day. Emergencies (active leaks, no water, no heat, sewage backups) get priority dispatch around the clock. Quotes are always free, always in writing, always before any work begins." }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "water-band h-10 mt-12", "aria-hidden": "true" }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-16 md:py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "stamp-card p-7 md:p-10", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl text-primary mb-2", children: "Request a quote" }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/70 mb-6", children: "Tell us a bit about the job and we'll get right back to you." }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { id: JOBBER_CLIENTHUB_ID }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("noscript", { children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/70", children: [
          "Please enable JavaScript to load our request form, or email",
          " ",
          /* @__PURE__ */ jsxDEV("a", { href: `mailto:${EMAIL}`, className: "underline", children: EMAIL }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 95,
            columnNumber: 15
          }, void 0),
          "."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("aside", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-deep text-primary-foreground rounded-[var(--radius)] p-7 shadow-pop", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-primary-glow", children: "Need help now?" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-3xl mt-1", children: "Call 289-488-1007" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "opacity-85 mt-2 text-sm", children: "24/7 emergency service across Niagara." }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-2 mt-5", children: [
            /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, children: [
              /* @__PURE__ */ jsxDEV(Phone, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 108,
                columnNumber: 46
              }, void 0),
              " Call now"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 108,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 107,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(Button, { asChild: true, size: "lg", className: "bg-card text-primary hover:bg-card/90", children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsxDEV(CalendarCheck, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 112,
                columnNumber: 19
              }, void 0),
              " Book Online"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 111,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 110,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: JOBBER_CLIENT_HUB_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-4 inline-flex items-center gap-1.5 text-sm opacity-90 hover:opacity-100 hover:underline",
              children: [
                /* @__PURE__ */ jsxDEV(UserCircle2, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 122,
                  columnNumber: 15
                }, void 0),
                " Existing customer? Open Client Hub →"
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 116,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "stamp-card p-6 space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0", children: /* @__PURE__ */ jsxDEV(Phone, { className: "h-5 w-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 129,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 128,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "font-display text-primary", children: "Phone" }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 132,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("a", { href: "tel:+12894881007", className: "text-foreground/80 hover:underline", children: "289-488-1007" }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 133,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 131,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 127,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0", children: /* @__PURE__ */ jsxDEV(Mail, { className: "h-5 w-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 138,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 137,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "font-display text-primary", children: "Email" }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 141,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("a", { href: "mailto:info@plumr.ca", className: "text-foreground/80 hover:underline", children: "info@plumr.ca" }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 142,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 140,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 136,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0", children: /* @__PURE__ */ jsxDEV(MapPin, { className: "h-5 w-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 147,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 146,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "font-display text-primary", children: "Office" }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 150,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: GOOGLE_MAPS_URL,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-foreground/80 hover:underline block",
                  children: ADDRESS_LINE
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 151,
                  columnNumber: 17
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "text-foreground/60 text-xs mt-1", children: "Serving every city in the Niagara Region" }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 159,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 149,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 145,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0", children: /* @__PURE__ */ jsxDEV(Clock, { className: "h-5 w-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 164,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 163,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "font-display text-primary", children: "Hours" }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 167,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "text-foreground/80", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "font-semibold text-foreground", children: "24 / 7 Emergency Service" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 169,
                  columnNumber: 19
                }, void 0),
                "Regular hours: Mon–Fri, 8 AM – 4 PM",
                /* @__PURE__ */ jsxDEV("div", { className: "text-foreground/60 text-xs mt-1", children: "After-hours rates apply on evenings & weekends" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 171,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 168,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 166,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 162,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container pb-16 md:pb-20", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-8", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Find us" }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 182,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl md:text-4xl text-primary mt-1", children: "Visit our Welland office" }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 183,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mt-3", children: /* @__PURE__ */ jsxDEV("a", { href: GOOGLE_MAPS_URL, target: "_blank", rel: "noopener noreferrer", className: "hover:underline font-semibold", children: ADDRESS_LINE }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 186,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "rounded-[2rem] overflow-hidden border-4 border-foreground/10 shadow-pop", children: /* @__PURE__ */ jsxDEV(
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
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 193,
          columnNumber: 11
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 192,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 180,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Contact.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, void 0);
};
export {
  ContactPage as default
};
