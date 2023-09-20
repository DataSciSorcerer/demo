import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/login/index.vue'
import Home from '../views/home/index.vue'
import Templet from '../views/templet/index.vue'

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/templet', component: Templet },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router