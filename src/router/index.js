import { createRouter, createWebHistory } from "vue-router";
import Main from '@/components/Main'
import About from '@/components/About'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
