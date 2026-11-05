import { serveEdge } from './proxy';
import { htmlToMarkdown } from './html-to-md';
import type { AgentSite } from './agent-kit';

const ORIGIN = 'https://mikevincent.dev';
const PAGES = ['/'];

const text = async (path: string) => {
  const res = await fetch(`${ORIGIN}${path}`);
  if (!res.ok) throw new Error(`Not found: ${path}`);
  return res.text();
};

const site: AgentSite = {
  origin: ORIGIN,
  domain: 'mikevincent.dev',
  name: 'Mike Vincent',
  slug: 'mikevincent',
  description: 'Mike Vincent is a Staff Software Engineer in Los Angeles working in cloud, DevOps, infrastructure, payments and AI/ML. He is looking for W2 software engineering roles in cloud, DevOps and infrastructure.',
  contact: 'https://www.linkedin.com/in/michael-thomas-vincent/',
  skillName: 'mike-vincent-profile',
  skillDescription: 'Answer questions about Mike Vincent: experience, skills, projects, and how to contact him.',
  skillBody: 'See https://mikevincent.dev/.well-known/agent-skills/mike-vincent-profile/SKILL.md',
  queries: [
    'Mike Vincent software engineer resume',
    'what cloud and DevOps skills does Mike Vincent have',
    'how do I contact Mike Vincent about an infrastructure role',
  ],
  tools: [
    {
      name: 'get_resume',
      title: 'Resume (JSON Resume)',
      description: "Mike Vincent's resume as JSON Resume: work history, skills, education, projects and profile links.",
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      run: async () => JSON.parse(await text('/resume.json')),
    },
    {
      name: 'get_page',
      title: 'Read a page as Markdown',
      description: `A page of mikevincent.dev as Markdown. Paths: ${PAGES.join(', ')}.`,
      inputSchema: { type: 'object', properties: { path: { type: 'string', enum: PAGES } }, required: ['path'], additionalProperties: false },
      run: async (args) => {
        const path = PAGES.includes(String(args.path)) ? String(args.path) : '/';
        // A subrequest to this Worker's own route goes straight to GitHub Pages, so convert here.
        return htmlToMarkdown(await text(path), `${ORIGIN}${path}`);
      },
    },
  ],
  resources: [
    { uri: `${ORIGIN}/llms.txt`, name: 'llms', title: 'Mike Vincent summary for agents', mimeType: 'text/plain', read: () => text('/llms.txt') },
    { uri: `${ORIGIN}/resume.json`, name: 'resume', title: 'Resume (JSON Resume)', mimeType: 'application/json', read: () => text('/resume.json') },
  ],
};

export default { fetch: (request: Request) => serveEdge(site, request) };
