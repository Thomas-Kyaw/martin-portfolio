<!-- GalleryCard.vue -->
<template>
  <div class="gallery-item overflow-hidden rounded shadow-lg group relative cursor-pointer">
    <img :src="image" :alt="title" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
      <button @click="$emit('expand', { image, title })" class="text-white text-2xl">
        <i class="bi bi-arrows-angle-expand"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(['image', 'title'])
defineEmits(['expand'])
</script>
