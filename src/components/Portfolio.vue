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
      infoUrl="https://jastusa.com/world-s-horniest-housewife-rikky-horne/"
      :imageUrl="rikkyHorne"
      :year="2021"
      title="Rikky Horne"
      adultsOnly
    />
    <media-card
      infoUrl="https://www.johren.games/games/eiyusenkiwwx-en/"
      :imageUrl="eiyuSenkiWW"
      :year="2021"
      title="Eiyu＊Senki War Wonder"
      adultsOnly
    />
    <media-card
      infoUrl="https://jastusa.com/eiyu-senki-gold-a-new-conquest/"
      :imageUrl="eiyuSenkiGold"
      :year="2021"
      title="Eiyu＊Senki Gold - A New Conquest"
      adultsOnly
    />
    <media-card
      :imageUrl="daydream"
      :year="2021"
      title="Daydream Cyanotype"
    />
    <media-card
      infoUrl="https://riddle.nekonyansoft.com/"
      :imageUrl="riddleJoker"
      :year="2020"
      title="Riddle Joker"
    />
    <media-card
      infoUrl="https://jastusa.com/onii-kiss-onii-chan-where-s-my-kiss/"
      :imageUrl="oniiKiss"
      :year="2019"
      title="Onii Kiss"
    />
    <media-card
      :imageUrl="newtonAndTheAppleTree"
      :year="2018"
      title="Newton and the Apple Tree"  
    />
  </div>
  <section-subtitle text="novels" japaneseText="小説" />
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-20 p-1 md:p-8 justify-center">
    <media-card
      infoUrl="https://www.amazon.com/dp/B07CGZZT1J"
      :imageUrl="strongestGamer"
      :year="2018"
      title="Strongest Gamer"  
    />
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
import rikkyHorne from './portfolio-images/rikky-horne.jpeg'
import eiyuSenkiGold from './portfolio-images/eiyu-senki-gold.jpg'
import eiyuSenkiWW from './portfolio-images/eiyu-senki-war-wonder.jpeg'
import riddleJoker from './portfolio-images/riddle-joker.jpeg'
import newtonAndTheAppleTree from './portfolio-images/newton-and-the-apple-tree.jpg'
import strongestGamer from './portfolio-images/strongest-gamer.jpeg'
import oniiKiss from './portfolio-images/onii-kiss.jpeg'
import daydream from './portfolio-images/daydream-cyanotype.jpeg'

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
    rikkyHorne,
    eiyuSenkiWW,
    eiyuSenkiGold,
    riddleJoker,
    newtonAndTheAppleTree,
    strongestGamer,
    oniiKiss,
    daydream
  })
})
</script>

<style scoped>
.subtitle-container {
  background-color: #0d0216;
}
</style>
