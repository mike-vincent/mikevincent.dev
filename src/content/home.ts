export interface HomeHero {
  headline: string;
  subline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export interface HomeVentureThumb {
  src: string;
  alt: string;
  kind?: 'icon';
}

export interface HomeVentureCard {
  title: string;
  subtitle: string;
  summary: string;
  href: string;
  thumb?: HomeVentureThumb;
}

export interface HomeBrandShowcaseItem {
  name: string;
  href?: string;
  icon?: string;
  domain?: string;
}

export interface HomeContact {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}

export interface HomeContent {
  hero: HomeHero;
  americanPrograms: HomeBrandShowcaseItem[];
  ventureCards: HomeVentureCard[];
  contact: HomeContact;
}

export const homeContent: HomeContent = {
  hero: {
    headline: 'Lead Software Engineer',
    subline: 'Full Stack · Infrastructure · Architecture · Payments · AI · Search',
    primaryCta: {
      label: 'View Resume',
      href: '/resume',
    },
    secondaryCta: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/michael-thomas-vincent/',
    },
  },
  americanPrograms: [
    { name: 'Capital One & Discover', href: 'https://www.capitalone.com', domain: 'capitalone.com' },
    { name: 'Zelle', href: 'https://www.zellepay.com/', domain: 'zellepay.com' },
    { name: 'Fannie Mae CU2', href: 'https://singlefamily.fanniemae.com/applications-technology/collateral-underwriter', domain: 'fanniemae.com' },
    { name: 'Freddie Mac', href: 'https://www.freddiemac.com/', domain: 'freddiemac.com' },
    { name: 'WMATA', href: 'https://www.wmata.com/', domain: 'wmata.com' },
    { name: 'NextBus', href: 'https://en.wikipedia.org/wiki/NextBus', domain: 'nextbus.com' },
    { name: 'NYC MTA', href: 'https://new.mta.info/', domain: 'mta.info' },
    { name: 'BART', href: 'https://www.bart.gov/', domain: 'bart.gov' },
    { name: 'LA Metro TAP', href: 'https://www.metro.net/', domain: 'metro.net' },
    { name: 'MBTA', href: 'https://www.mbta.com/', domain: 'mbta.com' },
    { name: 'Lockheed Martin', href: 'https://www.lockheedmartin.com/', domain: 'lockheedmartin.com' },
    { name: 'Poison.org', href: 'https://www.poison.org/', domain: 'poison.org' },
    { name: 'USCCB', href: 'https://www.usccb.org/', domain: 'usccb.org' },
    { name: 'CM/ECF', href: 'https://www.uscourts.gov/court-records/electronic-filing-cmecf', domain: 'uscourts.gov' },
    { name: 'PACER', href: 'https://pacer.uscourts.gov/', domain: 'uscourts.gov' },
    { name: 'HUD CNA e-Tool', href: 'https://www.hud.gov/hud-partners/multifamily-cna', domain: 'hud.gov' },
    { name: 'Canadian Tire', href: 'https://www.canadiantire.ca/', domain: 'canadiantire.ca' },
  ],
  ventureCards: [
    {
      title: 'Capital One + Discover',
      subtitle: 'Vector AI search API. Founding team.',
      summary: 'Building a new vector AI search API from the ground up.',
      href: 'https://www.capitalone.com',
    },
    {
      title: 'PricewaterhouseCoopers',
      subtitle: 'Senior Associate Software Engineer',
      summary: 'Senior Associate Software Engineer',
      href: 'https://www.pwc.com',
      thumb: {
        src: '/assets/brands/pwc-logo.svg',
        alt: 'PwC logo',
        kind: 'icon',
      },
    },
    {
      title: 'Radio Index',
      subtitle: 'AI-powered search for American radio drama.',
      summary: 'Search app for radio drama with transcript and speaker-aware results.',
      href: 'https://radioindex.org',
      thumb: {
        src: '/assets/brands/radioindex-icon.svg',
        alt: 'Radio Index symbol',
        kind: 'icon',
      },
    },
    {
      title: 'Timer Fantasy',
      subtitle: 'Big beautiful timers for the macOS desktop.',
      summary: 'macOS timer app with cloud sync.',
      href: 'https://timerfantasy.com',
      thumb: {
        src: '/assets/brands/timerfantasy-icon.png',
        alt: 'Timer Fantasy symbol',
        kind: 'icon',
      },
    },
    {
      title: "Quark's Outlines",
      subtitle: "A beginner's guide to Python. New articles on Mondays.",
      summary: 'Python writing series about real engineering patterns.',
      href: 'https://dev.to/mike-vincent/series/31181',
      thumb: {
        src: '/assets/brands/quark-icon.svg',
        alt: "Quark's Outlines symbol",
        kind: 'icon',
      },
    },
    {
      title: 'The Archive of American Radio, Inc.',
      subtitle: 'A 501(c)(3) nonprofit.',
      summary: 'Keeping American radio drama alive with systems built for long-term public use.',
      href: 'https://archiveofamericanradio.org',
      thumb: {
        src: '/assets/brands/archive-icon.svg',
        alt: 'Archive of American Radio icon',
        kind: 'icon',
      },
    },
    {
      title: 'Io Pictures Corporation',
      subtitle: 'Film licensing, sales, and distribution.',
      summary: 'Media venture focused on film rights and distribution operations.',
      href: 'https://iopictures.com',
      thumb: {
        src: '/assets/brands/iopictures-io-icon-v2.png',
        alt: 'Io Pictures IO symbol',
        kind: 'icon',
      },
    },
  ],
  contact: {
    primaryHref: 'https://www.linkedin.com/in/michael-thomas-vincent/',
    primaryLabel: 'Message on LinkedIn',
    secondaryHref: '/resume',
    secondaryLabel: 'View Resume',
  },
};
