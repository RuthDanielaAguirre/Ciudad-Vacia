<template>
  <div class="glass-card" :class="variant">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'default', // 'default', 'dark', 'light'
    validator: (value) => ['default', 'dark', 'light'].includes(value)
  }
})
</script>

<style scoped>
.glass-card {
  border-radius: 1.25rem;
  padding: 2.5rem;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Borde superior con glow */
.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 15%;
  right: 15%;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent,
    hsl(340 60% 75%),
    hsl(280 60% 65%),
    transparent
  );
  filter: blur(1px);
}

.default {
  background: rgba(20, 20, 25, 0.75);
  color: hsl(0 0% 95%);
}

.dark {
  background: rgba(10, 10, 15, 0.85);
  color: hsl(0 0% 95%);
}

.light {
  background: rgba(255, 255, 255, 0.15);
  color: hsl(0 0% 95%);
}
</style>