export interface PortfolioItem {
  name: string;
  url: string;
  description?: string;
  icon?: string;
}

// Company icons are saved in public/favicons, so the page makes no requests to Google.
// To add one: curl -L -o public/favicons/<host>.png "https://www.google.com/s2/favicons?domain=<host>&sz=64"
export const favicon = (url: string): string =>
  `/favicons/${new URL(url).hostname.replace('www.', '')}.png`;

// Client work, banking and payments first, then transit infrastructure, then the rest.
export const portfolio: PortfolioItem[] = [
  { name: "Discover Global Network Fraud ML Models", url: "https://www.discoverglobalnetwork.com", icon: favicon("https://www.discover.com"), description: "Prohibited-transaction and gambling fraud detection models, feature pipelines, and real-time inference" },
  { name: "Capital One Databolt", url: "https://capitalonesoftware.com/databolt", description: "Vaultless field-level tokenization in Go and TypeScript for AI and payments" },
  { name: "CapitalOne.com Search", url: "https://www.capitalone.com", description: "Hybrid search with indexing and low-latency typeahead autocomplete" },
  { name: "Capital One & Discover Vector Search API", url: "https://www.capitalone.com", description: "Hybrid vector-embedding and BM25 search with offline answer-quality evals" },
  { name: "NYC MTA", url: "https://new.mta.info", description: "OMNY contactless Apple Pay fare payments on Docker and Kubernetes" },
  { name: "LA Metro", url: "https://www.metro.net", description: "TAP fare backend as Docker and Kubernetes microservices on AWS and Azure" },
  { name: "DC Metro (WMATA)", url: "https://www.wmata.com", description: "Transit fare systems infrastructure and PCI/SOC SaaS operations" },
  { name: "BART", url: "https://www.bart.gov", description: "Transit fare platform work under PCI and SOC compliance with Istio mTLS" },
  { name: "Boston MBTA", url: "https://www.mbta.com", description: "Transit fare systems migrated from legacy platforms to containers and cloud" },
  { name: "NextBus", url: "https://en.wikipedia.org/wiki/NextBus", icon: favicon("https://www.nextbus.com"), description: "Real-time bus-arrival prediction pipeline on AWS ECS, Lambda, TensorFlow, and PySpark" },
  { name: "SF Muni (SFMTA)", url: "https://www.sfmta.com", description: "Kubernetes fare-payment microservices on AWS and Azure" },
  { name: "San Diego MTS", url: "https://www.sdmts.com", description: "Transit fare SaaS operations and on-call reliability" },
  { name: "PATCO", url: "https://www.ridepatco.org", description: "Transit fare SaaS platform and cloud infrastructure" },
  { name: "Fannie Mae Collateral Underwriter", url: "https://singlefamily.fanniemae.com/applications-technology/collateral-underwriter", description: "Python REST APIs and Angular SPA for residential mortgage appraisals" },
  { name: "Freddie Mac", url: "https://www.freddiemac.com/", description: "AWS CI/CD and zero-downtime PostgreSQL migrations" },
  { name: "HUD Capital Needs Assessment eTool", url: "https://www.hud.gov/hud-partners/multifamily-cna", description: "Public housing inspection platform and AWS release pipelines" },
  { name: "CM/ECF", url: "https://www.uscourts.gov/court-records/electronic-filing-cmecf", description: "Federal court electronic filing CI/CD and database migrations" },
  { name: "PACER", url: "https://pacer.uscourts.gov/", description: "Federal court records CI/CD and zero-downtime PostgreSQL migrations" },
  { name: "Lockheed Martin", url: "https://www.lockheedmartin.com", description: "Enterprise intranet search on headless Drupal, Node.js, and Python microservices" },
  { name: "Canadian Tire", url: "https://www.canadiantire.ca", description: "Hybris e-commerce storefront on AWS, Kubernetes, and Docker" },
  { name: "Poison Control", url: "https://www.poison.org", description: "iOS and Android apps for poison exposure guidance" },
  { name: "U.S. Conference of Catholic Bishops", url: "https://www.usccb.org", description: "Mobile backend on AWS RDS, ElastiCache, and Kubernetes" },
  { name: "NY Fashion Week", url: "https://nyfw.com", description: "Mobile QA automation, load testing, and SVN-to-Git migration" },
];

// Ventures Mike founded or writes.
export const projects: PortfolioItem[] = [
  { name: "Radio Index", url: "https://radioindex.org", description: "Pure Rust HTTP origin, A2UI, and hybrid search for American radio drama", icon: "/assets/brands/radioindex-icon.svg" },
  { name: "The Archive of American Radio, Inc.", url: "https://archiveofamericanradio.org", description: "Nonprofit preserving radio drama", icon: "/assets/brands/archive-icon.svg" },
  { name: "Io Pictures Corporation", url: "https://iopictures.com", description: "Film licensing, sales, and distribution", icon: "/assets/brands/iopictures-io-icon-v2.png" },
  { name: "Timer Fantasy", url: "https://timerfantasy.com", description: "macOS timer with cloud sync", icon: "/assets/brands/timerfantasy-icon-108.webp" },
  { name: "Quark's Outlines", url: "https://dev.to/mike-vincent", description: "A beginner's guide to Python", icon: "/assets/brands/quark-icon.svg" },
];
