import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProductPage from '../views/ProductPage.vue'
import CategoryPage from '../views/CategoryPage.vue'
import CartPage from '../views/CartPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: "Главная"
    }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductPage,
    props: true,
    meta: {
      title: "Товар"
    }
  },
  {
    path: '/category/:name',
    name: 'category',
    component: CategoryPage,
    props: true,
    meta: {
      title: "Категория"
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
    meta: {
      title: "Корзина"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
