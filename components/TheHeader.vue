<template>
  <!-- Header -->
  <header class="brutalist-box bg-white mb-12">
    <nav class="flex justify-between items-center p-4">
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
  </header>
</template>
<script setup>
const menuItems = [
  { text: "HOME", link: "/" },
  { text: "EXPERIENCE", link: "#experience" },
  { text: "PROJECTS", link: "#projects" },
  { text: "CONTACT", link: "#contact" },
];
</script>
