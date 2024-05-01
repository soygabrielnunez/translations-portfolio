<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Bango Translations Portfolio',
  description: 'Bango is a Japanese-English translator that works for JAST, Nekonyan and Solpress. Discover all of his work in this portfolio, from videogames to visual novels.'
})
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<style>
body {
  @apply bg-gray-100 dark:bg-gray-900 duration-500 ease-in-out;
}
</style>
