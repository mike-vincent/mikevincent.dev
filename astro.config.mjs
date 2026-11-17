import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mikevincent.dev',
  output: 'static',
  // Old URLs are answered by the edge Worker (edge/src/proxy.ts): 301 or 410.
  // The stylesheet is under 5 KB, so it goes inline and the first paint waits on no extra request.
  build: { assets: 'assets', inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()],
    server: { watch: { usePolling: true, interval: 150 } }
  }
});
