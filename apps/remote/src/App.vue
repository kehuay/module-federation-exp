<script setup lang="ts">
import { ref, version } from 'vue'
const count = ref(0)

</script>

<template>
  <div class="text-40px shadow-2xl mt-40px">
    <div>Remote</div>
    <div>Remote vue: {{ version }}</div>
    <div class="text-30px text-red">
      Counter: {{ count }} <button @click="count++">+ Add one</button>
    </div>
    <div class="text-30px text-red">
      Counter(call $forceUpdate): {{ count }} <button @click="() => {
        count++;
        $forceUpdate()
      }">+ Add one</button>
    </div>
  </div>
  <div>
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
