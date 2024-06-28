<template>
<div class="sticky top-0 p-2 md:p-8 z-10 bg-gray-100 dark:bg-gray-900 duration-500 ease-in-out">
  <span translate="no" class="text-xl sm:text-3xl text-purple-600 dark:text-purple-400 font-extrabold tracking-widest">{{japaneseName}}</span>
  <h3 class="text-xl sm:text-3xl dark:text-gray-50 font-semibold capitalize mt-4">{{name}}</h3>
</div>
<div
  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-16 p-1 md:p-8 justify-center justify-items-center"
>
<slot />
</div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  japaneseName: string
}>()
</script>

