import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { POSTS } from "@/lib/posts";
import { useSeo } from "@/hooks/use-seo";

const Blog = () => {
  useSeo({
    title: "Plumbing & Heating Blog — Niagara Region Tips | Ottr Plumr",
    description:
      "Local plumbing and heating advice for Niagara homeowners. Frozen pipes, water heater choices, basement flooding, furnace troubleshooting, and more.",
    canonicalPath: "/blog",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Ottr Plumr — Niagara Plumbing & Heating Blog",
      url: "https://plumr.ca/blog",
      blogPost: POSTS.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `https://plumr.ca/blog/${p.slug}`,
        datePublished: p.publishedAt,
        author: { "@type": "Organization", name: "Ottr Plumr Plumbing & Heating" },
      })),
    },
  });

  return (
    <div className="container py-16 md:py-20">
      <header className="max-w-3xl mb-12">
        <p className="font-script text-2xl text-accent">From the field</p>
        <h1 className="font-display text-4xl md:text-5xl text-primary mt-1">
          Plumbing &amp; heating advice for Niagara homeowners
        </h1>
        <p className="text-foreground/80 mt-4 text-lg">
          Honest, local, no-fluff guides written by working plumbers in the Niagara Region.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POSTS.map((p) => (
          <article key={p.slug} className="stamp-card overflow-hidden flex flex-col group">
            <Link to={`/blog/${p.slug}`} className="p-7 flex flex-col h-full">
              <div className="flex items-center gap-3 text-xs text-foreground/60 mb-3">
                <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {new Date(p.publishedAt).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" })}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.readMinutes} min</span>
              </div>
              <h2 className="font-display text-xl text-primary mb-2 group-hover:text-accent transition-colors leading-tight">
                {p.title}
              </h2>
              <p className="text-sm text-foreground/75 flex-1">{p.excerpt}</p>
              <div className="mt-5 pt-5 border-t border-foreground/10 flex items-center justify-between">
                {p.city && (
                  <span className="inline-flex items-center gap-1 text-xs text-foreground/60">
                    <MapPin className="h-3.5 w-3.5" /> {p.city}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Read <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
