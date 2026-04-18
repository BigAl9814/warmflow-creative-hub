import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useSeo({
    title: "Page Not Found | Ottr Plumr",
    description: "The page you're looking for doesn't exist. Head back home or call Ottr Plumr at 289-488-1007.",
    noIndex: true,
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gradient-hero">
      <div className="text-center px-6 max-w-lg">
        <p className="font-script text-3xl text-accent">Whoops</p>
        <h1 className="font-display text-7xl text-primary mt-2">404</h1>
        <p className="mt-3 text-lg text-foreground/75">
          That page sprung a leak — we couldn't find it.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/services">Browse Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
