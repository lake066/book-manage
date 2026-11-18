import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookListView from '../views/BookListView.vue'
import BookDetailView from '../views/BookDetailView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/books', name: 'bookList', component: BookListView },
  { path: '/books/:id', name: 'bookDetail', component: BookDetailView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
