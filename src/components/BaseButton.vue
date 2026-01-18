<template>
  <button
    class="base-button"
    :class="[variant, size, { 'disabled': disabled }]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <span v-if="icon" class="icon">{{ icon }}</span>
    <span><slot /></span>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary', // 'primary', 'outline', 'ghost', 'secondary'
    validator: (value) => ['primary', 'outline', 'ghost', 'secondary'].includes(value)
  },
  size: {
    type: String,
    default: 'md', // 'sm', 'md', 'lg'
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  icon: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  border-radius: 0.75rem;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;
}

.base-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
  pointer-events: none;
}

.base-button:hover::before {
  width: 400px;
  height: 400px;
}

/* Variants */
.primary {
  background: linear-gradient(135deg, hsl(340 60% 75%), hsl(340 50% 60%));
  color: hsl(0 0% 10%);
  box-shadow: 0 4px 12px hsl(340 60% 60% / 0.4);
}

.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 25px hsl(340 60% 80% / 0.6), 0 8px 20px hsl(340 60% 60% / 0.5);
}

.primary:active {
  transform: translateY(0);
  transition: all 0.1s ease;
}

.outline {
  background: rgba(10, 10, 10, 0.6);
  border: 2px solid hsl(0 0% 98%);
  color: hsl(0 0% 98%);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.outline:hover {
  background: hsl(0 0% 98%);
  color: hsl(0 0% 8%);
  transform: translateY(-2px);
}

.ghost {
  background: transparent;
  color: hsl(0 0% 98%);
  border: 1px solid transparent;
}

.ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.secondary {
  background: rgba(40, 40, 50, 0.8);
  border: 2px solid rgba(255, 255, 255, 0.4);
  color: hsl(0 0% 95%);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.secondary:hover {
  background: rgba(60, 60, 70, 0.9);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.secondary:active {
  transform: translateY(0);
  transition: all 0.1s ease;
}

/* Sizes */
.sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.md {
  padding: 0.875rem 1.75rem;
  font-size: 0.95rem;
}

.lg {
  padding: 1.125rem 2.25rem;
  font-size: 1.05rem;
}

.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}
</style>