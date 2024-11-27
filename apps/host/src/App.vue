<script setup lang="ts">
import { RouterView } from 'vue-router';
import { version } from 'vue'


</script>

<template>
  <div class="text-40px shadow-2xl">
    <div>Host</div>
    <div>Host vue: {{ version }}</div>
  </div>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
