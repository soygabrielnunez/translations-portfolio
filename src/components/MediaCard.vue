<template>
<div class="transform-none lg:transform-gpu duration-500 ease-in-out hover:scale-110 cursor-pointer">
  <a class="h-96 w-full" :href="infoUrl" target="_blank">
    <img :src="imageUrl" class="h-max md:h-96 w-max rounded-xl object-cover" />
    <div class="p-2">
      <span class="text-purple-400 font-medium">{{year}}</span>
      <span v-if="adultsOnly" class="text-purple-400 font-medium"> (+18 作品)</span>
      <h5 class="dark:text-gray-50 font-semibold">{{title}}</h5>
    </div>
  </a>
</div>
</template>

<script setup lang="ts">
defineProps({
  imageUrl: { type: String },
    infoUrl: String,
    year: Number,
    title: String,
    adultsOnly: { type: Boolean, default: false }
})
</script>
