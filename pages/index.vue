<template>
  <div>
    <page-title text="translations portfolio" japaneseText="翻訳ポートフォリオ" />
    <p class="text-center dark:text-gray-50 md:text-xl"><span class="font-semibold">Hello! / <span translate="no" class="text-purple-600 dark:text-purple-400">こんにちは</span></span> I'm a Japanese-English translator that works for JAST, Nekonyan and Solpress, with {{ yearsOfExperience }} years of experience.
    <br />
    You can get to know more about me <nuxt-link to="/about"><span class="text-purple-600 dark:text-purple-400 font-semibold underline">by clicking here</span></nuxt-link>
    </p>
    <category text="video games" japaneseText="ビデオゲーム">
      <project
        v-for="(project, index) in sortedVideoGames"
        :key="index"
        v-bind="project"
      />
    </category>
    <category text="visual novels" japaneseText="小説のビジュアル">
      <project
        v-for="(project, index) in sortedVisualNovels"
        :key="index"
        v-bind="project"
      />
    </category>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import projects from '~/assets/projects.json'
const { videoGames, visualNovels } = projects

const firstYearTranslating = 2018
const currentYear = new Date().getFullYear()
const yearsOfExperience = computed(() => currentYear - firstYearTranslating)
const visibleVideoGames = videoGames.filter((project) => project.isVisible)
const visibleVisualNovels = visualNovels.filter((project) => project.isVisible)
const sortedVideoGames = visibleVideoGames.sort((a, b) => b.year - a.year)
const sortedVisualNovels = visibleVisualNovels.sort((a, b) => b.year - a.year)
</script>
