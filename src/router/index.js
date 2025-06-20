import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Gallery from '../views/Gallery.vue'
import Capstone from '@/views/Capstone.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/gallery', component: Gallery },
  { path: '/capstone', component: Capstone },
  // { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
