<template>
<div>
  <div class="rounded-xl h-96 bg-gray-50 flex justify-center items-center bg-cover" :style=mediaUrl />
  <div class="p-2">
    <span class="text-purple-400 font-semibold">{{year}}</span>
    <h5 class="text-gray-50 font-semibold">{{title}}</h5>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'MediaCard',
  props: {
    url: String,
    year: Number,
    title: String,
  },
  setup(props) {
    const mediaUrl = computed(() => `background-image: url(${props.url})`)
    return { mediaUrl }
  }
})
</script>
