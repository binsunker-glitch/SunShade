import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/SunShade/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: 'auto',
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      scope: '/SunShade/',
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,svg,png,webp,woff,woff2}'],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
      },
      manifest: {
        name: 'ظل سيارتي',
        short_name: 'ظل سيارتي',
        description: 'شمسيات أمامية مخصصة حسب مقاس زجاج كل موديل',
        lang: 'ar',
        dir: 'rtl',
        id: '/SunShade/',
        start_url: '/SunShade/',
        scope: '/SunShade/',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#0F1F2E',
        background_color: '#0F1F2E',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
      },
    }),
  ],
})
