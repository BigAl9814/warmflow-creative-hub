import { useEffect } from "react";

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

interface SeoOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  jsonLd?: JsonLd;
  jsonLdId?: string;
  noIndex?: boolean;
}

const SITE_URL = "https://plumr.ca";

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

export const SITE_ORIGIN = SITE_URL;
