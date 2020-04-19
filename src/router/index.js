import Vue from 'vue'
import VueRouter from 'vue-router'
import PayIndex from '../views/pay/PayIndex.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'PayIndex',
    component: PayIndex
  },
  {
    path: '/payIndex',
    name: 'PayIndex',
    component: PayIndex
  },
  {
    path: '/record',
    name: 'RecordList',
    component: () => import('../views/record/RecordList.vue')
  },
  {
    path: '/carIn',
    name: 'CarInParkIndex',
    component: () => import('../views/carIn/CarInParkIndex.vue')
  },
  {
    path: '/payInfo',
    name: 'PayInfo',
    component: () => import('../views/pay/PayInfo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
