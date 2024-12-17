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
        <div class="flex flex-wrap gap-2 my-2">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-wider cursor-pointer relative"
            :style="getTagStyles(tech)"
            @mouseover="handleMouseOver"
            @mouseout="handleMouseOut"
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
    tech: ["Nuxt", "Tailwind", "Supabase"],
  },
  {
    title: "Reservation System",
    description:
      "As a backend developer, I managed the master data in the admin panel, built APIs for the frontend, and did some frontend translation work.",
    image: "/images/happup.png",
    tech: ["Laravel", "MySQL", "React"],
  },
];

const techColors = {
  Laravel: {
    background: "#FF2D20",
    color: "#FFFFFF",
  },
  MySQL: {
    background: "#00758F",
    color: "#FFFFFF",
  },
  React: {
    background: "#61DAFB",
    color: "#000000",
  },
  Nuxt: {
    background: "#00DC82",
    color: "#000000",
  },
  JavaScript: {
    background: "#F7DF1E",
    color: "#000000",
  },
  jQuery: {
    background: "#0769AD",
    color: "#FFFFFF",
  },
  Bootstrap: {
    background: "#7952B3",
    color: "#FFFFFF",
  },
  Tailwind: {
    background: "#38BDF8",
    color: "#FFFFFF",
  },
  Supabase: {
    background: "#3ECF8E",
    color: "#000000",
  },
};

const getRandomRotation = () => Math.random() * 4 - 2;
const getRandomOffset = () => Math.random() * 4 - 2;

const getTagStyles = (tech) => {
  return {
    backgroundColor: techColors[tech]?.background || "#000000",
    color: techColors[tech]?.color || "#FFFFFF",
    border: "3px solid black",
    borderRadius: "3px",
    boxShadow: "3px #px 0 black",
    transform: `rotate(${getRandomRotation()}deg) translate(${getRandomOffset()}px, ${getRandomOffset()}px)`,
    transition: "transform 0.2s ease-in-out",
  };
};

const handleMouseOver = (e) => {
  e.currentTarget.style.transform = "rotate(0deg) translate(0px, 0px)";
  e.currentTarget.style.boxShadow = "2px 2px 0 black";
};

const handleMouseOut = (e) => {
  e.currentTarget.style.transform = `rotate(${getRandomRotation()}deg) translate(${getRandomOffset()}px, ${getRandomOffset()}px)`;
  e.currentTarget.style.boxShadow = "4px 4px 0 black";
};
</script>
