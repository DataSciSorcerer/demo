import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/login/index.vue";
import Register from "../views/register/index.vue";
import Home from "../views/home/index.vue";
import Templet from "../views/templet/index.vue";
import Chat from "../views/chat/index.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/home", component: Home },
  { path: "/templet", component: Templet },
  { path: "/chat", component: Chat },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
