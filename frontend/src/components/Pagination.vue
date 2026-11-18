<template>
  <div class="pagination flex-row">
    <button :disabled="currentPage <= 1" @click="$emit('change', currentPage - 1)">上一页</button>
    <span>第 {{ currentPage }} 页 / 共 {{ totalPage }} 页</span>
    <button :disabled="currentPage >= totalPage" @click="$emit('change', currentPage + 1)">下一页</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  currentPage: Number,
  pageSize: Number,
  total: Number
})
const emit = defineEmits(['change'])
const totalPage = computed(() => Math.ceil(props.total / props.pageSize))
</script>
