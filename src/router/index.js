import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PreviewPage from '../views/PreviewPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/preview',
      name: 'preview',
      component: PreviewPage,
    },
  ],
});

export default router;
