import { Link } from "react-router-dom";
import { CalendarCheck, Mail, MapPin, Phone, Clock, UserCircle2 } from "lucide-react";
import logo from "@/assets/ottr-plumr-logo.jpg";
import { ADDRESS_LINE, EMAIL, GOOGLE_MAPS_URL, JOBBER_BOOK_URL, JOBBER_CLIENT_HUB_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const Footer = () => {
  return (
    <footer className="mt-24">
      <div className="water-band h-10" aria-hidden="true" />
      <div className="bg-gradient-deep text-primary-foreground">
        <div className="container py-14 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Ottr Plumr logo" width={56} height={56} className="h-14 w-14 rounded-xl bg-card p-1" />
              <div>
                <div className="font-display text-xl">Ottr Plumr</div>
                <div className="text-xs opacity-80">Plumbing &amp; Heating</div>
              </div>
            </div>
            <p className="font-script text-2xl mt-4 text-primary-glow">
              Otterly Reliable.
            </p>
            <p className="text-sm opacity-80">Professional, start to finish.</p>
            <p className="text-xs opacity-60 mt-4">A division of Canalside Mechanical LTD</p>
          </div>

          <div>
            <h3 className="font-display text-base mb-3">Explore</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/service-areas" className="hover:underline">Service Areas</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li>
                <a href={JOBBER_BOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                  <CalendarCheck className="h-3.5 w-3.5" /> Book Now
                </a>
              </li>
              <li>
                <a href={JOBBER_CLIENT_HUB_URL} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                  <UserCircle2 className="h-3.5 w-3.5" /> Client Hub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base mb-3">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <a href={`tel:${PHONE_TEL}`} className="hover:underline">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {ADDRESS_LINE}
                </a>
              </li>
              <li className="flex items-start gap-2 opacity-80">
                <span className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Serving every city in the Niagara Region</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base mb-3">Hours</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold">24 / 7 Emergency Service</div>
                  <div className="opacity-80">Always on call when you need us</div>
                </div>
              </li>
              <li className="pl-6">Regular hours: Mon–Fri, 8 AM – 4 PM</li>
              <li className="pl-6 opacity-80">After-hours rates apply on evenings &amp; weekends</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15">
          <div className="container py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs opacity-80">
            <div>© {new Date().getFullYear()} Canalside Mechanical LTD (Ottr Plumr). All rights reserved.</div>
            <div>187 King St, Welland, ON L3B 3J4</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
