import type { APIRoute } from 'astro';

const SITE = 'https://mikevincent.dev';
const LASTMOD = '2026-10-20';

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE}/</loc>
    <lastmod>${LASTMOD}</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
