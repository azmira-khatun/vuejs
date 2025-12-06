<template>
    <aside class="sidebar">
        <nav class="sidebar-nav">
            <ul>
                <li><a href="#" class="sidebar-link">Dashboard</a></li>
                <li><a href="#" class="sidebar-link">User</a></li>
                <li><a href="#" class="sidebar-link">Report</a></li>
                <li><a href="#" class="sidebar-link">Communication</a></li>
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
    background-color: #f8f9fa;
    /* Light Gray Background */
    padding: 20px 0;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
    flex-shrink: 0;
    /* Sidebar যেন ছোট না হয়ে যায় */
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
</style>