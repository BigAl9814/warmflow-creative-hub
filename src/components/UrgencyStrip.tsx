import { Clock, Zap, ShieldCheck, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

/**
 * Conversion-focused urgency strip shown near the top of service / city pages.
 * Three trust badges + a tap-to-call CTA.
 */
const UrgencyStrip = () => {
  return (
    <div className="container -mt-4 md:-mt-6 relative z-10">
      <div className="stamp-card p-4 md:p-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 items-center bg-card">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-accent/15 text-accent grid place-items-center shrink-0">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <div className="font-display text-sm text-primary leading-tight">Same-Day Available</div>
            <div className="text-xs text-foreground/70">Most calls scheduled today</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-accent/15 text-accent grid place-items-center shrink-0">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <div className="font-display text-sm text-primary leading-tight">24/7 Live Dispatch</div>
            <div className="text-xs text-foreground/70">A real local tech answers</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-accent/15 text-accent grid place-items-center shrink-0">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="font-display text-sm text-primary leading-tight">Licensed &amp; Warrantied</div>
            <div className="text-xs text-foreground/70">Workmanship guaranteed</div>
          </div>
        </div>
        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground font-display px-4 py-3 shadow-soft hover:opacity-95 transition-opacity"
        >
          <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
};

export default UrgencyStrip;
