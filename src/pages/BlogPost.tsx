import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { POSTS, getPostBySlug } from "@/lib/posts";
import { JOBBER_BOOK_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { useSeo } from "@/hooks/use-seo";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  useSeo({
    title: post ? `${post.title} | Ottr Plumr Blog` : "Post not found",
    description: post?.metaDescription ?? "Plumbing & heating advice from Ottr Plumr.",
    canonicalPath: post ? `/blog/${post.slug}` : "/blog",
    jsonLd: post
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          author: {
            "@type": "Organization",
            name: "Ottr Plumr Plumbing & Heating",
            url: "https://plumr.ca",
          },
          publisher: {
            "@type": "Organization",
            name: "Ottr Plumr Plumbing & Heating",
            logo: {
              "@type": "ImageObject",
              url: "https://plumr.ca/og-image.jpg",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://plumr.ca/blog/${post.slug}`,
          },
        }
      : undefined,
    noIndex: !post,
  });

  if (!post) return <NotFound />;

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="container py-12 md:py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-foreground/60 mb-6">
        <Link to="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/blog" className="hover:underline">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground/80">{post.title}</span>
      </nav>

      <header className="max-w-3xl mb-10">
        <div className="flex flex-wrap items-center gap-3 text-xs text-foreground/60 mb-4">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(post.publishedAt).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {post.readMinutes} min read
          </span>
          {post.city && (
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> {post.city}
            </span>
          )}
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-primary leading-tight">{post.title}</h1>
        <p className="text-lg text-foreground/80 mt-4">{post.excerpt}</p>
      </header>

      <div className="grid lg:grid-cols-[1fr_320px] gap-10 max-w-5xl">
        <div className="prose-content space-y-5 text-foreground/85 leading-relaxed">
          {post.body.map((b, i) => {
            if (b.type === "h2")
              return (
                <h2 key={i} className="font-display text-2xl md:text-3xl text-primary mt-8 mb-2">
                  {b.text}
                </h2>
              );
            if (b.type === "h3")
              return (
                <h3 key={i} className="font-display text-xl text-primary mt-6 mb-1">
                  {b.text}
                </h3>
              );
            if (b.type === "ul")
              return (
                <ul key={i} className="list-disc pl-6 space-y-2">
                  {b.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              );
            return (
              <p key={i} className="text-base md:text-lg">
                {b.text}
              </p>
            );
          })}

          {/* Inline service/city CTA */}
          {(post.serviceSlug || post.citySlug) && (
            <div className="mt-10 p-6 rounded-2xl bg-secondary/60 border-2 border-foreground/10">
              <p className="font-display text-lg text-primary mb-3">Need a hand?</p>
              <div className="flex flex-wrap gap-3 text-sm">
                {post.serviceSlug && post.service && (
                  <Link
                    to={`/services/${post.serviceSlug}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-card border-2 border-foreground/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    {post.service} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
                {post.citySlug && post.city && (
                  <Link
                    to={`/service-areas/${post.citySlug}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-card border-2 border-foreground/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    Service in {post.city} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
                {post.serviceSlug && post.citySlug && (
                  <Link
                    to={`/services/${post.serviceSlug}/${post.citySlug}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors"
                  >
                    {post.service} in {post.city} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="stamp-card p-6 bg-gradient-deep text-primary-foreground border-0">
            <p className="font-script text-2xl text-primary-glow">Need help now?</p>
            <p className="font-display text-xl mt-1">24/7 service across Niagara</p>
            <div className="mt-4 space-y-2">
              <Button asChild variant="hero" className="w-full">
                <a href={`tel:${PHONE_TEL}`}><Phone /> {PHONE_DISPLAY}</a>
              </Button>
              <Button asChild variant="outline" className="w-full bg-card/10 border-primary-foreground/30 text-primary-foreground hover:bg-card/20 hover:text-primary-foreground">
                <a href={JOBBER_BOOK_URL} target="_blank" rel="noopener noreferrer">Book Online</a>
              </Button>
            </div>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> Back to all posts
          </Link>
        </aside>
      </div>

      {/* Related */}
      <section className="mt-16 pt-12 border-t border-foreground/10">
        <h2 className="font-display text-2xl text-primary mb-6">More from the blog</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {related.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="stamp-card p-5 hover:-translate-y-1 transition-transform">
              <h3 className="font-display text-lg text-primary mb-2 leading-tight">{p.title}</h3>
              <p className="text-sm text-foreground/70 line-clamp-3">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
};

export default BlogPost;
