<template>
  <!-- Experience Section -->
  <section id="experience" class="my-8 md:my-16 px-4 md:px-0">
    <h2
      class="text-3xl md:text-4xl font-black mb-6 md:mb-8 border-b-4 border-black pb-2"
    >
      EXPERIENCE
    </h2>

    <div class="space-y-4 md:space-y-6">
      <!-- Experience Item -->
      <div v-for="item in experience" :key="item.id">
        <div :class="`brutalist-box p-4 md:p-6 ${item.color} brutalist-hover`">
          <div
            class="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4"
          >
            <div>
              <h3 class="text-xl md:text-2xl font-black">
                {{ item.title }}
              </h3>
              <p class="text-lg md:text-xl font-bold">{{ item.company }}</p>
            </div>
            <p class="font-mono font-bold">{{ item.duration }}</p>
          </div>
          <ul class="space-y-2 ml-4 text-sm md:text-base">
            <li v-for="exp in item.experience" :key="exp" class="list-disc">
              {{ exp }}
            </li>
          </ul>
        </div>
      </div>
      <!-- Tambahkan experience items lainnya dengan pattern yang sama -->
    </div>
  </section>
</template>
<style scoped>
#experience {
  scroll-margin-top: 7rem; /* Adjust value to match your header height */
}
</style>
<script setup>
const experience = [
  {
    id: 1,
    title: "Teacher",
    company: "Algorithmics",
    duration: "Sep 2024 - Present",
    experience: [
      "I have taught for over 30 hours, and I have learned a lot from the experience.",
      "I also communicate with parents about their child's progress in a professional manner.",
      "I currently teach 25 students and I have learned how to communicate complex concepts in a simple way, and how to adapt my teaching style to meet the needs of different students.",
    ],
    color: "bg-blue-200",
  },
  {
    id: 2,
    title: "Web Developer",
    company: "OMNI IT Consulting",
    duration: "Nov 2023 - Present",
    experience: [
      "Maintained and handled 4 ERP company web applications using Laravel and React.",
      "Optimized queries to improve performance, including rewriting slow queries and optimizing database indexes.",
      "Implemented OneSignal for push notifications and managed the integration with the backend to ensure they are targeted to the right audience.",
    ],
    color: "bg-purple-200",
  },
  {
    id: 3,
    title: "ABAPER & PI Technician",
    company: "PT Sinergi Informatika Semen Indonesia (SISI)",
    duration: "May 2023 - Present",
    experience: [
      "Design and edit Smartforms to meet company quality standards.",
      "Develop and modify custom programs using SE38 to create custom solutions that meet user needs.",
      "Created and refined Remote Function Calls (RFCs) via SE37 to ensure seamless integration between the system and other components.",
      "Expand my expertise in BAPI, exit programs, BDC, and other relevant concepts, as I believe that continuous learning is critical to delivering superior solutions.",
    ],
    color: "bg-yellow-200",
  },
];
</script>
