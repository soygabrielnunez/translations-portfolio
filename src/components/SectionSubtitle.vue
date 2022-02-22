<template>
<div class="sticky top-0 bg-gray-100 dark:bg-gray-900 p-2 md:p-8 z-10">
  <span class="text-xl sm:text-3xl text-purple-400 font-extrabold tracking-widest">{{japaneseText}}</span>
  <h3 class="text-xl sm:text-3xl dark:text-gray-50 font-semibold capitalize mt-4">{{text}}</h3>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: String,
    japaneseText: String
  }
})
</script>

