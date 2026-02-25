export type CaseStudySlug =
  | 'tokenization-platform'
  | 'multicloud-k8s-platform'
  | 'audit-ready-observability';

export interface CaseStudyBrand {
  name: string;
  href?: string;
}

export interface CaseStudy {
  slug: CaseStudySlug;
  title: string;
  subtitle: string;
  summary: string;
  brands: CaseStudyBrand[];
  publicSafeNote: string;
  context: string;
  constraints: string[];
  ownership: string[];
  architectureNotes: string[];
  outcome: string[];
  riskControls: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'tokenization-platform',
    title: 'Case Study: Tokenization and Payment Controls',
    subtitle: 'Payments Infrastructure',
    summary:
      'A public-safe engineering brief on shaping secure partner onboarding and payment control services in a regulated environment.',
    brands: [
      { name: 'Capital One Databolt', href: 'https://www.capitalone.com/software/products/databolt/' },
      { name: 'Zelle', href: 'https://www.zellepay.com/' },
    ],
    publicSafeNote:
      'This case study omits proprietary design details and keeps the focus on delivery approach and operating patterns.',
    context:
      'A payment platform program needed partner onboarding APIs and payment controls that could support regulated operations without slowing delivery teams.',
    constraints: [
      'Sensitive data handling needed clear boundaries at service and workflow levels.',
      'Partner onboarding flows had to remain consistent across separate integration paths.',
      'Access control behavior needed deterministic policy checks and clear failure responses.',
      'Delivery standards had to align with audit expectations from the start of implementation.',
    ],
    ownership: [
      'Implemented onboarding and licensing APIs in Go with explicit access and state transitions.',
      'Contributed to service design decisions for tokenization, masking, and encryption pathways.',
      'Worked with platform and security teams to keep API behavior and operational docs aligned.',
      'Supported deployment and readiness workflows across managed Kubernetes environments.',
    ],
    architectureNotes: [
      'Separated partner identity concerns from transaction processing concerns at API boundaries.',
      'Used contract-first API definitions so partner behavior and internal service behavior remained aligned.',
      'Aligned deployment packaging and runtime policy to keep service behavior predictable across environments.',
      'Instrumented critical paths for request-level traceability and operational handoff.',
    ],
    outcome: [
      'Established a secure delivery path for partner onboarding and payment controls.',
      'Reduced ambiguity in integration behavior by defining clear service contracts and failure modes.',
      'Improved cross-team coordination through shared operational and security language.',
    ],
    riskControls: [
      'Data handling controls were defined as part of service design rather than post-release checks.',
      'Operational runbooks included access, rollback, and incident communication guidance.',
      'Control narratives were documented in language that supported engineering and audit collaboration.',
    ],
  },
  {
    slug: 'multicloud-k8s-platform',
    title: 'Case Study: Multi-Cloud Kubernetes Platform Automation',
    subtitle: 'Platform Engineering',
    summary:
      'A public-safe engineering brief on creating repeatable deployment paths across AWS and Azure Kubernetes environments.',
    brands: [
      { name: 'WMATA', href: 'https://www.wmata.com/' },
      { name: 'NYC MTA', href: 'https://new.mta.info/' },
      { name: 'BART', href: 'https://www.bart.gov/' },
      { name: 'LA Metro TAP', href: 'https://www.metro.net/' },
      { name: 'MBTA', href: 'https://www.mbta.com/' },
    ],
    publicSafeNote:
      'This case study is sanitized and does not include internal topology, capacity details, or vendor contract information.',
    context:
      'Platform delivery spanned managed Kubernetes environments across cloud providers, and teams needed one stable way to package, deploy, and operate services.',
    constraints: [
      'Provisioning and deployment standards needed to remain consistent across AWS and Azure.',
      'Cluster security controls needed to be enforced without slowing routine service changes.',
      'Certificate and service mesh concerns needed clear ownership across platform and app teams.',
      'Operational setup had to support asynchronous team workflows and clear handoffs.',
    ],
    ownership: [
      'Shaped Terraform module usage and deployment conventions for shared platform resources.',
      'Standardized Helm release workflows so teams could adopt one operating path.',
      'Integrated service mesh policy and certificate automation into platform defaults.',
      'Partnered with engineers and managers to document platform contracts and escalation paths.',
    ],
    architectureNotes: [
      'Used reusable infrastructure modules to align environment setup and policy outcomes.',
      'Defined baseline deployment manifests that supported service onboarding and operations.',
      'Separated platform-level policy from service-level configuration where possible.',
      'Embedded observability requirements in deployment templates for predictable telemetry.',
    ],
    outcome: [
      'Created a repeatable delivery path for services across cloud providers.',
      'Improved release consistency through shared deployment and runtime conventions.',
      'Reduced platform friction by documenting clear defaults and ownership boundaries.',
    ],
    riskControls: [
      'Cluster policy and certificate controls were treated as first-class platform requirements.',
      'Operational docs captured dependency assumptions and rollback expectations.',
      'Runtime behavior remained auditable through trace and environment metadata standards.',
    ],
  },
  {
    slug: 'audit-ready-observability',
    title: 'Case Study: Audit-Ready Observability and Incident Discipline',
    subtitle: 'Reliability and Compliance',
    summary:
      'A public-safe engineering brief on aligning observability, incident response, and compliance evidence in production delivery.',
    brands: [
      { name: 'Fannie Mae CU2', href: 'https://singlefamily.fanniemae.com/applications-technology/collateral-underwriter' },
      { name: 'Freddie Mac', href: 'https://www.freddiemac.com/' },
      { name: 'CM/ECF', href: 'https://www.uscourts.gov/court-records/electronic-filing-cmecf' },
      { name: 'PACER', href: 'https://pacer.uscourts.gov/' },
      { name: 'HUD CNA e-Tool', href: 'https://www.hud.gov/hud-partners/multifamily-cna' },
      { name: 'Poison.org', href: 'https://www.poison.org/' },
    ],
    publicSafeNote:
      'This case study focuses on operating model and implementation patterns and excludes internal event details.',
    context:
      'Production services required traceable behavior, reliable incident handling, and operational evidence that could be used in regulated review cycles.',
    constraints: [
      'Telemetry had to support engineering diagnosis and compliance storytelling with shared terminology.',
      'Incident workflows needed clear roles and communication paths during active response.',
      'Post-incident follow-up needed actionable records tied to platform and service ownership.',
      'Teams needed a vendor-neutral instrumentation model for long-term flexibility.',
    ],
    ownership: [
      'Implemented OpenTelemetry-first tracing patterns for critical service paths.',
      'Defined runbook expectations for alert triage, incident command, and resolution notes.',
      'Connected monitoring and incident practices to audit-facing control narratives.',
      'Worked with teams to keep observability setup consistent across services and environments.',
    ],
    architectureNotes: [
      'Mapped traces, metrics, and logs to shared service identifiers for easier correlation.',
      'Defined alert routing and response responsibilities as part of service readiness.',
      'Used runbook templates to keep investigation steps and communication patterns aligned.',
      'Documented how operational evidence mapped to policy and control requirements.',
    ],
    outcome: [
      'Improved production support flow with clearer traceability and incident coordination.',
      'Created a stronger bridge between engineering operations and regulated review needs.',
      'Made operational readiness easier to repeat across teams through shared templates.',
    ],
    riskControls: [
      'Incident timelines and follow-up actions were documented in a durable operational format.',
      'Telemetry standards reduced gaps between service behavior and response decisions.',
      'Control evidence was prepared as part of normal engineering operations.',
    ],
  },
];

export const caseStudyBySlug = Object.fromEntries(
  caseStudies.map((caseStudy) => [caseStudy.slug, caseStudy]),
) as Record<CaseStudySlug, CaseStudy>;
