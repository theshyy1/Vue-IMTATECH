import { createWebHistory, createRouter } from "vue-router";
import useAuthStore from "../store/auth";

const routes = [
  {
    path: "/",
    name: "BaseLayout",
    component: () => import("../layouts/BaseLayout.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../view/HomePage.vue"),
        meta: { title: "Home" },
      },
      {
        path: "products",
        name: "Home Products",
        component: () => import("../view/HomePage.vue"),
        meta: { title: "Home" },
      },
      {
        path: "/cart",
        name: "Cart",
        component: () => import("../view/Cart.vue"),
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
      {
        path: "/checkout",
        name: "Checkout",
        component: () => import("../view/Checkout.vue"),
        meta: { title: "Checkout" },
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
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  if (!authStore.userState.isLoggin) {
    if (to.name === "Signup" || to.name === "Signin") {
      next();
    } else {
      next({ name: "Signin" });
    }
  } else {
    if (to.name === "Signup" || to.name === "Signin") {
      next({ name: from.name });
    } else {
      next();
    }
  }
});
export default router;
