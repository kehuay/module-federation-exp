import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["vue-demi"]
  },
  plugins: [
    vue(),
    federation({
      name: "host",
      shared: ["vue-demi"]
    })
  ],
  server: {
    port: 5000
  }
})
