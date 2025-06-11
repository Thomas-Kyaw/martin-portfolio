<template>
  <section class="about-page bg-black">
    <!-- Hero Title -->
    <div class="page-title py-20 text-center">
      <div class="max-w-3xl mx-auto px-4">
        <h1 class="text-4xl text-black font-bold mb-4">About</h1>
        <p class="text-lg text-black">
          I specialise in event, street, travel, and wildlife photography, with a focus on short-form and narrative-driven videography.  Let’s connect if you're looking to collaborate or hire!
        </p>
        <RouterLink
          to="/contact"
          class="inline-block mt-8 px-6 py-3 text-lg font-semibold rounded transition duration-300 tracking-wide"
          style="background-color: #800000; color: white;"
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
                <li><span class="text-emerald-500 font-semibold" style="color: var(--accent-color);">Birthday:</span> 4th March 2003</li>
                <li><span class="text-emerald-500 font-semibold"style="color: var(--accent-color);">Website:</span> www.example.com</li>
                <li><span class="text-emerald-500 font-semibold"style="color: var(--accent-color);">Phone:</span> +019-4396275</li>
                <li><span class="text-emerald-500 font-semibold"style="color: var(--accent-color);">City:</span> Kuching, Sarawak, Malaysia</li>
              </ul>
              <ul class="space-y-2">
                <li><span class="text-emerald-500 font-semibold"style="color: var(--accent-color);">Age:</span> 22</li>
                <li><span class="text-emerald-500 font-semibold"style="color: var(--accent-color);">Degree:</span> Bachelor of Design (Multimedia Design)</li>
                <li><span class="text-emerald-500 font-semibold"style="color: var(--accent-color);">Email:</span> martinwitha03@gmail.com</li>
                <li><span class="text-emerald-500 font-semibold"style="color: var(--accent-color);">Freelance:</span> Available</li>
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

        <!-- Skill Map Section -->
        <div class="mt-20 bg-[#e5e0c5] py-16 px-6 md:px-12 text-black rounded-lg shadow-inner">
        <h2 class="text-2xl md:text-3xl font-semibold text-center mb-6 text-emerald-700 tracking-tight">
            My Skill Map
        </h2>
        <p class="text-center max-w-2xl mx-auto mb-12 text-[15px] leading-relaxed">
            A quick visual of my strengths in photography, videography, and design software—paired with growing creative and collaboration skills.
        </p>
        <div class="flex justify-center">
            <img 
            src="@/assets/img/skill-map.jpg" 
            alt="Skill Map showing hard and soft skills" 
            class="w-full max-w-4xl rounded-lg shadow-lg border border-gray-300"
            />
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
