<template>
  <div class="min-h-screen relative overflow-hidden flex items-center justify-center p-6">
    
    <!-- Background -->
    <div 
      class="fixed inset-0 bg-cover bg-center"
      style="background-image: url('/backgrounds/b1.png')"
    >
      <div class="absolute inset-0 bg-black/50"></div>
    </div>
    
    <!-- Watashi flotante -->
    <div class="fixed bottom-10 right-10 float">
      <img src="/watash/w1.png" alt="Chi" class="w-40 h-40 object-contain opacity-60" />
    </div>
    
    <!-- Contenido -->
    <div class="relative z-10 max-w-3xl w-full">
      
      <GlassCard variant="default">
        
        <!-- Título -->
        <div class="text-center mb-8">
          <h1 class="text-5xl font-bold mb-4 text-gradient-pink">
            Ciudad Vacía
          </h1>
          <p class="text-xl text-white/80 italic">
            Una historia interactiva inspirada en Chobits
          </p>
          <p class="text-sm text-white/60 mt-2">
            Basada en el concepto de "La ciudad donde no vive nadie"
          </p>
        </div>
        
        <!-- Descripción -->
        <div class="mb-8 space-y-4 text-white/90">
          <p class="text-center leading-relaxed">
            En una ciudad llena de luces, las personas ya no se necesitan entre sí. 
            Acompañadas por máquinas, viven conectadas pero solas. 
            Esta es la historia de alguien que decide salir a buscar algo más.
          </p>
        </div>
        
        <!-- Instrucciones -->
        <div class="mb-8 space-y-3">
          <div class="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
            <span class="text-2xl">🎯</span>
            <div>
              <h3 class="font-semibold text-white mb-1">Arrastra y Suelta</h3>
              <p class="text-sm text-white/70">
                En cada capítulo, elige el personaje correcto para revelar la historia.
              </p>
            </div>
          </div>
          
          <div class="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
            <span class="text-2xl">📖</span>
            <div>
              <h3 class="font-semibold text-white mb-1">Lee y Avanza</h3>
              <p class="text-sm text-white/70">
                Cuando aciertes, se revelará un fragmento de la historia.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Botón -->
        <div class="text-center">
          <BaseButton 
            size="lg" 
            icon="✨"
            @click="startAdventure"
          >
            Comenzar Historia
          </BaseButton>
        </div>
        
      </GlassCard>
      
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import GlassCard from '../components/GlassCard.vue'
import BaseButton from '../components/BaseButton.vue'

const router = useRouter()

function startAdventure() {
  router.push('/story')
}
</script>