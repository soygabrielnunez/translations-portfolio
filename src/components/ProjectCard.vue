<template>
  <a
    v-if="infoUrl"
    :href="infoUrl"
    target="_blank"
    class="transform-none lg:transform-gpu lg:duration-500 lg:ease-in-out lg:hover:scale-110 cursor-pointer"
  >
    <img
      alt="Work's portrait image"
      :src="imageUrl"
      class="aspect-[3/4] rounded-xl object-cover"
    />
    <div class="p-2">
      <span class="text-purple-400 font-medium">{{year}}</span>
      <span v-if="adultsOnly" class="text-purple-400 font-medium"> (+18 作品)</span>
      <h5 class="dark:text-gray-50 font-semibold">{{title}}</h5>
    </div>
  </a>
  <template v-else>
    <div class="transform-none lg:transform-gpu lg:duration-500 lg:ease-in-out lg:hover:scale-110">
      <img
        alt="Work's portrait image"
        :src="imageUrl"
        class="aspect-[3/4] rounded-xl object-cover"
      />
      <div class="p-2">
        <span class="text-purple-400 font-medium">{{year}}</span>
        <span v-if="adultsOnly" class="text-purple-400 font-medium"> (+18 <span translate="no">作品</span>)</span>
        <h5 class="dark:text-gray-50 font-semibold">{{title}}</h5>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
defineProps<{
  imageUrl: string,
  infoUrl?: string,
  year: number,
  title: string,
  adultsOnly?: boolean
}>()
</script>
