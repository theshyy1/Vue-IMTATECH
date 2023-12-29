import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../view/HomePage.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../view/Profile.vue"),
  },
  {
    path: "/profile/:id/edit",
    name: "Profile Edit",
    component: () => import("../view/EditProfile.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
