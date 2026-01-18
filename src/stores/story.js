import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { adventureData } from "../data/adventures";

export const useStoryStore = defineStore("story", () => {
  
  // ========== ESTADO ==========
  
  // Índice del capítulo actual (0, 1, 2, 3...)
  const currentChapterIndex = ref(0);
  
  // Watashi elegido por el usuario
  const selectedWatashi = ref(null);
  
  // ¿El texto está visible? (después de elegir correctamente)
  const isTextVisible = ref(false);
  
  // ¿Hay error? (eligió watashi incorrecto)
  const hasError = ref(false);
  
  
  // ========== GETTERS ==========
  
  // Obtener el capítulo actual
  const currentChapter = computed(() => {
    return adventureData.chapters[currentChapterIndex.value];
  });
  
  // ¿Es el último capítulo?
  const isLastChapter = computed(() => {
    return currentChapterIndex.value === adventureData.chapters.length - 1;
  });
  
  // ¿Puede ir al siguiente? (necesita haber elegido correcto)
  const canGoNext = computed(() => {
    return isTextVisible.value;
  });
  
  
  // ========== ACTIONS ==========
  
  // Seleccionar un watashi
  function selectWatashi(watashiId) {
    selectedWatashi.value = watashiId;
    hasError.value = false;
  }
  
  // Validar la elección
  function validateChoice() {
    if (!selectedWatashi.value) {
      hasError.value = true;
      return false;
    }
    
    // Verificar si es el watashi correcto
    if (selectedWatashi.value === currentChapter.value.correctWatashi) {
      isTextVisible.value = true;
      hasError.value = false;
      return true;
    } else {
      hasError.value = true;
      return false;
    }
  }
  
  // Ir al siguiente capítulo
  function goToNextChapter() {
    if (!canGoNext.value) return false;
    
    if (!isLastChapter.value) {
      currentChapterIndex.value++;
      // Reset para el nuevo capítulo
      selectedWatashi.value = null;
      isTextVisible.value = false;
      hasError.value = false;
      return true;
    }
    
    return false;
  }
  
  // Limpiar selección actual
  function clearSelection() {
    selectedWatashi.value = null;
    hasError.value = false;
  }
  
  // Reiniciar toda la historia
  function reset() {
    currentChapterIndex.value = 0;
    selectedWatashi.value = null;
    isTextVisible.value = false;
    hasError.value = false;
  }
  
  
  // ========== RETURN ==========
  return {
    // State
    currentChapterIndex,
    selectedWatashi,
    isTextVisible,
    hasError,
    // Getters
    currentChapter,
    isLastChapter,
    canGoNext,
    // Actions
    selectWatashi,
    validateChoice,
    goToNextChapter,
    clearSelection,
    reset
  };
});