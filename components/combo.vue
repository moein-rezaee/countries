<template>
    <div class="dropdown">
        <button class="dropbtn" @click.prevent="onclickItem">{{ selected || 'Filter By Region' }}</button>
        <div class="dropdown-content">
            <slot />
        </div>
    </div>
</template>


<script setup>
const { onclick, selected } = defineProps(['onclick', 'selected']);
</script>

<style>
.dropdown {
    min-width: 160px;
    position: relative;
    display: inline-block;
}

.dropbtn {
    background-color: var(--bg-el);
    box-shadow: var(--shadow);
    color: var(--text-color);
    padding: 16px;
    font-size: var(--font-size);
    border: none;
    cursor: pointer;
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 8px;
    text-align: left;
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--bg-el);
    min-width: 160px;
    box-shadow: var(--shadow);
    z-index: 1;
    border-radius: 4px;
}

.dropdown-content a {
    color: var(--text-color);
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: var(--font-size);
    cursor: pointer;
}
/* 
.dropdown-content a:hover {
    background-color: #f1f1f1
} */

.dropdown:hover .dropdown-content {
    display: block;
}
/* 
.dropdown:hover .dropbtn {
    background-color: #fafafa;
} */
</style>