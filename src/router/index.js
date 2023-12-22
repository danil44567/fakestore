import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProductPage from '../views/ProductPage.vue'
import CategoryPage from '../views/CategoryPage.vue'
import CartPage from '../views/CartPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductPage,
    props: true
  },
  {
    path: '/category/:name',
    name: 'category',
    component: CategoryPage,
    props: true
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
