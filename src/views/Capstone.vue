<template>
  <div class="bg-white text-black">
    <!-- Page Header -->
    <section class="bg-[#f7f7f7] py-20 text-center">
      <div class="max-w-3xl mx-auto px-6">
        <h1 class="text-4xl font-bold mb-4">Capstone</h1>
        <p class="text-lg">
          I mainly focused on researching the cultural significance of the Pua Kumbu to ensure factual accuracy, while also contributing as a designer and supporting technical aspects. My main contributions:
        </p>
      </div>
    </section>

    <!-- Contributions Section -->
    <section class="py-12 bg-[#fff8e1]">
      <div class="max-w-6xl mx-auto px-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div class="bg-white shadow-md rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-2">Content Researcher</h3>
          <p>Ensured cultural accuracy by sourcing and verifying all Pua Kumbu information.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-2">Visual Designer</h3>
          <p>Designed the project visuals using After Effects, TouchDesigner, and Adobe XD.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-2">Editor</h3>
          <p>Managed and refined documentation content for clarity and consistency.</p>
        </div>
      </div>
    </section>

    <!-- Gallery Section Placeholder -->
    <section class="py-16 bg-black text-white text-center">
      <h2 class="text-3xl font-bold mb-6">Project Snapshots</h2>
      <p class="mb-8 max-w-xl mx-auto">Photos or stills from the motion graphics, gallery visits, and design progress can be showcased here.</p>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 px-6">
        <div v-for="i in 6" :key="i" class="bg-white/10 h-48 rounded shadow-md flex items-center justify-center">
          <span class="text-white text-sm">Image {{ i }}</span>
        </div>
      </div>
    </section>

    <!-- Weekly Log Section -->
    <section class="py-20 bg-[#f7f7f7]">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Weekly Logs</h2>
        <div v-for="(log, index) in logs" :key="index" class="mb-8">
          <h3 class="text-xl font-semibold mb-2">{{ log.week }}</h3>
          <p class="text-gray-800">{{ log.content }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Log {
  week: string
  content: string
}

const logs: Log[] = [
  {
    week: 'Week 1',
    content: 'Started the project after receiving the brief from Illustrato Studio... user journey map.'
  },
  {
    week: 'Week 2',
    content: 'Presented pitches, formed groups, created a skill map, and developed concepts.'
  },
  {
    week: 'Week 3',
    content: 'Shared ideas, chose a concept after feedback, pitched, and prepared for refinement.'
  },
  {
    week: 'Week 4',
    content: 'Made empathy maps, personas, and tried interactive projection experiments.'
  },
  {
    week: 'Week 5',
    content: 'Visited Tun Jugah Gallery, deep research, established curator communication.'
  },
  {
    week: 'Week 6',
    content: 'Tested projection with TouchDesigner, revised visuals, explored alt ideas.'
  },
  {
    week: 'Semester Break',
    content: 'Visited the gallery, consulted curator, continued research on 3rd Pua Kumbu.'
  },
  {
    week: 'Week 7',
    content: 'Prototype testing, software change, created video for 1st Pua Kumbu.'
  },
  {
    week: 'Week 8',
    content: 'User testing and feedback, added better guidance, messaged curator for missing info.'
  },
  {
    week: 'Week 9',
    content: 'Refined info page, presented showcase, more research for 3rd Pua Kumbu.'
  },
  {
    week: 'Week 10',
    content: 'Updated 1st and 3rd Pua Kumbu info based on new insights from curator.'
  },
  {
    week: 'Week 11',
    content: 'Finalized AE video for 1st Pua Kumbu, began 3rd Pua Kumbu animation.'
  },
  {
    week: 'Week 12',
    content: 'Moved info to XD, improved UX for interaction, suggested presentation refinements.'
  }
]
</script>
