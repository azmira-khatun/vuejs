<template>
    <aside class="sidebar">
        <nav class="sidebar-nav">
            <ul>
                <li><router-link to="/" class="sidebar-link">Dashboard</router-link></li>
                <li><router-link to="/users" class="sidebar-link">Users</router-link></li>
                <li><router-link to="/reports" class="sidebar-link">Reports</router-link></li>
                <li><router-link to="/contact" class="sidebar-link">Communication</router-link></li>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
    name: 'TheSidebar',
};
</script>

<style scoped>
.sidebar {
    width: 250px;
    background-color: #c3deeb;
    /* Light Gray Background */
    padding: 20px 0;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
    flex-shrink: 0;
    /* Sidebar যেন ছোট না হয়ে যায় */
}

.sidebar-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar-nav li {
    margin-bottom: 5px;
}

.sidebar-link {
    display: block;
    text-decoration: none;
    color: #333;
    padding: 10px 20px;
    transition: background-color 0.3s, color 0.3s;
}

.sidebar-link:hover {
    background-color: #e0e0e0;
    /* Gray on hover */
    color: #3f51b5;
    /* Primary Color text */
}

/* router-link সক্রিয় থাকলে তাকে চিহ্নিত করার জন্য একটি স্টাইল যোগ করা হয়েছে */
.sidebar-link.router-link-active {
    background-color: #d1d9e6;
    /* Active background */
    font-weight: bold;
    color: #3f51b5;
}
</style>