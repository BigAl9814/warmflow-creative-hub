import { Link } from "react-router-dom";
import { Building2, Droplets, Flame, Home as HomeIcon, ShieldCheck, Wrench, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: HomeIcon,
    title: "Residential Plumbing",
    desc: "Whole-home plumbing service for Niagara families — drains, faucets, fixtures, leaks, re-pipes, and renovations.",
    points: ["Leak detection & repair", "Drain cleaning & camera inspection", "Faucet, toilet & fixture install", "Kitchen & bath renovations"],
  },
  {
    icon: Building2,
    title: "Commercial Plumbing",
    desc: "Dependable service for retail, office, restaurant, and industrial clients. We work around your schedule, not the other way around.",
    points: ["Backflow prevention", "Commercial fixture install", "Emergency response", "Preventive maintenance"],
  },
  {
    icon: Flame,
    title: "Heating Systems",
    desc: "Stay warm all winter. Furnace, boiler, and radiant heat install, repair, and tune-ups across the Niagara Region.",
    points: ["Furnace install & repair", "Boiler service", "Radiant in-floor heating", "Annual tune-ups"],
  },
  {
    icon: Droplets,
    title: "Water Heaters",
    desc: "Hot water, every time. We install, replace, and service tank and tankless systems sized properly for your home or business.",
    points: ["Tankless install", "Tank replacement", "Same-day service", "Energy-efficient upgrades"],
  },
  {
    icon: ShieldCheck,
    title: "Sump Pumps",
    desc: "Don't wait for the next storm. Pro-grade sump pumps and battery backups keep your basement dry year-round.",
    points: ["New install & replacement", "Battery backup systems", "Discharge line service", "Annual testing"],
  },
  {
    icon: Wrench,
    title: "Repairs & Diagnostics",
    desc: "Honest diagnosis. Fair price. We fix what's broken without trying to sell you what isn't.",
    points: ["Upfront pricing", "Same-day appointments", "Warrantied work", "Clean job sites"],
  },
];

const ServicesPage = () => {
  return (
    <div>
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <p className="font-script text-2xl text-accent">Our services</p>
          <h1 className="font-display text-5xl md:text-6xl text-primary mt-1">
            Everything plumbing.<br />Everything heating.
          </h1>
          <p className="text-foreground/80 mt-5 text-lg">
            From a dripping tap to a full commercial install — one trusted local team for it all.
          </p>
        </div>
        <div className="water-band h-10 mt-12" aria-hidden="true" />
      </section>

      <section className="container py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article key={s.title} className="stamp-card p-7">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-14 w-14 rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-soft">
                  <s.icon className="h-7 w-7" />
                </div>
                <h2 className="font-display text-2xl text-primary">{s.title}</h2>
              </div>
              <p className="text-foreground/80">{s.desc}</p>
              <ul className="grid sm:grid-cols-2 gap-2 mt-5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-deep text-primary-foreground py-16">
        <div className="container text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">Don't see what you need?</h2>
          <p className="opacity-85 mt-3">If it involves pipes or heat, we can probably handle it. Just ask.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Button asChild variant="hero" size="lg">
              <a href="tel:+12894881007"><Phone /> Call 289-488-1007</a>
            </Button>
            <Button asChild size="lg" className="bg-card text-primary hover:bg-card/90">
              <Link to="/contact">Get a Quote <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
