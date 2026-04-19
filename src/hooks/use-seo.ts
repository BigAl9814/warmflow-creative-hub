import { useEffect } from "react";
import { Head } from "vite-react-ssg";
import * as React from "react";

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

export interface SeoOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  jsonLd?: JsonLd;
  jsonLdId?: string;
  noIndex?: boolean;
}

const SITE_URL = "https://plumr.ca";
const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";

const upsertMeta = (selector: string, attrs: Record<string, string>) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([k, v]) => {
      if (k !== "content") el!.setAttribute(k, v);
    });
    document.head.appendChild(el);
  }
  el.setAttribute("content", attrs.content);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/**
 * Imperative client-side SEO updater. Used as a backup so client-side
 * navigations between routes still update the document head.
 *
 * For build-time SSG, the <Seo /> component below uses vite-react-ssg's
 * <Head> wrapper — its tags are rendered into the per-route static HTML so
 * crawlers (and View Source) see the correct title, meta, canonical and
 * JSON-LD for every page.
 */
export function useSeo({
  title,
  description,
  canonicalPath,
  ogImage,
  jsonLd,
  jsonLdId = "page-jsonld",
  noIndex,
}: SeoOptions) {
  useEffect(() => {
    if (!isBrowser) return;
    document.title = title;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });

    if (ogImage) {
      const absolute = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;
      upsertMeta('meta[property="og:image"]', { property: "og:image", content: absolute });
      upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: absolute });
    }

    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noIndex ? "noindex, nofollow" : "index, follow",
    });

    const path = canonicalPath ?? window.location.pathname;
    const canonicalUrl = `${SITE_URL}${path}`;
    upsertLink("canonical", canonicalUrl);
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });

    document.getElementById(jsonLdId)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = jsonLdId;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(jsonLdId)?.remove();
    };
  }, [title, description, canonicalPath, ogImage, jsonLd, jsonLdId, noIndex]);
}

/**
 * Render-time SEO component using vite-react-ssg's <Head>. Tags written here
 * are emitted into the per-route static HTML at build time so crawlers see
 * unique titles, descriptions, canonical URLs and JSON-LD on every page.
 *
 * Pages should render <Seo {...} /> AND call useSeo({ ... }) — together they
 * cover SSG + client-side route changes.
 */
export function Seo({
  title,
  description,
  canonicalPath,
  ogImage,
  jsonLd,
  noIndex,
}: SeoOptions) {
  const path = canonicalPath ?? "/";
  const canonicalUrl = `${SITE_URL}${path}`;
  const absoluteImage = ogImage
    ? (ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`)
    : undefined;

  return React.createElement(
    Head,
    null,
    React.createElement("title", null, title),
    React.createElement("meta", { name: "description", content: description }),
    React.createElement("meta", {
      name: "robots",
      content: noIndex ? "noindex, nofollow" : "index, follow",
    }),
    React.createElement("link", { rel: "canonical", href: canonicalUrl }),
    React.createElement("meta", { property: "og:title", content: title }),
    React.createElement("meta", { property: "og:description", content: description }),
    React.createElement("meta", { property: "og:type", content: "website" }),
    React.createElement("meta", { property: "og:url", content: canonicalUrl }),
    React.createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
    React.createElement("meta", { name: "twitter:title", content: title }),
    React.createElement("meta", { name: "twitter:description", content: description }),
    absoluteImage
      ? React.createElement("meta", { property: "og:image", content: absoluteImage })
      : null,
    absoluteImage
      ? React.createElement("meta", { name: "twitter:image", content: absoluteImage })
      : null,
    jsonLd
      ? React.createElement("script", {
          type: "application/ld+json",
          // Inline as text for SSR; Head renders this into static HTML.
          children: JSON.stringify(jsonLd),
        })
      : null
  );
}

export const SITE_ORIGIN = SITE_URL;
