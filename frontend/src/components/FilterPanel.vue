<template>
  <div class="filter card flex-row">
    <span>分类筛选：</span>
    <select v-model="category" @change="handleChange">
      <option value="">全部</option>
      <option value="前端">前端</option>
      <option value="文学">文学</option>
      <option value="科普">科普</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['filter-change'])
const category = ref('')
const handleChange = () => emit('filter-change', category.value)
</script>
