<template>
<div class="portfolio-container grid p-8 gap-10">
  <div>
    <span class="text-3xl sm:text-5xl text-purple-400 font-extrabold tracking-widest">翻訳ポートフォリオ</span>
    <h1 class="text-3xl sm:text-5xl text-gray-50 font-semibold capitalize mt-4">translations portfolio</h1>
  </div>
  <div class="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 p-8">
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
.portfolio-container {
  grid-template-rows: auto auto;
}
</style>
