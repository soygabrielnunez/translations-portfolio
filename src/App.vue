<template>
<div class="app-root grid justify-center">
  <header class="p-8 shadow-md text-gray-50 text-3xl font-semibold capitalize">
    julio <span class="text-purple-400">colmenares</span>
  </header>
  <Portfolio/>
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
.app-root {
  background-color: #021317;
  grid-template-columns: minmax(640px, 1536px);
}
</style>
