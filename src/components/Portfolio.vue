<template>
<div class="portfolio-container grid p-8 gap-10">
  <div>
    <h1 class="text-center text-3xl sm:text-5xl text-purple-400 font-extrabold tracking-widest">翻訳ポートフォリオ</h1>
    <h1 class="text-center text-3xl sm:text-5xl text-gray-50 font-semibold capitalize mt-4">translations portfolio</h1>
  </div>
  <subtitle title="video games" japaneseTitle="ビデオゲーム" />
  <div class="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 p-1 md:p-8">
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
  </div>
  <subtitle title="manga" japaneseTitle="マンガ" />
  <div class="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 p-1 md:p-8">
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
  </div>
  <subtitle title="novels" japaneseTitle="小説" />
  <div class="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 p-1 md:p-8">
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
  </div>
  <subtitle title="NSFW" japaneseTitle="+18 作品" />
  <div class="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 p-1 md:p-8">
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MediaPlaceholder from './MediaPlaceholder.vue'
import Subtitle from './Subtitle.vue'
export default defineComponent({
  name: 'Portfolio',
  components: {
    Subtitle,
    MediaPlaceholder
  }
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
