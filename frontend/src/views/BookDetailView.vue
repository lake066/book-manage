<template>
  <div>
    <h2>图书详情</h2>
    <ErrorBoundary :error="store.error" :errorMsg="store.errorMsg" @retry="loadDetail" />
    <Loading :show="store.loading" />
    <div class="card" v-if="store.currentBook && !store.loading">
      <p><b>ID：</b>{{ store.currentBook.id }}</p>
      <p><b>书名：</b>{{ store.currentBook.title }}</p>
      <p><b>作者：</b>{{ store.currentBook.author }}</p>
      <p><b>分类：</b><Tag :text="store.currentBook.category" /></p>
      <p><b>价格：</b>¥{{ store.currentBook.price }}</p>
      <button class="btn-primary" @click="$router.push('/books')">返回列表</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useBookStore } from '@/stores/book'
import Tag from '@/components/Tag.vue'
import Loading from '@/components/Loading.vue'
import ErrorBoundary from '@/components/ErrorBoundary.vue'

const route = useRoute()
const store = useBookStore()
const loadDetail = () => store.fetchBookById(Number(route.params.id))
onMounted(loadDetail)
watch(() => route.params.id, loadDetail)
</script>
