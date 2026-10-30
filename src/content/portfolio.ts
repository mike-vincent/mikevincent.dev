export interface PortfolioItem {
  name: string;
  url: string;
  description?: string;
  icon?: string;
}

export const favicon = (url: string): string =>
  `https://www.google.com/s2/favicons?domain=${new URL(url).hostname.replace('www.', '')}&sz=64`;

// Client work, banking and payments first, then transit infrastructure, then the rest.
export const portfolio: PortfolioItem[] = [
  { name: "Capital One Databolt", url: "https://capitalonesoftware.com/databolt", description: "Data security for AI workloads" },
  { name: "CapitalOne.com Search", url: "https://www.capitalone.com", description: "Hybrid search with autocomplete and indexing, surfacing results as a customer types." },
  { name: "Capital One & Discover Vector Search API", url: "https://www.capitalone.com", description: "AI search platform" },
  { name: "NYC MTA", url: "https://new.mta.info", description: "OMNY contactless fare payments with Apple" },
  { name: "LA Metro", url: "https://www.metro.net", description: "TAP fare backend as Docker and Kubernetes microservices" },
  { name: "DC Metro", url: "https://www.wmata.com", description: "Transit fare systems infrastructure" },
  { name: "BART", url: "https://www.bart.gov", description: "Transit fare platform work under PCI and SOC compliance" },
  { name: "Boston MBTA", url: "https://www.mbta.com", description: "Transit fare systems moved from legacy platforms to containers and cloud" },
  { name: "NextBus", url: "https://en.wikipedia.org/wiki/NextBus", icon: favicon("https://www.nextbus.com"), description: "Migrated a legacy index system to a modern AWS ML pipeline" },
  { name: "SF Muni", url: "https://www.sfmta.com", description: "Fare payments customer served through Cubic" },
  { name: "San Diego MTS", url: "https://www.sdmts.com", description: "Fare payments customer served through Cubic" },
  { name: "PATCO", url: "https://www.ridepatco.org", description: "Fare payments customer served through Cubic" },
  { name: "Fannie Mae Collateral Underwriter", url: "https://singlefamily.fanniemae.com/applications-technology/collateral-underwriter", description: "Mortgage appraisal tool" },
  { name: "Freddie Mac", url: "https://www.freddiemac.com/" },
  { name: "HUD Capital Needs Assessment eTool", url: "https://www.hud.gov/hud-partners/multifamily-cna", description: "Public housing inspection platform" },
  { name: "CM/ECF", url: "https://www.uscourts.gov/court-records/electronic-filing-cmecf" },
  { name: "PACER", url: "https://pacer.uscourts.gov/" },
  { name: "Lockheed Martin", url: "https://www.lockheedmartin.com", description: "Intranet on headless Drupal" },
  { name: "Canadian Tire", url: "https://www.canadiantire.ca", description: "E-commerce store" },
  { name: "Poison Control", url: "https://www.poison.org", description: "Mobile app for poison exposure guidance" },
  { name: "U.S. Conference of Catholic Bishops", url: "https://www.usccb.org", description: "Mobile app for a Catholic bishops conference" },
  { name: "NY Fashion Week", url: "https://nyfw.com", description: "2015 mobile app" },
];

// Ventures Mike founded or writes.
export const projects: PortfolioItem[] = [
  { name: "Radio Index", url: "https://radioindex.org", description: "AI-powered search for American radio drama", icon: "/assets/brands/radioindex-icon.svg" },
  { name: "The Archive of American Radio, Inc.", url: "https://archiveofamericanradio.org", description: "Nonprofit preserving radio drama", icon: "/assets/brands/archive-icon.svg" },
  { name: "Io Pictures Corporation", url: "https://iopictures.com", description: "Film licensing, sales, and distribution", icon: "/assets/brands/iopictures-io-icon-v2.png" },
  { name: "Timer Fantasy", url: "https://timerfantasy.com", description: "macOS timer with cloud sync", icon: "/assets/brands/timerfantasy-icon.png" },
  { name: "Quark's Outlines", url: "https://dev.to/mike-vincent", description: "A beginner's guide to Python", icon: "/assets/brands/quark-icon.svg" },
];
