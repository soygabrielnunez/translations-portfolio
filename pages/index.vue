<template>
  <div>
    <page-title text="translations portfolio" japaneseText="翻訳ポートフォリオ" />
    <p class="text-center dark:text-gray-50 md:text-xl"><span class="font-semibold">Hello! / <span translate="no" class="text-purple-600 dark:text-purple-400">こんにちは</span></span> I'm a Japanese-English translator that works for JAST, Nekonyan and Solpress, with {{ yearsOfExperience }} years of experience.
    <br />
    You can get to know more about me <nuxt-link to="/about"><span class="text-purple-600 dark:text-purple-400 font-semibold underline">by clicking here</span></nuxt-link>
    </p>
    <category text="video games" japaneseText="ビデオゲーム" />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-16 p-1 md:p-8 justify-center justify-items-center"
    >
      <project
        v-for="(project, index) in sortedVideoGames"
        :key="index"
        :infoUrl="project.infoUrl"
        :image="project.image"
        :year="project.year"
        :title="project.title"
        :isForAdultsOnly="project.isForAdultsOnly"
        
      />
    </div>
    <category text="visual novels" japaneseText="小説のビジュアル" />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-16 p-1 md:p-8 justify-center justify-items-center">
      <project
        v-for="(project, index) in sortedVisualNovels"
        :key="index"
        :infoUrl="project.infoUrl"
        :image="project.image"
        :year="project.year"
        :title="project.title"
        :isForAdultsOnly="project.isForAdultsOnly"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// import projects from '~/assets/projects.json'

const firstYearTranslating = 2018
const currentYear = new Date().getFullYear()
const yearsOfExperience = computed(() => currentYear - firstYearTranslating)
const { data } = await useFetch('/api/projects')
const projects = data.value?.results.map(page => {
  const { id, properties } = page as any
  return {
    id,
    category: properties.category.select.name,
    title: properties.title.title[0].plain_text,
    year: properties.year.number,
    isVisible: properties.isVisible.checkbox,
    isForAdultsOnly: properties.isForAdultsOnly.checkbox,
    image: properties.image.files[0].file.url,
    infoUrl: properties.infoUrl.url
  }

}) || []
// const { videoGames, visualNovels } = projects
const videoGames = projects.filter((project) => project.category === 'videogame')
const visualNovels = projects.filter((project) => project.category === 'novel')
const visibleVideoGames = videoGames.filter((project) => project.isVisible)
const visibleVisualNovels = visualNovels.filter((project) => project.isVisible)
const sortedVideoGames = visibleVideoGames.sort((a, b) => b.year - a.year)
const sortedVisualNovels = visibleVisualNovels.sort((a, b) => b.year - a.year)
</script>
