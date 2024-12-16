<template>
  <div class="min-h-screen bg-white">
    <!-- <header class="border-4 border-black p-4 m-4 shadow-brutal">
      <nav class="flex justify-between items-center">
        <h1 class="font-brutal text-2xl">PORTFOLIO</h1>
        <div class="space-x-4">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.text"
            :to="item.link"
            class="hover:bg-primary p-2 border-2 border-black transition-colors"
          >
            {{ item.text }}
          </NuxtLink>
        </div>
      </nav>
    </header> -->

    <main class="container mx-auto px-4">
      <slot />
    </main>
  </div>
</template>

<script setup>
const menuItems = [
  { text: "HOME", link: "/" },
  { text: "EXPERIENCE", link: "#experience" },
  { text: "PROJECTS", link: "#projects" },
  { text: "CONTACT", link: "#contact" },
];
</script>
