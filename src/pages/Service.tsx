import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CalendarCheck, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, SERVICES } from "@/lib/services";
import { CITIES } from "@/lib/cities";
import { JOBBER_BOOK_URL, PHONE_DISPLAY, PHONE_TEL, REVIEWS } from "@/lib/site";
import { useSeo } from "@/hooks/use-seo";

const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useSeo({
    title: service ? `${service.title} in Niagara | Ottr Plumr` : "Service | Ottr Plumr",
    description: service?.metaDescription ?? "Plumbing & heating services in the Niagara Region.",
    canonicalPath: service ? `/services/${service.slug}` : "/services",
    noIndex: !service,
    jsonLd: service
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.metaDescription,
            provider: {
              "@type": "PlumbingService",
              name: "Ottr Plumr",
              telephone: PHONE_TEL,
              areaServed: "Niagara Region, Ontario, Canada",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "50",
              },
            },
            areaServed: "Niagara Region, Ontario",
            url: `https://plumr.ca/services/${service.slug}`,
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://plumr.ca/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://plumr.ca/services" },
              { "@type": "ListItem", position: 3, name: service.title, item: `https://plumr.ca/services/${service.slug}` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]
      : undefined,
  });

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div>
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container max-w-4xl text-center">
          <nav aria-label="Breadcrumb" className="text-sm text-foreground/70 flex flex-wrap justify-center items-center gap-1.5">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span>/</span>
            <span className="font-semibold text-primary">{service.title}</span>
          </nav>
          <div className="h-16 w-16 rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-soft mx-auto mt-6">
            <Icon className="h-8 w-8" />
          </div>
          <p className="font-script text-2xl text-accent mt-4">{service.title}</p>
          <h1 className="font-display text-4xl md:text-6xl text-primary mt-1">
            {service.hero}
          </h1>
          <p className="text-foreground/80 mt-5 text-lg">{service.shortDesc}</p>
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
            <p className="font-script text-2xl text-accent">About this service</p>
            <h2 className="font-display text-3xl md:text-4xl text-primary">
              {service.title} in the Niagara Region
            </h2>
            {service.longDesc.map((p, i) => (
              <p key={i} className="text-foreground/80 text-lg leading-relaxed">{p}</p>
            ))}
          </div>
          <aside className="stamp-card p-7 h-fit">
            <h3 className="font-display text-xl text-primary mb-4">What's included</h3>
            <ul className="space-y-2.5">
              {service.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-script text-2xl text-accent">What we do</p>
            <h2 className="font-display text-4xl text-primary mt-1">Specialties under {service.title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {service.whatWeDo.map((w) => (
              <article key={w.title} className="stamp-card p-6">
                <h3 className="font-display text-xl text-primary mb-2">{w.title}</h3>
                <p className="text-sm text-foreground/75">{w.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-script text-2xl text-accent">Why Ottr Plumr</p>
            <h2 className="font-display text-3xl md:text-4xl text-primary mt-1">
              Local. Honest. Warrantied.
            </h2>
            <p className="text-foreground/75 mt-4">
              We earn the call back by doing the job right the first time — and being straight
              with you about what your home or business actually needs.
            </p>
          </div>
          <ul className="grid gap-3">
            {service.whyUs.map((w) => (
              <li key={w} className="flex items-start gap-3 stamp-card p-4">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="font-medium">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <p className="font-script text-2xl text-accent">Common questions</p>
            <h2 className="font-display text-4xl text-primary mt-1">
              {service.title} FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((f) => (
              <article key={f.q} className="stamp-card p-6">
                <h3 className="font-display text-lg text-primary">{f.q}</h3>
                <p className="text-foreground/75 mt-2">{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* CITY LINKS — service × city pages */}
      <section className="container py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="font-script text-2xl text-accent">Where we work</p>
          <h2 className="font-display text-3xl text-primary mt-1">
            {service.title} across the Niagara Region
          </h2>
          <p className="text-foreground/75 mt-3">
            Local {service.title.toLowerCase()} in every city — pick yours.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              to={`/services/${service.slug}/${c.slug}`}
              className="px-4 py-2 rounded-full bg-card border-2 border-foreground/10 text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors inline-flex items-center gap-1.5"
            >
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {service.title} in {c.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="font-script text-2xl text-accent">Explore more</p>
          <h2 className="font-display text-3xl text-primary mt-1">Other services</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((s) => {
            const OIcon = s.icon;
            return (
              <Link key={s.slug} to={`/services/${s.slug}`} className="stamp-card p-6 hover:shadow-soft transition-shadow group">
                <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-4 shadow-soft">
                  <OIcon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl text-primary mb-1 group-hover:underline">{s.title}</h3>
                <p className="text-sm text-foreground/75">{s.shortDesc}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-deep text-primary-foreground py-16">
        <div className="container text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">Ready to book {service.title.toLowerCase()}?</h2>
          <p className="opacity-85 mt-3">Same-day service available across the Niagara Region.</p>
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
    </div>
  );
};

export default ServicePage;
