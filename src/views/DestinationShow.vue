<template>
    <section class="destination">
        <h1>Hello Destination</h1>
        <h1>{{destination.name}}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{destination.description}}</p>
        </div>
    </section>
</template>

<script>

import sourceData from '@/data.json'

export default {
    computed: {
        destinationId () {
            return parstInt(this.$route.params.id)
        },
        // destination () {

        //     let indexOfDest = sourceData.destinations.findIndex(o => o.id == this.destinationId);

        //     return sourceData.destinations[indexOfDest]

        // }
        destination () {
            return sourceData.destinations.find(destination => destination.id === this.destinationId)
        }
    }
}
</script>