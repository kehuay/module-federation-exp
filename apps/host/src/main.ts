import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { init } from '@module-federation/enhanced/runtime'
import { createPinia } from 'pinia'
import { ElForm, ElButton, ElDialog, ElLoading } from 'element-plus'
import 'virtual:uno.css'
import 'element-plus/dist/index.css'


init({
    name: 'host',
    remotes: [
        {
            name: 'remote',
            entry: 'http://localhost:5001/mf-manifest.json',
            type: 'module'
            // entry: 'http://localhost:5001/mf-manifest.json'
        }
    ]
})

const piniaApp = createPinia()

createApp(App)
    .use(ElForm)
    .use(ElButton)
    .use(ElDialog)
    .use(ElLoading)
    .use(piniaApp)
    .mount('#app')
