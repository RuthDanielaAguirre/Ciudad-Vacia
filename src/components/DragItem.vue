<template>
  <div
    class="drag-item"
    draggable="true"
    @dragstart="handleDragStart"
    @dragend="handleDragEnd"
    :class="{ 'dragging': isDragging }"
  >
    <img 
      :src="watashi.image" 
      :alt="watashi.name"
      class="w-20 h-20 object-contain pointer-events-none"
    />
    <p class="text-sm font-semibold mt-2 text-center">{{ watashi.name }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  watashi: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['dragstart', 'dragend'])

const isDragging = ref(false)

function handleDragStart(event) {
  isDragging.value = true
  // Guardar el ID del watashi en el dataTransfer
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('watashiId', props.watashi.id)
  emit('dragstart', props.watashi.id)
}

function handleDragEnd() {
  isDragging.value = false
  emit('dragend')
}
</script>