<template>
  <MainLayout>
    <div class="page-content">
      <h2>👋 Welcome! This is the Main Content of Your Application</h2>
      <p>The layout has been set up successfully. You can now render your routed views here.</p>

      <section class="info-box">
        <h3>Component Description</h3>
        <ul>
          <li>**Navbar:** Located at the top, holds navigation links.</li>
          <li>**Sidebar:** Located on the left, holds main menu items.</li>
          <li>**Footer:** Located at the bottom, displays copyright information.</li>
        </ul>
      </section>

      <div style="height: 600px; background-color: #f7f7f7; padding: 20px; border-radius: 8px; margin-top: 20px;">
        Scrollable Content Area
      </div>
    </div>
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
/* Global CSS: Resetting body margin and setting font */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5;
}

/* These styles are only for the main content within App.vue */
.page-content {
  color: #333;
}

.info-box {
  background-color: #e3f2fd;
  border-left: 5px solid #2196f3;
  padding: 15px;
  margin-top: 20px;
  border-radius: 4px;
}

.info-box ul {
  list-style-type: none;
  padding-left: 0;
}
</style>