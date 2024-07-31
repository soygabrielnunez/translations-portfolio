<template>
    <div class="h-screen w-screen flex justify-center flex-col text-center">
      <h1 class="text-3xl sm:text-5xl text-red-600">Oops<span translate="no" class="text-secondary ml-4">おっとっと</span></h1>
      <br />
      <br />
      <p class="md:text-xl">We couldn't find what you are looking for :( <nuxt-link to="/" class="font-bold">click here</nuxt-link> to go back home.</p>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false
})
</script>