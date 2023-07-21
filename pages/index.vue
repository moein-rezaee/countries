<template>
    <div class="container">
        <div class="filter-box">
            <div class="search-box">
                <input type="text" class="input" placeholder="Search for country ..." />
            </div>
            <combo :selected="selectedFilter">
                <a v-for="i in filterItems" @click="selectedFilter = i">{{ i }}</a>
            </combo>
        </div>
    </div>
    <div class="container" v-if="countries">
        <div class="countries">
            <country v-for="i in countries" :item="i" :key="i.id" />
        </div>
    </div>
</template>


<script setup>
import { useCountriesStore } from "~/stores/countries";
const { all, getRegions } = useCountriesStore();
const countries = await all();

const selectedFilter = ref('all')
const filterItems = getRegions(countries.value);
</script>