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
  {
    path: "/:id/details",
    name: "Detail",
    component: () => import("../view/DetailPage.vue"),
  },
  {
    path: "/product",
    component: () => import("../components/ProductList.vue"),
  },  
  {
    path: "/product/add",
    component: () => import("../components/ProductAdd.vue"),
  }, 
  {
    path: "/product/edit/:id",
    component: () => import("../components/ProductEdit.vue"),
  }, 
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
