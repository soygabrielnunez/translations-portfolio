<template>
  <div>
    <section-title text="translations portfolio" japaneseText="翻訳ポートフォリオ" />
    <p class="text-center dark:text-gray-50 md:text-xl"><span class="font-semibold">Hello! / <span translate="no" class="text-purple-600 dark:text-purple-400">こんにちは</span></span> I'm a Japanese-English translator that works for JAST, Nekonyan and Solpress, with {{ yearsOfExperience }} years of experience.
    <br />
    You can get to know more about me <router-link to="/about-me"><span class="text-purple-600 dark:text-purple-400 font-semibold underline">by clicking here</span></router-link>
    </p>
    <section-subtitle text="video games" japaneseText="ビデオゲーム" />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-16 p-1 md:p-8 justify-center justify-items-center">
      <project-card
        v-for="(project, index) in videoGames"
        :key="index"
        :infoUrl="project.infoUrl"
        :image="project.image"
        :year="project.year"
        :title="project.title"
        :isForAdultsOnly="project.isForAdultsOnly"
      />
    </div>
    <section-subtitle text="novels" japaneseText="小説" />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-16 p-1 md:p-8 justify-center justify-items-center">
      <project-card
        v-for="(project, index) in novels"
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
import ProjectCard from '../ProjectCard.vue'
import SectionTitle from '../SectionTitle.vue'
import SectionSubtitle from '../SectionSubtitle.vue'
import projects from '../../assets/projects.json'

const firstYearTranslating = 2018
const currentYear = new Date().getFullYear()

const yearsOfExperience = computed(() => currentYear - firstYearTranslating)
const { videoGames, novels } = projects
</script>
