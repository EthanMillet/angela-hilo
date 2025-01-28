
import { createRouter, createWebHistory } from 'vue-router';
import AboutYou from '@/views/AboutYou.vue';

const routes = [
  { path: '/', redirect: '/about-you' },
  { path: '/about-you', name: 'AboutYou', component: AboutYou },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
