<template>
    <nav>
        <div class="container">
            <div class="nav-content">
                <h2 class="page-title">Where in the world</h2>
                <a class="btn-theme" href="#" @click="changeTheme">Dark Mode</a>
            </div>
        </div>
    </nav>
</template>

<script setup>
let isDark = false;
const changeTheme = ref(null);


onMounted(() => {
    changeTheme.value = function () {
        const lightStyles = `--bg: var(--very-light-gray);
                             --bg-el: var(--white);
                             --text-color: var(--very-dark-blue);`;
        const darkStyles = `--bg: var(--very-dark-blue-bg);
                            --bg-el: var(--dark-blue);
                            --text-color: var(--white);`;
        if (isDark) {
            //Change to Light
            document.documentElement.style.cssText = lightStyles;
            isDark = false;
        } else {
            //Change to Dark
            document.documentElement.style.cssText = darkStyles;
            isDark = true;
        }
    }
})

</script>

<style>
nav {
    background-color: var(--bg-el);
    box-shadow: var(--shadow);
}

nav .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav .btn-theme {
    text-decoration: none;
    color: var(--text-color);
    font-size: var(--heading-font-size);
    font-weight: 600;
    cursor: pointer;
    box-sizing: border-box;
    padding: 8px;
    border-radius: 4px;
    transition: all ease .3s;
    position: relative;
}

nav .page-title {
    color: var(--text-color);
    font-weight: 800;
}
</style>