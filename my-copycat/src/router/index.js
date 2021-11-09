import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Message from '../views/Message.vue';
import Explorer from '../views/Explorer.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
  },
  {
    path: '/explorer',
    name: 'Explorer',
    component: Explorer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
