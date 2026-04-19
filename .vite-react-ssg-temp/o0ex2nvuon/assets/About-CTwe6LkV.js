import { jsxs, jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Seo, { ...seo }),
    /* @__PURE__ */ jsxs("section", { className: "bg-gradient-hero py-16 md:py-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "container grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "About Ottr Plumr" }),
          /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-6xl text-primary mt-1 leading-[0.95]", children: [
            "Local plumbers.",
            /* @__PURE__ */ jsx("br", {}),
            "Big-shop quality."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-foreground/80 mt-5 text-lg max-w-xl", children: [
            "Ottr Plumr Plumbing & Heating — a division of ",
            /* @__PURE__ */ jsx("strong", { children: "Canalside Mechanical LTD" }),
            " — was built on a simple idea: Niagara families and businesses deserve a plumbing & heating company that's professional from the first phone call to the final clean-up, and honest about what your home actually needs."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mt-4 max-w-xl", children: "We bring the technical chops of a big firm with the honesty and care of a neighbour. Whether it's a 2 AM burst pipe in February, a planned bathroom renovation, a tankless water heater conversion, or annual furnace service before winter — we treat every job like it's our own home." }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mt-4 max-w-xl", children: "Licensed gas technicians on staff. Fully insured for residential and commercial work. Permits pulled on every install. Workmanship warrantied in writing. That's the bar." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 mt-7", children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: `tel:${PHONE_TEL}`, children: [
              /* @__PURE__ */ jsx(Phone, {}),
              " ",
              PHONE_DISPLAY
            ] }) }),
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "deep", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsx(CalendarCheck, {}),
              " Book Online"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "rounded-[2rem] overflow-hidden border-4 border-foreground/10 shadow-pop", children: /* @__PURE__ */ jsx("img", { src: pipes, alt: "Plumbing pipes illustration — Ottr Plumr serving the Niagara Region", loading: "lazy", decoding: "async", width: 1024, height: 1024, className: "w-full h-auto" }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-2xl px-5 py-4 shadow-stamp font-display text-xl rotate-[-4deg]", children: "Niagara strong" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "water-band h-10 mt-16", "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container py-20", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_1.4fr] gap-10 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-sm mx-auto lg:mx-0 w-full", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] rounded-[2rem] border-4 border-foreground/10 shadow-pop bg-gradient-to-br from-secondary to-muted grid place-items-center text-foreground/40", children: /* @__PURE__ */ jsxs("div", { className: "text-center px-6", children: [
          /* @__PURE__ */ jsx(UserCircle2, { className: "h-20 w-20 mx-auto opacity-50" }),
          /* @__PURE__ */ jsx("p", { className: "font-script text-2xl mt-3 text-primary/70", children: "Photo of Alex" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs mt-1", children: "Upload a photo to replace this placeholder" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-stamp font-display rotate-[6deg]", children: "Owner" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "Meet the team" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl text-primary mt-1", children: "Hi, I'm Alex." }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mt-5 text-lg", children: "I'm the owner of Ottr Plumr — a hands-on, local expert with a passion for honest work and quality plumbing. With years of experience in homes and businesses across the Niagara Region, I built Ottr Plumr to raise the bar for service, safety, and reliability — the kind of plumbing & heating company I'd want my own family to call." }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mt-4", children: "When you call, you're getting a real Niagara tradesperson who treats your home like his own. No outsourced call centres, no upsell scripts — just straight answers, fair pricing, and quality work that's warrantied in writing." }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mt-4", children: "We're a small team on purpose. Every technician is licensed, insured, and trained to the same standard, and every job — whether it's a $200 fixture install or a $20,000 boiler replacement — gets the same level of care." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxs("a", { href: JOBBER_CLIENT_HUB_URL, target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsx(UserCircle2, {}),
            " Existing Customer Login"
          ] }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Work with us" }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container pb-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-accent", children: "What we stand for" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl text-primary mt-1", children: "Our promise to you" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: values.map((v) => /* @__PURE__ */ jsxs("article", { className: "stamp-card p-6 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "h-14 w-14 mx-auto rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-soft mb-4", children: /* @__PURE__ */ jsx(v.icon, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-primary", children: v.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/75 mt-2", children: v.desc })
      ] }, v.title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-deep text-primary-foreground py-16", children: /* @__PURE__ */ jsxs("div", { className: "container grid md:grid-cols-3 gap-8 text-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-5xl text-primary-glow", children: "24/7" }),
        /* @__PURE__ */ jsx("div", { className: "opacity-85 mt-1", children: "Emergency response" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-5xl text-primary-glow", children: "4.9/5" }),
        /* @__PURE__ */ jsx("div", { className: "opacity-85 mt-1", children: "Customer rating" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-5xl text-primary-glow", children: "100%" }),
        /* @__PURE__ */ jsx("div", { className: "opacity-85 mt-1", children: "Licensed & insured work" })
      ] })
    ] }) })
  ] });
};
export {
  AboutPage as default
};
