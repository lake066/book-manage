<template>
  <div class="form-wrap">
    <div class="form-item">
      <label>书名</label>
      <input v-model="form.title" type="text" />
    </div>
    <div class="form-item">
      <label>作者</label>
      <input v-model="form.author" type="text" />
    </div>
    <div class="form-item">
      <label>分类</label>
      <input v-model="form.category" type="text" />
    </div>
    <div class="form-item">
      <label>价格</label>
      <input v-model.number="form.price" type="number" />
    </div>
    <div class="flex-row" style="margin-top:16px">
      <button class="btn-primary" @click="handleSubmit">提交</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const props = defineProps({
  initData: {
    type: Object,
    default: () => ({ title: '', author: '', category: '', price: 0 })
  }
})
const emit = defineEmits(['submit'])
const form = reactive({ ...props.initData })
const handleSubmit = () => emit('submit', { ...form })
</script>

<style scoped>
.form-item { margin: 10px 0; }
.form-item label { display: block; margin-bottom: 4px; }
.form-item input { width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px; }
</style>
