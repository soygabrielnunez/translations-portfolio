<template>
<div class="portfolio-root grid p-8 gap-10">
  <div>
    <span class="text-5xl text-purple-400 font-extrabold tracking-widest">翻訳ポートフォリオ</span>
    <h1 class="text-4xl text-gray-50 font-semibold capitalize mt-4">translations portfolio</h1>
  </div>
  <div class="grid justify-center grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-20 p-8">
    <div class="rounded-lg 100% h-96 bg-gray-50"></div>
    <div class="rounded-lg 100% h-96 bg-gray-50"></div>
    <div class="rounded-lg 100% h-96 bg-gray-50"></div>
    <div class="rounded-lg 100% h-96 bg-gray-50"></div>
    <div class="rounded-lg 100% h-96 bg-gray-50"></div> 
    <div class="rounded-lg 100% h-96 bg-gray-50"></div>
    <div class="rounded-lg 100% h-96 bg-gray-50"></div>
    <div class="rounded-lg 100% h-96 bg-gray-50"></div>
    <div class="rounded-lg 100% h-96 bg-gray-50"></div>
    <div class="rounded-lg 100% h-96 bg-gray-50"></div>
    <div class="rounded-lg 100% h-96 bg-gray-50"></div>
    <div class="rounded-lg 100% h-96 bg-gray-50"></div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Portfolio'
})
</script>

<style scoped>
.portfolio-root {
  grid-template-rows: auto auto;
}
</style>
