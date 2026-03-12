// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://credex.e2esolutions.tech',
  vite: {
    plugins: [tailwindcss()]
  }
});
