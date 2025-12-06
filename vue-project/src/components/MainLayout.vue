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

<style>
#app-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.layout-body {
    display: flex;
    flex: 1;
}

.main-content {
    flex: 1;

    padding: 30px;
    overflow-y: auto;

    background-color: #ffffff;
}
</style>