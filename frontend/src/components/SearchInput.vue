<template>
  <div class="search-wrap">
    <input
      v-model="keyword"
      type="text"
      placeholder="输入书名搜索"
      @keyup.enter="handleSearch"
    />
    <button class="btn-primary" @click="handleSearch">搜索</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'search'])
const keyword = ref(props.modelValue)
watch(keyword, (val) => emit('update:modelValue', val))
const handleSearch = () => emit('search')
</script>

<style scoped>
.search-wrap { display: flex; gap: 8px; }
.search-wrap input { padding: 6px; flex: 1; border: 1px solid #ccc; border-radius: 4px; }
</style>
