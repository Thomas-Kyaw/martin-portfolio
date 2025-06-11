<script setup>
import { ref } from 'vue'
import GalleryCard from '@/components/GalleryCard.vue'

// Dynamically generate the image URLs
const images = Array.from({ length: 8 }, (_, i) => {
  const n = i + 1
  const suffix = n === 8 ? '-2' : ''
  const path = new URL(`../assets/img/gallery/gallery-${n}${suffix}.jpg`, import.meta.url).href
  return { path, title: `Gallery ${n}` }
})

// Preview overlay state
const previewImage = ref(null)
const previewTitle = ref(null)
const showPreview = ref(false)

function openPreview({ image, title }) {
  previewImage.value = image
  previewTitle.value = title
  showPreview.value = true
}

function closePreview() {
  showPreview.value = false
}
</script>

<template>
  <div class="gallery-page">
    <!-- Hero Title -->
    <section id="hero" class="py-20 text-center bg-black text-white">
      <div class="max-w-3xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <h1 class="text-4xl md:text-5xl font-serif font-bold leading-snug">Gallery</h1>
        <p class="mt-4 text-base md:text-lg text-gray-300">
          Welcome to my visual journal.
          Each photo and video here captures more than just what was in front of the lens but they hold a feeling, a rhythm, a story waiting to be felt. Whether it's the stillness between movements or the chaos of a crowd, I frame moments that speak louder than words.
        </p>
        <RouterLink
          to="/contact"
          class="inline-block mt-6 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded transition"
        >
          AVAILABLE FOR HIRE
        </RouterLink>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="py-16 bg-[#f7f7d9]">
      <div class="container mx-auto px-6" data-aos="fade-up" data-aos-delay="100">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <GalleryCard
            v-for="(img, i) in images"
            :key="i"
            :image="img.path"
            :title="img.title"
            @expand="openPreview"
          />
        </div>
      </div>
    </section>

    <!-- Preview Overlay -->
    <div
      v-if="showPreview"
      class="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4"
    >
      <button
        class="absolute top-4 right-4 text-white text-3xl"
        @click="closePreview"
        title="Close"
      >
        <i class="bi bi-x-lg"></i>
      </button>

      <img :src="previewImage" :alt="previewTitle" class="max-h-[80vh] max-w-full rounded shadow-lg mb-4" />
      <p class="text-white text-lg font-medium">{{ previewTitle }}</p>
    </div>
  </div>
</template>
