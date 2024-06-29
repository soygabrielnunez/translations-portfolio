<template>
  <div>
    <h1>Hello!<span translate="no" class="japanese-text text-accent ml-4">こんにちは</span></h1>
    <p class="text-justify text-color md:text-xl">
      I'm a Japanese-English translator that works for JAST, Nekonyan and Solpress, with more than {{ yearsOfExperience }} years of experience. You can check out my work below.
    Also, you can get to know more about me <nuxt-link to="/about"><span class="text-accent font-semibold underline">by clicking here</span></nuxt-link>
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
  </div>
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
