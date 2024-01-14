<template>
  <div class="px-6">
    <section-title text="About me" japaneseText="私について" />
    <p class="text-justify md:text-xl dark:text-gray-50 mb-32 md:mb-20">
      My name is J. "Bango" Colmenares, and I'm a <span class="underline text-purple-600 dark:text-purple-400 decoration-2 underline-offset-2">JP>ENG localizer</span> that works mainly in the video game/visual novel space, though I do have experience in with light novel and manga as well.
      Bringing stories over and helping audiences experience works of fiction with the same intensity and passion as their original audiences is my vocation in life, and I'm always looking
      to expand my range as a <span class="underline text-purple-600 dark:text-purple-400 decoration-2 underline-offset-2">writer and and translator</span>.
      I'm always open to new experiences and learning, for the art of translation is a never-ending road that I'm very glad to call my profession.
    </p>
    <p class="md:text-center md:text-xl dark:text-gray-50 mb-32 md:mb-20">
      Feel free to <router-link to="/" class="text-purple-600 dark:text-purple-400 font-semibold underline">check my work</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../SectionTitle.vue'
</script>
