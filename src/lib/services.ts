import { Building2, Droplets, Flame, Home as HomeIcon, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  metaDescription: string;
  hero: string;
  longDesc: string[];
  points: string[];
  whatWeDo: { title: string; desc: string }[];
  whyUs: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "residential-plumbing",
    icon: HomeIcon,
    title: "Residential Plumbing",
    shortDesc:
      "Whole-home plumbing service for Niagara families — drains, faucets, fixtures, leaks, re-pipes, and renovations.",
    metaDescription:
      "Trusted residential plumbing in the Niagara Region. Drain cleaning, leak repair, fixture install, re-pipes & renovations. Call Ottr Plumr at 289-488-1007.",
    hero: "Plumbing that just works — for the whole house.",
    longDesc: [
      "Your home's plumbing should be the last thing on your mind. When something goes sideways — a slow drain, a dripping tap, a mystery leak — you want a real local plumber who shows up, explains what's wrong, and fixes it right the first time.",
      "Ottr Plumr handles every residential plumbing job across the Niagara Region. From a single faucet swap to a full re-pipe during a renovation, we treat every home like our own: shoes off, drop cloths down, mess cleaned up, work warrantied.",
    ],
    points: [
      "Leak detection & repair",
      "Drain cleaning & camera inspection",
      "Faucet, toilet & fixture install",
      "Kitchen & bath renovations",
      "Pipe repair & replacement",
      "Water line service",
    ],
    whatWeDo: [
      { title: "Drain Cleaning", desc: "Hydro-jetting, snaking, and camera inspection to find the cause — not just clear the symptom." },
      { title: "Leak Detection", desc: "Non-invasive locating to track down hidden leaks before they damage walls, floors, or ceilings." },
      { title: "Fixture Installation", desc: "Faucets, toilets, sinks, tubs, garbage disposals — installed clean, level, and leak-free." },
      { title: "Re-Pipes & Renovations", desc: "Full or partial repipes in copper or PEX, plus rough-ins for kitchen and bathroom remodels." },
    ],
    whyUs: [
      "Upfront, flat-rate pricing — no hourly surprises",
      "Same-day appointments when you need one",
      "Workmanship warrantied in writing",
      "Local, licensed, and insured Niagara plumbers",
    ],
    faqs: [
      {
        q: "How quickly can you come out for a residential plumbing issue?",
        a: "For most residential calls in the Niagara Region we offer same-day or next-day service. For active leaks or no-water emergencies, call us at 289-488-1007 and we'll dispatch as fast as possible.",
      },
      {
        q: "Do you give quotes before starting work?",
        a: "Always. We diagnose the issue, walk you through your options, and provide a flat-rate quote in writing before any work begins.",
      },
      {
        q: "Do you handle bathroom and kitchen renovations?",
        a: "Yes. We do rough-in plumbing for renovations as well as final fixture installs — and we coordinate cleanly with your contractor or designer.",
      },
    ],
  },
  {
    slug: "commercial-plumbing",
    icon: Building2,
    title: "Commercial Plumbing",
    shortDesc:
      "Dependable service for retail, office, restaurant, and industrial clients. We work around your schedule, not the other way around.",
    metaDescription:
      "Commercial plumbing across Niagara — restaurants, retail, offices & industrial. Backflow, fixtures, emergency response & maintenance. Call 289-488-1007.",
    hero: "Plumbing built for business hours — and after hours.",
    longDesc: [
      "Downtime costs money. When a commercial plumbing issue hits — a backed-up floor drain in a kitchen, a failed backflow on a retail unit, a leaking riser above a tenant — you need a crew that responds fast and works clean.",
      "Ottr Plumr serves restaurants, retail, offices, and light industrial clients across Niagara. We schedule around your operations, work after hours when needed, and keep your property managers and tenants in the loop.",
    ],
    points: [
      "Backflow prevention & testing",
      "Commercial fixture install",
      "Floor drains & grease traps",
      "Emergency response 24/7",
      "Preventive maintenance plans",
      "Tenant fit-outs & rough-ins",
    ],
    whatWeDo: [
      { title: "Backflow Prevention", desc: "Installation, certification, and annual testing of backflow preventers to keep you compliant." },
      { title: "Restaurant Plumbing", desc: "Grease traps, three-compartment sinks, dishwasher hookups, and floor drain service for food service." },
      { title: "Property Management Support", desc: "On-call service for property managers — single point of contact across multiple buildings." },
      { title: "Preventive Maintenance", desc: "Scheduled inspections, drain cleaning, and water heater service to prevent the calls you don't want." },
    ],
    whyUs: [
      "Insured for commercial work",
      "Off-hours and weekend service",
      "Itemized invoicing for your accounting",
      "Single point of contact for multi-site portfolios",
    ],
    faqs: [
      {
        q: "Do you offer after-hours service for businesses?",
        a: "Yes. We schedule after-hours and weekend service for commercial clients so plumbing work doesn't disrupt your operations or customers.",
      },
      {
        q: "Can you handle ongoing maintenance for multiple properties?",
        a: "Absolutely. We work with property managers across Niagara on multi-site portfolios with consolidated invoicing and a single point of contact.",
      },
      {
        q: "Do you do backflow testing and certification?",
        a: "Yes — installation, repair, and annual certified testing of backflow preventers, with documentation for your municipality.",
      },
    ],
  },
  {
    slug: "heating-systems",
    icon: Flame,
    title: "Heating Systems",
    shortDesc:
      "Stay warm all winter. Furnace, boiler, and radiant heat install, repair, and tune-ups across the Niagara Region.",
    metaDescription:
      "Furnace, boiler & radiant heating service across Niagara. Install, repair, and annual tune-ups by licensed local pros. Call Ottr Plumr at 289-488-1007.",
    hero: "Warm homes. Reliable systems. Niagara winters handled.",
    longDesc: [
      "When the temperature drops, your heating system has one job — and it had better do it. Whether you run a forced-air furnace, a hot water boiler, or radiant in-floor heat, Ottr Plumr keeps Niagara homes and businesses warm all winter.",
      "We install, repair, and maintain every major brand of heating equipment, and we'll give you straight talk about whether your existing system needs a quick fix or a full replacement.",
    ],
    points: [
      "Furnace install & repair",
      "Boiler service & install",
      "Radiant in-floor heating",
      "Annual tune-ups",
      "Thermostat upgrades",
      "Gas line work",
    ],
    whatWeDo: [
      { title: "Furnace Service", desc: "Install, repair, and annual maintenance for high-efficiency forced-air furnaces." },
      { title: "Boiler Service", desc: "Hot water and steam boiler diagnostics, repair, and replacement — residential and commercial." },
      { title: "Radiant Heating", desc: "In-floor radiant heat design and installation for new builds, renovations, and additions." },
      { title: "Tune-Ups", desc: "Annual safety inspections and tune-ups to keep your system efficient and reliable." },
    ],
    whyUs: [
      "Licensed gas technicians on staff",
      "Emergency no-heat response",
      "Honest assessment: repair vs. replace",
      "Energy-efficient equipment options",
    ],
    faqs: [
      {
        q: "How often should I service my furnace or boiler?",
        a: "We recommend an annual tune-up before heating season — typically late summer or early fall. It catches small issues before they become no-heat emergencies and keeps your warranty valid.",
      },
      {
        q: "Should I repair or replace my old furnace?",
        a: "It depends on age, efficiency, and repair cost. As a rule of thumb, if your unit is over 15 years old and the repair is more than half the cost of replacement, replacement usually pays back quickly in efficiency.",
      },
      {
        q: "Do you handle no-heat emergencies?",
        a: "Yes — we respond to no-heat calls year-round, with priority dispatch during cold snaps.",
      },
    ],
  },
  {
    slug: "water-heaters",
    icon: Droplets,
    title: "Water Heaters",
    shortDesc:
      "Hot water, every time. We install, replace, and service tank and tankless systems sized properly for your home or business.",
    metaDescription:
      "Tank & tankless water heater install, replacement, and repair across Niagara. Same-day service available. Call Ottr Plumr at 289-488-1007.",
    hero: "Hot showers, on demand — sized right and installed right.",
    longDesc: [
      "A failing water heater is one of those problems you only notice the moment you're already standing in the shower. Ottr Plumr installs, replaces, and services tank and tankless water heaters across the Niagara Region — usually same-day.",
      "We size and spec your unit based on how your household actually uses hot water, not on what's on sale this month. The result: you get hot water when you want it, your bills go down, and your equipment lasts longer.",
    ],
    points: [
      "Tankless install & service",
      "Conventional tank replacement",
      "Same-day emergency service",
      "Energy-efficient upgrades",
      "Anode rod replacement",
      "Recirculation systems",
    ],
    whatWeDo: [
      { title: "Tankless Water Heaters", desc: "On-demand hot water with smaller footprint and lower energy bills — sized to your peak demand." },
      { title: "Tank Water Heaters", desc: "Reliable conventional tanks in gas or electric, professionally installed to code." },
      { title: "Repair & Service", desc: "Pilot lights, thermostats, anode rods, leaks, and pressure relief — diagnosed and repaired." },
      { title: "Same-Day Replacement", desc: "Emergency replacement when your tank fails — most jobs done the same day we get the call." },
    ],
    whyUs: [
      "Most replacements completed in a single visit",
      "Right-sized for your household, not oversold",
      "Manufacturer-backed warranties",
      "Permits pulled and code-compliant install",
    ],
    faqs: [
      {
        q: "Should I switch from a tank to tankless water heater?",
        a: "If you have a high hot-water demand or want to free up floor space and reduce bills, tankless is often worth it. We'll walk you through the upfront cost vs. long-term savings before you decide.",
      },
      {
        q: "How long does a water heater installation take?",
        a: "A like-for-like tank swap is usually 2–4 hours. Tankless conversions and reroutes take longer — typically a half to full day.",
      },
      {
        q: "What's the lifespan of a water heater?",
        a: "Conventional tanks last about 8–12 years. Tankless units, properly maintained, can last 20+ years.",
      },
    ],
  },
  {
    slug: "sump-pumps",
    icon: ShieldCheck,
    title: "Sump Pumps",
    shortDesc:
      "Don't wait for the next storm. Pro-grade sump pumps and battery backups keep your basement dry year-round.",
    metaDescription:
      "Sump pump install, replacement, and battery backup systems across Niagara. Keep your basement dry. Call Ottr Plumr at 289-488-1007.",
    hero: "Dry basements, even during the worst Niagara storms.",
    longDesc: [
      "Niagara weather doesn't mess around. One spring storm or snowmelt event is all it takes to flood a basement — and the cost of water damage dwarfs the cost of a properly-installed sump pump and backup system.",
      "Ottr Plumr installs, replaces, and services sump pumps and battery backup units for homes across the region. We test and tune existing systems annually, and we'll spec the right pump for your basement size, water table, and risk level.",
    ],
    points: [
      "New install & replacement",
      "Battery backup systems",
      "Discharge line service",
      "Annual testing",
      "Pit cleaning",
      "Water alarm install",
    ],
    whatWeDo: [
      { title: "Sump Pump Install", desc: "New installs and replacements with quality cast-iron and stainless pumps that last." },
      { title: "Battery Backup Systems", desc: "Backup pumps that keep working when the power goes out — exactly when you need them most." },
      { title: "Discharge Line Service", desc: "Frozen, clogged, or pitched-wrong discharge lines repaired or rerouted." },
      { title: "Annual Testing", desc: "Pre-spring testing and pit cleaning to make sure your pump is ready before storm season." },
    ],
    whyUs: [
      "Pumps sized for your specific basement",
      "Backup options for power outages",
      "Annual maintenance plans",
      "Rapid response when pumps fail",
    ],
    faqs: [
      {
        q: "Do I need a battery backup sump pump?",
        a: "If your basement is finished or you store anything valuable down there, yes. Storms cause both flooding and power outages — and your primary pump is useless without electricity.",
      },
      {
        q: "How often should a sump pump be replaced?",
        a: "Most sump pumps last 7–10 years. We recommend replacement at the 10-year mark even if it's still running — the cost of failure is much higher than the cost of replacement.",
      },
      {
        q: "How do I know if my sump pump is working?",
        a: "Pour a bucket of water into the pit. The pump should kick on, drain it, and shut off cleanly. If anything sounds off — call us before the next storm.",
      },
    ],
  },
  {
    slug: "repairs-diagnostics",
    icon: Wrench,
    title: "Repairs & Diagnostics",
    shortDesc:
      "Honest diagnosis. Fair price. We fix what's broken without trying to sell you what isn't.",
    metaDescription:
      "Plumbing repairs and diagnostics across Niagara — honest assessments, upfront pricing, warrantied work. Call Ottr Plumr at 289-488-1007.",
    hero: "Honest diagnosis. Fair price. Warrantied work.",
    longDesc: [
      "Some plumbers see a service call as a sales call. We don't. When you book Ottr Plumr for a repair or diagnostic, we tell you exactly what's wrong, what it'll cost to fix, and whether it's worth fixing at all.",
      "Whether it's a mystery leak, low water pressure, a noisy pipe, or a fixture that just won't behave — we'll diagnose it properly, explain it in plain English, and quote it before we lift a wrench.",
    ],
    points: [
      "Upfront flat-rate pricing",
      "Same-day appointments",
      "Warrantied work",
      "Clean job sites",
      "Camera inspections",
      "Pressure & flow testing",
    ],
    whatWeDo: [
      { title: "Diagnostic Visits", desc: "We find the actual cause — not just the symptom — and explain your repair options." },
      { title: "Leak & Pressure Issues", desc: "Hidden leaks, low pressure, water hammer, and noisy pipes — diagnosed and resolved." },
      { title: "Camera Inspections", desc: "In-pipe video inspection for drains, sewers, and main water lines." },
      { title: "Second Opinions", desc: "Got a quote that feels off? We'll give you an honest second opinion at no obligation." },
    ],
    whyUs: [
      "We never upsell what you don't need",
      "Written diagnosis and quote before work begins",
      "All repairs warrantied",
      "Clean uniforms, drop cloths, and tidy job sites",
    ],
    faqs: [
      {
        q: "Do you charge for diagnostics?",
        a: "We charge a flat diagnostic fee that's credited toward the repair if you book the work with us. You always know the cost before we arrive.",
      },
      {
        q: "How fast can you come out for a repair?",
        a: "Most non-emergency repairs are scheduled same-day or next-day. Emergencies — active leaks, no water, no heat — get priority dispatch.",
      },
      {
        q: "Do you warranty your repair work?",
        a: "Yes. Labor and parts are warrantied in writing. If something we fixed isn't right, we come back and make it right.",
      },
    ],
  },
];

export const getServiceBySlug = (slug?: string) => SERVICES.find((s) => s.slug === slug);
