import { createRouter, createWebHashHistory } from 'vue-router'
import PageLayout from './components/PageLayout.vue'
import Portfolio from './components/pages/Portfolio.vue'
import About from './components/pages/About.vue'
import NotFound from './components/pages/NotFound.vue'

const routes = [
    {
        path: '/',
        component: PageLayout,
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