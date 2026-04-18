export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  city?: string;
  citySlug?: string;
  service?: string;
  serviceSlug?: string;
  publishedAt: string; // ISO
  readMinutes: number;
  // Body is structured so we can render headings, paragraphs, and lists.
  body: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
  >;
};

export const POSTS: Post[] = [
  {
    slug: "frozen-pipes-welland-prevention",
    title: "Frozen Pipes in Welland: How to Prevent Them (and What to Do if They Burst)",
    excerpt:
      "Welland winters can drop fast. Here's exactly how local homeowners can prevent frozen pipes — and what to do if it's already too late.",
    metaDescription:
      "Frozen pipes in Welland, ON? Learn how to prevent and thaw them safely, plus when to call an emergency plumber. Local advice from Ottr Plumr.",
    city: "Welland",
    citySlug: "welland",
    service: "Repairs & Diagnostics",
    serviceSlug: "repairs-diagnostics",
    publishedAt: "2025-11-12",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "If you've lived through a Welland winter, you already know — when the wind whips off the canal and overnight temperatures plunge into the negatives, exposed pipes become a real liability. Frozen pipes are one of the most common emergency calls we get across the Niagara Region, and they're almost always preventable.",
      },
      { type: "h2", text: "Why Welland homes are especially at risk" },
      {
        type: "p",
        text: "Welland's older neighbourhoods like Crowland, Dain City, and Cooks Mills have plenty of homes built before modern insulation standards. Crawlspaces, unheated basements, and exterior wall plumbing runs are common — and those are exactly the spots that freeze first when the temperature drops below -10°C.",
      },
      { type: "h2", text: "5 prevention steps every Welland homeowner should take" },
      {
        type: "ul",
        items: [
          "Insulate any exposed pipes in basements, crawlspaces, attics, and garages with foam pipe sleeves.",
          "On extreme cold nights, let one or two faucets drip — moving water resists freezing.",
          "Open kitchen and bathroom cabinet doors so warm air reaches plumbing on exterior walls.",
          "Disconnect garden hoses and shut off the interior valves to outdoor spigots before the first hard freeze.",
          "Keep your thermostat at 18°C (65°F) or higher overnight — even if you're away.",
        ],
      },
      { type: "h2", text: "What to do if a pipe freezes" },
      {
        type: "p",
        text: "If you turn on a tap and only get a trickle, suspect a freeze. Shut off your main water valve immediately — if the pipe has cracked, you want to limit the damage when it thaws. Then call a licensed plumber. Never use an open flame to thaw a pipe; we use safe heating cables and warm towels to thaw without splitting the line.",
      },
      { type: "h2", text: "Burst pipe? Call us 24/7" },
      {
        type: "p",
        text: "If you're already standing in water, every minute matters. Ottr Plumr runs 24/7 emergency service across Welland and the entire Niagara Region. Call 289-488-1007 — we'll dispatch fast and stop the damage.",
      },
    ],
  },
  {
    slug: "tankless-vs-tank-water-heater-niagara",
    title: "Tankless vs Tank Water Heater in Niagara: Which Should You Choose?",
    excerpt:
      "Tankless water heaters get all the hype, but they're not always the right call. Here's our honest, Niagara-specific breakdown.",
    metaDescription:
      "Tankless vs tank water heater in the Niagara Region — costs, lifespan, and which makes sense for your home. Honest advice from Ottr Plumr.",
    city: "Niagara Region",
    service: "Water Heaters",
    serviceSlug: "water-heaters",
    publishedAt: "2025-11-05",
    readMinutes: 7,
    body: [
      {
        type: "p",
        text: "We get this question on almost every water heater replacement quote in St. Catharines, Niagara Falls, and Welland: \"Should I switch to tankless?\" The honest answer is — it depends. Here's a no-nonsense breakdown to help you decide before your old tank lets go in the middle of a shower.",
      },
      { type: "h2", text: "How each system works" },
      {
        type: "h3",
        text: "Conventional tank",
      },
      {
        type: "p",
        text: "A tank water heater stores 40–75 gallons of pre-heated water, ready to go. When you draw hot water, the tank refills and reheats. Simple, proven, affordable — but you're heating water 24/7 even when you don't use it.",
      },
      { type: "h3", text: "Tankless (on-demand)" },
      {
        type: "p",
        text: "A tankless unit fires up only when you turn on a hot tap, heating water as it flows through. No standby losses, smaller footprint, longer lifespan — but a higher upfront cost and sometimes a need for upgraded gas lines or venting.",
      },
      { type: "h2", text: "Cost comparison (Niagara averages)" },
      {
        type: "ul",
        items: [
          "Tank install: typically $1,800–$2,800 supplied and installed.",
          "Tankless install: typically $4,500–$6,500 depending on gas, venting, and electrical upgrades.",
          "Tank lifespan: 8–12 years.",
          "Tankless lifespan: 18–22 years with annual descaling.",
          "Annual energy savings with tankless: roughly 20–35% of your hot water heating cost.",
        ],
      },
      { type: "h2", text: "When tankless makes sense" },
      {
        type: "ul",
        items: [
          "Larger households (4+ people) with overlapping showers and laundry.",
          "Homes where floor space is at a premium.",
          "Long-term homeowners who'll recoup the upfront cost over 10+ years.",
          "Anyone planning a major reno where gas and venting are already being touched.",
        ],
      },
      { type: "h2", text: "When a tank is still the smart pick" },
      {
        type: "ul",
        items: [
          "Tight budget — you need hot water back today.",
          "Smaller households with predictable usage.",
          "Older homes with limited gas line capacity.",
          "Rental properties where ROI math doesn't pencil out.",
        ],
      },
      { type: "h2", text: "Get a real quote, not a sales pitch" },
      {
        type: "p",
        text: "We've installed both across every city in Niagara — and we'll tell you straight which one fits your home and your budget. Call 289-488-1007 for a free water heater consultation.",
      },
    ],
  },
  {
    slug: "basement-flooding-st-catharines-spring",
    title: "Basement Flooding in St. Catharines: Why Spring is the Worst (and How to Be Ready)",
    excerpt:
      "From snowmelt to spring storms, St. Catharines basements take a beating in March and April. Here's how to keep yours dry.",
    metaDescription:
      "Prevent basement flooding in St. Catharines. Sump pump tips, backup options, and emergency response from Ottr Plumr Plumbing & Heating.",
    city: "St. Catharines",
    citySlug: "st-catharines",
    service: "Sump Pumps",
    serviceSlug: "sump-pumps",
    publishedAt: "2025-10-28",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "St. Catharines homes — especially in older neighbourhoods like Western Hill, Glenridge, and Merritton — are vulnerable to basement flooding every spring. The combination of melting snow, saturated ground, and heavy April rains pushes the local water table up and overwhelms unprepared sump systems.",
      },
      { type: "h2", text: "Why spring floods St. Catharines basements" },
      {
        type: "p",
        text: "Two things happen in March and April: the frozen ground thaws and can no longer absorb water, and our spring storm cycle dumps an enormous amount of rain in short bursts. If your sump pump is undersized, your discharge line is clogged, or you don't have a battery backup — you're rolling the dice.",
      },
      { type: "h2", text: "5 things to do before April" },
      {
        type: "ul",
        items: [
          "Test your sump pump now — pour a bucket of water in the pit and confirm the float trips and the pump fully drains it.",
          "Inspect the discharge line for cracks, ice, or clogs and make sure it points well away from your foundation.",
          "Add a battery backup pump — 80% of basement floods happen during storms that knock out power.",
          "Install a water alarm in the pit so you get an alert before it overflows.",
          "Replace any sump pump older than 8 years — they almost always fail under load, not at rest.",
        ],
      },
      { type: "h2", text: "Already flooding? Here's what to do" },
      {
        type: "p",
        text: "If you have water coming in right now: cut power to the basement at the breaker before stepping in. Move valuables to higher ground. Then call us — we run 24/7 emergency service and can usually have a tech in St. Catharines within the hour.",
      },
    ],
  },
  {
    slug: "furnace-not-heating-niagara-falls",
    title: "Furnace Not Heating in Niagara Falls? 7 Things to Check Before You Call",
    excerpt:
      "Before you call a no-heat emergency, run through this 5-minute homeowner checklist. Half the time, you can fix it yourself.",
    metaDescription:
      "Furnace not heating in Niagara Falls? Try these 7 quick fixes first. If you still need help, Ottr Plumr offers 24/7 emergency furnace service.",
    city: "Niagara Falls",
    citySlug: "niagara-falls",
    service: "Heating Systems",
    serviceSlug: "heating-systems",
    publishedAt: "2025-10-15",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "Furnace stopped blowing warm air? Don't panic — and don't necessarily book an after-hours service call yet. Niagara Falls homeowners can often resolve a no-heat issue in five minutes with this checklist before paying for an emergency dispatch.",
      },
      { type: "h2", text: "1. Check the thermostat" },
      {
        type: "p",
        text: "Make sure it's set to HEAT, the temperature is set above the room temperature, and the batteries (if applicable) aren't dead. It sounds obvious — it's the #1 cause of \"my furnace isn't working\" calls.",
      },
      { type: "h2", text: "2. Replace the air filter" },
      {
        type: "p",
        text: "A clogged filter can cause your furnace to overheat and shut down on a safety. If your filter looks grey or you can't remember the last time you changed it — change it now and try again.",
      },
      { type: "h2", text: "3. Check the breaker and furnace switch" },
      {
        type: "p",
        text: "Most furnaces have a regular wall switch (looks like a light switch) on or near the unit. Make sure it's ON. Then check your electrical panel for a tripped breaker.",
      },
      { type: "h2", text: "4. Confirm gas is on" },
      {
        type: "p",
        text: "Check that the gas valve at the furnace is in the open position and that other gas appliances in your home are working.",
      },
      { type: "h2", text: "5. Look for a blinking diagnostic light" },
      {
        type: "p",
        text: "Most modern furnaces have an LED behind a small viewing window that blinks an error code. Count the blinks and look up your model — it'll tell you exactly what's wrong.",
      },
      { type: "h2", text: "6. Check the condensate drain" },
      {
        type: "p",
        text: "High-efficiency furnaces can shut down if the condensate line is clogged. If you see water around the unit, this is likely the cause.",
      },
      { type: "h2", text: "7. Cycle the power" },
      {
        type: "p",
        text: "Turn the furnace switch off, wait 30 seconds, and turn it back on. Sometimes the control board just needs a reset.",
      },
      { type: "h2", text: "Still no heat?" },
      {
        type: "p",
        text: "Call us at 289-488-1007. We respond to no-heat emergencies in Niagara Falls 24/7, and we'll always quote the repair before we start work.",
      },
    ],
  },
  {
    slug: "clogged-drain-niagara-diy-vs-pro",
    title: "Clogged Drain in Niagara: DIY Fixes vs When to Call a Plumber",
    excerpt:
      "Some clogs you can clear with a plunger. Others need a camera and a snake. Here's how to tell the difference before you make it worse.",
    metaDescription:
      "Clogged drain in the Niagara Region? Learn which DIY fixes work, what to avoid (chemical drain cleaners!), and when to call Ottr Plumr.",
    city: "Niagara Region",
    service: "Residential Plumbing",
    serviceSlug: "residential-plumbing",
    publishedAt: "2025-10-02",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "A slow drain doesn't always mean a service call. But the wrong DIY fix — especially harsh chemical drain cleaners — can damage your pipes and turn a $200 problem into a $2,000 one. Here's our honest field guide.",
      },
      { type: "h2", text: "Try these DIY fixes first" },
      {
        type: "ul",
        items: [
          "Plunger — works on toilets, tubs, and sinks. Cover the overflow with a wet rag for a better seal.",
          "Boiling water + dish soap — great for grease clogs in kitchen sinks.",
          "Baking soda + vinegar + hot water flush — gentle and pipe-safe.",
          "Plastic drain snake (the cheap zip kind) — surprisingly effective on hair clogs in bathroom sinks and tubs.",
        ],
      },
      { type: "h2", text: "Avoid chemical drain cleaners" },
      {
        type: "p",
        text: "Drano and similar products are caustic. They can soften PVC, corrode metal pipes over time, and create a hazardous situation for any plumber who has to open the line afterward. Skip them.",
      },
      { type: "h2", text: "When to call a plumber" },
      {
        type: "ul",
        items: [
          "Multiple drains backed up at once — points to a main line clog.",
          "Sewage smell or gurgling sounds — possible vent or sewer issue.",
          "Recurring clogs in the same spot — there's a deeper cause your plunger can't reach.",
          "Water backing up into a different fixture when you flush — a serious main line problem.",
          "Standing water that won't move after a thorough plunge.",
        ],
      },
      { type: "h2", text: "What we do" },
      {
        type: "p",
        text: "For tough clogs we run a camera to see exactly what's happening — roots, grease buildup, broken pipes, or foreign objects — then clear it with the right tool: snake, hydro-jet, or repair if needed. No guessing, no upsell. Call 289-488-1007 across Niagara.",
      },
    ],
  },
  {
    slug: "annual-plumbing-maintenance-checklist-niagara",
    title: "Annual Plumbing Maintenance Checklist for Niagara Homeowners",
    excerpt:
      "An hour of maintenance each year saves thousands in emergency repairs. Here's what every Niagara homeowner should check.",
    metaDescription:
      "Annual home plumbing maintenance checklist for Niagara Region homeowners. Prevent leaks, clogs, and water heater failures with these simple steps.",
    city: "Niagara Region",
    service: "Repairs & Diagnostics",
    serviceSlug: "repairs-diagnostics",
    publishedAt: "2025-09-20",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "We see the same preventable failures over and over: water heaters that rusted through, sump pumps that seized up, valves that won't close when they're needed most. An hour of preventive maintenance every year keeps your plumbing system running and saves you from 3 a.m. emergency calls.",
      },
      { type: "h2", text: "Spring (March – May)" },
      {
        type: "ul",
        items: [
          "Test your sump pump and check the discharge line.",
          "Inspect outdoor spigots for freeze damage and reattach garden hoses.",
          "Check washing machine hoses for bulges or cracks — replace every 5 years.",
          "Walk the basement looking for any signs of moisture or staining.",
        ],
      },
      { type: "h2", text: "Summer (June – August)" },
      {
        type: "ul",
        items: [
          "Drain and flush your water heater to remove sediment.",
          "Inspect the anode rod (replace if more than 50% consumed).",
          "Check toilet flappers and fill valves — silent leaks waste thousands of litres per year.",
          "Test all main shutoff valves to ensure they still turn.",
        ],
      },
      { type: "h2", text: "Fall (September – November)" },
      {
        type: "ul",
        items: [
          "Book a furnace tune-up before heating season.",
          "Disconnect outdoor hoses and shut off interior valves to outdoor spigots.",
          "Insulate any exposed pipes in unheated areas.",
          "Test smoke and CO detectors — especially near gas appliances.",
        ],
      },
      { type: "h2", text: "Winter (December – February)" },
      {
        type: "ul",
        items: [
          "On extreme cold nights, drip faucets on exterior walls.",
          "Open cabinets under sinks on exterior walls to circulate warm air.",
          "Know where your main shutoff valve is — and make sure it works.",
          "Keep the thermostat at 18°C (65°F) minimum, even when away.",
        ],
      },
      { type: "h2", text: "Want a pro to do it for you?" },
      {
        type: "p",
        text: "Ottr Plumr offers annual maintenance plans across Niagara — one visit, one flat price, every check on this list and more. Call 289-488-1007 to set yours up.",
      },
    ],
  },
];

export const getPostBySlug = (slug?: string) => POSTS.find((p) => p.slug === slug);
