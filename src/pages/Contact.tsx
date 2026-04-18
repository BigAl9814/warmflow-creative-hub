import { useEffect } from "react";
import { Phone, Mail, MapPin, Clock, CalendarCheck, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JOBBER_BOOK_URL, JOBBER_CLIENT_HUB_URL, PHONE_TEL, EMAIL, ADDRESS, ADDRESS_LINE, GOOGLE_MAPS_URL } from "@/lib/site";
import { useSeo } from "@/hooks/use-seo";

const JOBBER_FORM_STYLESHEET = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
const JOBBER_FORM_SCRIPT = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
const JOBBER_CLIENTHUB_ID = "e4833ce1-922c-4bca-b73d-06aca55b449b-1453871";
const JOBBER_FORM_URL =
  "https://clienthub.getjobber.com/client_hubs/e4833ce1-922c-4bca-b73d-06aca55b449b/public/work_request/embedded_work_request_form?form_id=1453871";

const ContactPage = () => {
  useSeo({
    title: "Contact Ottr Plumr | 187 King St, Welland ON | Niagara Plumbing",
    description:
      "Contact Ottr Plumr — 187 King St, Welland, ON L3B 3J4. Call 289-488-1007 or email info@plumr.ca for plumbing & heating across the Niagara Region. 24/7 emergency service.",
    canonicalPath: "/contact",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Ottr Plumr",
      url: "https://plumr.ca/contact",
      mainEntity: {
        "@type": "PlumbingService",
        name: "Ottr Plumr Plumbing & Heating",
        telephone: PHONE_TEL,
        email: EMAIL,
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.region,
          postalCode: ADDRESS.postalCode,
          addressCountry: ADDRESS.country,
        },
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE_TEL,
        email: EMAIL,
        contactType: "customer service",
        areaServed: "CA-ON",
        availableLanguage: ["English"],
      },
    },
  });
  useEffect(() => {
    if (!document.querySelector(`link[href="${JOBBER_FORM_STYLESHEET}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = JOBBER_FORM_STYLESHEET;
      link.media = "screen";
      document.head.appendChild(link);
    }

    const script = document.createElement("script");
    script.src = JOBBER_FORM_SCRIPT;
    script.setAttribute("clienthub_id", JOBBER_CLIENTHUB_ID);
    script.setAttribute("form_url", JOBBER_FORM_URL);
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div>
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container text-center max-w-2xl">
          <p className="font-script text-2xl text-accent">Get in touch</p>
          <h1 className="font-display text-5xl md:text-6xl text-primary mt-1">Let's get it fixed.</h1>
          <p className="text-foreground/80 mt-5 text-lg">
            Call, email, or send us a message. We respond fast — because plumbing problems don't wait.
          </p>
        </div>
        <div className="water-band h-10 mt-12" aria-hidden="true" />
      </section>

      <section className="container py-16 md:py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10">
        {/* JOBBER EMBEDDED REQUEST FORM */}
        <div className="stamp-card p-7 md:p-10">
          <h2 className="font-display text-3xl text-primary mb-2">Request a quote</h2>
          <p className="text-foreground/70 mb-6">Tell us a bit about the job and we'll get right back to you.</p>
          <div id={JOBBER_CLIENTHUB_ID} />
          <noscript>
            <p className="text-sm text-foreground/70">
              Please enable JavaScript to load our request form, or email{" "}
              <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>.
            </p>
          </noscript>
        </div>

        {/* INFO */}
        <aside className="space-y-5">
          <div className="bg-gradient-deep text-primary-foreground rounded-[var(--radius)] p-7 shadow-pop">
            <p className="font-script text-2xl text-primary-glow">Need help now?</p>
            <h3 className="font-display text-3xl mt-1">Call 289-488-1007</h3>
            <p className="opacity-85 mt-2 text-sm">24/7 emergency service across Niagara.</p>
            <div className="grid sm:grid-cols-2 gap-2 mt-5">
              <Button asChild variant="hero" size="lg">
                <a href={`tel:${PHONE_TEL}`}><Phone /> Call now</a>
              </Button>
              <Button asChild size="lg" className="bg-card text-primary hover:bg-card/90">
                <a href={JOBBER_BOOK_URL} target="_blank" rel="noopener noreferrer">
                  <CalendarCheck /> Book Online
                </a>
              </Button>
            </div>
            <a
              href={JOBBER_CLIENT_HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm opacity-90 hover:opacity-100 hover:underline"
            >
              <UserCircle2 className="h-4 w-4" /> Existing customer? Open Client Hub →
            </a>
          </div>

          <ul className="stamp-card p-6 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-primary">Phone</div>
                <a href="tel:+12894881007" className="text-foreground/80 hover:underline">289-488-1007</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-primary">Email</div>
                <a href="mailto:info@plumr.ca" className="text-foreground/80 hover:underline">info@plumr.ca</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-primary">Office</div>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:underline block"
                >
                  {ADDRESS_LINE}
                </a>
                <div className="text-foreground/60 text-xs mt-1">Serving every city in the Niagara Region</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-primary">Hours</div>
                <div className="text-foreground/80">
                  <div className="font-semibold text-foreground">24 / 7 Emergency Service</div>
                  Regular hours: Mon–Fri, 8 AM – 4 PM
                  <div className="text-foreground/60 text-xs mt-1">After-hours rates apply on evenings &amp; weekends</div>
                </div>
              </div>
            </li>
          </ul>
        </aside>
      </section>

      {/* MAP */}
      <section className="container pb-16 md:pb-20">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="font-script text-2xl text-accent">Find us</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary mt-1">
            Visit our Welland office
          </h2>
          <p className="text-foreground/75 mt-3">
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">
              {ADDRESS_LINE}
            </a>
          </p>
        </div>
        <div className="rounded-[2rem] overflow-hidden border-4 border-foreground/10 shadow-pop">
          <iframe
            title="Map showing Ottr Plumr at 187 King St, Welland, ON L3B 3J4"
            src="https://www.google.com/maps?q=187+King+St,+Welland,+ON+L3B+3J4&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[360px] md:h-[450px] block"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
