<template>
<div class="grid p-8 gap-10">
  <section-title text="translations portfolio" japaneseText="翻訳ポートフォリオ" />
  <section-subtitle text="video games" japaneseText="ビデオゲーム" />
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-20 p-1 md:p-8 justify-center">
    <media-card
      url="https://lh3.googleusercontent.com/pw/ACtC-3f0Ui0_Mei5mDF3WXZUeS4nSS6o-z4GSg-vIto9re7LxiZHWxM1vvddbHImZm2tQVE4f-l9uZjR6-C4BLjSweY1mMkBOwDItWtQek9WreD4d06PVgrKrIby-OvqsVZMKcQCQ4loUX5Lms5TtGqbj98x9w=w711-h947-no?authuser=0"
      year="2018"
      title="Newton and the Apple Tree"  
    />
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
  </div>
  <section-subtitle text="manga" japaneseText="マンガ" />
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-20 p-1 md:p-8 justify-center">
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
  </div>
  <section-subtitle text="novels" japaneseText="小説" />
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-20 p-1 md:p-8 justify-center">
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
  </div>
  <section-subtitle text="NSFW" japaneseText="+18 作品" />
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-20 p-1 md:p-8 justify-center">
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
    <media-placeholder />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MediaCard from './MediaCard.vue'
import MediaPlaceholder from './MediaPlaceholder.vue'
import SectionTitle from './Title.vue'
import SectionSubtitle from './Subtitle.vue'
export default defineComponent({
  name: 'Portfolio',
  components: {
    SectionTitle,
    SectionSubtitle,
    MediaCard,
    MediaPlaceholder
  }
})
</script>

<style scoped>
.subtitle-container {
  background-color: #0d0216;
}
</style>
