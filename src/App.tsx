import type { RouteRecord } from "vite-react-ssg";
import { lazy } from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { SERVICES } from "./lib/services";
import { CITIES } from "./lib/cities";
import { POSTS } from "./lib/posts";

// Lazy-loaded route components. vite-react-ssg auto-detects styles/assets
// on these dynamic imports, so each route ships with the right CSS.
const Services = lazy(() => import("./pages/Services"));
const Service = lazy(() => import("./pages/Service"));
const ServiceCity = lazy(() => import("./pages/ServiceCity"));
const ServiceAreas = lazy(() => import("./pages/ServiceAreas"));
const ServiceArea = lazy(() => import("./pages/ServiceArea"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Nap = lazy(() => import("./pages/Nap"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      {
        path: "services/:slug",
        Component: Service,
        getStaticPaths: () => SERVICES.map((s) => `services/${s.slug}`),
      },
      {
        path: "services/:service/:city",
        Component: ServiceCity,
        getStaticPaths: () =>
          SERVICES.flatMap((s) =>
            CITIES.map((c) => `services/${s.slug}/${c.slug}`)
          ),
      },
      { path: "service-areas", Component: ServiceAreas },
      {
        path: "service-areas/:slug",
        Component: ServiceArea,
        getStaticPaths: () => CITIES.map((c) => `service-areas/${c.slug}`),
      },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "nap", Component: Nap },
      { path: "blog", Component: Blog },
      {
        path: "blog/:slug",
        Component: BlogPost,
        getStaticPaths: () => POSTS.map((p) => `blog/${p.slug}`),
      },
      // Catch-all 404 (last)
      { path: "*", Component: NotFound },
    ],
  },
];

export default routes;
