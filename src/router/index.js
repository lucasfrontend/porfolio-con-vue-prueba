import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/AboutView'
import HomeView from '@/views/HomeView'
import GlossaryView from '@/views/GlossaryView'
import BeerView from '@/views/BeerView'
import Item1View from '@/views/Item1View'
import StaffView from '@/views/StaffView'
import Page404View from '@/views/Page404View'


const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home'
  },
  {
    path: '/about',
    component: AboutView,
    name: 'about'
  },
  {
    path: '/glossary',
    component: GlossaryView,
    name: 'glossary'
  },
  {
    path: '/beer',
    component: BeerView,
    name: 'beer'
  },
  {
    path: '/item1',
    component: Item1View,
    name: 'item1'
  },
  {
    path: '/staff',
    component: StaffView,
    name: 'staff'
  },
  {
    path: '/:pathMatch(.*)*',
    component: Page404View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
