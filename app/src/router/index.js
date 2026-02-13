import { createRouter, createWebHistory } from 'vue-router'
import BurgerMaker from '@/views/BurgerMaker.vue'
import MoneyMaker from '@/views/MoneyMaker.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: BurgerMaker
    },
    {
      path: '/money',
      name: 'MoneyMaker',
      component: MoneyMaker
    }
  ],
})

export default router
