import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config.ts';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  output: 'static',
  vite: {
    server: {
      // Dev only: let ngrok tunnels reach the dev server (leading dot = any subdomain).
      allowedHosts: ['.ngrok-free.app', '.ngrok.app', '.ngrok.io'],
    },
  },
});
