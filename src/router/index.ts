import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('../views/index/Index.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/login/Login.vue')
        },
        {
            path: '/consent',
            name: 'consent',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/consent/Consent.vue')
        },
        {
            path: '/activate',
            name: 'activate',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/device/Activate.vue')
        },
        {
            path: '/activated',
            name: 'activated',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/device/Activated.vue')
        },
        {
            path: '/PkceRedirect',
            name: 'PkceRedirect',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/login/PkceRedirect.vue')
        },
        {
            path: '/OAuth2Redirect',
            name: 'OAuth2Redirect',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/login/OAuthRedirect.vue')
        }
    ]
})

export default router
