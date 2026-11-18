<template>
  <div class="stat-card card">
    <div class="label">{{ label }}</div>
    <div class="num">{{ value }}</div>
  </div>
</template>

<script setup>
const props = defineProps({ label: String, value: [Number, String] })
</script>

<style scoped>
.stat-card { min-width: 160px; text-align: center; }
.label { color: #666; }
.num { font-size: 28px; font-weight: bold; margin-top: 8px; color: #409eff; }
</style>
