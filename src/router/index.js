import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../view/HomePage.vue"),
  },
  {
    path: "/:id/details",
    name: "Detail",
    component: () => import("../view/DetailPage.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
