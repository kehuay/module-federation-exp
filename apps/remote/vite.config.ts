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
      name: 'remote',
      // manifest: true,
      filename: 'remoteEntry.js',
      shared: {
        'vue-demi': {
          singleton: true,
        },
        'vue': {
          singleton: true
        }
      },
      shareStrategy: 'loaded-first',
      exposes: {
        "./App": "./src/App.vue"
      }
    })
  ],
  server: {
    port: 5001
  }
})
