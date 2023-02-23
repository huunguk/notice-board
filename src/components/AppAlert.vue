<template>
  <div v-if="show" class="alert" :class="styleClass" role="alert">
    {{ message }}
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  show: {
    type: Boolean,
    defalut: false,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'error',
    validator: value => ['success', 'error'].includes(value),
  },
});
const styleClass = computed(() =>
  props.type === 'error' ? 'alert-danger' : 'alert-success',
);
</script>

<style scoped>
.app-alert {
  position: fixed;
  top: 10px;
  right: 10px;
}

.v-enter-from {
  opacity: 0;
}

.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-enter-to {
  opacity: 1;
}
</style>
