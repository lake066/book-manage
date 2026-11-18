<template>
  <Modal :show="show" @close="$emit('cancel')">
    <template #header>确认操作</template>
    <p>{{ tip }}</p>
    <template #footer>
      <button @click="$emit('cancel')">取消</button>
      <button class="btn-danger" @click="$emit('confirm')">确认删除</button>
    </template>
  </Modal>
</template>

<script setup>
import Modal from './Modal.vue'
const props = defineProps({
  show: Boolean,
  tip: { type: String, default: '确定要删除吗？' }
})
const emit = defineEmits(['confirm', 'cancel'])
</script>
