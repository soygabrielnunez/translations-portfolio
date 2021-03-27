<template>
<div class="portfolio-container grid p-8 gap-10">
  <section-title text="translations portfolio" japaneseText="翻訳ポートフォリオ" />
  <section-subtitle text="video games" japaneseText="ビデオゲーム" />
  <div class="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 p-1 md:p-8">
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
  </div>
  <section-subtitle text="manga" japaneseText="マンガ" />
  <div class="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 p-1 md:p-8">
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
  </div>
  <section-subtitle text="novels" japaneseText="小説" />
  <div class="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 p-1 md:p-8">
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
  </div>
  <section-subtitle text="NSFW" japaneseText="+18 作品" />
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
import SectionTitle from './Title.vue'
import SectionSubtitle from './Subtitle.vue'
export default defineComponent({
  name: 'Portfolio',
  components: {
    SectionTitle,
    SectionSubtitle,
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
