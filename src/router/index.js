import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ReceiveComponent from '../views/ReceiveComponent.vue'
import PathNotFound from '../views/PathNotFound.vue'

const router = createRouter({
  history: createWebHistory('/the-pick/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/receive/',
      name: 'receive',
      component: ReceiveComponent
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: PathNotFound },

  ]
})

export default router
