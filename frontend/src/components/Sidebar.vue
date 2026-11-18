<template>
  <aside class="sidebar">
    <div class="menu-item" @click="$router.push('/')">数据概览</div>
    <div class="menu-item" @click="$router.push('/books')">图书管理</div>
  </aside>
</template>

<script setup>
import { useRouter } from 'vue-router'
const $router = useRouter()
</script>

<style scoped>
.sidebar {
  width: 180px;
  background: #fff;
  border-right: 1px solid #eee;
  padding-top: 20px;
}
.menu-item {
  padding: 12px 20px;
  cursor: pointer;
}
.menu-item:hover {
  background: #ecf5ff;
  color: #409eff;
}
</style>
