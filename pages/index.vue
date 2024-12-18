<template>
  <div class="min-h-screen relative">
    <!-- Wrapper untuk mengatur max-width -->
    <div class="max-w-6xl mx-auto">
      <TheHeader data-aos="fade-up" />
      <TheHero data-aos="fade-up" />
      <button
        class="fixed bottom-4 right-4 p-2 bg-yellow-300 rounded-full hover:bg-yellow-400 transition-colors z-10"
        @click="scrollToTop"
        v-show="scrollY > 400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
      <TheProjects data-aos="fade-down" />
      <TheExperience data-aos="fade-up" />
      <TheContact data-aos="fade-down" />
    </div>
  </div>
</template>

<script setup>
const scrollY = ref(0);
useHead({
  title: "Dimas Albert Abraham - Personal Website",
  meta: [
    {
      name: "description",
      content:
        "Web Developer yang berspesialisasi dalam Laravel dan Nuxt.js. Serta juga ABAP Programmer.",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Dimas Albert Abraham",
        url: "https://albertdimasa.site",
        jobTitle: "Web Developer & ABAP Programmer",
        sameAs: [
          "https://github.com/albertdimasa",
          "https://linkedin.com/in/albertdimasa",
        ],
        description:
          "Web Developer yang berspesialisasi dalam Laravel dan Nuxt.js. Serta juga ABAP Programmer.",
      }),
    },
  ],
});
onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollY.value = window.scrollY;
  });
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style>
/* ketika reload maka scroll ke atas */
body {
  scroll-behavior: smooth;
}
</style>
