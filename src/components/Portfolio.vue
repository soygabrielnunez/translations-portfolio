<template>
<div class="grid p-8 gap-10">
  <section-title text="translations portfolio" japaneseText="翻訳ポートフォリオ" />
  <section-subtitle text="video games" japaneseText="ビデオゲーム" />
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-20 p-1 md:p-8 justify-center">
    <media-card
      infoUrl="https://futureradio.nekonyansoft.com/"
      :imageUrl="futureRadioImage"
      :year="2021"
      title="The Future Radio and the Artificial Pigeons"
    />
    <media-card
      infoUrl="https://jastusa.com/eiyu-senki-gold-a-new-conquest/"
      :imageUrl="eiyuSenkiGold"
      :year="2021"
      title="Eiyu*Senki Gold - A New Conquest"  
      adultsOnly
    />
    <media-card
      infoUrl="https://store.steampowered.com/app/721010/Newton_and_the_Apple_Tree/"
      :imageUrl="newtonAndTheAppleTree"
      :year="2018"
      title="Newton and the Apple Tree"  
    />
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
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MediaCard from './MediaCard.vue'
import MediaPlaceholder from './MediaPlaceholder.vue'
import SectionTitle from './Title.vue'
import SectionSubtitle from './Subtitle.vue'
import futureRadioImage from './portfolio-images/the-future-radio-and-artificial-pigeons.jpg'
import eiyuSenkiGold from './portfolio-images/eiyu-senki-gold.jpg'
import newtonAndTheAppleTree from './portfolio-images/newton-and-the-apple-tree.jpg'

export default defineComponent({
  name: 'Portfolio',
  components: {
    SectionTitle,
    SectionSubtitle,
    MediaCard,
    MediaPlaceholder
  },
  data: () => ({
    futureRadioImage,
    eiyuSenkiGold,
    newtonAndTheAppleTree
  })
})
</script>

<style scoped>
.subtitle-container {
  background-color: #0d0216;
}
</style>
