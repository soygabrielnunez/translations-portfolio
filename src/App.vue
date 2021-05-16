<template>
<div class="app-container grid justify-center">
  <header class="p-8 text-gray-50 text-3xl sm:text-5xl font-semibold capitalize flex justify-between items-center">
    <div>julio <span class="text-purple-400">colmenares</span></div>
    <a href="https://twitter.com/Bango_the_Go/" target="_blank" class="transform-none lg:transform-gpu duration-500 ease-in-out hover:scale-110 cursor-pointer flex items-center">
      <span class="text-lg normal-case hidden lg:inline">Follow me on</span>
      <img :src="twitterLogo" class="h-7 lg:h-10 inline mx-2" />
    </a>
  </header>
  <main>
    <Portfolio/>
  </main>
  <footer class="text-gray-50 p-4 text-center text-lg">
    Made with 
    <svg xmlns="http://www.w3.org/2000/svg" class="mx-1 h-5 w-5 fill-current text-red-500 inline" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
    </svg>
    and
    <a href="https://vuejs.org/" target="_blank" class="cursor-pointer">
      <img :src="vueLogo" class="mx-1 h-5 w-5 inline" />
    </a>
    by
    <a href="https://github.com/Gabrielnz/" target="_blank" class="font-semibold cursor-pointer">
      Gabrielnz
    </a>
  </footer>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Portfolio from './components/Portfolio.vue'
import twitterLogo from './assets/twitter-logo.png'
import vueLogo from './assets/vue-logo.png'

export default defineComponent({
  name: 'App',
  components: {
    Portfolio
  },
  data: () => ({
    twitterLogo,
    vueLogo
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
