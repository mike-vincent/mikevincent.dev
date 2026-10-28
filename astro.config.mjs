import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mikevincent.dev',
  output: 'static',
  build: { assets: 'assets' },
  vite: {
    plugins: [tailwindcss()],
    server: { watch: { usePolling: true, interval: 150 } }
  }
});
