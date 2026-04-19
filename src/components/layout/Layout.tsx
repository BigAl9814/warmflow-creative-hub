import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import * as helmetPkg from "react-helmet-async";

// react-helmet-async is CJS in Node SSR but ESM in browser bundle; normalize.
const HelmetMod: any = (helmetPkg as any).default ?? helmetPkg;
const HelmetProvider = HelmetMod.HelmetProvider ?? (helmetPkg as any).HelmetProvider;
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "./Header";
import Footer from "./Footer";
import EmergencyCTA from "@/components/EmergencyCTA";
import ScrollToTop from "@/components/ScrollToTop";

// Single shared QueryClient instance per render tree.
const queryClient = new QueryClient();

const Layout = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-background">
            <Header />
            {/* Bottom padding so sticky CTA never hides content */}
            <main className="flex-1 pb-20">
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </main>
            <Footer />
            <EmergencyCTA />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default Layout;
