<template>
<div class="flex items-center justify-center mb-8 gap-4">
  <h1 class="text-3xl sm:text-5xl dark:text-gray-50 font-semibold capitalize">{{text}}</h1>
  <span translate="no" class="text-3xl sm:text-5xl text-purple-600 dark:text-purple-400 font-extrabold tracking-widest">{{japaneseText}}</span>
</div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  japaneseText: string
}>()
</script>
