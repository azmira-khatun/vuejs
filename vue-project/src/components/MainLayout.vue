<template>
    <div id="app-layout">
        <TheNavbar />

        <div class="layout-body">
            <TheSidebar />

            <main class="main-content">
                <slot></slot>
            </main>
        </div>

        <TheFooter />
    </div>
</template>

<script>
import TheNavbar from './TheNavbar.vue';
import TheSidebar from './TheSidebar.vue';
import TheFooter from './TheFooter.vue';

export default {
    name: 'MainLayout',
    components: {
        TheNavbar,
        TheSidebar,
        TheFooter,
    },
};
</script>

<style scoped>
/* '#app-layout' পুরো পেজকে কভার করে, এবং এর ভেতরের উপাদানগুলোকে (Navbar, layout-body, Footer) 
    উল্লম্বভাবে (vertically) সাজায়।
*/
#app-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* স্ক্রিনের পুরো উচ্চতা নিশ্চিত করার জন্য */
}

/* 'layout-body' হল Navbar এবং Footer এর মধ্যের অংশ।
    'flex: 1' নিশ্চিত করে এটি বাকি সব জায়গা দখল করবে।
*/
.layout-body {
    display: flex;
    flex: 1;
    /* Navbar এবং Footer-এর মাঝের অংশ বাকি স্থান নেবে */
}

/* 'main-content' হল Sidebar-এর ডানপাশের কন্টেন্ট এরিয়া।
    'flex: 1' নিশ্চিত করে এটি Sidebar-এর পর বাকি সব অনুভূমিক স্থান (horizontal space) দখল করবে।
*/
.main-content {
    flex: 1;
    /* কন্টেন্ট অংশ বাকি স্থান নেবে */
    padding: 30px;
    overflow-y: auto;
    /* যদি কন্টেন্ট বেশি হয় */
    background-color: #ffffff;
}
</style>