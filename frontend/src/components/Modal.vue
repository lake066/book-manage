<template>
  <Teleport to="body">
    <div v-if="show" class="mask" @click.self="$emit('close')">
      <div class="modal card">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button @click="$emit('close')">关闭</button>
          </slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps(['show'])
const emit = defineEmits(['close'])
</script>

<style scoped>
.mask { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.4); display: flex; align-items: center; justify-content: center; z-index: 999; }
.modal { width: 480px; }
.modal-header { font-weight: bold; font-size: 18px; padding-bottom: 12px; border-bottom: 1px solid #eee; }
.modal-body { padding: 16px 0; }
.modal-footer { padding-top: 12px; border-top: 1px solid #eee; text-align: right; }
</style>
