<template>
  <div>
    <h2>图书数据概览</h2>
    <ErrorBoundary :error="store.error" :errorMsg="store.errorMsg" @retry="store.fetchBooks()" />
    <Loading :show="store.loading" />
    <div class="flex-row" v-if="!store.loading && !store.error">
      <StatCard label="图书总数" :value="store.bookList.length" />
      <StatCard label="前端类图书" :value="frontCount" />
      <StatCard label="文学类图书" :value="literCount" />
    </div>
    <h3 style="margin-top:24px">最新图书</h3>
    <div class="grid-wrap">
      <BookCard
        v-for="item in latestBooks"
        :key="item.id"
        :book="item"
        @view-detail="goDetail"
      />
    </div>
    <EmptyTip v-if="store.bookList.length === 0" />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useBookStore } from '@/stores/book'
import StatCard from '@/components/StatCard.vue'
import BookCard from '@/components/BookCard.vue'
import Loading from '@/components/Loading.vue'
import EmptyTip from '@/components/EmptyTip.vue'
import ErrorBoundary from '@/components/ErrorBoundary.vue'

const store = useBookStore()
const router = useRouter()
onMounted(() => store.fetchBooks())

const frontCount = computed(() => store.bookList.filter(i => i.category === '前端').length)
const literCount = computed(() => store.bookList.filter(i => i.category === '文学').length)
const latestBooks = computed(() => [...store.bookList].reverse().slice(0, 4))

const goDetail = (id) => router.push({ name: 'bookDetail', params: { id } })
</script>
