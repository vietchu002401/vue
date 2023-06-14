import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/page/HomePage.vue'
import LoginPage from "@/page/LoginPage.vue"

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: LoginPage
    },
    {
        path: '/:catchAll(.*)',
        component: Error
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router