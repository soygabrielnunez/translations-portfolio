<template>
  <div
    class="transform-none lg:transform-gpu lg:duration-500 lg:ease-in-out lg:hover:scale-110 w-full">
    <img
      :src="image"
      alt="Work's portrait"
      loading="lazy"
      class="aspect-[3/4] rounded-xl w-full"
    />
    <div class="p-2 flex flex-wrap gap-2">
      <span class="uppercase font-bold" translate="no">{{title}}</span>
      <span class="text-secondary">{{year}}</span>
      <span v-if="isForAdultsOnly" class="text-tertiary"> +18</span>
    </div>
  </div>
</template>

<script setup lang="ts">
export type ProjectCardProps = {
  title: string,
  year: number,
  image: string,
  isForAdultsOnly?: boolean
}
defineProps<ProjectCardProps>()
</script>
