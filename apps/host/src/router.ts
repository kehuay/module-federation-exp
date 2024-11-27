import { createRouter, createWebHistory } from 'vue-router'
import { loadRemote } from "@module-federation/enhanced/runtime";

const RemoteApp = () => loadRemote("remote/App")

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: RemoteApp
        }
    ]
})