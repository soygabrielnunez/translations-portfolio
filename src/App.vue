<template>
<div class="bg-gray-100">
  <header class="p-4 bg-blue-50 shadow-md">
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
