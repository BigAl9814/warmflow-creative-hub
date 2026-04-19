import type { RouteRecord } from "vite-react-ssg";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { SERVICES } from "./lib/services";
import { CITIES } from "./lib/cities";
import { POSTS } from "./lib/posts";

// Wrap a default-export dynamic import so vite-react-ssg's `lazy` field
// (which expects { Component }) gets the component synchronously during SSR
// while still code-splitting on the client.
const lazyDefault = <T,>(loader: () => Promise<{ default: T }>) =>
  () => loader().then((m) => ({ Component: m.default as any }));

export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", lazy: lazyDefault(() => import("./pages/Services")) },
      {
        path: "services/:slug",
        lazy: lazyDefault(() => import("./pages/Service")),
        getStaticPaths: () => SERVICES.map((s) => `services/${s.slug}`),
      },
      {
        path: "services/:service/:city",
        lazy: lazyDefault(() => import("./pages/ServiceCity")),
        getStaticPaths: () =>
          SERVICES.flatMap((s) =>
            CITIES.map((c) => `services/${s.slug}/${c.slug}`)
          ),
      },
      { path: "service-areas", lazy: lazyDefault(() => import("./pages/ServiceAreas")) },
      {
        path: "service-areas/:slug",
        lazy: lazyDefault(() => import("./pages/ServiceArea")),
        getStaticPaths: () => CITIES.map((c) => `service-areas/${c.slug}`),
      },
      { path: "about", lazy: lazyDefault(() => import("./pages/About")) },
      { path: "contact", lazy: lazyDefault(() => import("./pages/Contact")) },
      { path: "nap", lazy: lazyDefault(() => import("./pages/Nap")) },
      { path: "blog", lazy: lazyDefault(() => import("./pages/Blog")) },
      {
        path: "blog/:slug",
        lazy: lazyDefault(() => import("./pages/BlogPost")),
        getStaticPaths: () => POSTS.map((p) => `blog/${p.slug}`),
      },
      // Catch-all 404 (last)
      { path: "*", lazy: lazyDefault(() => import("./pages/NotFound")) },
    ],
  },
];

export default routes;
