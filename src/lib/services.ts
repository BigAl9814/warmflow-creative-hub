import { Building2, Droplets, Flame, Home as HomeIcon, ShieldCheck, Siren, Wrench, type LucideIcon } from "lucide-react";

export type ProsConsItem = {
  name: string;
  bestFor: string;
  pros: string[];
  cons: string[];
};

export type ProsCons = {
  title: string;
  intro: string;
  items: ProsConsItem[];
};

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
  prosCons?: ProsCons;
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
      "Your home's plumbing should be the last thing on your mind. When something goes sideways — a slow drain, a dripping tap, a mystery leak behind a wall — you want a real local plumber who shows up when they said they would, explains what's actually wrong in plain English, and fixes it right the first time. That's the entire reason Ottr Plumr exists.",
      "We handle every residential plumbing job across the Niagara Region: from a single faucet swap on a Saturday morning to a full re-pipe during a basement renovation. Every job, big or small, gets the same treatment — shoes off at the door, drop cloths down, tools tidy, the work explained as we go, and the mess cleaned up before we leave. You'll know what we did, why we did it, and what to watch for going forward.",
      "Our crew lives in Niagara. We know the housing stock — from century homes in St. Catharines and Niagara-on-the-Lake to post-war bungalows in Welland and Port Colborne to brand-new builds in Grimsby and Lincoln. That matters. A galvanized steel supply line in a 1940s home asks for a different game plan than a PEX manifold in a 2022 build, and we bring the right experience to both.",
      "Most importantly: we quote before we work. Diagnostics first, then a clear flat-rate price, then your decision. No surprise pricing, no hidden line items added at the end. And if we open a wall and find something genuinely unexpected, we stop, show you, and give you a fresh quote before we touch it — you stay in control of every dollar.",
    ],
    points: [
      "Leak detection & repair",
      "Drain cleaning & camera inspection",
      "Faucet, toilet & fixture install",
      "Kitchen & bath renovations",
      "Pipe repair & replacement",
      "Water line service",
      "Frozen pipe thawing & repair",
      "Water softener & filtration install",
    ],
    whatWeDo: [
      { title: "Drain Cleaning", desc: "Hydro-jetting, snaking, and in-pipe camera inspection to find the actual cause — tree roots, grease, scale, or a collapsed line — instead of just clearing the symptom for a week." },
      { title: "Leak Detection", desc: "Acoustic and thermal locating to track down hidden leaks behind walls, under slabs, and in ceilings — before they ruin drywall, flooring, or insulation." },
      { title: "Fixture Installation", desc: "Faucets, toilets, sinks, tubs, garbage disposals, bidet seats — installed clean, level, leak-free, and to manufacturer spec so warranties stay valid." },
      { title: "Re-Pipes & Renovations", desc: "Full or partial repipes in copper or PEX, plus rough-ins and finals for kitchen, bathroom, basement, and addition projects." },
      { title: "Water Line Service", desc: "Main water line repair and replacement — including from-the-curb work and coordination with municipal locates." },
      { title: "Water Quality", desc: "Whole-home filtration, softeners, and reverse-osmosis under-sink systems to handle Niagara's hard water and tannins." },
    ],
    whyUs: [
      "Upfront, flat-rate pricing — no hourly surprises",
      "Same-day appointments when you need one",
      "Workmanship warrantied in writing",
      "Local, licensed, and insured Niagara plumbers",
      "Clean uniforms, drop cloths, and a tidy job site",
      "We diagnose first, then quote, then work — never the other way around",
    ],
    faqs: [
      {
        q: "How quickly can you come out for a residential plumbing issue?",
        a: "For most residential calls in the Niagara Region we offer same-day or next-day service. For active leaks, no-water situations, or sewage backups, call us at 289-488-1007 and we'll dispatch as fast as possible — we run 24/7 emergency rotation.",
      },
      {
        q: "Do you give quotes before starting work?",
        a: "Always. We diagnose the issue, walk you through your options (often with a quick repair vs. replace breakdown), and provide a flat-rate quote in writing before any work begins. You authorize, then we work.",
      },
      {
        q: "Do you handle bathroom and kitchen renovations?",
        a: "Yes. We do rough-in plumbing for renovations as well as final fixture installs — and we coordinate cleanly with your contractor, designer, or tile setter so the schedule doesn't fall apart waiting on the plumber.",
      },
      {
        q: "What's the most common cause of slow drains in Niagara homes?",
        a: "In older neighbourhoods, tree-root intrusion in clay sewer laterals is the #1 culprit. In newer builds it's almost always grease, hair, or so-called 'flushable' wipes (they aren't). A camera inspection tells us which one in about 20 minutes.",
      },
      {
        q: "Can you repair frozen or burst pipes?",
        a: "Yes — we thaw, repair, and reroute frozen and burst lines, and we'll show you why it happened (uninsulated rim joist, exterior wall plumbing, drafty crawlspace) so it doesn't happen next winter.",
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
      "Downtime costs money. When a commercial plumbing issue hits — a backed-up floor drain in a restaurant kitchen at peak service, a failed backflow on a retail unit blocking opening, a leaking riser above a tenant suite — you need a crew that responds fast, works clean, and understands that the building can't just shut down for three days.",
      "Ottr Plumr serves restaurants, retail, professional offices, multi-tenant buildings, and light industrial clients across Niagara. We schedule around your operations: early-morning visits before doors open, after-hours work when needed, and weekend emergency response with itemized invoicing your accounting team will actually thank you for.",
      "We become a single point of contact for property managers running multi-site portfolios — one number, one technician who knows your buildings, one set of records. Less time spent re-explaining the same boiler room to a new contractor every quarter.",
      "And we handle the paperwork side of commercial plumbing properly: backflow certifications filed with the municipality, code-compliant grease-trap sizing for food service, and clean documentation for landlord-tenant disputes when they pop up.",
    ],
    points: [
      "Backflow prevention & annual testing",
      "Commercial fixture install & repair",
      "Floor drains, grease traps & catch basins",
      "Emergency response 24/7",
      "Preventive maintenance plans",
      "Tenant fit-outs & rough-ins",
      "Hot water plant service & replacement",
      "Multi-site property management support",
    ],
    whatWeDo: [
      { title: "Backflow Prevention", desc: "Installation, certification, and annual testing of backflow preventers — keeping you compliant with municipal cross-connection control bylaws and avoiding fines." },
      { title: "Restaurant Plumbing", desc: "Grease traps, three-compartment sinks, dishwasher hookups, mop sinks, and floor drain service for food service operations of every size." },
      { title: "Property Management Support", desc: "On-call service for property managers — single point of contact across multiple buildings, consolidated invoicing, and documented service history." },
      { title: "Preventive Maintenance", desc: "Scheduled inspections, drain cleaning, water heater service, and backflow testing to prevent the after-hours emergency calls nobody wants." },
      { title: "Commercial Hot Water", desc: "Service, repair, and replacement of commercial-grade tank, tankless, and recirculating hot water systems." },
      { title: "Tenant Fit-Outs", desc: "Plumbing rough-ins and finals for new tenant build-outs — coffee shops, salons, dental offices, you name it." },
    ],
    whyUs: [
      "Insured for commercial work",
      "Off-hours and weekend service available",
      "Itemized invoicing for your accounting team",
      "Single point of contact for multi-site portfolios",
      "Documented service history per building",
      "Fast diagnosis to keep your operation moving",
    ],
    faqs: [
      {
        q: "Do you offer after-hours service for businesses?",
        a: "Yes. We schedule after-hours, evening, and weekend service for commercial clients so plumbing work doesn't disrupt your operations, customers, or tenants. Just tell us when works.",
      },
      {
        q: "Can you handle ongoing maintenance for multiple properties?",
        a: "Absolutely. We work with property managers across Niagara on multi-site portfolios with consolidated monthly invoicing, a single point of contact, and a full service history available on request.",
      },
      {
        q: "Do you do backflow testing and certification?",
        a: "Yes — installation, repair, and annual certified testing of backflow preventers, with documentation submitted to your municipality so you stay compliant with cross-connection control programs.",
      },
      {
        q: "How fast can you respond to a commercial emergency?",
        a: "Existing commercial maintenance clients get priority dispatch — typically within 1–2 hours during business hours and same-night for after-hours emergencies. New commercial calls are handled as fast as our schedule allows, often same-day.",
      },
      {
        q: "Do you provide quotes for commercial projects in writing?",
        a: "Always. Commercial work gets a detailed scope, line-item pricing, and clear assumptions in writing — so you (and your finance team) know exactly what you're approving.",
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
      "When the temperature drops, your heating system has exactly one job — and it had better do it. Whether you run a high-efficiency forced-air furnace, a hot water boiler with cast-iron radiators, or radiant in-floor heat in a new build, Ottr Plumr keeps Niagara homes and businesses warm through every cold snap, polar vortex, and February deep freeze the lake throws at us.",
      "We install, repair, and maintain every major brand of residential and light-commercial heating equipment, and we'll give you straight talk about whether your existing system needs a $300 fix, a $1,500 repair, or a full replacement that pays back in efficiency. No fear-selling, no 'you have to replace it today' pressure — just the numbers laid out so you can decide on your timeline.",
      "Annual tune-ups are the best $200 you spend on your house. We catch cracked heat exchangers, weak inducer motors, dirty burners, and failing zone valves before they become a no-heat call at 11pm on a Tuesday. We also keep your manufacturer warranty valid — most require documented annual service, and most homeowners don't know that.",
      "Our licensed gas technicians handle the stuff that needs a license: gas line work, conversions from oil or propane to natural gas, and proper venting for high-efficiency equipment. And every install gets the permit pulled — because the inspection is your safety net, not an inconvenience.",
    ],
    points: [
      "Furnace install & repair",
      "Boiler service & install",
      "Radiant in-floor heating",
      "Annual tune-ups & safety inspections",
      "Smart thermostat upgrades",
      "Gas line & gas piping work",
      "Heat pump & dual-fuel systems",
      "Combustion analysis & venting",
    ],
    whatWeDo: [
      { title: "Furnace Service", desc: "Install, repair, and annual maintenance for high-efficiency forced-air furnaces — single-stage, two-stage, and modulating." },
      { title: "Boiler Service", desc: "Hot water and steam boiler diagnostics, repair, and replacement for cast-iron radiators, baseboard, and in-floor systems." },
      { title: "Radiant Heating", desc: "In-floor radiant heat design and installation for new builds, basement renos, additions, and bathroom comfort floors." },
      { title: "Tune-Ups", desc: "Annual safety inspections, combustion analysis, burner cleaning, and filter changes to keep your system efficient and your warranty valid." },
      { title: "Smart Thermostats", desc: "Nest, ecobee, and Honeywell smart thermostat install and configuration — including with multi-stage and dual-fuel systems." },
      { title: "Gas Line Work", desc: "Licensed gas piping for new appliances, BBQ hookups, generator gas lines, and full conversions from propane or oil to natural gas." },
    ],
    whyUs: [
      "Licensed gas technicians on staff",
      "Emergency no-heat response, year-round",
      "Honest assessment: repair vs. replace, with the math",
      "Energy-efficient equipment options for every budget",
      "Permits pulled on every install",
      "Manufacturer-trained on major brands",
    ],
    faqs: [
      {
        q: "How often should I service my furnace or boiler?",
        a: "We recommend an annual tune-up before heating season — typically late summer or early fall. It catches small issues before they become no-heat emergencies, keeps your warranty valid, and keeps your equipment running at rated efficiency (so your gas bill doesn't creep up year over year).",
      },
      {
        q: "Should I repair or replace my old furnace?",
        a: "It depends on age, efficiency, and repair cost. As a rule of thumb: if your unit is over 15 years old and the repair is more than half the cost of replacement, replacement usually pays back quickly in efficiency gains and avoided future breakdowns. We'll do the math with you, no pressure.",
      },
      {
        q: "Do you handle no-heat emergencies?",
        a: "Yes — we respond to no-heat calls year-round, with priority dispatch during cold snaps. If you wake up to a freezing house, call 289-488-1007 — we'll triage over the phone and get someone moving.",
      },
      {
        q: "Furnace vs. boiler — which is better?",
        a: "Both are great when sized right. Forced-air furnaces heat fast, work with central A/C ductwork, and cost less to install. Boilers give quieter, more even heat with no forced air — better for allergy sufferers and homes with cast-iron radiators. We help you pick based on your house, not on what we have in the truck.",
      },
      {
        q: "Are smart thermostats worth it?",
        a: "Usually yes. A learning thermostat (Nest, ecobee) typically saves 10–15% on heating bills through smarter scheduling and away-mode detection — and the install is a one-hour job for most systems.",
      },
    ],
    prosCons: {
      title: "Furnace vs. Boiler — which suits your home?",
      intro:
        "Both heat your home well when properly sized and installed. Here's how they compare so you can pick the right system with confidence.",
      items: [
        {
          name: "High-Efficiency Furnace",
          bestFor: "Homes with existing ductwork or central A/C",
          pros: [
            "Lower upfront install cost",
            "Heats the home quickly",
            "Shares ductwork with central A/C",
            "Easier to add filtration & humidification",
          ],
          cons: [
            "Can stir up dust and dry the air",
            "Some hot/cold spots between cycles",
            "Noisier blower than radiant or boiler systems",
          ],
        },
        {
          name: "Hot Water Boiler",
          bestFor: "Older homes with radiators or new builds with in-floor heat",
          pros: [
            "Even, comfortable, draft-free heat",
            "Very quiet operation",
            "Works great with radiant in-floor systems",
            "Long equipment life (often 20+ years)",
          ],
          cons: [
            "Higher upfront install cost",
            "Slower to recover from setbacks",
            "Needs a separate system for central A/C",
          ],
        },
      ],
    },
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
      "A failing water heater is one of those problems you only notice the moment you're already standing in the shower. Ottr Plumr installs, replaces, and services tank and tankless water heaters across the Niagara Region — usually the same day you call, because cold-shower-day is nobody's good day.",
      "We size and spec your unit based on how your household actually uses hot water — bedrooms, bathrooms, laundry habits, dishwasher cycles, simultaneous-fixture demand — not based on whatever's stacked highest at the warehouse. The result: you get hot water when you want it, your gas or hydro bill goes down, and the equipment lasts the full lifespan instead of cycling itself to death.",
      "Tank vs. tankless is the question we get most. The honest answer: it depends. Tankless gives you endless hot water, longer equipment life, and a smaller footprint, but it costs more up front and sometimes requires gas-line and venting upgrades. Tank is cheaper to install, simpler to service, and the right call for a lot of homes — especially if your existing setup works. We walk you through both options with real numbers before you decide.",
      "Every install is permitted, code-compliant, and properly vented (a surprising number of older installs aren't). We pull the permit, coordinate the inspection, and leave you with a system that's safe, efficient, and warrantied — both by the manufacturer and by us in writing.",
    ],
    points: [
      "Tankless install & service",
      "Conventional tank replacement",
      "Same-day emergency replacement",
      "Energy-efficient upgrades",
      "Anode rod replacement",
      "Recirculation systems",
      "Gas-line upgrades for tankless conversions",
      "Drain pan, expansion tank & T&P valve service",
    ],
    whatWeDo: [
      { title: "Tankless Water Heaters", desc: "On-demand hot water with a smaller footprint, longer life, and lower energy bills — sized to your peak simultaneous demand, not a guess." },
      { title: "Tank Water Heaters", desc: "Reliable conventional tanks in gas or electric, professionally installed to code with new shut-offs, expansion tanks, and proper venting." },
      { title: "Repair & Service", desc: "Pilot lights, thermocouples, gas valves, thermostats, anode rods, leaks, and pressure-relief valves — diagnosed and repaired without unnecessary upselling." },
      { title: "Same-Day Replacement", desc: "Emergency replacement when your tank fails — most jobs done the same day we get the call, with the old unit hauled away." },
      { title: "Recirculation Loops", desc: "Hot water at the tap in seconds instead of minutes — added to existing systems or built into new installs." },
      { title: "Annual Maintenance", desc: "Tank flush, anode rod inspection, T&P testing, and burner cleaning — extends life by years and keeps efficiency rated." },
    ],
    whyUs: [
      "Most replacements completed in a single visit",
      "Right-sized for your household, not oversold",
      "Manufacturer-backed warranties",
      "Permits pulled and code-compliant install",
      "Old unit hauled away and disposed of properly",
      "Honest tank vs. tankless conversation, no pressure",
    ],
    faqs: [
      {
        q: "Should I switch from a tank to tankless water heater?",
        a: "If you have high simultaneous hot-water demand (multiple bathrooms running at once), want to free up floor space, or want lower long-term energy bills, tankless is often worth it. We'll walk you through the upfront cost vs. long-term savings, including any gas-line or venting upgrades, before you decide.",
      },
      {
        q: "How long does a water heater installation take?",
        a: "A like-for-like tank swap is usually 2–4 hours. A first-time tankless install or a conversion (different fuel, new gas line, new vent path) typically takes a half to full day depending on the existing setup.",
      },
      {
        q: "What's the lifespan of a water heater?",
        a: "Conventional gas or electric tanks last about 8–12 years on average — longer with annual maintenance and an anode rod swap at year 5. Tankless units, properly maintained with annual descaling, can run 20+ years.",
      },
      {
        q: "Why does my water heater make popping or rumbling noises?",
        a: "Almost always sediment build-up at the bottom of the tank — common in Niagara because of our hard water. An annual flush usually fixes it; if the noise persists, the heat exchanger may be cracked and replacement is the smart move.",
      },
      {
        q: "Can you do same-day water heater replacement?",
        a: "Yes — most standard tank replacements we can do same-day. Call us by mid-morning and you're showering hot that night. Tankless conversions usually need a day or two to source the right unit.",
      },
    ],
    prosCons: {
      title: "Tank vs. Tankless Water Heater",
      intro:
        "Both deliver reliable hot water — the right choice comes down to your household's demand, your budget, and your space. Here's the honest breakdown.",
      items: [
        {
          name: "Conventional Tank",
          bestFor: "Smaller homes, predictable demand, tighter budgets",
          pros: [
            "Lower upfront cost",
            "Simple, well-understood technology",
            "Cheaper repairs and parts",
            "Works during a brief power outage (gas models)",
          ],
          cons: [
            "Limited hot water — runs out during heavy use",
            "Standby heat loss adds to energy bills",
            "Shorter lifespan (8–12 years on average)",
            "Takes up floor space",
          ],
        },
        {
          name: "Tankless (On-Demand)",
          bestFor: "Larger homes, multiple bathrooms, long-term owners",
          pros: [
            "Endless hot water on demand",
            "20+ year lifespan with maintenance",
            "Lower energy bills (no standby loss)",
            "Wall-mounted — frees up floor space",
          ],
          cons: [
            "Higher upfront cost",
            "May need gas-line or venting upgrade",
            "Annual descaling recommended in hard-water areas",
            "Slightly slower initial hot-water delivery",
          ],
        },
      ],
    },
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
      "Niagara weather doesn't mess around. One spring storm, one summer downpour, or one fast snowmelt event is all it takes to flood a basement — and the cost of water damage (drywall, flooring, contents, mould remediation) dwarfs the cost of a properly-installed sump pump and battery backup system by an order of magnitude.",
      "Ottr Plumr installs, replaces, and services sump pumps and battery backup units for homes across the region — from low-lying neighbourhoods near the canal in Welland to lakeside properties in Crystal Beach and Port Dalhousie where the water table is genuinely no joke. We test and tune existing systems annually, and we'll spec the right pump for your basement size, water table, and risk level — not the cheapest pump on the shelf.",
      "Most basement floods we see are entirely preventable. The pump was undersized, the discharge line was frozen or pitched wrong, the float switch had jammed, or — most often — the power went out during exactly the storm that needed the pump. A battery backup system is the single best insurance policy a Niagara homeowner can buy.",
      "And yes, we'll install a water alarm with a Wi-Fi sensor too, so your phone buzzes the second water touches the pit — even if you're at the cottage or on vacation.",
    ],
    points: [
      "New install & replacement",
      "Battery backup systems",
      "Discharge line service",
      "Annual testing & maintenance",
      "Pit cleaning & float adjustment",
      "Water alarm install (Wi-Fi enabled)",
      "Cast-iron & stainless pump options",
      "Sewage ejector pumps",
    ],
    whatWeDo: [
      { title: "Sump Pump Install", desc: "New installs and replacements with quality cast-iron and stainless pumps — sized to your basement footprint and water-table conditions, not just guessed at." },
      { title: "Battery Backup Systems", desc: "Backup pumps that keep working when the power goes out — exactly when you need them most. Storms cause both flooding and outages, and your primary pump is useless without electricity." },
      { title: "Discharge Line Service", desc: "Frozen, clogged, or wrongly-pitched discharge lines repaired or rerouted, with proper freeze-resistant terminations for Niagara winters." },
      { title: "Annual Testing", desc: "Pre-spring testing, pit cleaning, and float verification to make sure your pump is ready before storm season actually hits." },
      { title: "Sewage Ejector Pumps", desc: "Ejector pump install and service for basement bathrooms, laundry, and below-grade fixtures." },
      { title: "Water Alarms", desc: "Wi-Fi-enabled water sensors that ping your phone the moment water touches the pit, giving you a real chance to act before damage spreads." },
    ],
    whyUs: [
      "Pumps sized for your specific basement and water table",
      "Backup options for power outages",
      "Annual maintenance plans available",
      "Rapid response when pumps fail mid-storm",
      "Quality cast-iron & stainless pumps, not bargain-bin",
      "Honest advice on backup vs. no-backup — never a hard sell",
    ],
    faqs: [
      {
        q: "Do I need a battery backup sump pump?",
        a: "If your basement is finished, you have a sewage ejector pump, or you store anything valuable down there — yes. The biggest storms are exactly the ones that knock out power, and your primary pump is just an expensive paperweight without electricity. Backup systems pay for themselves the first time they save you.",
      },
      {
        q: "How often should a sump pump be replaced?",
        a: "Most sump pumps last 7–10 years. We recommend planned replacement at the 10-year mark even if it's still running — the cost of a planned swap is a small fraction of the cost of cleanup after a failure during a storm.",
      },
      {
        q: "How do I know if my sump pump is working?",
        a: "Pour a 5-gallon bucket of water slowly into the pit. The pump should kick on, drain it, and shut off cleanly without short-cycling. If it hesitates, runs rough, or doesn't shut off cleanly — call us before the next storm, not after.",
      },
      {
        q: "Why does my sump pump run constantly?",
        a: "Usually one of three things: a stuck float switch, a high water table after heavy rain, or a broken/missing check valve causing water to flow back into the pit. A short diagnostic visit tells us which.",
      },
      {
        q: "Can the discharge line freeze in winter?",
        a: "Yes — and it's a common cause of mid-winter basement floods in Niagara. We use freeze-resistant terminations, proper pitch, and discharge points placed where snow won't pile up against them.",
      },
    ],
    prosCons: {
      title: "Primary pump only vs. Primary + Battery Backup",
      intro:
        "A primary pump handles routine duty just fine — until the power goes out. Here's the honest case for adding a battery backup.",
      items: [
        {
          name: "Primary Pump Only",
          bestFor: "Unfinished basements with very low flood risk and reliable power",
          pros: [
            "Lower upfront cost",
            "Simpler system, fewer components",
            "Less maintenance to track",
          ],
          cons: [
            "Useless during a power outage",
            "Single point of failure",
            "No protection if the pump itself fails mid-storm",
            "Higher long-term risk of catastrophic flood damage",
          ],
        },
        {
          name: "Primary + Battery Backup",
          bestFor: "Finished basements, high water tables, lakeside or low-lying homes",
          pros: [
            "Keeps pumping through power outages",
            "Redundant protection if the primary pump fails",
            "Built-in alarms for high-water and low-battery alerts",
            "Pays for itself the first time a storm knocks out power",
          ],
          cons: [
            "Higher upfront cost",
            "Battery needs replacement every 3–5 years",
            "More components to maintain annually",
          ],
        },
      ],
    },
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
      "Some plumbers see a service call as a sales call. We don't. When you book Ottr Plumr for a repair or diagnostic, we tell you exactly what's wrong, what it'll cost to fix, and whether it's even worth fixing at all. If your 22-year-old water heater needs a $400 repair and is six months from failing anyway, we'll say so — and let you decide.",
      "Whether it's a mystery leak under the kitchen sink, low water pressure that crept up over months, a noisy pipe that bangs every time the dishwasher runs, or a fixture that just won't behave — we diagnose it properly using the right tools (acoustic locators, in-pipe cameras, pressure gauges, combustion analyzers when heating is involved), explain it to you in plain English, and quote the fix in writing before we lift a wrench.",
      "We're also the people locals call for second opinions. If you've been quoted a $4,200 sewer-line replacement and your gut says something's off, we'll come out, run a camera, and give you an honest read on whether you really need a full replacement or whether a spot repair fixes it. No obligation to book the work with us.",
      "Our diagnostic fee is flat, transparent, and credited toward the repair if you book us to do the work. You always know the cost before we arrive — no 'trip charge plus hourly plus parts plus a markup we won't explain.'",
    ],
    points: [
      "Upfront flat-rate pricing",
      "Same-day appointments",
      "Warrantied work in writing",
      "Clean, tidy job sites",
      "In-pipe camera inspections",
      "Pressure & flow testing",
      "Acoustic & thermal leak detection",
      "No-obligation second opinions",
    ],
    whatWeDo: [
      { title: "Diagnostic Visits", desc: "We find the actual root cause — not just the symptom — and walk you through every realistic repair option with pros, cons, and price." },
      { title: "Leak & Pressure Issues", desc: "Hidden leaks, low water pressure, water hammer, noisy pipes, and unexplained high water bills — diagnosed and resolved." },
      { title: "Camera Inspections", desc: "In-pipe video inspection for drains, sewer laterals, and main water lines — recorded so you can see exactly what's going on." },
      { title: "Second Opinions", desc: "Got a quote that feels off? We'll give you an honest second opinion at no obligation. Sometimes the first quote is right; sometimes it isn't." },
      { title: "Pre-Purchase Inspections", desc: "Buying a home in Niagara? We'll do a focused plumbing inspection on top of the home inspector's general report — sewer scope included." },
      { title: "Repair vs. Replace Analysis", desc: "Old water heater? Aging furnace? Galvanized supply lines? We'll do the math with you so you can make a confident long-term decision." },
    ],
    whyUs: [
      "We never upsell what you don't need",
      "Written diagnosis and quote before work begins",
      "All repairs warrantied",
      "Clean uniforms, drop cloths, and tidy job sites",
      "Diagnostic fee credited toward repair",
      "Plain-English explanations, no jargon walls",
    ],
    faqs: [
      {
        q: "Do you charge for diagnostics?",
        a: "We charge a flat diagnostic fee that's credited toward the repair if you book the work with us. You always know the cost before we arrive — no surprise trip charges, no hourly meter running while we look. If we uncover something hidden during the work, we pause, show you what we found, and re-quote before continuing.",
      },
      {
        q: "How fast can you come out for a repair?",
        a: "Most non-emergency repairs are scheduled same-day or next-day. Emergencies — active leaks, no water, no heat, sewage backups — get priority dispatch around the clock.",
      },
      {
        q: "Do you warranty your repair work?",
        a: "Yes. Labor and parts are warrantied in writing. If something we fixed isn't right, we come back and make it right — no charge, no argument.",
      },
      {
        q: "Will you give me a second opinion on someone else's quote?",
        a: "Absolutely. We get second-opinion calls every week. We'll do an honest diagnostic, give you our take, and let you decide who to hire — including if that ends up being the other contractor.",
      },
      {
        q: "Can you inspect plumbing on a house I'm buying?",
        a: "Yes — pre-purchase plumbing inspections are one of our most valuable services. We focus on the stuff a general home inspector doesn't (sewer-line camera scope, water heater age & condition, supply line material, drain slope) so you go in eyes wide open.",
      },
    ],
  },
  {
    slug: "drain-cleaning",
    icon: Droplets,
    title: "Drain Cleaning",
    shortDesc:
      "Slow sinks, gurgling toilets, sewer backups — cleared properly with snaking, hydro-jetting, and camera inspection across Niagara.",
    metaDescription:
      "Drain cleaning across the Niagara Region — hydro-jetting, snaking, camera scopes & root removal. Same-day service. Call Ottr Plumr at 289-488-1007.",
    hero: "Clogged drains, cleared right — not just unblocked.",
    longDesc: [
      "A clogged drain is more than an inconvenience — it's a warning. A slow kitchen sink, a gurgling toilet, water backing up in the basement floor drain when you run the washing machine: those are all symptoms of something specific, and the fix depends on what's actually causing it. The wrong tool on the wrong clog gets you a week of relief and another service call. We don't do that.",
      "Ottr Plumr clears drains the right way across the Niagara Region. We start with a real diagnosis — usually a quick camera scope of the affected line — so we can see whether you're dealing with a grease plug under the kitchen sink, a hair-and-soap clog in a tub trap, tree roots in a clay sewer lateral, or a partial collapse in an aging line. Then we choose the tool that fixes the actual problem: a hand auger, a sectional cable machine, or full hydro-jetting at 4,000 PSI to scour the pipe walls back to bare pipe.",
      "Niagara has a lot of older housing stock — century homes in St. Catharines and Niagara-on-the-Lake, post-war neighbourhoods in Welland and Port Colborne — and a lot of those properties still have clay or Orangeburg sewer laterals fighting tree roots every spring. We deal with this every week. We can clear roots, schedule annual maintenance jetting to keep them at bay, and quote a trenchless or open-cut replacement when the line is past saving.",
      "And we leave the workspace cleaner than we found it. Drop cloths down, line cleared, line camera-verified clear before we pack up, written notes on what we found and what to watch for. No surprise charges — flat-rate pricing quoted before we touch a thing.",
    ],
    points: [
      "Kitchen, bathroom & laundry drain clearing",
      "Main sewer line snaking & hydro-jetting",
      "Sewer camera inspection & locating",
      "Tree root removal from sewer laterals",
      "Floor drain & basement backup clearing",
      "Recurring-clog diagnosis & permanent fix",
      "Annual maintenance jetting plans",
      "Trenchless sewer repair quotes",
    ],
    whatWeDo: [
      { title: "Camera Inspection First", desc: "We scope the line before we start so we know exactly what's down there — roots, grease, scale, or a broken section — instead of guessing. Often included free with the clearing service." },
      { title: "Snaking & Augering", desc: "Hand augers for tub and sink traps; sectional cable machines for branch lines and main sewers. The right cable head for the right blockage — no shortcuts." },
      { title: "Hydro-Jetting", desc: "High-pressure water jetting (up to 4,000 PSI) to scour pipe walls clean of grease, scale, and root matter. The closest thing to a brand-new line without digging." },
      { title: "Root Removal", desc: "Cutting heads and root-killing foam treatment for the clay-tile sewer laterals common in older Niagara neighbourhoods. Plus annual maintenance plans to keep them clear." },
      { title: "Sewer Locating", desc: "Sonde-and-receiver locating to mark the depth and path of your sewer lateral on the surface — essential before any repair, replacement, or landscaping work." },
      { title: "Recurring Clog Diagnosis", desc: "If a drain keeps clogging, the problem isn't the clog — it's the pipe. We find the underlying cause (belly, offset joint, partial collapse, undersized line) and quote a real fix." },
    ],
    whyUs: [
      "Camera inspection so you see the actual problem",
      "Flat-rate pricing — quoted before we work",
      "Same-day service across the Niagara Region",
      "Workmanship warrantied in writing",
      "Clean job site — drop cloths down, mess cleaned up",
      "Honest repair-vs-replace advice with the camera footage to back it up",
    ],
    faqs: [
      {
        q: "How much does drain cleaning cost in Niagara?",
        a: "Most branch-line clogs (kitchen sink, tub, laundry) are flat-rate in the $200–$400 range. Main sewer line clearing typically runs $350–$650 depending on access and severity. Hydro-jetting is more, but is permanent in a way snaking isn't. We quote in writing before any work starts.",
      },
      {
        q: "What's the difference between snaking and hydro-jetting?",
        a: "Snaking punches a hole through the clog so water flows again — it's the right tool for a hard blockage like roots or a foreign object. Hydro-jetting uses high-pressure water to scour the entire inside of the pipe back to bare wall, removing grease, scale, and root matter. Jetting lasts much longer and is the right choice for grease or recurring clogs.",
      },
      {
        q: "Why do my drains keep clogging in the same spot?",
        a: "Recurring clogs in the same place almost always mean the pipe itself has a problem — a belly (sag), an offset joint, a partial collapse, or root intrusion. Snaking it again won't fix that. We'll camera-scope the line, show you the footage, and quote a permanent repair.",
      },
      {
        q: "Can you clear tree roots from my sewer line?",
        a: "Yes — root cutting heads on a sectional cable machine clear the line, and a hydro-jetting pass scours the walls. We can also apply a foaming root inhibitor to slow regrowth, and set you up on an annual maintenance plan if your line is prone (most clay-tile laterals in older Niagara neighbourhoods are).",
      },
      {
        q: "Do I need a camera inspection?",
        a: "If it's a one-time slow sink, no. If you have repeat backups, a sewage smell, slow drains throughout the house, or you're buying an older home — yes, absolutely. A 20-minute camera scope tells us (and you) exactly what's going on inside the pipe, with no guesswork.",
      },
      {
        q: "Will hydro-jetting damage my pipes?",
        a: "Not when it's done right. Modern jetting equipment is calibrated for the pipe material — we run lower pressures on older clay or cast iron, higher pressures on PVC and ABS. We scope the line first; if a section is structurally compromised, we'll tell you before we jet, not after.",
      },
    ],
  },
  {
    slug: "emergency-plumber",
    icon: Siren,
    title: "Emergency Plumber",
    shortDesc:
      "24/7 emergency plumbing across Niagara — burst pipes, sewage backups, no hot water, flooding. Real local techs, fast dispatch.",
    metaDescription:
      "24/7 emergency plumber in the Niagara Region. Burst pipes, sewage backups, flooding & no-water emergencies — fast local response. Call 289-488-1007.",
    hero: "Plumbing emergency? We answer the phone. 24/7.",
    longDesc: [
      "When a pipe bursts at 2am, a sewage line backs up into your basement, or you wake up to no hot water on the coldest morning of the year — you don't need a call centre in another province routing you to a sub-contractor who shows up tomorrow. You need a real Niagara plumber on the phone right now, and a truck headed to your house.",
      "Ottr Plumr runs 24/7 emergency dispatch for the entire Niagara Region — Welland, St. Catharines, Niagara Falls, Thorold, Fort Erie, Port Colborne, Lincoln, Grimsby, Pelham, Niagara-on-the-Lake, West Lincoln, and Wainfleet. Call 289-488-1007 any hour, any day, including holidays. A real local technician answers, takes your details, gives you an honest arrival window, and tells you exactly what to do in the meantime to limit damage (where to shut the water off, which valve to close, whether to power down the breaker).",
      "We carry the parts and tools to fix most emergencies on the first visit: burst-pipe repairs, frozen line thawing, water heater swap-outs, sewage ejector repair, sump pump replacement, main shut-off valve replacement, and emergency drain clearing. If we can't finish the job that night, we make the home safe and dry, then come back first thing in the morning to complete the work — and the after-hours rate covers the emergency call, not a second visit to finish.",
      "And here's what we won't do at 2am: pressure-sell you a system you don't need, hide the price until the work is done, or charge you a 'diagnostic fee' on top of an emergency call when the problem is obvious. Flat-rate pricing in writing before we work — same as a daytime call, with a clearly-disclosed after-hours surcharge. No games when you're already having a bad night.",
    ],
    points: [
      "24/7 live dispatch — a real tech answers",
      "Burst & frozen pipe repair",
      "Sewage backup & flooding response",
      "No-hot-water emergency service",
      "Sump pump failure response",
      "Main water shut-off valve repair",
      "After-hours water heater replacement",
      "Holiday and weekend coverage",
    ],
    whatWeDo: [
      { title: "Burst Pipe Repair", desc: "Fast isolation, drain-down, and repair of burst supply lines — copper, PEX, or galvanized. We'll also tell you why it burst so it doesn't happen again next winter." },
      { title: "Sewage Backup Response", desc: "Sewage ejection from basements and crawlspaces, main-line clearing, and contamination cleanup coordination. We handle the plumbing fix; we'll refer trusted restoration partners for the cleanup." },
      { title: "Frozen Pipe Thawing", desc: "Safe, controlled thawing of frozen water lines using heat tape and warm-air methods — never an open flame. Plus immediate insulation recommendations for the source of the freeze." },
      { title: "No-Heat Emergency", desc: "After-hours furnace and boiler diagnosis and repair so your house isn't 5°C by morning. We carry common ignition, blower, and zone-valve parts on the truck." },
      { title: "Water Heater Failure", desc: "Tank failures, no-hot-water diagnosis, and emergency replacement — including same-night swap-outs when a tank ruptures and floods a utility room." },
      { title: "Main Shut-Off & Valve Failure", desc: "If your main shut-off won't close (or is leaking), the whole house is at risk. We coordinate with the municipality if needed and replace the valve same day." },
    ],
    whyUs: [
      "A real local technician answers — not a national call centre",
      "24/7/365 dispatch — including holidays",
      "Flat-rate pricing in writing before we work",
      "After-hours surcharge clearly disclosed up front",
      "Common parts on the truck — most emergencies fixed first visit",
      "Workmanship warrantied just like a daytime call",
    ],
    faqs: [
      {
        q: "Do you really answer the phone 24/7?",
        a: "Yes — 289-488-1007 rings to a real Ottr Plumr technician any hour of any day, including holidays. No call centre, no leave-a-message, no 'someone will call you back tomorrow.' If you have an active emergency, we dispatch a truck.",
      },
      {
        q: "How fast can you get to my house?",
        a: "For an active emergency in the Niagara Region, typical arrival is within 60–90 minutes, often faster. We'll give you an honest arrival window when you call and a heads-up text when the technician is on the way.",
      },
      {
        q: "How much does an emergency call cost?",
        a: "There's a clearly-disclosed after-hours surcharge on top of standard flat-rate pricing for the work itself — quoted in writing before we start. Most full emergency repairs land in the $400–$1,200 range depending on the issue. We'll quote your specific situation on the phone before dispatching.",
      },
      {
        q: "What should I do while I wait for the plumber?",
        a: "Step one: shut the water off. The main shut-off is usually in the basement near the water meter. For a burst pipe, also shut off the breaker for any electrical panel near the leak. For a sewage backup, stop using all drains and toilets in the house. Our dispatcher will walk you through exactly what to do for your situation.",
      },
      {
        q: "Do you cover my city after hours?",
        a: "Yes — we cover all 12 cities in the Niagara Region 24/7: Welland, St. Catharines, Niagara Falls, Thorold, Fort Erie, Port Colborne, Lincoln, Grimsby, Pelham, Niagara-on-the-Lake, West Lincoln, and Wainfleet.",
      },
      {
        q: "What counts as a real plumbing emergency?",
        a: "Active leaks you can't shut off, burst pipes, sewage backing up into the home, no water at all, no hot water in winter, no heat in winter, and any plumbing issue actively causing property damage. If you're unsure, call us — we'll help you decide whether it can wait until morning.",
      },
    ],
  },
];

export const getServiceBySlug = (slug?: string) => SERVICES.find((s) => s.slug === slug);
