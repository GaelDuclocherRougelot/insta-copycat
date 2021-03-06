import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Message from '../views/Message.vue';
import Explorer from '../views/Explorer.vue';
import Activity from '../views/Activity.vue';

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
  {
    path: '/explorer',
    name: 'Explorer',
    component: Explorer,
  },
  {
    path: '/activity',
    name: 'Activity',
    component: Activity,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
