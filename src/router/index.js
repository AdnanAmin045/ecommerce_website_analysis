import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../components/views/Dashboard.vue';
import ProductRegistration from "@/components/views/ProductRegistration.vue";
import Inventory from "@/components/views/Inventory.vue";

const routes = [
  {
    path: "/", component: Dashboard
  },
  {
    path: "/registerProduct", component: ProductRegistration
  },
  {
    path: "/inventory", component: Inventory
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router