import { createRouter, createWebHistory } from "vue-router";

import ContactPage from "../components/ContactPage.vue";
import ProductPage from "../components/ProductPage.vue";
import MainHome from "../views/MainHome.vue"

const routes = [
  { name: "Contact Page", path: "/contact", component: ContactPage },

  { name: "Product Page", path: "/products", component: ProductPage},

  { name: "MainHome", path: "/", component: MainHome },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
