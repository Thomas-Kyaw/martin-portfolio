<template>
  <div v-if="!loaded" id="preloader" class="fixed inset-0 bg-black flex items-center justify-center z-[99999]">
    <div class="relative w-px h-[280px]">
      <div class="absolute left-0 top-1/2 bg-white w-px h-0 animate-linegrow -translate-y-1/2"></div>
      <div class="absolute left-0 top-0 bg-white/10 w-px h-full animate-linemove"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
  }, 2000)
})
</script>

<style scoped>
@keyframes linegrow {
  0% { height: 0%; }
  100% { height: 100%; }
}
@keyframes linemove {
  0% { transform: translateY(200%); }
  100% { transform: translateY(-100%); }
}
.animate-linegrow {
  animation: linegrow 1s ease-in-out forwards;
}
.animate-linemove {
  animation: linemove 1.2s linear 2s infinite;
}
</style>
