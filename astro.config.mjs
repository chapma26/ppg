import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import awsAmplify from 'astro-aws-amplify';

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: awsAmplify(),
});