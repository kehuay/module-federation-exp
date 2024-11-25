import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    // exclude: ["vue-demi"]
  },
  plugins: [
    vue(),
    federation({
      name: "host",
      filename: 'remoteEntry.json',
      shared: {
        "vue-demi": {
          singleton: true
        },
        "vue": {
          singleton: true
        }
      },
      shareStrategy: 'loaded-first'
    })
  ],
  server: {
    port: 5000
  }
})
