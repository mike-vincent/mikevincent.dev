import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mikevincent.dev',
  output: 'static',
  // Old URLs that Google still shows. GitHub Pages has no server redirects, so
  // Astro writes a small page at each one that sends visitors and Google home.
  redirects: {
    '/resume': '/',
    '/works': '/',
    '/brands': '/',
    '/case-studies/audit-ready-observability': '/',
    '/case-studies/multicloud-k8s-platform': '/',
    '/case-studies/tokenization-platform': '/',
  },
  build: { assets: 'assets' },
  vite: {
    plugins: [tailwindcss()],
    server: { watch: { usePolling: true, interval: 150 } }
  }
});
