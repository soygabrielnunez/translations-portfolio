<template>
<div class="transform-none w-72 lg:transform-gpu duration-500 ease-in-out hover:scale-110 cursor-pointer">
  <a
    v-if="imageUrl"
    :href="infoUrl" target="_blank"
  >
    <img :src="imageUrl" class="h-96 w-max rounded-xl object-cover" />
    <div class="p-2">
      <span class="text-purple-400 font-medium">{{year}}</span>
      <span v-if="adultsOnly" class="text-purple-400 font-medium"> (+18 作品)</span>
      <h5 class="dark:text-gray-50 font-semibold">{{title}}</h5>
    </div>
  </a>
  <div v-else>
    <div class="rounded-xl h-96 w-72 bg-purple-400 dark:bg-gray-50 flex justify-center items-center">
      <span class="text-3xl text-gray-50 dark:text-purple-400 font-extrabold tracking-widest">近日公開</span>
    </div>
    <div class="p-2">
      <span class="text-purple-400 font-semibold">202X</span>
      <h5 class="dark:text-gray-50 font-semibold">Future project</h5>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
defineProps({
  imageUrl: { type: String, default: undefined },
    infoUrl: String,
    year: Number,
    title: String,
    adultsOnly: { type: Boolean, default: false }
})
</script>
