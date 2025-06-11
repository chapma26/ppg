import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import awsAmplify from 'astro-aws-amplify';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',
  adapter: awsAmplify(),
});