// @ts-check
import { defineConfig } from 'astro/config'

import icon from 'astro-icon'
import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    icon(),
    tailwind({ applyBaseStyles: false }),
    react()
  ]
})