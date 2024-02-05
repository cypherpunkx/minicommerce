import { createRouter, createWebHistory } from "vue-router";
import Product from "@/views/product/Index.vue";
import NotFound from "@/views/errors/404.vue";
// import ProductDetails from "@/views/product/Details.vue";
// import Cart from "@/views/cart/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Product",
      component: Product,
    },
    {
      path: "/products/:id",
      name: "ProductDetails",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/product/Details.vue"),
      // component: ProductDetails,
    },
    {
      path: "/cart",
      name: "Cart",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/cart/Index.vue"),
    },
  ],
});

export default router;
