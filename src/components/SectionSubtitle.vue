<template>
<div class="sticky top-0 p-2 md:p-8 z-10 bg-gray-100 dark:bg-gray-900 duration-500 ease-in-out">
  <span translate="no" class="text-xl sm:text-3xl text-purple-600 dark:text-purple-400 font-extrabold tracking-widest">{{japaneseText}}</span>
  <h3 class="text-xl sm:text-3xl dark:text-gray-50 font-semibold capitalize mt-4">{{text}}</h3>
</div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  japaneseText: string
}>()
</script>

