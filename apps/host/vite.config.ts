import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite'
import UnoCSS from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    // exclude: ["vue-demi"]
  },
  resolve: {
    alias: {
      "vue-demi": "vue-demi/lib/index.cjs"
    }
  },
  plugins: [
    UnoCSS(),
    vue(),
    federation({
      name: "host",
      filename: 'remoteEntry.json',
      shared: {
        "vue": {
          singleton: true
        },
        "element-plus": {}
      },
      shareStrategy: 'loaded-first'
    }),
  ],
  server: {
    port: 5000
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
})
