import type { RouteRecord } from "vite-react-ssg";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { SERVICES } from "./lib/services";
import { CITIES } from "./lib/cities";
import { POSTS } from "./lib/posts";

// Use vite-react-ssg's `lazy` field (not React.lazy) so SSR can resolve
// the component synchronously during static generation while still code-
// splitting on the client.
export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", lazy: () => import("./pages/Services") },
      {
        path: "services/:slug",
        lazy: () => import("./pages/Service"),
        getStaticPaths: () => SERVICES.map((s) => `services/${s.slug}`),
      },
      {
        path: "services/:service/:city",
        lazy: () => import("./pages/ServiceCity"),
        getStaticPaths: () =>
          SERVICES.flatMap((s) =>
            CITIES.map((c) => `services/${s.slug}/${c.slug}`)
          ),
      },
      { path: "service-areas", lazy: () => import("./pages/ServiceAreas") },
      {
        path: "service-areas/:slug",
        lazy: () => import("./pages/ServiceArea"),
        getStaticPaths: () => CITIES.map((c) => `service-areas/${c.slug}`),
      },
      { path: "about", lazy: () => import("./pages/About") },
      { path: "contact", lazy: () => import("./pages/Contact") },
      { path: "nap", lazy: () => import("./pages/Nap") },
      { path: "blog", lazy: () => import("./pages/Blog") },
      {
        path: "blog/:slug",
        lazy: () => import("./pages/BlogPost"),
        getStaticPaths: () => POSTS.map((p) => `blog/${p.slug}`),
      },
      // Catch-all 404 (last)
      { path: "*", lazy: () => import("./pages/NotFound") },
    ],
  },
];

export default routes;
