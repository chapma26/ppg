import { defineConfig } from 'astro/config';
import awsAmplify from 'astro-aws-amplify';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: awsAmplify(),
  vite: {
    plugins: [tailwindcss()],
  },
});