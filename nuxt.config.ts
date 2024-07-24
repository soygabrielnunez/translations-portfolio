// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: '',
    preference: 'light'
  },
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/tailwind.css'
  ]
})