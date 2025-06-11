<template>
  <div id="app" class="font-sans text-black">
    <Navbar />
    <RouterView />
    <Footer />
    <Preloader />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Preloader from './components/Preloader.vue'
</script>
