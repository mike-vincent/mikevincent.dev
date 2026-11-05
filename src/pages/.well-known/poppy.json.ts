import type { APIRoute } from 'astro';
import { json, poppy } from '../../lib/agent';

export const GET: APIRoute = () => json(poppy());
