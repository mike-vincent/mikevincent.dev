// Machine-readable views of src/content for AI agents: resume.json (JSON Resume),
// the agent skill, the OpenAPI description, and the discovery documents in /.well-known.
// Everything is built from the content files, so it stays in sync with the page.
import { roles, education, skills } from '../content/resume';
import { portfolio, projects } from '../content/portfolio';

export const SITE = 'https://mikevincent.dev';
export const DOMAIN = 'mikevincent.dev';
export const SKILL_NAME = 'mike-vincent-profile';
export const SKILL_PATH = `/.well-known/agent-skills/${SKILL_NAME}/SKILL.md`;

const PROFILES = [
  { network: 'GitHub', username: 'mike-vincent', url: 'https://github.com/mike-vincent' },
  { network: 'LinkedIn', username: 'michael-thomas-vincent', url: 'https://www.linkedin.com/in/michael-thomas-vincent/' },
  { network: 'DEV', username: 'mike-vincent', url: 'https://dev.to/mike-vincent' },
];

const SUMMARY =
  'Mike Vincent is an American software engineer and founder from Los Angeles who builds and runs payments and AI model platforms for well-known brands. He has worked as an engineering manager and staff engineer at companies including PwC, Capital One, Discover, and Fannie Mae.';

// Same capitalization the page uses for each bullet.
const sentence = (t: string) => (/^[a-z]{2}/.test(t) ? t[0].toUpperCase() + t.slice(1) : t);

// "2021 to 2024" -> { startDate: '2021', endDate: '2024' }; "2024 to present" has no endDate.
function dates(period: string) {
  const [start, end] = period.split(' to ');
  return end && /^\d{4}$/.test(end) ? { startDate: start, endDate: end } : { startDate: start };
}

// https://jsonresume.org/schema
export function resumeJson() {
  return {
    $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
    basics: {
      name: 'Mike Vincent',
      label: 'Staff Software Engineer',
      image: `${SITE}/assets/images/headshot.jpg`,
      url: `${SITE}/`,
      summary: SUMMARY,
      location: { city: 'Los Angeles', region: 'CA', countryCode: 'US' },
      profiles: PROFILES,
    },
    work: roles.map((r) => ({
      name: r.org,
      position: r.title,
      url: r.url,
      location: r.location,
      ...dates(r.period),
      summary: r.blurb,
      highlights: r.bullets.map((b) => `${b.lead}. ${sentence(b.text)}`),
    })),
    education: education.map((e) => {
      const [studyType, area, endDate] = e.detail.split(', ');
      return { institution: e.school, url: e.url, studyType, area, endDate };
    }),
    skills: skills.map((s) => ({ name: s.group, keywords: s.items.split(', ') })),
    projects: [
      ...projects.map((p) => ({ name: p.name, url: p.url, description: p.description, type: 'project' })),
      ...portfolio.map((p) => ({ name: p.name, url: p.url, ...(p.description ? { description: p.description } : {}), type: 'client work' })),
    ],
    meta: { canonical: `${SITE}/resume.json`, version: 'v1.0.0' },
  };
}

export function skillMd() {
  const work = roles.map((r) => `- ${r.title} at ${r.org} (${r.period}, ${r.location}): ${r.blurb}`).join('\n');
  const edu = education.map((e) => `- ${e.school}: ${e.detail}`).join('\n');
  const skillList = skills.map((s) => `- ${s.group}: ${s.items}`).join('\n');
  const proj = projects.map((p) => `- ${p.name} (${p.url}): ${p.description}`).join('\n');
  const links = PROFILES.map((p) => `- ${p.network}: ${p.url}`).join('\n');
  return `---
name: ${SKILL_NAME}
description: Answer questions about Mike Vincent, a Staff Software Engineer in Los Angeles, including his experience, skills, education, projects, and how to contact him. Use it for recruiter questions about cloud, DevOps, and infrastructure engineering roles.
---

# Mike Vincent profile

Use this skill when someone asks about Mike Vincent (also Michael Vincent, Michael T. Vincent, or Michael Thomas Vincent), the website mikevincent.dev, his work history, his skills, or how to reach him.

## Sources

- Resume data in JSON Resume format: ${SITE}/resume.json
- Summary for LLMs: ${SITE}/llms.txt
- Resume PDF: ${SITE}/resume.pdf
- Website with about, experience, portfolio, projects, skills, and education: ${SITE}/

## How to answer

1. Read ${SITE}/resume.json for facts. Use titles, employers, dates, and skills as written there.
2. Do not invent employers, dates, titles, numbers, salaries, or contact details. If a fact is not in these sources, say you do not know.
3. For a full resume, link the PDF at ${SITE}/resume.pdf.

## Open to work

Mike is looking for W2 software engineering roles in cloud, DevOps, and infrastructure. Recruiters and hiring managers can contact him on LinkedIn at https://www.linkedin.com/in/michael-thomas-vincent/ or through GitHub at https://github.com/mike-vincent. The site does not publish an email address or phone number, so do not guess one.

## Summary

${SUMMARY} He lives in Los Angeles, California, and is a U.S. Citizen.

## Experience

${work}

## Skills

${skillList}

## Education

${edu}

## Projects

${proj}

## Profiles

${links}
`;
}

