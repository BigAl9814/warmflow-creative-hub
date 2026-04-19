import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/services";
import { useSeo } from "@/hooks/use-seo";

const ServicesPage = () => {
  useSeo({
    title: "Niagara Plumbing & Heating Services | Ottr Plumr",
    description:
      "Full-service plumber & HVAC in Niagara — drain cleaning, water heater install & repair, sump pumps, leak detection, furnace & boiler service. Same-day, licensed, warrantied. Call 289-488-1007.",
    canonicalPath: "/services",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://plumr.ca/services/${s.slug}`,
        name: s.title,
      })),
    },
  });
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
          {SERVICES.map((s) => (
            <article key={s.slug} className="stamp-card p-7 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-14 w-14 rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-soft">
                  <s.icon className="h-7 w-7" />
                </div>
                <h2 className="font-display text-2xl text-primary">{s.title}</h2>
              </div>
              <p className="text-foreground/80">{s.shortDesc}</p>
              <ul className="grid sm:grid-cols-2 gap-2 mt-5">
                {s.points.slice(0, 4).map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-border/60">
                <Button asChild variant="deep" className="w-full sm:w-auto">
                  <Link to={`/services/${s.slug}`}>
                    Learn more <ArrowRight />
                  </Link>
                </Button>
              </div>
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
