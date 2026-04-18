import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { useState } from "react";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ottr-wordmark.png";
import { cn } from "@/lib/utils";
import { JOBBER_BOOK_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b-2 border-foreground/10">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center shrink-0" aria-label="Ottr Plumr Plumbing & Heating home">
          <img
            src={logo}
            alt="Ottr Plumr Plumbing & Heating logo"
            width={200}
            height={80}
            className="h-14 md:h-16 w-auto object-contain"
          />
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
          <Button asChild variant="outline" size="default" className="hidden lg:inline-flex">
            <a href={JOBBER_BOOK_URL} target="_blank" rel="noopener noreferrer">
              <CalendarCheck className="h-4 w-4" /> Book Now
            </a>
          </Button>
          <Button asChild variant="hero" size="default" className="hidden sm:inline-flex">
            <a href={`tel:${PHONE_TEL}`} aria-label={`Call Ottr Plumr at ${PHONE_DISPLAY}`}>
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
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
            <div className="grid grid-cols-2 gap-2 mt-3">
              <Button asChild variant="outline">
                <a href={JOBBER_BOOK_URL} target="_blank" rel="noopener noreferrer">
                  <CalendarCheck className="h-4 w-4" /> Book
                </a>
              </Button>
              <Button asChild variant="hero">
                <a href={`tel:${PHONE_TEL}`}>
                  <Phone className="h-4 w-4" /> Call
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
