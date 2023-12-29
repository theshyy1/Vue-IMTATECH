import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../view/HomePage.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../view/LoginPage.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../view/SignupPage.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
