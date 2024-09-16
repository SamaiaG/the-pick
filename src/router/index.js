import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ReceiveComponent from '../views/ReceiveComponent.vue'
import PathNotFound from '../views/PathNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/receive/:data',
      name: 'receive',
      component: ReceiveComponent,
      props: route => ({ data: route.params.data })
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: PathNotFound },

  ]
})

export default router
