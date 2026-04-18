import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

// Lazy-load all non-LCP routes to shrink the initial JS bundle.
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
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<Service />} />
              <Route path="/services/:service/:city" element={<ServiceCity />} />
              <Route path="/service-areas" element={<ServiceAreas />} />
              <Route path="/service-areas/:slug" element={<ServiceArea />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/nap" element={<Nap />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
