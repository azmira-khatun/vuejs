import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home", // আগের আলোচনায় 'Home' নামটি ব্যবহার করা হয়েছিল
    component: HomeView,
  },
  {
    path: "/about",
    name: "About", // আগের আলোচনায় 'About' নামটি ব্যবহার করা হয়েছিল
    component: AboutView,
  },
  {
    path: "/contact",
    name: "Contact", // নতুন যোগ করা রুট
    component: ContactView,
  },
  // আপনি যদি Sidebar-এর 'Users' এবং 'Reports' লিঙ্কগুলির জন্য রুট চান, তবে এখানে যোগ করতে পারেন:
  /*
  {
    path: "/users",
    name: "Users",
    component: () => import("@/views/UsersView.vue"), // ধরে নিলাম UsersView নামে একটি ভিউ আছে
  },
  {
    path: "/reports",
    name: "Reports",
    component: () => import("@/views/ReportsView.vue"), // ধরে নিলাম ReportsView নামে একটি ভিউ আছে
  },
  */
];

const router = createRouter({
  history: createWebHistory(), // এটি URL-কে পরিষ্কার রাখে (যেমন: /about)
  routes,
});

export default router;
