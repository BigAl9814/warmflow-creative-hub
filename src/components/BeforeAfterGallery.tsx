import { Wrench } from "lucide-react";

type Job = {
  title: string;
  city: string;
  service: string;
  before: string;
  after: string;
};

// Visual placeholders — uses CSS gradients/icons until real photos are uploaded.
// Replace `before`/`after` with real image imports when available.
const JOBS: Job[] = [
  {
    title: "Old leaking tank → high-efficiency tankless",
    city: "St. Catharines",
    service: "Water Heater Replacement",
    before: "from-muted to-reed/40",
    after: "from-water to-water-deep",
  },
  {
    title: "Backed-up basement drain cleared & camera-inspected",
    city: "Welland",
    service: "Drain Cleaning",
    before: "from-reed/60 to-foreground/40",
    after: "from-primary/30 to-primary-glow/40",
  },
  {
    title: "Failed sump pump → dual pump + battery backup",
    city: "Niagara Falls",
    service: "Sump Pump Install",
    before: "from-muted to-foreground/30",
    after: "from-primary-glow/40 to-water",
  },
];

const BeforeAfterGallery = () => {
  return (
    <section className="container py-20 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="font-script text-2xl text-accent">Before &amp; after</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mt-1">
          Real jobs across Niagara
        </h2>
        <p className="text-foreground/75 mt-4">
          A look at recent work — clean installs, no shortcuts.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {JOBS.map((j) => (
          <article key={j.title} className="stamp-card overflow-hidden">
            <div className="grid grid-cols-2">
              <div className={`relative aspect-square bg-gradient-to-br ${j.before} grid place-items-center`}>
                <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider bg-foreground/80 text-card px-2 py-0.5 rounded-full">
                  Before
                </span>
                <Wrench className="h-10 w-10 text-foreground/30" aria-hidden="true" />
              </div>
              <div className={`relative aspect-square bg-gradient-to-br ${j.after} grid place-items-center`}>
                <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                  After
                </span>
                <Wrench className="h-10 w-10 text-primary-foreground/70" aria-hidden="true" />
              </div>
            </div>
            <div className="p-5">
              <div className="text-xs text-accent font-semibold uppercase tracking-wider">
                {j.service} · {j.city}
              </div>
              <h3 className="font-display text-lg text-primary mt-1 leading-tight">{j.title}</h3>
            </div>
          </article>
        ))}
      </div>
      <p className="text-center text-xs text-foreground/50 mt-6">
        Project photos coming soon — illustrations shown for layout.
      </p>
    </section>
  );
};

export default BeforeAfterGallery;
