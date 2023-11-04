<script setup lang="ts">
import Followed from './components/Followed.vue'
import Notifications from './components/Notifications.vue';
</script>

<template>
  <section>
    <Followed/>
  </section>

  <section id="notifications">
    <Notifications />
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
}
</style>
