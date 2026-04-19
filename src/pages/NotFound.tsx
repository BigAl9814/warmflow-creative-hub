import { Link, useLocation } from "react-router-dom";
import { Phone, ArrowRight, Home as HomeIcon, Wrench, MapPin, BookOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSeo, Seo, type SeoOptions } from "@/hooks/use-seo";
import { useEffect } from "react";
import { PHONE_DISPLAY, PHONE_TEL, JOBBER_BOOK_URL } from "@/lib/site";
import { CITIES } from "@/lib/cities";
import { SERVICES } from "@/lib/services";

const NotFound = () => {
  const location = useLocation();

  const seo: SeoOptions = {
    title: "Page Not Found | Ottr Plumr Plumbing & Heating",
    description:
      "We couldn't find that page. Browse our plumbing & heating services, Niagara service areas, or call Ottr Plumr at 289-488-1007 for 24/7 help.",
    noIndex: true,
  };
  useSeo(seo);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Show a curated subset so the page stays scannable
  const topServices = SERVICES.slice(0, 6);
  const topCities = CITIES.slice(0, 8);

  return (
    <div className="bg-gradient-hero">
      <Seo {...seo} />
      <section className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-script text-3xl text-accent">Whoops</p>
          <h1 className="font-display text-7xl md:text-8xl text-primary mt-2">404</h1>
          <p className="mt-4 text-xl text-foreground/80">
            That page sprung a leak — we couldn't find it.
          </p>
          <p className="mt-3 text-foreground/70">
            The link may be broken, or the page may have moved. Try one of the shortcuts below,
            or give us a call — we're available 24/7 for plumbing &amp; heating emergencies in the
            Niagara Region.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild variant="hero" size="lg">
              <a href={`tel:${PHONE_TEL}`} aria-label={`Call Ottr Plumr at ${PHONE_DISPLAY}`}>
                <Phone /> Call {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={JOBBER_BOOK_URL} target="_blank" rel="noopener noreferrer">
                Book Online
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link to="/">
                <HomeIcon /> Home
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
          {/* Services */}
          <div className="rounded-3xl border-2 border-foreground/10 bg-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <Wrench className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl text-primary">Popular services</h2>
            </div>
            <ul className="space-y-2">
              {topServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors"
                  >
                    <span className="font-semibold">{s.title}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild variant="link" className="mt-3 px-3">
              <Link to="/services">See all services <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>

          {/* Service areas */}
          <div className="rounded-3xl border-2 border-foreground/10 bg-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-accent/15 p-2 text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl text-primary">Service areas</h2>
            </div>
            <ul className="grid grid-cols-2 gap-1.5">
              {topCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/service-areas/${c.slug}`}
                    className="block rounded-xl px-3 py-2 text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors font-semibold"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild variant="link" className="mt-3 px-3">
              <Link to="/service-areas">All Niagara service areas <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>

        {/* Other helpful links */}
        <div className="mt-10 max-w-5xl mx-auto rounded-3xl bg-primary text-primary-foreground p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl">Still can't find what you need?</h2>
              <p className="text-primary-foreground/80 mt-1">
                Our team is here to help — by phone, email, or contact form.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">
                  <Mail /> Contact us
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/blog">
                  <BookOpen /> Read the blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
