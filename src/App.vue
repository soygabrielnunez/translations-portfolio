<template>
<div class="app-root">
  <header class="p-4 shadow-md">
    <h3 class="text-blue-500 text-3xl font-semibold">
      Julio's Portfolio
    </h3>
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
  display: grid;
  grid-template-columns: minmax(640px, 1536px);
  justify-content: center;
}
</style>
