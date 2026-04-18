import { Link } from "react-router-dom";
import { Phone, Wrench, Flame, Droplets, ShieldCheck, Building2, Home, ArrowRight, Star, Clock, CalendarCheck, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroOtter from "@/assets/ottr-mascot.webp";
import heroPond from "@/assets/hero-pond.webp";
import FAQ from "@/components/FAQ";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import { JOBBER_BOOK_URL, PHONE_DISPLAY, PHONE_TEL, REVIEWS, FAQS, EMAIL, ADDRESS } from "@/lib/site";
import { CITIES } from "@/lib/cities";
import { useSeo } from "@/hooks/use-seo";

const services = [
  { icon: Home, title: "Residential Plumbing", desc: "From dripping taps to full re-pipes — done right the first time." },
  { icon: Building2, title: "Commercial Plumbing", desc: "Reliable service for shops, offices, and industrial sites across Niagara." },
  { icon: Flame, title: "Heating Systems", desc: "Install, service, and repair for furnaces, boilers, and radiant heat." },
  { icon: Droplets, title: "Water Heaters", desc: "Tank, tankless, and on-demand systems — sized and installed properly." },
  { icon: ShieldCheck, title: "Sump Pumps", desc: "Keep your basement bone-dry with pro-grade sump pump installs." },
  { icon: Wrench, title: "Repairs & Diagnostics", desc: "Honest assessments, fair pricing, no upsell games." },
];

const HomePage = () => {
  useSeo({
    title: "Ottr Plumr — Plumbing & Heating in Welland & Niagara | 24/7",
    description:
      "Niagara plumbing & heating based at 187 King St, Welland, ON. Drains, water heaters, sump pumps, furnaces & boilers. 24/7 service across St. Catharines, Niagara Falls, Welland & more. Call 289-488-1007.",
    canonicalPath: "/",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "PlumbingService",
        name: "Ottr Plumr Plumbing & Heating",
        image: "https://plumr.ca/og-image.jpg",
        url: "https://plumr.ca/",
        telephone: PHONE_TEL,
        email: EMAIL,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.region,
          postalCode: ADDRESS.postalCode,
          addressCountry: ADDRESS.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 42.9925,
          longitude: -79.2483,
        },
        hasMap: "https://www.google.com/maps/search/?api=1&query=187+King+St+Welland+ON+L3B+3J4",
        areaServed: CITIES.map((c) => ({ "@type": "City", name: c.name })),
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "50" },
        review: REVIEWS.map((r) => ({
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: r.name },
          reviewBody: r.quote,
        })),
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  });
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${heroPond})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" aria-hidden="true" />

        <div className="container relative pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur border-2 border-foreground/10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Clock className="h-3.5 w-3.5" /> 24/7 Service · Niagara Region
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary leading-[0.95]">
              Plumbing &amp;<br />heating you<br />can <span className="text-accent">trust.</span>
            </h1>
            <p className="font-script text-3xl text-reed">Otterly reliable. Professional, start to finish.</p>
            <p className="text-base md:text-lg text-foreground/80 max-w-xl">
              Family-minded service for homes and businesses across every city in the Niagara Region.
              Water heaters, sump pumps, heating systems, and everything in between.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <a href={`tel:${PHONE_TEL}`}><Phone /> Call {PHONE_DISPLAY}</a>
              </Button>
              <Button asChild variant="deep" size="lg">
                <a href={JOBBER_BOOK_URL} target="_blank" rel="noopener noreferrer">
                  <CalendarCheck /> Book Online
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get a Quote <ArrowRight /></Link>
              </Button>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 bg-card border-2 border-foreground/10 rounded-full px-3 py-1.5 shadow-soft">
                <div className="flex text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent" />
                  ))}
                </div>
                <span className="font-display text-sm text-primary">4.9/5</span>
              </div>
              <span className="text-sm text-foreground/70">Trusted by Niagara homeowners &amp; businesses</span>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center items-center">
            <div className="absolute inset-0 -m-10 rounded-full bg-water/40 blur-3xl" aria-hidden="true" />
            <img
              src={heroOtter}
              alt="Friendly otter mascot in plumber overalls holding a red pipe wrench — Ottr Plumr Plumbing & Heating, Niagara Region"
              width={520}
              height={520}
              fetchPriority="high"
              decoding="async"
              className="relative w-[460px] h-auto drop-shadow-[0_20px_30px_hsl(215_75%_18%/0.35)] animate-float"
            />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-10 rounded-full border-2 border-water-deep/60 animate-ripple" aria-hidden="true" />
          </div>
        </div>

        <div className="water-band h-12 md:h-16" aria-hidden="true" />
      </section>

      {/* SERVICES */}
      <section className="container py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="font-script text-2xl text-accent">What we do</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary mt-1">Full-service plumbing &amp; heating</h2>
          </div>
          <Button asChild variant="deep">
            <Link to="/services">All services <ArrowRight /></Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article key={s.title} className="stamp-card p-6 group hover:-translate-y-1 transition-transform">
              <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-4 shadow-soft group-hover:bg-accent transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl text-primary mb-1">{s.title}</h3>
              <p className="text-sm text-foreground/75">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gradient-deep text-primary-foreground py-20 md:py-28">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-script text-2xl text-primary-glow">Why Ottr Plumr?</p>
            <h2 className="font-display text-4xl md:text-5xl mt-1 mb-6">Local pros. Honest work. No surprises.</h2>
            <ul className="space-y-4 text-base">
              {[
                ["24/7 Emergency Response", "Burst pipe at midnight? We pick up. Always."],
                ["Licensed & Insured", "Every job done to code, every time."],
                ["Upfront Pricing", "Quotes before work begins — no awkward surprises."],
                ["Niagara-Wide Coverage", "St. Catharines to Niagara Falls and every town in between."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-accent grid place-items-center font-display">✓</div>
                  <div>
                    <div className="font-display text-lg">{t}</div>
                    <div className="opacity-80 text-sm">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card text-foreground rounded-[2rem] p-8 shadow-pop border-4 border-primary-foreground/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex text-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-accent" />)}
              </div>
              <span className="font-display text-2xl text-primary">4.9</span>
              <span className="text-sm text-foreground/60">/ 5 average rating</span>
            </div>
            <p className="text-foreground/80">
              Real reviews from real Niagara customers — see what folks are saying about our work.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-script text-2xl text-accent">Customer love</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-1">Don't take our word for it</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <article key={r.name} className="stamp-card p-7 flex flex-col">
              <Quote className="h-8 w-8 text-accent mb-3" />
              <p className="text-foreground/85 flex-1">{r.quote}</p>
              <div className="mt-5 pt-5 border-t border-foreground/10 flex items-center justify-between">
                <div className="font-display text-primary">{r.name}</div>
                <div className="flex text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-accent" />)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <BeforeAfterGallery />

      {/* SERVICE AREA STRIP */}
      <section className="container py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="font-script text-2xl text-accent">Where we work</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-1">Proudly serving the Niagara Region</h2>
          <p className="text-foreground/75 mt-4">Every city, every town. If you're in Niagara, we're your local crew.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              to={`/service-areas/${city.slug}`}
              className="px-4 py-2 rounded-full bg-card border-2 border-foreground/10 text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              {city.name}
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="deep">
            <Link to="/service-areas">All service areas <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      {/* FAQ — schema already injected via useSeo */}
      <FAQ injectSchema={false} />

      {/* CTA */}
      <section className="container pb-8">
        <div className="rounded-[2rem] overflow-hidden bg-accent text-accent-foreground p-10 md:p-14 shadow-pop relative">
          <div className="absolute -right-10 -bottom-10 h-60 w-60 rounded-full bg-accent-foreground/10" aria-hidden="true" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">Got a leak, a chill, or a project?</h2>
              <p className="opacity-90 mt-2">Pick up the phone, book online, or send us a message — we'll be there.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-card text-primary hover:bg-card/90">
                <a href={`tel:${PHONE_TEL}`}><Phone /> {PHONE_DISPLAY}</a>
              </Button>
              <Button asChild variant="deep" size="lg">
                <a href={JOBBER_BOOK_URL} target="_blank" rel="noopener noreferrer">
                  <CalendarCheck /> Book Online
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
