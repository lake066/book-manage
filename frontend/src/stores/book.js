import { defineStore } from 'pinia'
import { useHttp } from '@/composables/useHttp'
const { request } = useHttp()

export const useBookStore = defineStore('book', {
  state: () => ({
    bookList: [],
    currentBook: null,
    loading: false,
    error: false,
    errorMsg: ''
  }),
  actions: {
    async fetchBooks(keyword = '') {
      this.loading = true
      this.error = false
      try {
        const res = await request('get', '/books', { keyword })
        this.bookList = res.data
      } catch (err) {
        this.error = true
        this.errorMsg = '获取图书列表失败'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    async fetchBookById(id) {
      this.loading = true
      this.error = false
      try {
        const res = await request('get', `/books/${id}`)
        this.currentBook = res.data
      } catch (err) {
        this.error = true
        this.errorMsg = '查询图书详情失败'
      } finally {
        this.loading = false
      }
    },
    async addBook(formData) {
      await request('post', '/books', formData)
      await this.fetchBooks()
    },
    async updateBook(id, formData) {
      await request('put', `/books/${id}`, formData)
      await this.fetchBooks()
    },
    async deleteBook(id) {
      await request('delete', `/books/${id}`)
      await this.fetchBooks()
    }
  }
})
