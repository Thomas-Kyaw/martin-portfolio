<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Preloader from '@/components/Preloader.vue'
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
  <div class="index-page">

    <!-- Hero Section -->
    <section id="hero" class="mt-10 py-20 text-center bg-white text-black">
      <div class="max-w-4xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <h2 class="text-3xl md:text-5xl font-serif font-bold leading-snug md:leading-tight text-black">
          I'm
          <span class="relative inline-block mx-2">
            <span class="relative z-10 text-black">Martina Alicia Dindu</span>
            <span
              class="absolute left-0 bottom-1/4 w-full h-1/2"
              style="background-color: #800000; transform: skewX(-10deg); z-index: 0;"
            ></span>
          </span>
          a Photographer/Videographer from 
          <br />
          Kuching, Sarawak
        </h2>

        <p class="mt-6 max-w-2xl mx-auto text-gray-700 text-base md:text-lg">
          I specialise in event, street, travel, and wildlife photography, with a focus on short-form and narrative-driven videography. Let’s connect if you're looking to collaborate or hire!
        </p>

        <RouterLink
          to="/contact"
          class="inline-block mt-8 px-6 py-3 text-lg font-semibold rounded transition duration-300 tracking-wide"
          style="background-color: #800000; color: white;"
        >
          AVAILABLE FOR HIRE
        </RouterLink>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="py-12 bg-gray-900 text-white">
      <div data-aos="fade-up" data-aos-delay="100">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-12">
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
