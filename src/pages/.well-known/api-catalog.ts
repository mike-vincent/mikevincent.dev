import type { APIRoute } from 'astro';
import { apiCatalog, json } from '../../lib/agent';

// GitHub Pages serves this extensionless file as application/octet-stream; the body is an RFC 9727 linkset.
export const GET: APIRoute = () => json(apiCatalog(), 'application/linkset+json');
