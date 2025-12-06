<template>
  <MainLayout>
    <router-view></router-view>
  </MainLayout>
</template>

<script>
// MainLayout component is imported
import MainLayout from './components/MainLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout, // Component is registered for use
  },
};
</script>

<style>
/* Global CSS: এই স্টাইলগুলো পুরো অ্যাপ্লিকেশনকে প্রভাবিত করে।
  Navbar-কে পূর্ণ প্রস্থ দিতে html, body মার্জিন রিসেট করা আবশ্যক।
*/
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  /* অনুভূমিক স্ক্রলবার এড়াতে */
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5;
}

/* আগের .page-content এবং .info-box এর স্টাইলগুলো এই ফাইল থেকে মুছে ফেলা হয়েছে, 
  কারণ এখন এই কন্টেন্টগুলো আর App.vue-তে নেই; সেগুলোর স্থান নিয়েছে routed views।
*/
</style>