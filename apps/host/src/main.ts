import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { init } from '@module-federation/enhanced/runtime'
import { createPinia } from 'pinia'
import router from './router'


init({
    name: 'host',
    remotes: [
        {
            name: 'remote',
            entry: 'http://localhost:6001/mf-manifest.json',
            type: 'module'
            // entry: 'http://localhost:5001/mf-manifest.json'
        }
    ]
})

const piniaApp = createPinia()

createApp(App)
    .use(piniaApp)
    .use(router)
    .mount('#app')
