<template>
  <div class="min-h-screen relative">
    <div class="max-w-6xl mx-auto py-8 px-4">
      <!-- Tombol Kembali -->
      <NuxtLink 
        to="/#projects" 
        class="brutalist-box brutalist-hover inline-block px-4 py-2 bg-white mb-6"
      >
        ← Kembali
      </NuxtLink>

      <div v-if="project" class="brutalist-box bg-white p-6 md:p-8">
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-64 md:h-96 object-cover border-2 border-black mb-6"
        />
        
        <h1 class="text-3xl md:text-4xl font-black mb-4">{{ project.title }}</h1>
        
        <p class="text-lg mb-6">{{ project.description }}</p>
        
        <div class="flex flex-wrap gap-2 mb-6">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-wider"
            :style="getTagStyles(tech)"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Tambahan detail project -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold">Fitur Utama</h2>
          <ul class="list-disc list-inside space-y-2">
            <li v-for="feature in project.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const project = ref(null);

// Menggunakan techColors yang sama dengan TheProjects.vue
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
    color: "#000000",
  },
  Supabase: {
    background: "#3ECF8E",
    color: "#000000",
  },
  Wordpress: {
    background: "#21759B",
    color: "#FFFFFF",
  },
};

const getTagStyles = (tech) => {
  return {
    backgroundColor: techColors[tech]?.background || "#000000",
    color: techColors[tech]?.color || "#FFFFFF",
    border: "2px solid black",
    borderRadius: "3px",
  };
};

onMounted(() => {
  // Mengambil data project berdasarkan ID dari route
  const projectId = parseInt(route.params.id) - 1;
  
  // Data lengkap semua projects
  const projects = [
    {
      title: "Pratama Constech Group",
      description: "A company profile website built with a simple Content Management System (CMS), providing an easy way to manage and update content.",
      image: "/images/pratama.webp",
      tech: ["Nuxt", "Tailwind", "Supabase"],
      features: [
        "Content Management System for website content",
        "User-friendly admin panel",
        "SEO optimization",
        "Responsive design for all screen sizes",
        "Fast performance with Nuxt.js"
      ]
    },
    {
      title: "Happy Puppy Karaoke",
      description: "As a backend developer, I built and managed the master data in the admin panel, built APIs for the frontend, and did some frontend translation work.",
      image: "/images/happup.webp",
      tech: ["Laravel", "MySQL", "React"],
      features: [
        "Comprehensive master data management system",
        "Structured and documented API endpoints",
        "Payment system integration",
        "Multi-language support",
        "Business monitoring admin dashboard"
      ]
    },
    {
      title: "Navisya Mart",
      description: "I developed a comprehensive business management system featuring sales, purchasing, accounts management, financial reporting, and user administration for streamlined company operations.",
      image: "/images/navisya.webp",
      tech: ["Laravel", "MySQL", "jQuery"],
      features: [
        "Sales and purchase management system",
        "Automated financial reporting",
        "Stock and inventory management",
        "Integrated accounting system",
        "Multi-user with role-based access control"
      ]
    },
    {
      title: "Kotak Sidokumpul",
      description: "I developed a web platform for Sidokumpul Village featuring data management, interactive mapping, news updates, and AI-powered support to streamline administrative processes.",
      image: "/images/desatalok.webp",
      tech: ["Laravel", "MySQL", "jQuery"],
      features: [
        "Population data management system",
        "Interactive village mapping",
        "News and announcement portal",
        "Correspondence management",
        "Village statistics dashboard"
      ]
    },
    {
      title: "PSB Fatchul Ulum Pacet",
      description: "I developed a student enrollment system for Islamic boarding schools featuring registration management, PDF generation for acceptance letters, and comprehensive data administration.",
      image: "/images/psb.webp",
      tech: ["Laravel", "MySQL", "jQuery"],
      features: [
        "Online student registration system",
        "Automatic PDF document generation",
        "Student data management",
        "Registration management dashboard",
        "Registration status notification system"
      ]
    },
    {
      title: "MWC NU Jatirogo",
      description: "I developed a website for the Jatirogo branch of the Nahdlatul Ulama Muslim organization featuring news updates, event management, and interactive mapping.",
      image: "/images/mwcnu.webp",
      tech: ["Wordpress"],
      features: [
        "News content management system",
        "Integrated event calendar",
        "Photo and video gallery",
        "Event location mapping",
        "SEO optimization for online visibility"
      ]
    }
  ];

  // Set project berdasarkan ID
  project.value = projects[projectId];
});
</script>