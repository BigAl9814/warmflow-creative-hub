import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight, CalendarCheck, CheckCircle2, MapPin, Phone, Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, SERVICES } from "@/lib/services";
import { CITIES } from "@/lib/cities";
import {
  JOBBER_BOOK_URL, PHONE_DISPLAY, PHONE_TEL, EMAIL,
} from "@/lib/site";
import { useSeo, Seo, type SeoOptions } from "@/hooks/use-seo";

const ServiceCityPage = () => {
  const { service: serviceSlug, city: citySlug } = useParams();
  const service = getServiceBySlug(serviceSlug);
  const city = CITIES.find((c) => c.slug === citySlug);

  const seo: SeoOptions = {
    title:
      service && city
        ? `${service.title} ${city.name} | 24/7 Local | Ottr Plumr`
        : "Service | Ottr Plumr",
    description:
      service && city
        ? `Need ${service.title.toLowerCase()} in ${city.name}? Ottr Plumr offers same-day, licensed, warrantied service with upfront pricing. 24/7 emergency response across Niagara. Call ${PHONE_DISPLAY}.`
        : "Plumbing & heating in the Niagara Region.",
    canonicalPath:
      service && city ? `/services/${service.slug}/${city.slug}` : "/services",
    noIndex: !(service && city),
    jsonLd:
      service && city
        ? [
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: `${service.title} in ${city.name}`,
              description: `${service.title} for homes and businesses in ${city.name}, Ontario. ${service.shortDesc}`,
              serviceType: service.title,
              provider: {
                "@type": "PlumbingService",
                name: "Ottr Plumr Plumbing & Heating",
                telephone: PHONE_TEL,
                email: EMAIL,
                url: "https://plumr.ca/",
              },
              areaServed: {
                "@type": "City",
                name: city.name,
                containedInPlace: "Niagara Region, Ontario, Canada",
              },
              url: `https://plumr.ca/services/${service.slug}/${city.slug}`,
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://plumr.ca/" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://plumr.ca/services" },
                { "@type": "ListItem", position: 3, name: service.title, item: `https://plumr.ca/services/${service.slug}` },
                { "@type": "ListItem", position: 4, name: city.name, item: `https://plumr.ca/services/${service.slug}/${city.slug}` },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: `Do you offer ${service.title.toLowerCase()} in ${city.name}?`,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `Yes — Ottr Plumr provides ${service.title.toLowerCase()} throughout ${city.name} and the surrounding Niagara Region, with same-day appointments and 24/7 emergency response.`,
                  },
                },
                {
                  "@type": "Question",
                  name: `How fast can a plumber get to ${city.name}?`,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `From our Welland shop we typically reach ${city.name} the same day for non-emergencies and within the hour for true emergencies. Call ${PHONE_DISPLAY} to dispatch.`,
                  },
                },
                ...service.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              ],
            },
          ]
        : undefined,
  };
  useSeo(seo);

  if (!service || !city) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const otherCities = CITIES.filter((c) => c.slug !== city.slug).slice(0, 6);

  return (
    <div>
      <Seo {...seo} />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container max-w-4xl text-center">
          <nav className="text-sm text-foreground/70 flex flex-wrap justify-center items-center gap-1.5">
            <Link to="/services" className="hover:underline">Services</Link>
            <span>/</span>
            <Link to={`/services/${service.slug}`} className="hover:underline">
              {service.title}
            </Link>
            <span>/</span>
            <span className="font-semibold text-primary">{city.name}</span>
          </nav>
          <div className="h-16 w-16 rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-soft mx-auto mt-6">
            <Icon className="h-8 w-8" />
          </div>
          <p className="font-script text-2xl text-accent mt-4">
            {service.title} in
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-primary mt-1">
            {city.name}, Ontario
          </h1>
          <p className="text-foreground/80 mt-5 text-lg">
            Local {service.title.toLowerCase()} for {city.name} homes and
            businesses — same-day service, honest pricing, and workmanship
            warrantied in writing.
          </p>
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
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <p className="font-script text-2xl text-accent">
              Trusted {service.title.toLowerCase()} in {city.name}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-primary">
              Why {city.name} chooses Ottr Plumr
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              {city.blurb}
            </p>
            {service.longDesc.map((p, i) => (
              <p key={i} className="text-foreground/80 text-lg leading-relaxed">
                {p}
              </p>
            ))}
            {city.neighbourhoods && city.neighbourhoods.length > 0 && (
              <p className="text-foreground/80 text-lg leading-relaxed">
                We service every corner of {city.name} —
                including {city.neighbourhoods.slice(0, -1).join(", ")}
                {city.neighbourhoods.length > 1 ? ", and " : ""}
                {city.neighbourhoods[city.neighbourhoods.length - 1]} — usually
                same-day for {service.title.toLowerCase()} calls.
              </p>
            )}
          </div>
          <aside className="stamp-card p-7 h-fit">
            <h3 className="font-display text-xl text-primary mb-4">
              {service.title} includes
            </h3>
            <ul className="space-y-2.5">
              {service.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-foreground/10">
              <p className="text-xs uppercase tracking-wider font-semibold text-foreground/60 mb-1">
                Serving
              </p>
              <p className="font-display text-lg text-primary inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-accent" /> {city.name}, ON
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-script text-2xl text-accent">What's included</p>
            <h2 className="font-display text-4xl text-primary mt-1">
              {service.title} specialties for {city.name}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {service.whatWeDo.map((w) => (
              <article key={w.title} className="stamp-card p-6">
                <h3 className="font-display text-xl text-primary mb-2">
                  {w.title}
                </h3>
                <p className="text-sm text-foreground/75">{w.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="font-script text-2xl text-accent">More in {city.name}</p>
          <h2 className="font-display text-3xl text-primary mt-1">
            Other services we offer in {city.name}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherServices.map((s) => {
            const OIcon = s.icon;
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}/${city.slug}`}
                className="stamp-card p-6 hover:shadow-soft transition-shadow group"
              >
                <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-4 shadow-soft">
                  <OIcon className="h-6 w-6" />
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

      <section className="bg-secondary/40 py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="font-script text-2xl text-accent">
              {service.title} elsewhere in Niagara
            </p>
            <h2 className="font-display text-3xl text-primary mt-1">
              We also offer {service.title.toLowerCase()} in
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                to={`/services/${service.slug}/${c.slug}`}
                className="px-4 py-2 rounded-full bg-card border-2 border-foreground/10 text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                {service.title} in {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-script text-2xl text-accent">FAQs</p>
            <h2 className="font-display text-4xl text-primary mt-1">
              {service.title} in {city.name} — common questions
            </h2>
          </div>
          <div className="space-y-4">
            <article className="stamp-card p-6">
              <h3 className="font-display text-lg text-primary">
                Do you offer {service.title.toLowerCase()} in {city.name}?
              </h3>
              <p className="text-foreground/75 mt-2">
                Yes — Ottr Plumr provides {service.title.toLowerCase()} throughout
                {" "}{city.name} and the surrounding Niagara Region, with same-day
                appointments and 24/7 emergency response.
              </p>
            </article>
            <article className="stamp-card p-6">
              <h3 className="font-display text-lg text-primary">
                How fast can a plumber get to {city.name}?
              </h3>
              <p className="text-foreground/75 mt-2">
                From our Welland shop we typically reach {city.name} the same
                day for non-emergencies and within the hour for true emergencies.
                Call {PHONE_DISPLAY} to dispatch.
              </p>
            </article>
            {service.faqs.map((f) => (
              <article key={f.q} className="stamp-card p-6">
                <h3 className="font-display text-lg text-primary">{f.q}</h3>
                <p className="text-foreground/75 mt-2">{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-deep text-primary-foreground py-16">
        <div className="container text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">
            Need {service.title.toLowerCase()} in {city.name} today?
          </h2>
          <p className="opacity-85 mt-3">
            Same-day service. Honest pricing. Warrantied work.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Button asChild variant="hero" size="lg">
              <a href={`tel:${PHONE_TEL}`}><Phone /> {PHONE_DISPLAY}</a>
            </Button>
            <Button asChild size="lg" className="bg-card text-primary hover:bg-card/90">
              <Link to="/contact">Get a Quote <ArrowRight /></Link>
            </Button>
          </div>
          <div className="mt-6 text-sm opacity-80">
            <Link to={`/services/${service.slug}`} className="hover:underline inline-flex items-center gap-1">
              <Wrench className="h-3.5 w-3.5" /> All {service.title.toLowerCase()}
            </Link>
            <span className="mx-3">·</span>
            <Link to={`/service-areas/${city.slug}`} className="hover:underline inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> All services in {city.name}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCityPage;
