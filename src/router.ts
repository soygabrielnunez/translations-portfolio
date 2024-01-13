import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from './components/pages/PageLayout.vue'
import Portfolio from './components/pages/PortfolioPage.vue'
import About from './components/pages/AboutPage.vue'
import NotFound from './components/pages/NotFoundPage.vue'

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            { path: '/', component: Portfolio },
            { path: '/about-me', component: About }
        ]
    },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router