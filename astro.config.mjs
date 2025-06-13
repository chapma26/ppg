import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import amplify from 'astro-aws-amplify';

export default defineConfig({
  output: 'server',
  adapter: amplify(),
  vite: {
    plugins: [tailwindcss()],
  },
});