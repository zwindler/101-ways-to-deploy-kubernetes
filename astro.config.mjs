import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  site: 'https://zwindler.github.io',
  base: process.env.PUBLIC_BASE_PATH || '/101-ways-to-deploy-kubernetes',
  integrations: [tailwind()],
  output: 'static',
  vite: {
    plugins: [yaml()],
  },
});
