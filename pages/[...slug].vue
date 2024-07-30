<template>
    <div class="h-screen w-screen flex justify-center flex-col text-center">
      <h1 translate="no" class="text-3xl sm:text-5xl text-red-600 font-bold tracking-widest">おっとっと</h1>
      <br />
      <br />
      <p class="text-red-600 md:text-xl">Oops, we couldn't find what you are looking for :( what if you <nuxt-link to="/" class="underline">go back home?</nuxt-link></p>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false
})
</script>