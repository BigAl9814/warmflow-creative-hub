import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight, Building2, CalendarCheck, CheckCircle2, Droplets, Flame,
  Home as HomeIcon, MapPin, Phone, ShieldCheck, Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/FAQ";
import { CITIES } from "@/lib/cities";
import { JOBBER_BOOK_URL, PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/lib/site";
import { useSeo } from "@/hooks/use-seo";

const services = [
  { icon: HomeIcon, title: "Residential Plumbing", desc: "Drains, leaks, faucets, fixtures, re-pipes and renovations." },
  { icon: Building2, title: "Commercial Plumbing", desc: "Shops, offices, restaurants, and industrial sites." },
  { icon: Flame, title: "Heating Systems", desc: "Furnaces, boilers, and radiant in-floor heat." },
  { icon: Droplets, title: "Water Heaters", desc: "Tank and tankless install, replace, and service." },
  { icon: ShieldCheck, title: "Sump Pumps", desc: "New installs, replacements, and battery backup systems." },
  { icon: Wrench, title: "Repairs & Diagnostics", desc: "Honest diagnosis, fair price, warrantied work." },
];

const ServiceAreaPage = () => {
  const { slug } = useParams();
  const city = CITIES.find((c) => c.slug === slug);

  useSeo({
    title: city
      ? `Plumbing & Heating in ${city.name}, Niagara | Ottr Plumr`
      : "Service Area | Ottr Plumr",
    description: city
      ? `Local plumbing & heating in ${city.name}: drains, water heaters, sump pumps, furnaces & 24/7 emergency service. Call Ottr Plumr at 289-488-1007.`
      : "Niagara plumbing & heating service areas.",
    canonicalPath: city ? `/service-areas/${city.slug}` : "/service-areas",
    noIndex: !city,
    jsonLd: city
      ? {
          "@context": "https://schema.org",
          "@type": "PlumbingService",
          name: `Ottr Plumr — ${city.name}`,
          telephone: PHONE_TEL,
          email: EMAIL,
          url: `https://plumr.ca/service-areas/${city.slug}`,
          areaServed: { "@type": "City", name: city.name, containedInPlace: "Niagara Region, Ontario, Canada" },
          address: {
            "@type": "PostalAddress",
            addressLocality: city.name,
            addressRegion: "ON",
            addressCountry: "CA",
          },
        }
      : undefined,
  });

  if (!city) return <Navigate to="/service-areas" replace />;

  return (
    <div>
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container max-w-4xl text-center">
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
          >
            <MapPin className="h-4 w-4" /> All service areas
          </Link>
          <p className="font-script text-2xl text-accent mt-4">Local service in</p>
          <h1 className="font-display text-5xl md:text-6xl text-primary mt-1">
            {city.name} plumbing &amp; heating
          </h1>
          <p className="text-foreground/80 mt-5 text-lg">{city.blurb}</p>
          <div className="flex flex-wrap justify-center gap-3 mt-7">
            <Button asChild variant="hero" size="lg">
              <a href={`tel:${PHONE_TEL}`}><Phone /> Call {PHONE_DISPLAY}</a>
            </Button>
            <Button asChild variant="deep" size="lg">
              <a href={JOBBER_BOOK_URL} target="_blank" rel="noopener noreferrer">
                <CalendarCheck /> Book Online
              </a>
            </Button>
          </div>
        </div>
        <div className="water-band h-10 mt-12" aria-hidden="true" />
      </section>

      <section className="container py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-script text-2xl text-accent">What we offer in {city.name}</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-1">Full-service, every service</h2>
          <p className="text-foreground/75 mt-4">
            One trusted local crew for every plumbing and heating need — residential or commercial.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article key={s.title} className="stamp-card p-6">
              <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-4 shadow-soft">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl text-primary mb-1">{s.title}</h3>
              <p className="text-sm text-foreground/75">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {city.neighbourhoods && city.neighbourhoods.length > 0 && (
        <section className="container pb-8">
          <div className="stamp-card p-8 md:p-10">
            <p className="font-script text-2xl text-accent">Neighbourhoods we serve</p>
            <h2 className="font-display text-3xl text-primary mt-1 mb-5">Across {city.name}</h2>
            <div className="flex flex-wrap gap-2">
              {city.neighbourhoods.map((n) => (
                <span
                  key={n}
                  className="px-4 py-2 rounded-full bg-secondary text-sm font-semibold inline-flex items-center gap-1.5"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> {n}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-gradient-deep text-primary-foreground py-16">
        <div className="container text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">Need a {city.name} plumber today?</h2>
          <p className="opacity-85 mt-3">24/7 emergency service. Honest pricing. Warrantied work.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Button asChild variant="hero" size="lg">
              <a href={`tel:${PHONE_TEL}`}><Phone /> {PHONE_DISPLAY}</a>
            </Button>
            <Button asChild size="lg" className="bg-card text-primary hover:bg-card/90">
              <Link to="/contact">Get a Quote <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default ServiceAreaPage;
