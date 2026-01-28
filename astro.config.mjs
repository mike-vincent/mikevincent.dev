import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mikevincent.dev',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
