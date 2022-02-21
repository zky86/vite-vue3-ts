// import { getAsyncComponent } from '../../util/lazyUtil.js'

// eslint-disable-next-line import/prefer-default-export
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
  },
  {
    name: 'detail',
    path: '/detail',
    component: () => import('../views/detail.vue')
  },
  {
    name: 'product',
    path: '/product',
    component: () => import('../views/product')
  }
]
