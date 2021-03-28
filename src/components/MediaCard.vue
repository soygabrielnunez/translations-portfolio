<template>
<div class="rounded-xl 100% h-96 bg-gray-50 flex justify-center items-center bg-cover" :style=mediaUrl />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'MediaCard',
  props: {
    url: String
  },
  setup(props) {
    const mediaUrl = computed(() => `background-image: url(${props.url})`)
    return { mediaUrl }
  }
})
</script>
