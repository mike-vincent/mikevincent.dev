export type CaseStudySlug =
  | 'tokenization-platform'
  | 'multicloud-k8s-platform'
  | 'audit-ready-observability';

export interface CaseStudyBrand {
  name: string;
  href?: string;
}

export interface CaseStudyStoryStep {
  step: 'Client' | 'Goal' | 'Build' | 'Outcome';
  text: string;
}

export interface CaseStudy {
  slug: CaseStudySlug;
  title: string;
  roleLine: string;
  resultLine: string;
  brands: CaseStudyBrand[];
  story: [CaseStudyStoryStep, CaseStudyStoryStep, CaseStudyStoryStep, CaseStudyStoryStep];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'tokenization-platform',
    title: 'Capital One Databolt',
    roleLine: 'Tokenization and partner API delivery for Capital One Databolt and Zelle.',
    resultLine:
      'Secure partner onboarding shipped with clear, testable control behavior.',
    brands: [
      { name: 'Capital One Databolt', href: 'https://www.capitalone.com/software/products/databolt/' },
      { name: 'Zelle', href: 'https://www.zellepay.com/' },
      { name: 'Freddie Mac', href: 'https://www.freddiemac.com/' },
    ],
    story: [
      {
        step: 'Client',
        text:
          'Capital One Databolt, Zelle, and Freddie Mac partner teams.',
      },
      {
        step: 'Goal',
        text:
          'Faster partner onboarding with tokenization and control review readiness.',
      },
      {
        step: 'Build',
        text:
          'Single Go API path for onboarding, tokenization, and policy checks, plus contract-first specs and tracing.',
      },
      {
        step: 'Outcome',
        text:
          'Predictable partner launches and earlier control review cycles.',
      },
    ],
  },
  {
    slug: 'multicloud-k8s-platform',
    title: 'NextBus',
    roleLine: 'Platform engineering for transit systems.',
    resultLine:
      'Repeatable delivery path across AWS and Azure clusters.',
    brands: [
      { name: 'WMATA', href: 'https://www.wmata.com/' },
      { name: 'NYC MTA', href: 'https://new.mta.info/' },
      { name: 'BART', href: 'https://www.bart.gov/' },
      { name: 'LA Metro TAP', href: 'https://www.metro.net/' },
      { name: 'MBTA', href: 'https://www.mbta.com/' },
    ],
    story: [
      {
        step: 'Client',
        text:
          'WMATA, NYC MTA, BART, LA Metro TAP, and MBTA platform programs.',
      },
      {
        step: 'Goal',
        text:
          'Shared cloud platform model across city programs.',
      },
      {
        step: 'Build',
        text:
          'Shared Terraform modules and Helm workflows, plus cert, mesh, and telemetry defaults.',
      },
      {
        step: 'Outcome',
        text:
          'Repeatable release flow with fewer exceptions and cleaner handoffs.',
      },
    ],
  },
  {
    slug: 'audit-ready-observability',
    title: 'Fannie Mae CU2',
    roleLine: 'Reliability and compliance operations for Fannie Mae CU2.',
    resultLine:
      'Incident response and evidence capture became repeatable across teams.',
    brands: [
      { name: 'Fannie Mae CU2', href: 'https://singlefamily.fanniemae.com/applications-technology/collateral-underwriter' },
    ],
    story: [
      {
        step: 'Client',
        text:
          'Fannie Mae CU2 operations teams.',
      },
      {
        step: 'Goal',
        text:
          'Lower incident triage time and durable review records from daily operations.',
      },
      {
        step: 'Build',
        text:
          'OpenTelemetry tracing, shared service IDs, and runbooks for triage and handoff.',
      },
      {
        step: 'Outcome',
        text:
          'Faster handoffs and review cycles grounded in operational records.',
      },
    ],
  },
];

export const caseStudyBySlug = Object.fromEntries(
  caseStudies.map((caseStudy) => [caseStudy.slug, caseStudy]),
) as Record<CaseStudySlug, CaseStudy>;
