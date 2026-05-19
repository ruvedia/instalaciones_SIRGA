// @ts-check
import { defineConfig } from 'astro/config';




import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://instalaciones-sirga.es',
  output: 'static',
  vite: {
    plugins: []
  },



  integrations: [sitemap()],
  image: {
    domains: ["images.unsplash.com"],
  }
});