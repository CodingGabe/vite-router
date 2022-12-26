<template>
    <nav class="bg-indigo-700 flex justify-between">
        <div>
            <router-link to='/'>
                <img src="/vite.svg" alt="" class="logo">
            </router-link>
        </div>
        <div class="flex justify-end content-center items-center">
        <router-link v-for="destination in destinations" :key="destination.id" :to="{name: 'destination.show', params:{slug: destination.slug} }">
            {{ destination.name }}
        </router-link>
        </div>
   </nav>
</template>

<script>

import sourceData from '@/data.json'

export default {
    data () {
        return {
            destinations: sourceData.destinations
        }
    }
}
</script>

<style lang="css">
    nav a {
        padding: 0 .5rem;
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        color: rgb(212 212 216);
    }
    nav .active-link {
        color: #fff;
        text-decoration: underline;
    }
</style>