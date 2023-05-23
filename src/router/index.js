import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'PromptFinder: Home',
      component: () => import('../views/HomeView.vue')
    },
    { 
      path: '/database', 
      name: 'PromptFinder: Database', 
      component: () => import('../views/DatabaseView.vue')
    },
    {
      path: '/appfinder',
      name: 'PromptFinder: App Finder',
      component: () => import('../views/AppFinderView.vue')
    }
  ]
})

export default router
