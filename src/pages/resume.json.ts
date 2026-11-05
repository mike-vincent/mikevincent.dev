import type { APIRoute } from 'astro';
import { json, resumeJson } from '../lib/agent';

export const GET: APIRoute = () => json(resumeJson());
