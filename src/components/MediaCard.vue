<template>
<div class="transform-none lg:transform-gpu duration-500 ease-in-out hover:scale-110 cursor-pointer">
  <a :href="infoUrl" target="_blank">
  <div class="rounded-xl h-96 bg-gray-50 flex justify-center items-center bg-cover" :style=backgroundImageStyle />
  <div class="p-2">
    <span class="text-purple-400 font-semibold">{{year}}</span>
    <h5 class="text-gray-50 font-semibold">{{title}}</h5>
  </div>
  </a>
</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'MediaCard',
  props: {
    imageUrl: String,
    infoUrl: String,
    year: Number,
    title: String,
  },
  setup(props) {
    const backgroundImageStyle = computed(() => `background-image: url(${props.imageUrl})`)
    return { backgroundImageStyle }
  }
})
</script>
