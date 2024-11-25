import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { init } from '@module-federation/enhanced/runtime'
import { createPinia } from 'pinia'

init({
    name: 'host',
    remotes: [
        {
            name: 'remote',
            entry: 'http://localhost:5001/remoteEntry.js',
            type: 'module'
            // entry: 'http://localhost:5001/mf-manifest.json'
        }
    ]
})

const piniaApp = createPinia()

createApp(App).use(piniaApp).mount('#app')
