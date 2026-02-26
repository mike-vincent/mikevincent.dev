export interface HomeHero {
  headline: string;
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
    headline: 'Full Stack, Frontend, Backend, Mobile, Payments and Infrastructure',
    primaryCta: {
      label: 'Projects',
      href: '/works/',
    },
    secondaryCta: {
      label: 'View Resume',
      href: '/resume',
    },
  },
  americanPrograms: [
    { name: 'Capital One Databolt', href: 'https://www.capitalone.com/software/products/databolt/' },
    { name: 'Zelle', href: 'https://www.zellepay.com/' },
    { name: 'Fannie Mae CU2', href: 'https://singlefamily.fanniemae.com/applications-technology/collateral-underwriter' },
    { name: 'Freddie Mac', href: 'https://www.freddiemac.com/' },
    { name: 'WMATA', href: 'https://www.wmata.com/' },
    { name: 'NextBus', href: 'https://en.wikipedia.org/wiki/NextBus' },
    { name: 'NYC MTA', href: 'https://new.mta.info/' },
    { name: 'BART', href: 'https://www.bart.gov/' },
    { name: 'LA Metro TAP', href: 'https://www.metro.net/' },
    { name: 'MBTA', href: 'https://www.mbta.com/' },
    { name: 'Lockheed Martin', href: 'https://www.lockheedmartin.com/' },
    { name: 'Poison.org', href: 'https://www.poison.org/' },
    { name: 'USCCB', href: 'https://www.usccb.org/' },
    { name: 'CM/ECF', href: 'https://www.uscourts.gov/court-records/electronic-filing-cmecf' },
    { name: 'PACER', href: 'https://pacer.uscourts.gov/' },
    { name: 'HUD CNA e-Tool', href: 'https://www.hud.gov/hud-partners/multifamily-cna' },
    { name: 'Canadian Tire', href: 'https://www.canadiantire.ca/' },
  ],
  ventureCards: [
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
      subtitle: 'The complete archive of American radio drama.',
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
