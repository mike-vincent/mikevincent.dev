import type { APIRoute } from 'astro';
import { aiCatalog, json } from '../../lib/agent';

export const GET: APIRoute = () => json(aiCatalog());
