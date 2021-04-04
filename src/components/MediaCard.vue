<template>
<div class="transform-none lg:transform-gpu duration-500 ease-in-out hover:scale-110 cursor-pointer">
  <a :href="infoUrl" target="_blank">
  <img :src="imageUrl" class="h-96 bg-gray-50 rounded-xl" />
  <div class="p-2">
    <span class="text-purple-400 font-semibold">{{year}}</span>
    <h5 class="text-gray-50 font-semibold">{{title}}</h5>
  </div>
  </a>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MediaCard',
  props: {
    imageUrl: String,
    infoUrl: String,
    year: Number,
    title: String,
  }
})
</script>
