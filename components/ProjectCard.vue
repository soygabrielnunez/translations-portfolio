<template>
  <a
    v-if="infoUrl"
    :href="infoUrl"
    target="_blank"
    class="cursor-pointer"
  >
    <card-content
      :title="title"
      :year="year"
      :image="image"
      :isForAdultsOnly="isForAdultsOnly"
    />
  </a>
  <card-content
    v-else
    :title="title"
    :year="year"
    :image="image"
    :isForAdultsOnly="isForAdultsOnly"
  />
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
