type CityMapProps = {
  /** City name, e.g. "Welland" */
  cityName: string;
  /** Optional precise query override; defaults to "{cityName}, Ontario, Canada" */
  query?: string;
  /** Title for the iframe (a11y) */
  title?: string;
};

/**
 * Embedded Google Map centered on a city. No API key required (uses the
 * public ?output=embed endpoint). Lazy-loaded so it doesn't hurt LCP.
 */
const CityMap = ({ cityName, query, title }: CityMapProps) => {
  const q = encodeURIComponent(query ?? `${cityName}, Ontario, Canada`);
  const src = `https://www.google.com/maps?q=${q}&output=embed`;

  return (
    <div className="rounded-[2rem] overflow-hidden border-4 border-foreground/10 shadow-pop">
      <iframe
        title={title ?? `Map of ${cityName}, Ontario — Ottr Plumr service area`}
        src={src}
        width="100%"
        height="380"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[320px] md:h-[420px] block"
        allowFullScreen
      />
    </div>
  );
};

export default CityMap;
