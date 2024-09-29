// @ts-check
import { defineConfig } from 'astro/config'

import icon from 'astro-icon'
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br']
  },
  integrations: [
    icon(),
    react(),
    tailwind({ applyBaseStyles: false })
  ]
})