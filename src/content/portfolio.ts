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

// Flagship client systems: banking and payments first, then transit infrastructure and enterprise.
export const portfolio: PortfolioItem[] = [
  { name: "Discover Global Network Fraud ML", url: "https://www.discoverglobalnetwork.com", icon: favicon("https://www.discover.com"), description: "Prohibited-transaction and gambling fraud models, feature pipelines, and real-time inference" },
  { name: "Capital One Databolt", url: "https://capitalonesoftware.com/databolt", description: "Vaultless field-level tokenization in Go and TypeScript for AI and payments" },
  { name: "CapitalOne.com Search", url: "https://www.capitalone.com", description: "Hybrid search with indexing and low-latency typeahead autocomplete" },
  { name: "Capital One & Discover Vector Search", url: "https://www.capitalone.com", description: "Hybrid vector-embedding and BM25 search with offline answer-quality evals" },
  { name: "NYC MTA OMNY", url: "https://new.mta.info", description: "Contactless Apple Pay fare payments on Docker and Kubernetes" },
  { name: "LA Metro TAP & SFMTA", url: "https://www.metro.net", description: "Fare-payment microservices with KEDA/HPA/VPA autoscaling on AWS and Azure" },
  { name: "WMATA, BART & Boston MBTA", url: "https://www.wmata.com", description: "PCI/SOC-compliant transit payment SaaS with Istio mTLS and 18-engineer org" },
  { name: "NextBus Umo IQ", url: "https://en.wikipedia.org/wiki/NextBus", icon: favicon("https://www.nextbus.com"), description: "Real-time bus-arrival ML pipeline on AWS ECS, Lambda, TensorFlow, and PySpark" },
  { name: "Fannie Mae Collateral Underwriter", url: "https://singlefamily.fanniemae.com/applications-technology/collateral-underwriter", description: "Python REST APIs and Angular SPA for residential mortgage appraisals" },
  { name: "Lockheed Martin Intranet Search", url: "https://www.lockheedmartin.com", description: "Enterprise search on headless Drupal, Node.js, and Python microservices" },
];

// Independent engineering systems & ventures.
export const projects: PortfolioItem[] = [
  { name: "Radio Index & Radio Whisper", url: "https://radioindex.org", description: "Pure Rust HTTP origin, A2UI, custom encoder-decoder speech models, and hybrid search for American radio drama", icon: "/assets/brands/radioindex-icon.svg" },
  { name: "The Archive of American Radio, Inc.", url: "https://archiveofamericanradio.org", description: "Nonprofit preserving historical American radio drama", icon: "/assets/brands/archive-icon.svg" },
  { name: "Io Pictures Corporation", url: "https://iopictures.com", description: "Film licensing, sales, and distribution", icon: "/assets/brands/iopictures-io-icon-v2.png" },
  { name: "Timer Fantasy", url: "https://timerfantasy.com", description: "macOS timer with cloud sync", icon: "/assets/brands/timerfantasy-icon-108.webp" },
];
