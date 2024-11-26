import { createApp } from 'vue-demi'
import './style.css'
import App from './App.vue'

import { ElForm } from 'element-plus'

const app = createApp(App)

app.use(ElForm)

app.mount('#app')
