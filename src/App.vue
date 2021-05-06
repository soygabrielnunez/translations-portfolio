<template>
<div class="app-container grid justify-center">
  <header class="p-8 text-gray-50 text-3xl sm:text-5xl font-semibold capitalize flex justify-between items-center">
    <div>julio <span class="text-purple-400">colmenares</span></div>
    <a href="https://twitter.com/Bango_the_Go" target="_blank" class="transform-none lg:transform-gpu duration-500 ease-in-out hover:scale-110 cursor-pointer">
      <img :src="twitterLogo" class="h-8 lg:h-10" />
    </a>
  </header>
  <main>
    <Portfolio/>
  </main>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Portfolio from './components/Portfolio.vue'
import twitterLogo from './assets/twitter-logo.png'

export default defineComponent({
  name: 'App',
  components: {
    Portfolio
  },
  data: () => ({
    twitterLogo
  })
})
</script>

<style>
body {
  background-color: #0d0216;
}
</style>

<style scoped>
.app-container {
  grid-template-columns: minmax(0, 1536px);
}
</style>
