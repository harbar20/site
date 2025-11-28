import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from "@astrojs/react";

import vercel from '@astrojs/vercel';
import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static',
  adapter: vercelStatic({    webAnalytics: {
    enabled: true,
  },
  maxDuration: 8,}),
});