import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ottr-plumr-logo.jpg";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b-2 border-foreground/10">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Ottr Plumr Plumbing & Heating home">
          <img
            src={logo}
            alt="Ottr Plumr Plumbing & Heating logo"
            width={56}
            height={56}
            className="h-14 w-14 rounded-xl object-contain bg-card p-1 border-2 border-foreground/10"
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-primary text-lg">Ottr Plumr</div>
            <div className="text-xs text-muted-foreground -mt-0.5">Plumbing &amp; Heating</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {links.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-colors",
                  isActive ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-secondary"
                )
              }
            >
              {l.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="default" className="hidden sm:inline-flex">
            <a href="tel:+12894881007" aria-label="Call Ottr Plumr at 289-488-1007">
              <Phone className="h-4 w-4" /> 289-488-1007
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-foreground/10 bg-card">
          <nav className="container py-4 flex flex-col gap-1" aria-label="Mobile">
            {links.map((l) => (
              <RouterNavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-3 rounded-xl text-base font-semibold",
                    isActive ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                  )
                }
              >
                {l.label}
              </RouterNavLink>
            ))}
            <Button asChild variant="hero" className="mt-2 sm:hidden">
              <a href="tel:+12894881007">
                <Phone className="h-4 w-4" /> Call 289-488-1007
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
