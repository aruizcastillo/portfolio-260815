<script setup lang="ts">
import { PageContainer } from '@/components/ui/page'

import EducationSection from '@/components/sections/EducationSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
</script>

<template>
  <PageContainer size="wide" gap="none">
    <HeroSection class="pb-[clamp(3rem,calc(16.667vw-3.667rem),7rem)]" />

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:[grid-template-areas:'experience_about'_'experience_projects'_'education_projects'] lg:grid-rows-[auto_1fr_auto] lg:items-stretch">
      <ExperienceSection class="order-2 lg:[grid-area:experience]" />

      <AboutSection class="order-1 lg:[grid-area:about]" />

      <EducationSection class="order-3 lg:[grid-area:education]" />

      <ProjectsSection class="order-4 lg:[grid-area:projects]" />
    </div>
  </PageContainer>
</template>
