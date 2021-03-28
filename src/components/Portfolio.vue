<template>
<div class="grid p-8 gap-10">
  <section-title text="translations portfolio" japaneseText="翻訳ポートフォリオ" />
  <section-subtitle text="video games" japaneseText="ビデオゲーム" />
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-20 p-1 md:p-8 justify-center">
    <media-card
      url="https://lh3.googleusercontent.com/ndoGnamYokEKP1EhZzmNhWO6qWXKCU9aTuN43oIgu87ZNIAbPabUOQXVal6Pm6pdE7vmuaDyHu06FUEjzXLKXeTlgJqoM_V7bqX9QrD7dVDsyx0x7GOPxxJcSM3h8xU6BeyjE34ZiIwkqs2EwNcsxWcsczt8uf8BkI2Ohsuy2iVhMfn0YomgdSJOg6bsxqXRh_eugdhcI64QzF1XP7SLkD663oFfEooHSsjupx1swMHH_tsaFxtOeETMaQL2RwspUZZzEdrcZCs8VJw69yhQmLQNoMbhYUvORQMp3ATZ4bV1077fBlsXpdVhD9_tVYoVObKNtbTN0-DOMH5V7Vd3Wn3WJxVTC7xVGAnqvU5ANXPmCaqWvAfApRiFaulxT2TKLFIB0-S7rP2tYxkJnVHoZR36N-hS4j4gQ8iumVZZiEaqoUU9ihesoWl3N4o9KtW_eJ1FBnCK6k2ayWlNhJ1tt_3-z-61HZS7l4V9j7j-rNXUGacHVcSq-WLj_PTGG5h2PYDnjMxotipHeB8iDtN4jH3nhk7TL4VR0RG8DbUJ6Jn43OskDGGZPRblf78yzGjGix9Jh_pIcRWHc5-TSgh6UlMYJHgZW98bjRwF-XnFHqVOMV18b5syMPByN32ptczE-88aC68XY5NEVeAY4Oqeax2_xxN0yy5adwczCpzESiJiLLcM0qrJrYjug4rZXAQENV27iNuZUvcVutLNFl3HQyGc=w400-h533-no?authuser=0"
      :year="2021"
      title="Eiyu*Senki Gold - A New Conquest"  
    />
    <media-card
      url="https://lh3.googleusercontent.com/pw/ACtC-3f0Ui0_Mei5mDF3WXZUeS4nSS6o-z4GSg-vIto9re7LxiZHWxM1vvddbHImZm2tQVE4f-l9uZjR6-C4BLjSweY1mMkBOwDItWtQek9WreD4d06PVgrKrIby-OvqsVZMKcQCQ4loUX5Lms5TtGqbj98x9w=w711-h947-no?authuser=0"
      :year="2018"
      title="Newton and the Apple Tree"  
    />
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
