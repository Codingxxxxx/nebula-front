import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../v../views/HomePage.vue
import RegistrationPage from '../views/RegistrationPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/register',
      name: 'registration',
      component: RegistrationPage
    }
  ],
});

export default router;
