<template>
  <div v-if="show" class="loading">
    <span>加载中...</span>
  </div>
</template>

<script setup>
const props = defineProps({ show: Boolean })
</script>

<style scoped>
.loading { padding: 20px; text-align: center; color: #666; }
</style>
