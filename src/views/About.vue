<template>
  <section class="about-page text-white bg-black">
    <!-- Hero Title -->
    <div class="page-title py-20 text-center">
      <div class="max-w-3xl mx-auto px-4">
        <h1 class="text-4xl text-black font-bold mb-4">About</h1>
        <p class="text-lg text-black">
          I specialise in event, street, travel, and wildlife photography, with a focus on short-form and narrative-driven videography.  Let’s connect if you're looking to collaborate or hire!
        </p>
        <RouterLink
          to="/contact"
          class="inline-block mt-6 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded transition"
        >
          AVAILABLE FOR HIRE
        </RouterLink>
      </div>
    </div>

    <!-- About Content -->
    <div class="about-section bg-[#f7f7d9] text-black py-20">
      <div class="container mx-auto px-6 md:px-12 max-w-6xl">
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img src="@/assets/img/profile-img.jpg" alt="Profile" class="rounded shadow-lg w-full object-cover">
          </div>
          <div>
            <h2 class="text-xl md:text-2xl font-semibold text-emerald-700 mb-4">
              Photographer/Videographer/Poster Designer from Kuching, Sarawak, Malaysia.
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <ul class="space-y-2">
                <li><span class="text-emerald-500 font-semibold">Birthday:</span> 4th March 2003</li>
                <li><span class="text-emerald-500 font-semibold">Website:</span> www.example.com</li>
                <li><span class="text-emerald-500 font-semibold">Phone:</span> +019-4396275</li>
                <li><span class="text-emerald-500 font-semibold">City:</span> Kuching, Sarawak, Malaysia</li>
              </ul>
              <ul class="space-y-2">
                <li><span class="text-emerald-500 font-semibold">Age:</span> 22</li>
                <li><span class="text-emerald-500 font-semibold">Degree:</span> Bachelor of Design (Multimedia Design)</li>
                <li><span class="text-emerald-500 font-semibold">Email:</span> martinwitha03@gmail.com</li>
                <li><span class="text-emerald-500 font-semibold">Freelance:</span> Available</li>
              </ul>
            </div>
            <div class="mt-6 text-sm text-gray-800 space-y-4">
              <p>
                I’m a multimedia designer with a passion for photography and video storytelling. I thrive behind the camera capturing visuals, crafting mood, and editing footage into meaningful narratives.
              </p>
              <p>
                While I’m still building confidence in interactive design, I’m most at home working with real-world visuals. I enjoy projects that explore user-centered design, branding, and conceptual thinking especially when the theme inspires me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Nothing needed for now
</script>

<style scoped>
.about-page {
  font-family: 'Inter', sans-serif;
}

.page-title h1 {
  font-family: 'Cardo', serif;
}
</style>
