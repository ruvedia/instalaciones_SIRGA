// @ts-check
import { defineConfig } from 'astro/config';




import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
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