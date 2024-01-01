import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "BaseLayout",
    component: () => import("../layouts/BaseLayout.vue"),
    children: [
      {
        path: "/",
        name: "Home Products",
        component: () => import("../view/HomePage.vue"),
        meta: { title: "Home" },
      },
      {
        path: "/search",
        name: "Search",
        component: () => import("../view/HomePage.vue"),
        meta: { title: "Search" },
      },
      {
        path: "profile",
        name: "Profile",
        component: () => import("../view/Profile.vue"),
        meta: { title: "Profile" },
      },
      {
        path: "profile/:id/edit",
        name: "Edit Profile",
        component: () => import("../view/EditProfile.vue"),
        meta: { title: "Edit Profile" },
      },
      {
        path: "products/:id",
        name: "Product Detail",
        component: () => import("../view/DetailPage.vue"),
        meta: { title: "Product Detail" },
      },
      {
        path: "/cart",
        name: "Cart",
        component: () => import("../view/Cart.vue"),
        meta: { title: "Cart" },
        hidden: true,
      },
      {
        path: "/cart",
        name: "Cart",
        component: () => import("../view/Cart.vue"),
        meta: { title: "Cart" },
      },
    ],
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../view/SignupPage.vue"),
    meta: { title: "Sign Up" },
    hidden: true,
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import("../view/LoginPage.vue"),
    meta: { title: "Sign In" },
    hidden: true,
  },

  {
    path: "/admin",
    name: "AdminLayout",
    component: () => import("../layouts/AdminLayout.vue"),
    redirect: { name: "Dashboard" },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("../view/Admin/ProductList.vue"),
        meta: { title: "Dashboard" },
      },
      {
        path: "products",
        name: "Products",
        component: () => import("../view/Admin/ProductList.vue"),
        meta: { title: "Product Management" },
      },
      {
        path: "products/create",
        name: "Create Product",
        component: () => import("../view/Admin/ProductAdd.vue"),
        meta: { title: "Create Product" },
      },
      {
        path: "products/:id/edit",
        name: "Edit Product",
        component: () => import("../view/Admin/ProductEdit.vue"),
        meta: { title: "Edit Product" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
export default router;
