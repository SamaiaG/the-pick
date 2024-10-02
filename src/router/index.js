import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ReceiveComponent from '../views/ReceiveComponent.vue'
import PathNotFound from '../views/PathNotFound.vue'
import ContactComponent from '@/views/ContactComponent.vue'

const base = import.meta.env.BASE_URL || '/the-pick/'

const router = createRouter({
  history: createWebHistory(base),
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
    {
      path: '/contact',
      name: 'contact',
      component: ContactComponent
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: PathNotFound },

  ]
})

export default router
