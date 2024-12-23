<template>
  <header class="brutalist-box bg-white mb-12 mt-2">
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex justify-between items-center p-4">
      <h1 class="text-3xl font-black">PORTFOLIO</h1>
      <div class="space-x-4">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.text"
          :to="item.link"
          class="brutalist-box brutalist-hover inline-block px-4 py-2 bg-white"
        >
          {{ item.text }}
        </NuxtLink>
      </div>
    </nav>

    <!-- Mobile Navigation -->
    <nav class="md:hidden">
      <div class="flex justify-between items-center p-4">
        <h1 class="text-2xl font-black">PORTFOLIO</h1>
        <button
          id="hamburger-button"
          @click="isMenuOpen = !isMenuOpen"
          class="brutalist-box p-2"
          aria-label="Open menu"
        >
          <span class="block w-6 h-0.5 bg-black mb-1"></span>
          <span class="block w-6 h-0.5 bg-black mb-1"></span>
          <span class="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="p-4 space-y-2">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.text"
          :to="item.link"
          class="brutalist-box brutalist-hover block px-4 py-2 bg-white text-center"
          @click="isMenuOpen = false"
        >
          {{ item.text }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
<script setup>
const isMenuOpen = ref(false);
const menuItems = [
  { text: "HOME", link: "/" },
  { text: "PROJECTS", link: "#projects" },
  { text: "EXPERIENCE", link: "#experience" },
  { text: "CONTACT", link: "#contact" },
];
</script>
