<template>
<div class="grid justify-center app-container">
  <header class="p-8 dark:text-gray-50 text-3xl sm:text-5xl font-semibold flex justify-between items-center">
    <router-link to="/">Julio <span class="text-purple-400">Colmenares</span></router-link>
    <router-link to ="/about-me" class="text-lg">About me</router-link>
  </header>
  <div class="inline-flex justify-end p-8">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-gray-900 dark:text-gray-100" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
    </svg>
    <Switch
      v-model="enableDarkMode"
      :class="enableDarkMode ? 'bg-purple-500' : 'bg-purple-400'"
      class="relative inline-flex items-center h-7 w-12 rounded-full  transition ease-in-out duration-200 mx-1"
    >
      <span class="sr-only">Enable dark mode</span>
      <span
        :class="enableDarkMode ? 'translate-x-6' : 'translate-x-1'"
        class="inline-block w-5 h-5 transform bg-white rounded-full transition ease-in-out duration-200"
      />
    </Switch>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-gray-900 dark:text-gray-100" viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  </div>
  <main>
    <router-view />
  </main>
  <footer class="dark:text-gray-50 p-6 text-center text-lg">
    <div>
    Made with 
    <svg xmlns="http://www.w3.org/2000/svg" class="mx-1 h-5 w-5 fill-current text-red-500 inline" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
    </svg>
    and
    <a href="https://vuejs.org/" target="_blank" class="cursor-pointer">
      <img :src="vueLogo" class="mx-1 h-5 w-5 inline" />
    </a>
    by
    <a href="https://github.com/Gabrielnz/" target="_blank" class="font-bold cursor-pointer">
      Gabrielnz
    </a>
    </div>
  </footer>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Portfolio from './components/pages/Portfolio.vue'
import vueLogo from './assets/vue-logo.png'
import { ref, watch } from 'vue'
import { Switch } from '@headlessui/vue'

export default defineComponent({
  name: 'App',
  components: {
    Portfolio,
    Switch
  },
  setup() {
    const enableDarkMode = ref(false)
    watch(enableDarkMode, enable => {
      enable ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    })
    return {
      enableDarkMode,
      vueLogo
    }
  }
})
</script>

<style scoped>
.app-container {
  grid-template-columns: minmax(0, 1536px);
}
.twitter-logo-color {
  color: #1D9BF0;
}
</style>
