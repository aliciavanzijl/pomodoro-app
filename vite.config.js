import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifestIcons = [
  {
    src: 'android-chrome-192x192.png',
    sizes: '192x192',
    type: 'image/png',
  },
  {
    src: 'android-chrome-512x512.png',
    sizes: '512x512',
    type: 'image/png',
  }
]


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'The Best Pomodoro Timer Ever',
        short_name: 'Pomodoro App',
        start_url: "/",
        icons: manifestIcons,
        display: "standalone",
        background_color: "#262659",
        theme_color: "#A288E3"
      }
    })
  ],
})
