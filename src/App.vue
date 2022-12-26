<script>

import TheNav from '@/components/TheNav.vue'

export default {
  components: {
    TheNav
  }
}

</script>

<template>

  <TheNav/>
  
  <section>
    <div class="container">
      <!-- Sets Home Page-->
      <router-view></router-view>
    </div>
  </section>

</template>

<style scoped>
nav {
  padding: 0 1.75rem;
}

.logos {
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
}
.logo {
  max-width: 100%;
  height: auto;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
