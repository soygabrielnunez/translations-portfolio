<template>
  <a
    v-if="infoUrl"
    :href="infoUrl"
    target="_blank"
    class="transform-none lg:transform-gpu lg:duration-500 lg:ease-in-out lg:hover:scale-110 cursor-pointer"
  >
    <img
      :src="image"
      alt="Work's portrait"
      loading="lazy"
      class="aspect-[3/4] rounded-xl"
    />
    <div class="p-2 flex flex-wrap gap-2">
      <h3 class="text-color font-semibold" translate="no">{{title}}</h3>
      <span v-if="isForAdultsOnly" class="text-accent font-medium"> +18</span>
    </div>
  </a>
  <template v-else>
    <div class="transform-none lg:transform-gpu lg:duration-500 lg:ease-in-out lg:hover:scale-110">
      <img
        :src="image"
        alt="Work's portrait"
        loading="lazy"
        class="aspect-[3/4] rounded-xl"
      />
      <div class="p-2 flex flex-wrap gap-2">
        <h3 class="text-color font-semibold" translate="no">{{title}}</h3>
        <span v-if="isForAdultsOnly" class="text-accent font-medium"> +18</span>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
export type ProjectCardProps = {
  title: string,
  year: number,
  image: string,
  infoUrl?: string,
  isForAdultsOnly?: boolean
}
defineProps<ProjectCardProps>()
</script>
