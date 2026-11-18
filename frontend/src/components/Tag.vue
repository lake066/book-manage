<template>
  <span class="tag">{{ text }}</span>
</template>

<script setup>
const props = defineProps({ text: String })
</script>

<style scoped>
.tag {
  padding: 3px 8px;
  background: #ecf5ff;
  color: #409eff;
  border-radius: 4px;
  font-size: 12px;
}
</style>
