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
    UnoCSS({
      mode: 'vue-scoped'
    }),
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
          singleton: false,
          version: '3.4.38',
          requiredVersion: '~3.4.38'
        },
        'element-plus': {

        }
      },
      shareStrategy: 'loaded-first',
      exposes: {
        "./App": "./src/App.vue"
      }
    })
  ],
  server: {
    port: 6001,
    origin: 'http://localhost:6001'
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
})
