import type { APIRoute } from 'astro';
import { json, openApiSpec } from '../lib/agent';

export const GET: APIRoute = () => json(openApiSpec());
