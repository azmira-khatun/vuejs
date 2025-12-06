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
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5;
}
</style>