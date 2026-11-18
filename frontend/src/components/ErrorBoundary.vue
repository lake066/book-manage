<template>
  <div v-if="error" class="error card">
    <p>{{ errorMsg }}</p>
    <button @click="$emit('retry')">重试</button>
  </div>
  <slot v-else></slot>
</template>

<script setup>
const props = defineProps({
  error: Boolean,
  errorMsg: { type: String, default: '请求出错' }
})
const emit = defineEmits(['retry'])
</script>

<style scoped>
.error { color: #f56c6c; padding: 16px; }
</style>
