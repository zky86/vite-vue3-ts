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
  },
  {
    name: 'table',
    path: '/table',
    component: () => import('../views/table')
  },
  {
    name: 'typescriptTest',
    path: '/typescriptTest',
    component: () => import('../views/typescriptTest')
  },
  {
    name: 'ref',
    path: '/ref',
    component: () => import('../views/ref')
  },
  {
    name: 'form',
    path: '/form',
    component: () => import('../views/form')
  }
]
