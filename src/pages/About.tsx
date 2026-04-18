import { Link } from "react-router-dom";
import { Phone, Award, Heart, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import pipes from "@/assets/pipes-pattern.jpg";

const values = [
  { icon: Heart, title: "Otterly Reliable", desc: "We show up when we say we will, and finish what we start." },
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully qualified pros — every job done to code." },
  { icon: Award, title: "Quality Workmanship", desc: "Done right the first time. We stand behind every install." },
  { icon: MapPin, title: "Local to Niagara", desc: "Born here, working here. Your neighbours, your plumbers." },
];

const AboutPage = () => {
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
              Ottr Plumr Plumbing &amp; Heating was built on a simple idea: Niagara families and businesses deserve a
              plumbing &amp; heating company that's professional from the first phone call to the final clean-up.
            </p>
            <p className="text-foreground/80 mt-4 max-w-xl">
              We bring the technical chops of a big firm with the honesty and care of a neighbour. Whether it's a 2 AM
              burst pipe or a planned bathroom reno, we treat every job like it's our own home.
            </p>
            <div className="flex gap-3 mt-7">
              <Button asChild variant="hero" size="lg">
                <a href="tel:+12894881007"><Phone /> 289-488-1007</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Work with us</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden border-4 border-foreground/10 shadow-pop">
              <img src={pipes} alt="Stylized plumbing pipes illustration" loading="lazy" width={1024} height={1024} className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-2xl px-5 py-4 shadow-stamp font-display text-xl rotate-[-4deg]">
              Niagara strong
            </div>
          </div>
        </div>
        <div className="water-band h-10 mt-16" aria-hidden="true" />
      </section>

      <section className="container py-20">
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
            <div className="font-display text-5xl text-primary-glow">12+</div>
            <div className="opacity-85 mt-1">Niagara cities served</div>
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
