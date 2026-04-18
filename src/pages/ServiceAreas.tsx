import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CITIES } from "@/lib/cities";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const ServiceAreasPage = () => {
  return (
    <div>
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <p className="font-script text-2xl text-accent">Where we work</p>
          <h1 className="font-display text-5xl md:text-6xl text-primary mt-1">
            Serving every city in the Niagara Region
          </h1>
          <p className="text-foreground/80 mt-5 text-lg">
            Twelve cities. One trusted local team. Pick yours below for service details and quick contact.
          </p>
        </div>
        <div className="water-band h-10 mt-12" aria-hidden="true" />
      </section>

      <section className="container py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              to={`/service-areas/${c.slug}`}
              className="stamp-card p-6 group hover:-translate-y-1 transition-transform block"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-11 w-11 rounded-xl bg-primary text-primary-foreground grid place-items-center shadow-soft group-hover:bg-accent transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl text-primary">{c.name}</h2>
              </div>
              <p className="text-sm text-foreground/75 line-clamp-3">{c.blurb}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                View services <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gradient-deep text-primary-foreground py-16">
        <div className="container text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">Not sure if we cover your street?</h2>
          <p className="opacity-85 mt-3">If you're in Niagara, we're your local crew. Give us a call.</p>
          <div className="flex justify-center mt-6">
            <Button asChild variant="hero" size="lg">
              <a href={`tel:${PHONE_TEL}`}><Phone /> Call {PHONE_DISPLAY}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreasPage;
