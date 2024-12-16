<template>
  <!-- Projects Section -->
  <section id="projects" class="mb-12">
    <h2 class="text-4xl font-black mb-8 border-b-4 border-black pb-2">
      PROJECTS
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="project in projects"
        :key="project.title"
        class="brutalist-box brutalist-hover bg-white p-4"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-48 object-cover border-2 border-black"
        />
        <h3 class="text-2xl font-black mt-4">{{ project.title }}</h3>
        <p class="mt-2">{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>
<script setup>
const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "/images/project1.jpg",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    image: "/images/project2.jpg",
  },
];
</script>
