<template>
<div class="sticky top-0 p-2 md:p-8 z-10 bg-gray-100 dark:bg-gray-900 duration-500 ease-in-out flex gap-4">
  <h2 class="text-xl sm:text-3xl dark:text-gray-50 font-semibold capitalize">{{name}}</h2><span translate="no" class="text-xl sm:text-3xl text-accent font-extrabold tracking-widest">{{japaneseName}}</span>
</div>
<div
  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-16 p-1 md:p-8 justify-center justify-items-center"
>
<project-card
  v-for="(project, index) in projects"
  :key="index"
  v-bind="project"
/>
</div>
</template>

<script setup lang="ts">
import type { ProjectCardProps } from './ProjectCard.vue'

defineProps<{
  name: string
  japaneseName: string,
  projects: ProjectCardProps[]
}>()
</script>

