<template>
  <h1 class="text-primary">MY WORK<span translate="no" class="japanese-text">翻訳者として関わった作品</span></h1>
  <p>
    My name is Julio Colmenares, I am a Japanese-English translator that works for JAST, Nekonyan and Solpress, with more than {{ yearsOfExperience }} years of experience. You can check out my work below.
  <nuxt-link to="/about"><span class="text-primary font-bold">Click here</span></nuxt-link> to get to know more about me.
  </p>
  <project-category
    name="video games"
    japaneseName="ビデオゲーム"
    :projects=sortedVideoGames
  />
  <project-category
    name="visual novels"
    japaneseName="小説のビジュアル"
    :projects="sortedVisualNovels"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { videoGames, visualNovels } from '~/assets/projects.json'

const firstYearTranslating = 2018
const currentYear = new Date().getFullYear()
const yearsOfExperience = computed(() => currentYear - firstYearTranslating)
const sortedVideoGames = videoGames.filter(project => project.isVisible).sort((a, b) => b.year - a.year)
const sortedVisualNovels = visualNovels.filter(project => project.isVisible).sort((a, b) => b.year - a.year)
</script>
