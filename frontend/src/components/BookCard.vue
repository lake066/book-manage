<template>
  <div class="book-card card">
    <h3>{{ book.title }}</h3>
    <p>作者：{{ book.author }}</p>
    <p>分类：<Tag :text="book.category" /></p>
    <p>价格：¥{{ book.price }}</p>
    <div class="flex-row" style="margin-top:10px">
      <button class="btn-primary" @click="$emit('view-detail', book.id)">查看详情</button>
    </div>
  </div>
</template>

<script setup>
import Tag from './Tag.vue'
const props = defineProps({
  book: { type: Object, required: true }
})
const emit = defineEmits(['view-detail'])
</script>

<style scoped>
.book-card h3 { margin-bottom: 8px; }
.book-card p { margin: 4px 0; color: #666; }
</style>
