import { createRouter, createWebHistory } from "vue-router";

import ContactPage from "../components/ContactPage.vue";
import ProductPage from "../components/ProductPage.vue";
import MainAbout from "../views/MainAbout.vue"
import LandingPage from "@/components/LandingPage.vue";

 
const routes = [
  { name: "Contact Page", path: "/contact", component: ContactPage },

  { name: "Product Page", path: "/products", component: ProductPage},

  { name: "MainHome", path: "/", component: LandingPage },
  { name: "MainAbout", path: "/about", component: MainAbout },

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
