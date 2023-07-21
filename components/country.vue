<template>
    <div class="card">
        <div class="img-box">
            <img :src="`/assets/images/flags/${item.image}`" :alt="item.name" :tootip="item.name">
        </div>
        <nuxt-link :to="`/${item.name}`" class="country-title">
            <h2>{{ item.name }}</h2>
        </nuxt-link>
        <div class="ditails">
            <div class="detail">
                <label>Population:</label>
                <span>{{ item.population }}</span>
            </div>
            <div class="detail">
                <label>Region:</label>
                <span>{{ item.region }}</span>
            </div>
            <div class="detail">
                <label>Capital:</label>
                <span>{{ item.capital }}</span>
            </div>
        </div>
    </div>
</template>



<script setup>
const { item } = defineProps(['item']);
</script>