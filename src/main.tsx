import { ViteReactSSG } from "vite-react-ssg";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { routes } from "./App";
import "./index.css";

const queryClient = new QueryClient();

// Wrap every route tree with our app providers. ScrollToTop must live
// inside the Router (which vite-react-ssg provides) and is added here.
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <Suspense fallback={null}>{children}</Suspense>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export const createRoot = ViteReactSSG(
  { routes },
  ({ router, isClient }) => {
    // No-op hook; reserved for future router-level setup.
    void router;
    void isClient;
  },
  {
    rootContainer: (App) => <Providers>{App}</Providers>,
  }
);
