import { jsxDEV } from "react/jsx-dev-runtime";
import { Link } from "react-router-dom";
import { Phone, CalendarCheck, UserCircle2, Heart, ShieldCheck, Award, MapPin } from "lucide-react";
import { u as useSeo, a as Seo, B as Button, P as PHONE_TEL, b as PHONE_DISPLAY, J as JOBBER_BOOK_URL, c as JOBBER_CLIENT_HUB_URL } from "../main.mjs";
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
const pipes = "/assets/pipes-pattern-Flu-lo__.webp";
const values = [
  { icon: Heart, title: "Otterly Reliable", desc: "We show up when we say we will, and finish what we start." },
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully qualified pros — every job done to code." },
  { icon: Award, title: "Quality Workmanship", desc: "Done right the first time. We stand behind every install." },
  { icon: MapPin, title: "Local to Niagara", desc: "Born here, working here. Your neighbours, your plumbers." }
];
const AboutPage = () => {
  const seo = {
    title: "About Ottr Plumr | Welland & Niagara Plumbers — Licensed",
    description: "Meet Ottr Plumr — your local Welland-based plumber & HVAC team serving the Niagara Region. Licensed, insured, family-friendly, and built on honest work, quality installs & 24/7 emergency response.",
    canonicalPath: "/about"
  };
  useSeo(seo);
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV(Seo, { ...seo }, void 0, false, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-hero py-16 md:py-24", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "container grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "About Ottr Plumr" }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "font-display text-5xl md:text-6xl text-primary mt-1 leading-[0.95]", children: [
            "Local plumbers.",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 32,
              columnNumber: 30
            }, void 0),
            "Big-shop quality."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 mt-5 text-lg max-w-xl", children: [
            "Ottr Plumr Plumbing & Heating — a division of ",
            /* @__PURE__ */ jsxDEV("strong", { children: "Canalside Mechanical LTD" }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 35,
              columnNumber: 65
            }, void 0),
            " — was built on a simple idea: Niagara families and businesses deserve a plumbing & heating company that's professional from the first phone call to the final clean-up, and honest about what your home actually needs."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 34,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 mt-4 max-w-xl", children: "We bring the technical chops of a big firm with the honesty and care of a neighbour. Whether it's a 2 AM burst pipe in February, a planned bathroom renovation, a tankless water heater conversion, or annual furnace service before winter — we treat every job like it's our own home." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 39,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 mt-4 max-w-xl", children: "Licensed gas technicians on staff. Fully insured for residential and commercial work. Permits pulled on every install. Workmanship warrantied in writing. That's the bar." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-3 mt-7", children: [
            /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, children: [
              /* @__PURE__ */ jsxDEV(Phone, {}, void 0, false, {
                fileName: "/dev-server/src/pages/About.tsx",
                lineNumber: 50,
                columnNumber: 46
              }, void 0),
              " ",
              PHONE_DISPLAY
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 50,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 49,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "deep", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsxDEV(CalendarCheck, {}, void 0, false, {
                fileName: "/dev-server/src/pages/About.tsx",
                lineNumber: 54,
                columnNumber: 19
              }, void 0),
              " Book Online"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 53,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 52,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 48,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "rounded-[2rem] overflow-hidden border-4 border-foreground/10 shadow-pop", children: /* @__PURE__ */ jsxDEV("img", { src: pipes, alt: "Plumbing pipes illustration — Ottr Plumr serving the Niagara Region", loading: "lazy", decoding: "async", width: 1024, height: 1024, className: "w-full h-auto" }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 61,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-2xl px-5 py-4 shadow-stamp font-display text-xl rotate-[-4deg]", children: "Niagara strong" }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "water-band h-10 mt-16", "aria-hidden": "true" }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-[1fr_1.4fr] gap-10 items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "relative max-w-sm mx-auto lg:mx-0 w-full", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "aspect-[4/5] rounded-[2rem] border-4 border-foreground/10 shadow-pop bg-gradient-to-br from-secondary to-muted grid place-items-center text-foreground/40", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center px-6", children: [
          /* @__PURE__ */ jsxDEV(UserCircle2, { className: "h-20 w-20 mx-auto opacity-50" }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl mt-3 text-primary/70", children: "Photo of Alex" }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs mt-1", children: "Upload a photo to replace this placeholder" }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-stamp font-display rotate-[6deg]", children: "Owner" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Meet the team" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl md:text-5xl text-primary mt-1", children: "Hi, I'm Alex." }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 mt-5 text-lg", children: "I'm the owner of Ottr Plumr — a hands-on, local expert with a passion for honest work and quality plumbing. With years of experience in homes and businesses across the Niagara Region, I built Ottr Plumr to raise the bar for service, safety, and reliability — the kind of plumbing & heating company I'd want my own family to call." }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 mt-4", children: "When you call, you're getting a real Niagara tradesperson who treats your home like his own. No outsourced call centres, no upsell scripts — just straight answers, fair pricing, and quality work that's warrantied in writing." }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 mt-4", children: "We're a small team on purpose. Every technician is licensed, insured, and trained to the same standard, and every job — whether it's a $200 fixture install or a $20,000 boiler replacement — gets the same level of care." }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_CLIENT_HUB_URL, target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsxDEV(UserCircle2, {}, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 108,
              columnNumber: 19
            }, void 0),
            " Existing Customer Login"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 107,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 106,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contact", children: "Work with us" }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 112,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 111,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 105,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container pb-20", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "What we stand for" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 121,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl md:text-5xl text-primary mt-1", children: "Our promise to you" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: values.map((v) => /* @__PURE__ */ jsxDEV("article", { className: "stamp-card p-6 text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "h-14 w-14 mx-auto rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-soft mb-4", children: /* @__PURE__ */ jsxDEV(v.icon, { className: "h-7 w-7" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 128,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 127,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-lg text-primary", children: v.title }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/75 mt-2", children: v.desc }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 131,
          columnNumber: 15
        }, void 0)
      ] }, v.title, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 126,
        columnNumber: 13
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-deep text-primary-foreground py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container grid md:grid-cols-3 gap-8 text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "font-display text-5xl text-primary-glow", children: "24/7" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "opacity-85 mt-1", children: "Emergency response" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 139,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "font-display text-5xl text-primary-glow", children: "4.9/5" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 144,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "opacity-85 mt-1", children: "Customer rating" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 145,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "font-display text-5xl text-primary-glow", children: "100%" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 148,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "opacity-85 mt-1", children: "Licensed & insured work" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 149,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 138,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/About.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, void 0);
};
export {
  AboutPage as default
};
