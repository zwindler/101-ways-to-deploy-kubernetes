import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://zwindler.github.io',
  base: '/101-ways-to-deploy-kubernetes',
  integrations: [tailwind()],
  output: 'static',
});
