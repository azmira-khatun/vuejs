<template>
    <header class="navbar">
        <div class="logo">
            <span class="logo-text">Vue App</span>
        </div>
        <nav class="nav-links">
            <router-link to="/" class="nav-item">Home</router-link>
            <router-link to="/about" class="nav-item">About</router-link>
            <router-link to="/settings" class="nav-item">Settings</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'TheNavbar',
};
</script>

<style scoped>
.navbar {
    background-color: #3f51b5;
    /* Primary Color */
    color: white;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    /* সম্পূর্ণ প্রস্থ নিশ্চিত করতে */
    box-sizing: border-box;
    /* padding সহ যেন 100% width থাকে */
}

.logo-text {
    font-size: 1.6em;
    font-weight: bold;
}

.nav-links a {
    color: white;
    text-decoration: none;
    margin-left: 25px;
    padding: 5px 10px;
    transition: background-color 0.3s;
}

.nav-links a:hover {
    background-color: #5c6bc0;
    /* Darker shade on hover */
    border-radius: 4px;
}
</style>