import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.mikevincent.dev',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !/\/(about|brands)\/?$/.test(page) })],
  build: { assets: 'assets' },
  vite: {
    plugins: [tailwindcss()],
    server: { watch: { usePolling: true, interval: 150 } }
  }
});