export function openApiSpec() {
  const get = (operationId: string, summary: string, description: string, type: string) => ({
    get: {
      operationId,
      summary,
      description,
      responses: { '200': { description: summary, content: { [type]: {} } } },
    },
  });
  return {
    openapi: '3.1.0',
    info: {
      title: 'mikevincent.dev public files',
      version: '1.0.0',
      description: 'Static, read-only files on mikevincent.dev that describe Mike Vincent and his work. No authentication. Every path answers GET.',
      contact: { name: 'Mike Vincent', url: `${SITE}/` },
    },
    servers: [{ url: SITE }],
    paths: {
      '/resume.json': {
        get: {
          operationId: 'getResume',
          summary: 'Resume in JSON Resume format',
          description: 'Work history, skills, education, projects, and profile links. Follows https://jsonresume.org/schema.',
          responses: {
            '200': {
              description: 'Resume in JSON Resume format',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      basics: { type: 'object' },
                      work: { type: 'array', items: { type: 'object' } },
                      education: { type: 'array', items: { type: 'object' } },
                      skills: { type: 'array', items: { type: 'object' } },
                      projects: { type: 'array', items: { type: 'object' } },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/resume.pdf': get('getResumePdf', 'Resume PDF', 'The full resume as a PDF.', 'application/pdf'),
      '/llms.txt': get('getLlmsTxt', 'Summary of the site for LLMs', 'Plain text summary with links to every page and machine-readable file.', 'text/plain'),
      '/.well-known/agent-skills/index.json': get('getAgentSkillsIndex', 'Agent skills index', `Agent Skills discovery index (v0.2.0) listing the ${SKILL_NAME} skill.`, 'application/json'),
      [SKILL_PATH]: get('getProfileSkill', `${SKILL_NAME} agent skill`, 'SKILL.md telling an agent how to answer questions about Mike Vincent.', 'text/markdown'),
      '/.well-known/ai-catalog.json': get('getAiCatalog', 'AI catalog', 'Agentic Resource Discovery catalog of the resources on this site.', 'application/json'),
    },
  };
}

// RFC 9727
export function apiCatalog() {
  return {
    linkset: [
      {
        anchor: `${SITE}/resume.json`,
        'service-desc': [{ href: `${SITE}/openapi.json`, type: 'application/json' }],
        'service-doc': [{ href: `${SITE}/llms.txt`, type: 'text/plain' }],
        status: [{ href: `${SITE}/resume.json`, type: 'application/json' }],
      },
    ],
  };
}

export function aiCatalog() {
  return {
    specVersion: '1.0',
    host: { displayName: 'Mike Vincent', identifier: `did:web:${DOMAIN}` },
    entries: [
      {
        identifier: `urn:air:${DOMAIN}:resume:mike-vincent`,
        displayName: 'Mike Vincent resume (JSON Resume)',
        type: 'application/json',
        url: `${SITE}/resume.json`,
        representativeQueries: [
          'Mike Vincent software engineer resume',
          'Staff Software Engineer in Los Angeles with Kubernetes and Terraform experience',
          'where has Mike Vincent worked',
          'what cloud and DevOps skills does Mike Vincent have',
        ],
      },
      {
        identifier: `urn:air:${DOMAIN}:skill:${SKILL_NAME}`,
        displayName: 'Mike Vincent profile agent skill',
        type: 'text/markdown',
        url: `${SITE}${SKILL_PATH}`,
        representativeQueries: [
          'who is Mike Vincent',
          'how do I contact Mike Vincent about a cloud or DevOps role',
          'is Mike Vincent open to infrastructure engineering jobs',
        ],
      },
    ],
  };
}

export function poppy() {
  return { protocol_version: '0.1', organization: { name: 'Mike Vincent', domain: DOMAIN }, web: {} };
}

export const json = (data: unknown, type = 'application/json') =>
  new Response(JSON.stringify(data, null, 2) + '\n', { headers: { 'Content-Type': `${type}; charset=utf-8` } });
