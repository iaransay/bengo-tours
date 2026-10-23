import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://abengotoursuganda.com',
  trailingSlash: 'always',
  redirects: {
    // Was the 4-day gorillas & Queen Elizabeth tour, replaced by the 3-day QE safari.
    '/4-day-gorilla-queen-elizabeth-safari/': '/3-days-queen-elizabeth-safari-uganda/',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
