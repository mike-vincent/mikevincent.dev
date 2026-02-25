export interface HomeHero {
  headline: string;
  subheadline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export interface HomeVentureCard {
  title: string;
  subtitle: string;
  summary: string;
  href: string;
  inset?: {
    title: string;
    subtitle: string;
    summary: string;
    href: string;
  };
}

export interface HomeBrandShowcaseItem {
  name: string;
  href?: string;
}

export interface HomeContact {
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  guidance: string;
}

export interface HomeContent {
  hero: HomeHero;
  americanPrograms: HomeBrandShowcaseItem[];
  ventureCards: HomeVentureCard[];
  contact: HomeContact;
}

export const homeContent: HomeContent = {
  hero: {
    headline: 'Founding Engineer and Staff Platform Engineer.',
    subheadline:
      'I build and run full-stack systems across infrastructure, mobile, and APIs for payments and regulated platforms.',
    primaryCta: {
      label: 'Read Case Studies',
      href: '/case-studies/',
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
      title: 'The Archive of American Radio, Inc.',
      subtitle: 'Nonprofit',
      summary: 'Nonprofit preservation and platform work focused on American radio history.',
      href: 'https://archiveofamericanradio.org',
      inset: {
        title: 'Radio Index',
        subtitle: 'Product',
        summary: 'Listening and discovery app built as part of the Archive initiative.',
        href: 'https://radioindex.org',
      },
    },
    {
      title: "Quark's Outlines",
      subtitle: 'Writing',
      summary: 'Multi-year Python writing series focused on practical engineering patterns.',
      href: 'https://dev.to/mike-vincent/series/31181',
    },
    {
      title: 'Io Pictures Corporation',
      subtitle: 'Company',
      summary: 'Motion picture rights, licensing, and distribution operations.',
      href: 'https://iopictures.com',
    },
    {
      title: 'Timer Fantasy',
      subtitle: 'App',
      summary: 'macOS timer app with cloud-sync workflow.',
      href: 'https://timerfantasy.com',
    },
  ],
  contact: {
    title: 'Work With Mike',
    body:
      'If you are hiring for platform, payments, or reliability engineering, send the role details and I will respond with fit and next steps.',
    primaryHref: 'https://www.linkedin.com/in/michael-thomas-vincent/',
    primaryLabel: 'Message on LinkedIn',
    secondaryHref: '/resume',
    secondaryLabel: 'View Resume',
    guidance:
      'Best outreach format: role scope, stack, remote policy, compensation band, and timeline.',
  },
};
