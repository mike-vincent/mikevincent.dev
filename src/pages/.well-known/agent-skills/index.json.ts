import type { APIRoute } from 'astro';
import { createHash } from 'node:crypto';
import { SITE, SKILL_NAME, SKILL_PATH, json, skillMd } from '../../../lib/agent';

// The digest is computed from the same string the SKILL.md endpoint serves.
export const GET: APIRoute = () =>
  json({
    $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
    skills: [
      {
        name: SKILL_NAME,
        type: 'skill-md',
        description: 'Answer questions about Mike Vincent, a Staff Software Engineer in Los Angeles: experience, skills, education, projects, and how to contact him.',
        url: `${SITE}${SKILL_PATH}`,
        digest: 'sha256:' + createHash('sha256').update(skillMd(), 'utf8').digest('hex'),
      },
    ],
  });
