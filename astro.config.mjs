import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import aws from '@astrojs/aws';

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: aws(),
});