<template>
<section-title text="translations portfolio" japaneseText="翻訳ポートフォリオ" />
<section-subtitle text="video games" japaneseText="ビデオゲーム" />
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-20 p-1 md:p-8 justify-center justify-items-center">
  <media-card
    v-for="(item, index) in videoGames"
    :key="index"
    :infoUrl="item.infoUrl"
    :imageUrl="item.imageUrl"
    :year="item.year"
    :title="item.title"
    :adultsOnly="item.adultsOnly"
  />
</div>
<section-subtitle text="novels" japaneseText="小説" />
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-20 p-1 md:p-8 justify-center justify-items-center">
  <media-card
    v-for="(item, index) in novels"
    :key="index"
    :infoUrl="item.infoUrl"
    :imageUrl="item.imageUrl"
    :year="item.year"
    :title="item.title"
    :adultsOnly="item.adultsOnly"
  />
  <media-placeholder />
  <media-placeholder />
  <media-placeholder />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MediaCard from '../MediaCard.vue'
import MediaPlaceholder from '../MediaPlaceholder.vue'
import SectionTitle from '../SectionTitle.vue'
import SectionSubtitle from '../SectionSubtitle.vue'
import portfolio from './portfolio.json'

export default defineComponent({
  name: 'Portfolio',
  components: {
    SectionTitle,
    SectionSubtitle,
    MediaCard,
    MediaPlaceholder
  },
  data: () => ({
    videoGames: portfolio.videoGames,
    novels: portfolio.novels
  })
})
</script>
