import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/login/index.vue";
import Register from "../views/register/index.vue";
import Home from "../views/home/index.vue";
import Templet from "../views/templet/index.vue";
import Chat from "../views/chat/index.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login, name: "Login" },
  { path: "/register", component: Register, name: "Register" },
  {
    path: "/home",
    component: Home,
    meta: { requiresAuth: true },
    name: "Home",
  }, // 需要验证的路由
  {
    path: "/templet",
    component: Templet,
    meta: { requiresAuth: true },
    name: "Templet",
  }, // 需要验证的路由
  {
    path: "/chat",
    component: Chat,
    meta: { requiresAuth: true },
    name: "Chat",
  }, // 需要验证的路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (token) {
    if (to.name === "Login" || to.name === "Register") {
      next({ name: "Home" });
    } else {
      next();
    }
  } else {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      next({ name: "Login" });
    } else {
      next();
    }
  }
});

export default router;

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     // 这个路由需要验证登录状态

//     const token = localStorage.getItem("token"); // 假设您的 token 存储在 localStorage 中

//     if (!token) {
//       // 如果没有 token，重定向到登录页
//       next({
//         name: "/login",
//         query: { redirect: to.fullPath }, // 将要访问的页面路径传递到登录页面，以便登录后返回
//       });
//     } else {
//       // 有 token，允许访问
//       next();
//     }
//   } else {
//     // 不需要验证登录状态，直接通过
//     next();
//   }
// });
