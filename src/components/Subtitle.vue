<template>
<div class="sticky top-0 subtitle-container p-2 md:p-8">
  <h3 class="text-xl sm:text-3xl text-purple-400 font-extrabold tracking-widest">{{japaneseText}}</h3>
  <h3 class="text-xl sm:text-3xl text-gray-50 font-semibold capitalize mt-4">{{text}}</h3>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Subtitle',
  props: {
    text: String,
    japaneseText: String
  }
})
</script>

<style scoped>
.subtitle-container {
  background-color: #0d0216;
}
</style>
