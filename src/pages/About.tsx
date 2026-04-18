import { Link } from "react-router-dom";
import { Phone, Award, Heart, MapPin, ShieldCheck, CalendarCheck, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import pipes from "@/assets/pipes-pattern.jpg";
import { JOBBER_BOOK_URL, JOBBER_CLIENT_HUB_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { useSeo } from "@/hooks/use-seo";

const values = [
  { icon: Heart, title: "Otterly Reliable", desc: "We show up when we say we will, and finish what we start." },
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully qualified pros — every job done to code." },
  { icon: Award, title: "Quality Workmanship", desc: "Done right the first time. We stand behind every install." },
  { icon: MapPin, title: "Local to Niagara", desc: "Born here, working here. Your neighbours, your plumbers." },
];

const AboutPage = () => {
  useSeo({
    title: "About Ottr Plumr | Welland-Based Plumbing & Heating in Niagara",
    description:
      "Ottr Plumr — based at 187 King St, Welland, ON (a division of Canalside Mechanical LTD). Local Niagara plumbing & heating built on honest work, quality, and 24/7 reliability.",
    canonicalPath: "/about",
  });
  return (
    <div>
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-script text-2xl text-accent">About Ottr Plumr</p>
            <h1 className="font-display text-5xl md:text-6xl text-primary mt-1 leading-[0.95]">
              Local plumbers.<br />Big-shop quality.
            </h1>
            <p className="text-foreground/80 mt-5 text-lg max-w-xl">
              Ottr Plumr Plumbing &amp; Heating — a division of <strong>Canalside Mechanical LTD</strong> — was built on
              a simple idea: Niagara families and businesses deserve a plumbing &amp; heating company that's
              professional from the first phone call to the final clean-up.
            </p>
            <p className="text-foreground/80 mt-4 max-w-xl">
              We bring the technical chops of a big firm with the honesty and care of a neighbour. Whether it's a 2 AM
              burst pipe or a planned bathroom reno, we treat every job like it's our own home.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <Button asChild variant="hero" size="lg">
                <a href={`tel:${PHONE_TEL}`}><Phone /> {PHONE_DISPLAY}</a>
              </Button>
              <Button asChild variant="deep" size="lg">
                <a href={JOBBER_BOOK_URL} target="_blank" rel="noopener noreferrer">
                  <CalendarCheck /> Book Online
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden border-4 border-foreground/10 shadow-pop">
              <img src={pipes} alt="Plumbing pipes illustration — Ottr Plumr serving the Niagara Region" loading="lazy" width={1024} height={1024} className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-2xl px-5 py-4 shadow-stamp font-display text-xl rotate-[-4deg]">
              Niagara strong
            </div>
          </div>
        </div>
        <div className="water-band h-10 mt-16" aria-hidden="true" />
      </section>

      {/* MEET THE OWNER */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-center">
          <div className="relative max-w-sm mx-auto lg:mx-0 w-full">
            <div className="aspect-[4/5] rounded-[2rem] border-4 border-foreground/10 shadow-pop bg-gradient-to-br from-secondary to-muted grid place-items-center text-foreground/40">
              <div className="text-center px-6">
                <UserCircle2 className="h-20 w-20 mx-auto opacity-50" />
                <p className="font-script text-2xl mt-3 text-primary/70">Photo of Alex</p>
                <p className="text-xs mt-1">Upload a photo to replace this placeholder</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-stamp font-display rotate-[6deg]">
              Owner
            </div>
          </div>

          <div>
            <p className="font-script text-2xl text-accent">Meet the team</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary mt-1">
              Hi, I'm Alex.
            </h2>
            <p className="text-foreground/80 mt-5 text-lg">
              I'm the owner of Ottr Plumr — a hands-on, local expert with a passion for honest work and quality
              plumbing. With years of experience serving Niagara homes and businesses, I built Ottr Plumr to raise the
              bar for service, safety, and reliability.
            </p>
            <p className="text-foreground/80 mt-4">
              When you call, you're getting a real Niagara tradesperson who treats your home like his own. No
              outsourced call centres, no upsell scripts — just straight answers and quality work.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <a href={JOBBER_CLIENT_HUB_URL} target="_blank" rel="noopener noreferrer">
                  <UserCircle2 /> Existing Customer Login
                </a>
              </Button>
              <Button asChild variant="hero">
                <Link to="/contact">Work with us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-script text-2xl text-accent">What we stand for</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-1">Our promise to you</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <article key={v.title} className="stamp-card p-6 text-center">
              <div className="h-14 w-14 mx-auto rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-soft mb-4">
                <v.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg text-primary">{v.title}</h3>
              <p className="text-sm text-foreground/75 mt-2">{v.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-deep text-primary-foreground py-16">
        <div className="container grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-display text-5xl text-primary-glow">24/7</div>
            <div className="opacity-85 mt-1">Emergency response</div>
          </div>
          <div>
            <div className="font-display text-5xl text-primary-glow">4.9/5</div>
            <div className="opacity-85 mt-1">Customer rating</div>
          </div>
          <div>
            <div className="font-display text-5xl text-primary-glow">100%</div>
            <div className="opacity-85 mt-1">Licensed &amp; insured work</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
