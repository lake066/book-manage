<template>
  <div class="app">
    <Navbar />
    <div class="main-wrap">
      <Sidebar />
      <main class="page-content">
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.main-wrap {
  display: flex;
  min-height: calc(100vh - 100px);
}
.page-content {
  flex: 1;
  padding: 20px;
}
</style>
