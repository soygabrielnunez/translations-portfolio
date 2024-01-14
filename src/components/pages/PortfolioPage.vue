<template>
  <section-title text="translations portfolio" japaneseText="翻訳ポートフォリオ" />
  <p class="text-center dark:text-gray-50 md:text-xl"><span class="font-semibold">Hello! / <span translate="no" class="text-purple-400">こんにちは</span></span> I'm a Japanese-English translator that works for JAST, Nekonyan and Solpress, with {{ yearsOfExperience }} years of experience.
  <br />
  You can get to know more about me <router-link to="/about-me"><span class="text-purple-400 font-semibold underline">by clicking here</span></router-link>
  </p>
  <section-subtitle text="video games" japaneseText="ビデオゲーム" />
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-16 p-1 md:p-8 justify-center justify-items-center">
    <project-card
      v-for="(item, index) in videoGames"
      :key="index"
      :infoUrl="item.infoUrl"
      :imageUrl="item.imageUrl"
      :year="item.year"
      :title="item.title"
      :adultsOnly="item.adultsOnly"
    />
  </div>
  <section-subtitle text="novels" japaneseText="小説" />
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-16 p-1 md:p-8 justify-center justify-items-center">
    <project-card
      v-for="(item, index) in novels"
      :key="index"
      :infoUrl="item.infoUrl"
      :imageUrl="item.imageUrl"
      :year="item.year"
      :title="item.title"
      :adultsOnly="item.adultsOnly"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ProjectCard from '../ProjectCard.vue'
import SectionTitle from '../SectionTitle.vue'
import SectionSubtitle from '../SectionSubtitle.vue'
import workData from './workData.json'

const firstYearTranslating = 2018
const currentYear = new Date().getFullYear()

const yearsOfExperience = computed(() => currentYear - firstYearTranslating)
const { videoGames, novels } = workData
</script>
