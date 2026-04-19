import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight, CalendarCheck, CheckCircle2, MapPin, Phone, AlertTriangle, Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/FAQ";
import { CITIES } from "@/lib/cities";
import { SERVICES } from "@/lib/services";
import { JOBBER_BOOK_URL, PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/lib/site";
import { useSeo, Seo, type SeoOptions } from "@/hooks/use-seo";

const ServiceAreaPage = () => {
  const { slug } = useParams();
  const city = CITIES.find((c) => c.slug === slug);

  const seo: SeoOptions = {
    title: city
      ? `${city.name} Plumber & Heating | 24/7 Local | Ottr Plumr`
      : "Service Area | Ottr Plumr",
    description: city
      ? `Looking for a plumber in ${city.name}? Ottr Plumr handles drain cleaning, water heater install, sump pumps, furnaces & 24/7 emergency plumbing. Same-day, licensed & local. Call 289-488-1007.`
      : "Niagara plumbing & heating service areas.",
    canonicalPath: city ? `/service-areas/${city.slug}` : "/service-areas",
    noIndex: !city,
    jsonLd: city
      ? [
          {
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
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://plumr.ca/" },
              { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://plumr.ca/service-areas" },
              { "@type": "ListItem", position: 3, name: city.name, item: `https://plumr.ca/service-areas/${city.slug}` },
            ],
          },
        ]
      : undefined,
  };
  useSeo(seo);

  if (!city) return <Navigate to="/service-areas" replace />;

  return (
    <div>
      <Seo {...seo} />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container max-w-4xl text-center">
          <nav aria-label="Breadcrumb" className="text-sm text-foreground/70 flex flex-wrap justify-center items-center gap-1.5">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/service-areas" className="hover:underline">Service Areas</Link>
            <span>/</span>
            <span className="font-semibold text-primary">{city.name}</span>
          </nav>
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

      {/* LOCAL CONTEXT — longDesc, common issues, local notes */}
      {(city.longDesc || city.commonIssues || city.localNotes) && (
        <section className="container py-16 md:py-20">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-5">
              <p className="font-script text-2xl text-accent">About {city.name}</p>
              <h2 className="font-display text-3xl md:text-4xl text-primary">
                Plumbing &amp; heating in {city.name}
              </h2>
              {city.longDesc && (
                <p className="text-foreground/80 text-lg leading-relaxed">{city.longDesc}</p>
              )}
              {city.localNotes && (
                <div className="stamp-card p-5 flex items-start gap-3 bg-water/30">
                  <Lightbulb className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/85">
                    <span className="font-semibold text-primary">Local tip:</span> {city.localNotes}
                  </p>
                </div>
              )}
            </div>
            {city.commonIssues && city.commonIssues.length > 0 && (
              <aside className="stamp-card p-7 h-fit">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                  <h3 className="font-display text-xl text-primary">What we see in {city.name}</h3>
                </div>
                <ul className="space-y-2.5">
                  {city.commonIssues.map((issue) => (
                    <li key={issue} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{issue}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </section>
      )}

      <section className="container py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-script text-2xl text-accent">What we offer in {city.name}</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-1">Full-service, every service</h2>
          <p className="text-foreground/75 mt-4">
            One trusted local crew for every plumbing and heating need — residential or commercial.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => {
            const SIcon = s.icon;
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}/${city.slug}`}
                className="stamp-card p-6 group hover:shadow-soft transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-4 shadow-soft group-hover:bg-accent transition-colors">
                  <SIcon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl text-primary mb-1 group-hover:underline">
                  {s.title} in {city.name}
                </h3>
                <p className="text-sm text-foreground/75">{s.shortDesc}</p>
              </Link>
            );
          })}
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

      {/* NEARBY CITIES — internal linking */}
      <section className="container py-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="font-script text-2xl text-accent">Nearby cities</p>
          <h2 className="font-display text-3xl text-primary mt-1">
            We also serve these Niagara communities
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {CITIES.filter((c) => c.slug !== city.slug).map((c) => (
            <Link
              key={c.slug}
              to={`/service-areas/${c.slug}`}
              className="px-4 py-2 rounded-full bg-card border-2 border-foreground/10 text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors inline-flex items-center gap-1.5"
            >
              <MapPin className="h-3.5 w-3.5 text-accent" />
              Plumbing in {c.name}
            </Link>
          ))}
        </div>
      </section>

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
