<template>
<section-title text="About me" japaneseText="私について" />
<p class="text-justify md:text-center text-xl dark:text-gray-50 mb-48 md:mb-72">
  I'm taking my time to tell you a bit about me, wait for it ;).
</p>
</template>

<script lang="ts">
import SectionTitle from "../SectionTitle.vue"

export default {
    name: 'About',
    components: { SectionTitle }
}
</script>
