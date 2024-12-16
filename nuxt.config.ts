// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-01',
//   devtools: { enabled: true }
// })

// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,
  css: ['~/plugins/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss'],

  build: {
    transpile: ['@heroicons/vue']
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-12-16'
})