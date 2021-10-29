import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Message from '../views/Message.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
