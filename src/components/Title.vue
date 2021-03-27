<template>
<div>
  <h1 class="text-center text-3xl sm:text-5xl text-purple-400 font-extrabold tracking-widest">{{japaneseText}}</h1>
  <h1 class="text-center text-3xl sm:text-5xl text-gray-50 font-semibold capitalize mt-4">{{text}}</h1>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Title',
  props: {
    text: String,
    japaneseText: String
  }
})
</script>
