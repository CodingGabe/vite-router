<template>
  <div class="home">
      <h1>{{welcomeMsg || 'My Destination Wishlist' }}</h1>
      <div class="destinations">
        <router-link v-for="destination in destinations" :key="destination.id" :to="{name: 'destination.show', params:{slug: destination.slug} }">
            <h2>{{destination.name}}</h2>
            <img :src="`/images/${destination.image}`" :alt="destination.name">
        </router-link>
      </div>
  </div>
</template>

<script>

import sourceData from '@/data.json'

export default {
    props: {
        welcomeMsg: String
    },
    data () {
        return {
            destinations: sourceData.destinations
        }
    }
}
</script>

<style scoped>
h2 {
    color: rgb(212 212 216);
    font-size: 1.45rem;
    margin-bottom: 1.25rem;
}
.destinations {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    gap: 1.25rem;
    margin: 3.75rem 0;
    transition: opacity .2s ease-in;
}
.destinations a:hover {
    opacity: .8;
}
.destinations img {
    min-width: 100%;
    height: auto;
    object-fit: cover;
}
</style>