<template>
<div class="portfolio-container grid p-8 gap-10">
  <div>
    <h1 class="text-center text-3xl sm:text-5xl text-purple-400 font-extrabold tracking-widest">翻訳ポートフォリオ</h1>
    <h1 class="text-center text-3xl sm:text-5xl text-gray-50 font-semibold capitalize mt-4">translations portfolio</h1>
  </div>
  <div class="sticky top-0 subtitle-container p-8">
    <h3 class="text-xl sm:text-3xl text-purple-400 font-extrabold tracking-widest">ビデオゲーム</h3>
    <h3 class="text-xl sm:text-3xl text-gray-50 font-semibold capitalize mt-4">video games</h3>
  </div>
  <div class="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 p-2 md:p-8">
    <div class="rounded-xl 100% h-96 bg-gray-50 flex justify-center items-center">
      <span class="text-3xl text-purple-400 font-extrabold tracking-widest">近日公開</span>
    </div>
    <div class="rounded-xl 100% h-96 bg-gray-50 flex justify-center items-center">
      <span class="text-3xl text-purple-400 font-extrabold tracking-widest">近日公開</span>
    </div>
    <div class="rounded-xl 100% h-96 bg-gray-50 flex justify-center items-center">
      <span class="text-3xl text-purple-400 font-extrabold tracking-widest">近日公開</span>
    </div>
    <div class="rounded-xl 100% h-96 bg-gray-50 flex justify-center items-center">
      <span class="text-3xl text-purple-400 font-extrabold tracking-widest">近日公開</span>
    </div>
  </div>
  <div class="sticky top-0 subtitle-container p-8">
    <h3 class="text-xl sm:text-3xl text-purple-400 font-extrabold tracking-widest">マンガ</h3>
    <h3 class="text-xl sm:text-3xl text-gray-50 font-semibold capitalize mt-4">manga</h3>
  </div>
  <div class="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 p-2 md:p-8">
    <div class="rounded-xl 100% h-96 bg-gray-50 flex justify-center items-center">
      <span class="text-3xl text-purple-400 font-extrabold tracking-widest">近日公開</span>
    </div>
    <div class="rounded-xl 100% h-96 bg-gray-50 flex justify-center items-center">
      <span class="text-3xl text-purple-400 font-extrabold tracking-widest">近日公開</span>
    </div>
    <div class="rounded-xl 100% h-96 bg-gray-50 flex justify-center items-center">
      <span class="text-3xl text-purple-400 font-extrabold tracking-widest">近日公開</span>
    </div>
    <div class="rounded-xl 100% h-96 bg-gray-50 flex justify-center items-center">
      <span class="text-3xl text-purple-400 font-extrabold tracking-widest">近日公開</span>
    </div>
  </div>
  <div class="sticky top-0 subtitle-container p-8">
    <h3 class="text-xl sm:text-3xl text-purple-400 font-extrabold tracking-widest">小説</h3>
    <h3 class="text-xl sm:text-3xl text-gray-50 font-semibold capitalize mt-4">novels</h3>
  </div>
  <div class="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 p-2 md:p-8">
    <div class="rounded-xl 100% h-96 bg-gray-50 flex justify-center items-center">
      <span class="text-3xl text-purple-400 font-extrabold tracking-widest">近日公開</span>
    </div>
    <div class="rounded-xl 100% h-96 bg-gray-50 flex justify-center items-center">
      <span class="text-3xl text-purple-400 font-extrabold tracking-widest">近日公開</span>
    </div>
    <div class="rounded-xl 100% h-96 bg-gray-50 flex justify-center items-center">
      <span class="text-3xl text-purple-400 font-extrabold tracking-widest">近日公開</span>
    </div>
    <div class="rounded-xl 100% h-96 bg-gray-50 flex justify-center items-center">
      <span class="text-3xl text-purple-400 font-extrabold tracking-widest">近日公開</span>
    </div>
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
.subtitle-container {
  background-color: #0d0216;
}
</style>
