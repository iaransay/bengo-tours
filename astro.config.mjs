import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://iaransay.github.io',
  base: '/bengo-tours',
  vite: {
    plugins: [tailwindcss()],
  },
});
