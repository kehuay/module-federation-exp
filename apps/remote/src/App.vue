<script setup lang="ts">
// import 'virtual:uno.css'
import { reactive, ref } from 'vue-demi'
import { ElTreeSelect, ElFormItem, ElDialog } from 'element-plus'
// import 'element-plus/dist/index.css'
// import { FaFormDialog } from 'faim'
const count = ref(0)
const isOpen = ref(false)
const form = reactive({
  option: ''
})
</script>

<template>
  <div class="">
    <div class="text-30px">
      Remote {{ count }} <button @click="count++">+ Add one</button>
    </div>
    <div>
      <button @click="() => {
        isOpen = true
      }">Open Dialog</button>
    </div>
    <ElDialog title="表单" v-model="isOpen">
      <div>{{ form }}</div>
      <ElFormItem v-model="form.option">
        <ElTreeSelect v-model="form.option" :data="[{ label: '第一项', value: 1 }]" />
      </ElFormItem>
    </ElDialog>
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
