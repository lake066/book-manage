<template>
  <header class="navbar">
    <div class="title">图书管理系统</div>
    <nav class="nav">
      <RouterLink to="/">首页</RouterLink>
      <RouterLink to="/books">图书列表</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 60px;
  background: #2c3e50;
  color: white;
}
.nav {
  display: flex;
  gap: 24px;
}
.nav a {
  color: #fff;
  text-decoration: none;
}
.nav a.router-link-active {
  color: #42b983;
}
</style>
