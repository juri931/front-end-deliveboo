import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import AdvanceResearch from "./pages/AdvanceResearch.vue";
import RestaurantMenu from "./pages/RestaurantMenu.vue";
import Error404 from "./pages/Error404.vue";
import Cart from "./pages/Cart.vue";
import Paym from "./components/Cart/Paym.vue";
import OrderConfirmation from "./components/Cart/OrderConfirmation.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/advance-research",
      name: "advanceResearch",
      component: AdvanceResearch,
    },
    {
      path: "/restaurant-menu",
      name: "restaurantMenu",
      component: RestaurantMenu,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/pay",
      name: "pay",
      component: Paym,
    },
    {
      path: "/conferma-ordine/:orderId",
      name: "OrderConfirmation",
      component: OrderConfirmation,
      props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error404",
      component: Error404,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export { router };
