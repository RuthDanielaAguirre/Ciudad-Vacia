<template>
  <div class="min-h-screen relative overflow-hidden">
    
    <!-- Background del capítulo -->
    <div 
      class="fixed inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${currentChapter.background})` }"
    >
      <div class="absolute inset-0 bg-black/40"></div>
    </div>
    
    <!-- Contenido -->
    <div class="relative z-10 p-6">
      
      <!-- Header -->
      <div class="max-w-4xl mx-auto mb-6 flex justify-between items-center">
        <BaseButton 
          variant="secondary"
          icon="←"
          @click="goHome"
        >
          Volver
        </BaseButton>
        
        <h1 class="text-2xl font-bold text-white text-shadow">
          {{ currentChapter.title }}
        </h1>
        
        <div class="w-32"></div> <!-- Spacer -->
      </div>
      
      <!-- Área de juego -->
      <div class="max-w-4xl mx-auto">
        
        <!-- Instrucciones y Drag&Drop -->
        <GlassCard v-if="!store.isTextVisible" variant="default" class="mb-6 fade-in-up">
          
          <p class="text-lg text-white/90 text-center mb-4">
            🎯 Arrastra el personaje correcto a la zona para revelar la historia
          </p>
          
          <!-- Watashi disponibles -->
          <div class="flex gap-4 justify-center mb-6 flex-wrap">
            <DragItem 
              v-for="watashi in currentChapter.availableWatashi"
              :key="watashi.id"
              :watashi="watashi"
            />
          </div>
          
          <!-- Drop Zone -->
          <DropZone />
          
          <!-- Mensaje de error -->
          <p v-if="store.hasError" class="text-red-400 text-center mt-4 font-semibold">
            ❌ Ese no es el personaje correcto. Intenta con otro.
          </p>
          
          <!-- Botones de acción -->
          <div class="flex gap-4 justify-end mt-6">
            <BaseButton 
              variant="secondary"
              icon="🧹"
              @click="clearSelection"
              :disabled="!store.selectedWatashi"
            >
              Limpiar
            </BaseButton>
            
            <BaseButton 
              variant="primary"
              icon="✨"
              @click="confirm"
              :disabled="!store.selectedWatashi"
            >
              Confirmar
            </BaseButton>
          </div>
          
        </GlassCard>
        
        <!-- Texto de la historia (cuando aciertas) -->
        <GlassCard v-if="store.isTextVisible" variant="dark" class="fade-in-up">
          
          <div class="text-white/95 text-lg leading-relaxed whitespace-pre-line mb-6">
            {{ currentChapter.text }}
          </div>
          
          <!-- Botón Siguiente -->
          <div class="flex justify-end">
            <BaseButton 
              variant="primary"
              :icon="store.isLastChapter ? '🏁' : '\u2192'"
              size="lg"
              @click="nextChapter"
            >
              {{ store.isLastChapter ? 'Finalizar' : 'Siguiente' }}
            </BaseButton>
          </div>
          
        </GlassCard>
        
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStoryStore } from '../stores/story'
import DragItem from '../components/DragItem.vue'
import DropZone from '../components/DropZone.vue'
import GlassCard from '../components/GlassCard.vue'
import BaseButton from '../components/BaseButton.vue'

const router = useRouter()
const store = useStoryStore()

const currentChapter = computed(() => store.currentChapter)

function goHome() {
  store.reset()
  router.push('/')
}

function clearSelection() {
  store.clearSelection()
}

function confirm() {
  const isCorrect = store.validateChoice()
  
  if (!isCorrect) {
    console.log('Personaje incorrecto')
  }
}

function nextChapter() {
  if (store.isLastChapter) {
    goHome()
  } else {
    store.goToNextChapter()
  }
}
</script>