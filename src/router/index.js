import { createRouter, createWebHistory } from "vue-router";

import ContactPage from "../components/ContactPage.vue";
import ProductPage from "../components/ProductPage.vue";
import MainAbout from "../views/MainAbout.vue"
import LandingPage from "@/components/LandingPage.vue";
import OrderPage from "@/components/OrderPage.vue";

 
const routes = [
  { name: "Contact Page", path: "/contact", component: ContactPage },
  { name: "Product Page", path: "/products", component: ProductPage},
  { name: "MainHome", path: "/", component: LandingPage },
  { name: "MainAbout", path: "/about", component: MainAbout },
  {name: "Cart", path: '/cart', component: OrderPage}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
