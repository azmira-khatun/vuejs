// src/router/index.js

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/about", name: "About", component: AboutView },
  { path: "/contact", name: "Contact", component: ContactView },

  // Sidebar-এর জন্য যোগ করা হয়েছে, যা আগের আলোচনায় ছিল
  {
    path: "/users",
    name: "Users",
    component: () => import("@/views/UsersView.vue"),
  },
  {
    path: "/reports",
    name: "Reports",
    component: () => import("@/views/ReportsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
