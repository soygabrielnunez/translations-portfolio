<template>
<div class="grid p-8 gap-10">
  <section-title text="translations portfolio" japaneseText="翻訳ポートフォリオ" />
  <section-subtitle text="video games" japaneseText="ビデオゲーム" />
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-20 p-1 md:p-8 justify-center">
    <media-card
      infoUrl="https://futureradio.nekonyansoft.com/"
      imageUrl="https://lh3.googleusercontent.com/PYDPr61P2Z5lGHgX95ZSnVN5AW27MrjdM5_NunleG8435iy_Pfa540JSiE_DJ6uriQOw3WQlzt6wQtUWfQwLAzki6Yny3xiWzgOorF6StJfKK8TpaDrXjlBnXVEQegfQQfew0aKAKm1Q-ZOxRV-XXkaK0q5_Aul-m0BWdqSUlqn9aAsVttHVwzCPW6b-IN1Eg2cr-daJKA-zuq8EJzSnBYwMY2C_pbsnkMpAQtjdoWoqTGFxVUXcjHlTAguA62jB0_nz6Rakx1rCzbjL_iu9-FVDvLjBx7aD3U7nB1d6bCSvLbIyKScfQIbqxDFAPCorAORhRtxix9ai4VS1d4BaIY9Z-h_EtLXQXS4wG_DbkmsJgAuSmBecOGee_zx7jdjrFdLMejjZjHn19bBpa2T5LYrnqMWwVInWus3wXzwyL1QoY3MMSjtjvGsQ_1CHBjIgP0QX-GRbeCi8UWnTa8dilD48hr92ovofDEIeR3Y7LEY27RQxgUfzib6Rhw11tW1PHGZWKXDBS3SO37_FmPu6AIv_HU-UG3TPiThBix4f_1OiMytXO-hgOhIKsgk6UY7t6IjaAPrZVixDWJBeinMepshWR7gSpPklBRx7VtRplwa85nJT_80S3TLhm_opeBF5KtVMcu3lrueePFkpAz_CvQd_S_qhwpOl5X71RFanwgYcvLLDZQ2xfomYi9nnYM3frDjnn8MEm2R_G0d7PQlntb1s=w678-h905-no?authuser=0"
      :year="2021"
      title="The Future Radio and the Artificial Pigeons"
    />
    <media-card
      infoUrl="https://jastusa.com/eiyu-senki-gold-a-new-conquest/"
      imageUrl="https://jast.b-cdn.net/media/catalog/product/cache/2/package_image/400x/17f82f742ffe127f42dca9de82fb58b1/e/i/eiyu_senki_gold_-box.jpg"
      :year="2021"
      title="Eiyu*Senki Gold - A New Conquest"  
      adultsOnly
    />
    <media-card
      infoUrl="https://store.steampowered.com/app/721010/Newton_and_the_Apple_Tree/"
      imageUrl="https://lh3.googleusercontent.com/pw/ACtC-3f0Ui0_Mei5mDF3WXZUeS4nSS6o-z4GSg-vIto9re7LxiZHWxM1vvddbHImZm2tQVE4f-l9uZjR6-C4BLjSweY1mMkBOwDItWtQek9WreD4d06PVgrKrIby-OvqsVZMKcQCQ4loUX5Lms5TtGqbj98x9w=w711-h947-no?authuser=0"
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
