<template>
<div class="transform-none lg:transform-gpu duration-500 ease-in-out hover:scale-110 cursor-pointer relative">
  <a :href="infoUrl" target="_blank">
    <img :src="imageUrl" class="h-96 w-max bg-gray-50 rounded-xl object-cover" />
    <div class="p-2">
      <span class="text-purple-400 font-medium">{{year}}</span>
      <span v-if="adultsOnly" class="text-purple-400 font-medium"> (+18 作品)</span>
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
    imageUrl: { type: String, default: undefined },
    infoUrl: String,
    year: Number,
    title: String,
    adultsOnly: { type: Boolean, default: false }
  }
})
</script>
