<template>
  <div
    class="drop-zone-container"
    :class="{
      'drag-over': isDragOver,
      'filled': droppedWatashi,
      'error': hasError
    }"
    @dragover.prevent="handleDragOver"
    @dragenter="handleDragEnter"
    @dragleave="handleDragLeave"
    @drop.prevent="handleDrop"
  >
    <!-- Background con overlay -->
    <div class="drop-zone-bg"></div>
    
    <!-- Contenido -->
    <div class="drop-zone-content">
      <!-- Si hay watashi soltado -->
      <div v-if="droppedWatashi" class="flex flex-col items-center">
        <img 
          :src="droppedWatashi.image" 
          :alt="droppedWatashi.name"
          class="w-24 h-24 object-contain drop-shadow-lg"
        />
        <p class="text-sm font-semibold mt-2 px-3 py-1 bg-black/60 rounded-full">
          {{ droppedWatashi.name }}
        </p>
      </div>
      
      <!-- Placeholder -->
      <div v-else class="text-center">
        <p class="text-4xl mb-2">📦</p>
        <p class="text-sm px-4 py-2 bg-black/60 rounded-lg inline-block">
          Arrastra un personaje aquí
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStoryStore } from '../stores/story'

const store = useStoryStore()
const isDragOver = ref(false)

const droppedWatashi = computed(() => {
  if (!store.selectedWatashi) return null
  return store.currentChapter.availableWatashi.find(
    w => w.id === store.selectedWatashi
  )
})

const hasError = computed(() => store.hasError)

function handleDragOver(event) {
  event.preventDefault()
  event.dataTransfer.dropEffect = 'move'
}

function handleDragEnter() {
  isDragOver.value = true
}

function handleDragLeave() {
  isDragOver.value = false
}

function handleDrop(event) {
  event.preventDefault()
  isDragOver.value = false
  const watashiId = event.dataTransfer.getData('watashiId')
  if (watashiId) {
    store.selectWatashi(watashiId)
  }
}
</script>

<style scoped>
.drop-zone-container {
  position: relative;
  border-radius: 1rem;
  min-height: 180px;
  transition: all 0.3s ease;
  overflow: hidden;
  border: 3px dashed rgba(255, 255, 255, 0.3);
}

/* Background con pattern */
.drop-zone-bg {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(240, 163, 208, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(107, 163, 217, 0.1) 0%, transparent 50%),
    rgba(10, 10, 15, 0.7);
  backdrop-filter: blur(10px);
}

.drop-zone-content {
  position: relative;
  z-index: 1;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(0 0% 95%);
}

/* Estados */
.drag-over {
  border-color: hsl(210 80% 60%);
  border-style: solid;
  transform: scale(1.02);
}

.drag-over .drop-zone-bg {
  background: 
    radial-gradient(circle at center, rgba(107, 163, 217, 0.2) 0%, transparent 70%),
    rgba(20, 30, 45, 0.8);
}

.filled {
  border-color: hsl(140 60% 50%);
  border-style: solid;
}

.filled .drop-zone-bg {
  background: 
    radial-gradient(circle at center, rgba(0, 255, 100, 0.1) 0%, transparent 70%),
    rgba(10, 30, 15, 0.8);
}

.error {
  border-color: hsl(0 70% 55%);
  animation: shake 0.5s ease;
}

.error .drop-zone-bg {
  background: 
    radial-gradient(circle at center, rgba(255, 80, 80, 0.15) 0%, transparent 70%),
    rgba(40, 10, 15, 0.8);
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-12px); }
  75% { transform: translateX(12px); }
}
</style>