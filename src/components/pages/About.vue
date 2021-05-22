<template>
<div class="about-container grid place-content-around">
  <section-title text="About me" japaneseText="私について" />
  <span class="dark:text-gray-50 text-2xl text-center">近日公開。</span>
</div>
</template>

<script lang="ts">
import SectionTitle from "../SectionTitle.vue"

export default {
    name: 'About',
    components: { SectionTitle }
}
</script>

<style scoped>
.about-container {
  min-height: 56vh;
}
</style>