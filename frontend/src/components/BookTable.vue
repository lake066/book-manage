<template>
  <table class="book-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>书名</th>
        <th>作者</th>
        <th>分类</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.author }}</td>
        <td><Tag :text="item.category" /></td>
        <td>¥{{ item.price }}</td>
        <td class="flex-row">
          <button @click="$emit('edit', item)">编辑</button>
          <button class="btn-danger" @click="$emit('delete', item)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import Tag from './Tag.vue'
const props = defineProps({ list: Array })
const emit = defineEmits(['edit', 'delete'])
</script>

<style scoped>
.book-table { width: 100%; border-collapse: collapse; background: #fff; }
th, td { border: 1px solid #eee; padding: 10px; text-align: center; }
th { background: #f5f7fa; }
</style>

