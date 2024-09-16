import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ReceiveComponent from '../views/ReceiveComponent.vue'
import PathNotFound from '../views/PathNotFound.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/receive',
      name: 'receive',
      component: ReceiveComponent
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: PathNotFound },

  ]
})

export default router
