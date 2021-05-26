<template>
  <section-title text="About me" japaneseText="私について" />
  <p class="text-justify md:text-center md:text-xl dark:text-gray-50 mb-32 md:mb-20">
    I'm taking my time to tell you a bit about me, wait for it ;).
    In the meantime, feel free to <router-link to="/" class="text-purple-400 font-semibold underline">check my work</router-link>
  </p>
</template>

<script lang="ts">
import SectionTitle from '../SectionTitle.vue'

export default {
    name: 'About',
    components: {
      SectionTitle
    }
}
</script>
