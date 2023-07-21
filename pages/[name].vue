<template>
    <div class="container">
        <div class="ditails-page">
            <div class="ditails-head">
                <nuxt-link to="/" class="btn icon back">Back</nuxt-link>
            </div>
            <div class="ditails-body">
                <div class="flag-box">
                    <img :src="i.flag" :alt="i.name">
                </div>
                <div class="country">
                    <h2 class="name">
                        {{ i.name }}
                    </h2>
                    <div class="country-content">
                        <div class="info-box">
                            <div class="info-side">
                                <div class="info">
                                    <label>Native Name:</label>
                                    <span>{{ i.name }}</span>
                                </div>
                                <div class="info">
                                    <label>Population:</label>
                                    <span>{{ i.population }}</span>
                                </div>
                                <div class="info">
                                    <label>Region:</label>
                                    <span>{{ i.region }}</span>
                                </div>
                                <div class="info">
                                    <label>Sub Region:</label>
                                    <span>{{ i.subregion }}</span>
                                </div>
                            </div>
                            <div class="info-side">
                                <div class="info">
                                    <label>Top Level Domain:</label>
                                    <span>{{ i.tId }}</span>
                                </div>
                                <div class="info">
                                    <label>Currencies:</label>
                                    <span>{{ i.currencies.name }}, {{ i.currencies.symbol }}</span>
                                </div>
                                <div class="info">
                                    <label>Languages:</label>
                                    <span>{{ i.languages }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="borders" v-if="i.borders">
                            <label for="">Border Countries:</label>
                            <div class="badges">
                                <nuxt-link :to="`/${country}`" v-for="country in i.borders" :key="index" class="badge">{{
                                    country }}</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCountriesStore } from "~/stores/countries";
const { single } = useCountriesStore();
const { params } = useRoute();
const i = await single(params.name);
</script>

<style>
.ditails-page {
    display: flow-root;
    margin: 64px 0 32px;
}

.ditails-head {
    margin: 0 0 32px;
}

.ditails-body {
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 32px));
    grid-gap: 64px;
}

.flag-box img {
    width: 100%;
}

.country {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.country > .name {
    display: flow-root;
    width: 100%;
    margin: 16px 0;
    font-size: 36px;
}

.country-content {
    display: flow-root;
    width: 100%;
}

.info-box {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(2,1fr);
    font-size: 20px;
    line-height: 2em;
}

.info > label {
    font-weight: 600;
    margin: 0 8px 0 0;
}

.borders {
    display: flex;
    font-size: 20px;
    line-height: 2em;
    margin-top: 32px;
}

.borders > label {
    font-weight: 600;
    white-space: nowrap;
}
</style>  