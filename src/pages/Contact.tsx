import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CalendarCheck, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { JOBBER_BOOK_URL, JOBBER_CLIENT_HUB_URL, PHONE_TEL, EMAIL, ADDRESS, ADDRESS_LINE, GOOGLE_MAPS_URL } from "@/lib/site";
import { useSeo } from "@/hooks/use-seo";

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
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const message = data.get("message") as string;
    const phone = (data.get("phone") as string) || "";
    const service = (data.get("service") as string) || "General inquiry";

    setSubmitting(true);
    // Open the user's mail client with a prefilled email to info@plumr.ca
    const subject = encodeURIComponent(`Quote request — ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nService: ${service}\n\n${message}`
    );
    window.location.href = `mailto:info@plumr.ca?subject=${subject}&body=${body}`;

    setTimeout(() => {
      toast({
        title: "Opening your email app…",
        description: "If nothing happens, email us directly at info@plumr.ca or call 289-488-1007.",
      });
      setSubmitting(false);
      form.reset();
    }, 400);
  };

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
        {/* FORM */}
        <div className="stamp-card p-7 md:p-10">
          <h2 className="font-display text-3xl text-primary mb-2">Request a quote</h2>
          <p className="text-foreground/70 mb-6">Tell us a bit about the job and we'll get right back to you.</p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="(289) 555-0100" className="mt-1.5" />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" className="mt-1.5" />
            </div>

            <div>
              <Label htmlFor="service">Service needed</Label>
              <select
                id="service"
                name="service"
                className="mt-1.5 w-full h-11 rounded-md border-2 border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                defaultValue=""
              >
                <option value="" disabled>Select a service…</option>
                <option>Residential Plumbing</option>
                <option>Commercial Plumbing</option>
                <option>Heating</option>
                <option>Water Heater</option>
                <option>Sump Pump</option>
                <option>Emergency / 24-7</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <Label htmlFor="message">How can we help?</Label>
              <Textarea id="message" name="message" required rows={5} placeholder="Describe the issue or project…" className="mt-1.5" />
            </div>

            <Button type="submit" variant="hero" size="lg" disabled={submitting} className="w-full sm:w-auto">
              <Send /> {submitting ? "Sending…" : "Send Message"}
            </Button>
            <p className="text-xs text-foreground/60">
              By sending, your default email app will open a pre-filled message to info@plumr.ca.
            </p>
          </form>
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
    </div>
  );
};

export default ContactPage;
