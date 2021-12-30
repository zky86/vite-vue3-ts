// import { getAsyncComponent } from '../../util/lazyUtil.js'

export const routes = [
    {
        path: '/',
        redirect: { name: 'home' }
    },
    {
        name: 'home',
        path: '/home',
        component: () => import('../views/home.vue')
    },
    {
        name: 'list',
        path: '/list/:id?',
        component: () => import('../views/list.vue')
    },
    {
        name: 'detail',
        path: '/detail',
        component: () => import('../views/detail.vue')
    }

]
