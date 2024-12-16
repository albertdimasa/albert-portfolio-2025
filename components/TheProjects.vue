<template>
  <!-- Projects Section -->
  <section id="projects" class="my-8 md:my-16 px-4 md:px-0">
    <h2
      class="text-3xl md:text-4xl font-black mb-6 md:mb-8 border-b-4 border-black pb-2"
    >
      PROJECTS
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      <div
        v-for="project in projects"
        :key="project.title"
        class="brutalist-box brutalist-hover bg-white p-4"
      >
        <img
          :src="project.image"
          :alt="project.title"
          loading="lazy"
          width="800"
          height="600"
          class="w-full h-40 md:h-48 object-cover border-2 border-black"
        />
        <h3 class="text-xl md:text-2xl font-black mt-4">{{ project.title }}</h3>
        <p class="mt-2 text-sm md:text-base">{{ project.description }}</p>
        <div class="flex flex-wrap gap-2 mt-2">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
            :style="{ backgroundColor: getRandomColor() }"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const projects = [
  {
    title: "Company Profile Website",
    description:
      "A company profile website built with a simple Content Management System (CMS), providing an easy way to manage and update content.",
    image: "/images/pratama.png",
    tech: ["Laravel", "Jquery", "JavaScript", "Bootstrap"],
  },
  {
    title: "Reservation System",
    description:
      "As a backend developer, I managed the master data in the admin panel, built APIs for the frontend, and did some frontend translation work.",
    image: "/images/happup.png",
    tech: ["Laravel", "MySQL", "React"],
  },
];

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
</script>
