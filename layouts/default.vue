<template>
<div class="grid justify-center app-container">
  <header class="p-6 md:p-8 text-color text-3xl sm:text-5xl font-semibold flex items-center justify-between">
    <div class="flex items-center">
      <nuxt-link to="/"><img
        alt="Bango's avatar"
        src="/avatar.webp"
        class="rounded-full h-14 lg:h-20 w-14 lg:w-20"
      /></nuxt-link>&nbsp;
      <nuxt-link to="/"><span class="ml-1">Julio<span class="text-accent">Colmenares</span></span></nuxt-link>
    </div>
    <button
      @click="changeDarkMode"
      aria-label="Dark mode toggle button"
    >
      <svg
        v-if="colorMode.preference === 'dark'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 fill-current text-gray-900 dark:text-gray-100"
        viewBox="0 0 20 20" fill="currentColor"
      >
        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 fill-current text-gray-900 dark:text-gray-100"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    </button>
  </header>
  <main class="grid p-4 md:p-8 gap-10">
    <slot />
  </main>
  <footer class="text-color p-6 text-lg">
    <div>
      <a href="https://twitter.com/Bango_the_Go/" target="_blank" class="cursor-pointer">
        <svg class="h-4 lg:h-6 inline fill-current twitter-logo-color" version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 248 204" style="enable-background:new 0 0 248 204;" xml:space="preserve">
          <g id="Logo_1_">
            <path id="white_background" class="st0" d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
              C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
              c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
              c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
              c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
              c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"/>
          </g>
        </svg>
      </a>&nbsp;
      <span class="hidden lg:inline">Follow me: </span><a href="https://twitter.com/Bango_the_Go/" target="_blank" class="font-bold cursor-pointer">@Bango_the_Go</a>
      <br />
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 lg:h-6 lg:w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>&nbsp;&nbsp;
      <span class="hidden lg:inline">Email me: </span><span translate="no">chuchunmaru@gmail.com</span>
    </div>
    <div class="text-center mt-10">
      Made with 
      <svg xmlns="http://www.w3.org/2000/svg" class="mx-1 h-5 w-5 fill-current text-red-500 inline" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
      </svg>
      and
      <a href="https://vuejs.org/" target="_blank" class="cursor-pointer">
        <img
          alt="Vue.js logo"
          :src="vueLogo"
          class="mx-1 h-5 w-5 inline"
        />
      </a>
      by
      <a href="https://github.com/soygabrielnunez/" target="_blank" class="font-bold cursor-pointer underline" translate="no">
        soygabrielnunez
      </a>
    </div>
  </footer>
</div>
</template>

<script setup lang="ts">
import vueLogo from '/vue-logo.png'

const colorMode = useColorMode()
const changeDarkMode = () => {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}
</script>

<style scoped>
.app-container {
  grid-template-columns: minmax(0, 1536px);
}
.twitter-logo-color {
  color: #1D9BF0;
}
.fade-enter-active {
  transition: opacity 1s ease;
}
.fade-enter-from {
  opacity: 0;
}
</style>
