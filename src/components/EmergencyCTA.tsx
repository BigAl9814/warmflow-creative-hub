import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

/**
 * Sticky bottom emergency CTA — mobile only.
 * Designed to capture the "burst pipe at 11pm" panic visitor.
 */
const EmergencyCTA = () => {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 px-3 pb-3 pt-2 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none"
      aria-hidden={false}
    >
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label={`Call Ottr Plumr 24/7 emergency line at ${PHONE_DISPLAY}`}
        className="pointer-events-auto flex items-center justify-center gap-2 w-full rounded-full bg-accent text-accent-foreground font-display text-base px-5 py-3.5 shadow-pop border-2 border-accent-foreground/10 active:scale-[0.98] transition-transform"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent-foreground opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-foreground" />
        </span>
        <Phone className="h-5 w-5" />
        <span>24/7 Emergency · Call {PHONE_DISPLAY}</span>
      </a>
    </div>
  );
};

export default EmergencyCTA;
