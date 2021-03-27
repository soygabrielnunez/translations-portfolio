<template>
<div class="app-container grid justify-center">
  <header class="p-8 text-gray-50 text-3xl sm:text-5xl font-semibold capitalize">
    julio <span class="text-purple-400">colmenares</span>
  </header>
  <main>
    <Portfolio/>
  </main>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Portfolio from './components/Portfolio.vue'

export default defineComponent({
  name: 'App',
  components: {
    Portfolio
  }
})
</script>

<style scoped>
.app-container {
  background-color: #021317;
  grid-template-columns: minmax(0, 1536px);
}
</style>
