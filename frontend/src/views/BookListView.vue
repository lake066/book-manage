<template>
  <div>
    <h2>图书管理列表</h2>
    <div class="flex-row" style="margin:12px 0">
      <SearchInput v-model="searchKey" @search="onSearch" />
      <button class="btn-primary" @click="openAddModal">新增图书</button>
    </div>
    <FilterPanel @filter-change="onFilter" />
    <ErrorBoundary :error="store.error" :errorMsg="store.errorMsg" @retry="store.fetchBooks()" />
    <Loading :show="store.loading" />
    <BookTable
      v-if="!store.loading && !store.error"
      :list="filterList"
      @edit="openEditModal"
      @delete="openConfirm"
    />
    <EmptyTip v-if="filterList.length === 0 && !store.loading" />

    <!-- 新增/编辑弹窗 -->
    <Modal :show="modalShow" @close="closeModal">
      <template #header>{{ editData ? '编辑图书' : '新增图书' }}</template>
      <BookForm :init-data="editData" @submit="submitForm" />
    </Modal>

    <!-- 删除确认 -->
    <ConfirmDialog :show="confirmShow" @confirm="doDelete" @cancel="confirmShow = false" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useBookStore } from '@/stores/book'
import SearchInput from '@/components/SearchInput.vue'
import FilterPanel from '@/components/FilterPanel.vue'
import BookTable from '@/components/BookTable.vue'
import BookForm from '@/components/BookForm.vue'
import Modal from '@/components/Modal.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import Loading from '@/components/Loading.vue'
import EmptyTip from '@/components/EmptyTip.vue'
import ErrorBoundary from '@/components/ErrorBoundary.vue'

const store = useBookStore()
const searchKey = ref('')
const categoryKey = ref('')
const modalShow = ref(false)
const confirmShow = ref(false)
const delId = ref(null)
const editData = ref(null)

onMounted(() => store.fetchBooks())
watch(searchKey, () => store.fetchBooks(searchKey.value))

const filterList = computed(() => {
  let arr = [...store.bookList]
  if (categoryKey.value) arr = arr.filter(i => i.category === categoryKey.value)
  return arr
})
const onSearch = () => store.fetchBooks(searchKey.value)
const onFilter = (val) => (categoryKey.value = val)

const openAddModal = () => {
  editData.value = null
  modalShow.value = true
}
const openEditModal = (row) => {
  editData.value = { ...row }
  modalShow.value = true
}
const openConfirm = (row) => {
  delId.value = row.id
  confirmShow.value = true
}
const closeModal = () => (modalShow.value = false)

const submitForm = async (form) => {
  if (editData.value) {
    await store.updateBook(editData.value.id, form)
  } else {
    await store.addBook(form)
  }
  modalShow.value = false
}
const doDelete = async () => {
  await store.deleteBook(delId.value)
  confirmShow.value = false
}
</script>
