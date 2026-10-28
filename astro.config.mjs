import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://abengotoursuganda.com',
  trailingSlash: 'always',
  redirects: {
    // Was the 4-day gorillas & Queen Elizabeth tour, replaced by the 3-day QE safari.
    '/4-day-gorilla-queen-elizabeth-safari/': '/3-days-queen-elizabeth-safari-uganda/',
    // Renamed to match the "Prado 90" name, now that the 120 and 150 are listed too.
    '/car-rental/toyota-land-cruiser-prado/': '/car-rental/toyota-land-cruiser-prado-90/',
    // Renamed: the car is a Land Cruiser 100 sold as the "V8", not a J70.
    '/car-rental/toyota-land-cruiser-j70/': '/car-rental/toyota-land-cruiser-v8/',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
