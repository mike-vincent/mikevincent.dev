export interface PortfolioItem {
  name: string;
  url: string;
  description: string;
}

interface PortfolioSection {
  header: string;
  items: PortfolioItem[];
}

const brandSections: PortfolioSection[] = [
  {
    header: "Banking",
    items: [
      { name: "Capital One & Discover Vector Search API", url: "https://www.capitalone.com", description: "AI search platform" },
      { name: "Capital One Databolt", url: "https://capitalonesoftware.com/databolt", description: "Data security for AI workloads" },
    ],
  },
  {
    header: "Content Licensing & Distribution",
    items: [
      { name: "Io Pictures Corporation", url: "https://iopictures.com", description: "Motion picture distribution" },
    ],
  },
  {
    header: "Desktop Apps",
    items: [
      { name: "Timer Fantasy", url: "https://timerfantasy.com", description: "macOS timer with cloud sync" },
    ],
  },
  {
    header: "Defense",
    items: [
      { name: "Lockheed Martin", url: "https://www.lockheedmartin.com", description: "Intranet on headless Drupal" },
    ],
  },
  {
    header: "E-Commerce",
    items: [
      { name: "Canadian Tire", url: "https://www.canadiantire.ca", description: "E-commerce store" },
    ],
  },
  {
    header: "Fare Payments",
    items: [
      { name: "NextBus", url: "https://en.wikipedia.org/wiki/NextBus", description: "Migrated a legacy index system to a modern AWS ML pipeline as platform engineer" },
      { name: "DC Metro", url: "https://www.wmata.com", description: "Transit fare systems infrastructure delivered through Cubic Transportation Systems." },
      { name: "NYC MTA", url: "https://new.mta.info", description: "OMNY contactless fare payments with Apple, packaged as Docker containers on Kubernetes." },
      { name: "BART", url: "https://www.bart.gov", description: "Transit fare platform work under PCI and SOC compliance, through Cubic." },
      { name: "LA Metro", url: "https://www.metro.net", description: "TAP fare backend as Docker and Kubernetes microservices, autoscaled on AWS and Azure." },
      { name: "Boston MBTA", url: "https://www.mbta.com", description: "Transit fare systems moved from legacy platforms to containers and cloud." },
      { name: "SF Muni", url: "https://www.sfmta.com", description: "Cubic Transportation Systems fare payments customer." },
      { name: "San Diego MTS", url: "https://www.sdmts.com", description: "Cubic Transportation Systems fare payments client." },
      { name: "PATCO", url: "https://www.ridepatco.org", description: "Fare payments customer served through Cubic Transportation Systems." },
    ],
  },
  {
    header: "Healthcare & Civic",
    items: [
      { name: "Poison Control", url: "https://www.poison.org", description: "Mobile app for poison exposure guidance" },
      { name: "U.S. Conference of Catholic Bishops", url: "https://www.usccb.org", description: "Mobile app for a Catholic bishops conference" },
    ],
  },
  {
    header: "Mobile Apps",
    items: [
      { name: "NY Fashion Week", url: "https://nyfw.com", description: "2015 mobile app" },
    ],
  },
  {
    header: "Mortgage Lending",
    items: [
      { name: "Fannie Mae Collateral Underwriter", url: "https://singlefamily.fanniemae.com/applications-technology/collateral-underwriter", description: "Mortgage appraisal tool" },
      { name: "HUD Capital Needs Assessment eTool", url: "https://www.hud.gov/hud-partners/multifamily-cna", description: "Public housing inspection platform" },
    ],
  },
  {
    header: "Networking",
    items: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/michael-thomas-vincent/", description: "Professional profile" },
    ],
  },
  {
    header: "Nonprofit",
    items: [
      { name: "The Archive of American Radio, Inc.", url: "https://archiveofamericanradio.org", description: "Nonprofit preserving radio drama" },
    ],
  },
  {
    header: "Search",
    items: [
      { name: "Radio Index", url: "https://radioindex.org", description: "Search platform for American radio drama broadcasts" },
    ],
  },
  {
    header: "Payments",
    items: [
      { name: "Zelle", url: "https://www.zellepay.com", description: "Peer-to-peer payments" },
    ],
  },
  {
    header: "Pre-2000 Websites",
    items: [
      { name: "wgshs.itgo.com", url: "http://wgshs.itgo.com", description: "Site of mine from the '90s" },
    ],
  },
  {
    header: "Writing",
    items: [
      { name: "Quark's Outlines", url: "https://dev.to/mike-vincent", description: "Python Deep Dives by Mike Vincent" },
    ],
  },
];

export const brandAvatars: Record<string, string> = {
  'Timer Fantasy': '/assets/brands/timerfantasy-icon.png',
  'Io Pictures Corporation': '/assets/brands/iopictures-io-icon-v2.png',
  'The Archive of American Radio, Inc.': '/assets/brands/archive-icon.svg',
};

export const noFavicon = new Set(['InstaCart Order History Download']);

const brandInitialOverrides: Record<string, string> = {
  NextBus: 'NB',
  'NYC MTA': 'NY',
  'Boston MBTA': 'MB',
  'LA Metro': 'LA',
  'SF Muni': 'SF',
  'wgshs.itgo.com': 'WG',
  "Quark's Outlines": 'Q',
  'InstaCart Order History Download': 'MV',
};

export const getBrandInitials = (name: string): string => {
  const override = brandInitialOverrides[name];
  if (override) return override;
  const words = name
    .replace(/[^A-Za-z0-9 ]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return '?';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words[1][0]}`.toUpperCase();
};

export const getDomain = (url: string): string | null => {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return null;
  }
};

export const brands: PortfolioItem[] = brandSections
  .flatMap((section) => section.items)
  .slice()
  .sort((a, b) => {
    if (a.name === 'Radio Index') return -1;
    if (b.name === 'Radio Index') return 1;
    return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
  });
