import { createRouter, createWebHashHistory } from 'vue-router'
import Portfolio from './components/pages/Portfolio.vue'
import About from './components/pages/About.vue'

const routes = [
    { path: '/', component: Portfolio },
    { path: '/about-me', component: About }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router