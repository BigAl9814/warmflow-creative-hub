export type City = {
  slug: string;
  name: string;
  blurb: string;
  neighbourhoods?: string[];
};

export const CITIES: City[] = [
  {
    slug: "st-catharines",
    name: "St. Catharines",
    blurb:
      "The Garden City's go-to plumbing and heating crew — from Port Dalhousie waterfront homes to downtown businesses, we keep things flowing.",
    neighbourhoods: ["Port Dalhousie", "Downtown", "Glenridge", "Western Hill", "Merritton"],
  },
  {
    slug: "niagara-falls",
    name: "Niagara Falls",
    blurb:
      "Fast, dependable service across Niagara Falls — from Stamford and Chippawa to the tourist district. Residential and commercial, 24/7.",
    neighbourhoods: ["Stamford", "Chippawa", "Mount Carmel", "Drummondville"],
  },
  {
    slug: "welland",
    name: "Welland",
    blurb:
      "Proudly headquartered nearby — Welland is home turf. Same-day service for plumbing, heating, water heaters, and emergencies.",
    neighbourhoods: ["Dain City", "North Welland", "Crowland", "Cooks Mills"],
  },
  {
    slug: "thorold",
    name: "Thorold",
    blurb:
      "From Allanburg to Port Robinson — full-service plumbing and heating for Thorold homes and businesses, including the locks community.",
    neighbourhoods: ["Allanburg", "Port Robinson", "Confederation Heights"],
  },
  {
    slug: "lincoln",
    name: "Lincoln",
    blurb:
      "Beamsville, Vineland, Jordan — wine country deserves wine-country water pressure. Local plumbing and heating you can trust.",
    neighbourhoods: ["Beamsville", "Vineland", "Jordan", "Campden"],
  },
  {
    slug: "grimsby",
    name: "Grimsby",
    blurb:
      "From the lakeshore to the escarpment, Grimsby families count on us for reliable plumbing, heating, and emergency service.",
    neighbourhoods: ["Grimsby Beach", "Winona Park", "Casablanca"],
  },
  {
    slug: "pelham",
    name: "Pelham",
    blurb:
      "Fonthill, Fenwick, Ridgeville — quiet streets, big trees, and trusted local plumbing & heating service when you need it.",
    neighbourhoods: ["Fonthill", "Fenwick", "Ridgeville", "North Pelham"],
  },
  {
    slug: "fort-erie",
    name: "Fort Erie",
    blurb:
      "From Crystal Beach cottages to Ridgeway and Stevensville — full-service plumbing and heating across Fort Erie, year-round.",
    neighbourhoods: ["Crystal Beach", "Ridgeway", "Stevensville", "Bridgeburg"],
  },
  {
    slug: "port-colborne",
    name: "Port Colborne",
    blurb:
      "Lakefront living means lakefront plumbing problems. We handle them all — sump pumps, water heaters, repairs, and full installs.",
    neighbourhoods: ["Sherkston", "Humberstone", "Cedar Bay"],
  },
  {
    slug: "niagara-on-the-lake",
    name: "Niagara-on-the-Lake",
    blurb:
      "Heritage homes, modern wineries, B&Bs and family residences — discreet, professional plumbing and heating in NOTL.",
    neighbourhoods: ["Old Town", "Virgil", "St. Davids", "Queenston", "Glendale"],
  },
  {
    slug: "west-lincoln",
    name: "West Lincoln",
    blurb:
      "Smithville, Caistor Centre, Wellandport — rural service done right. Well systems, heating, water heaters and emergency repair.",
    neighbourhoods: ["Smithville", "Caistor Centre", "Wellandport", "Silverdale"],
  },
  {
    slug: "wainfleet",
    name: "Wainfleet",
    blurb:
      "Long Beach to Chambers Corners — country plumbing and heating service with city-grade quality and warranties.",
    neighbourhoods: ["Long Beach", "Wainfleet Village", "Chambers Corners"],
  },
];
