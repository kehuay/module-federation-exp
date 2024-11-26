import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite'
import UnoCSS from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    // exclude: ["vue-demi"],
    include: ['faim > qrcode', 'faim > sweetalert2', 'faim > upng-js'],
  },
  resolve: {
    alias: {
      "vue-demi": "vue-demi/lib/index.cjs"
    }
  },
  base: "http://localhost:5001/",
  build: {
    target: 'chrome89',

  },
  plugins: [
    UnoCSS(),
    vue(),
    federation({
      name: 'remote',
      manifest: true,
      // filename: 'remoteEntry.js',
      shared: {
        // 'vue-demi': {
        //   singleton: true,
        // },
        'vue': {
          singleton: true
        },
        'element-plus': {}
      },
      shareStrategy: 'loaded-first',
      exposes: {
        "./App": "./src/App.vue"
      }
    })
  ],
  server: {
    port: 5001,
    origin: 'http://localhost:5001'
  }
})
