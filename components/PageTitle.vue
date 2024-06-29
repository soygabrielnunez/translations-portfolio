<template>
  <h1 class="text-3xl sm:text-5xl dark:text-gray-50 font-semibold capitalize mb-8 text-center">
    {{text}}
    <span translate="no" class="text-purple-600 dark:text-purple-400 tracking-widest">
      {{japaneseText}}
    </span>
  </h1>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  japaneseText: string
}>()
</script>
