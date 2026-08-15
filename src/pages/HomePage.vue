<script setup lang="ts">
import { PageContainer } from '@/components/ui/page'

import ContactSection from '@/components/sections/ContactSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import AppHeader from '@/components/sections/AppHeader.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
</script>

<template>
  <PageContainer size="wide">
    <div class="grid grid-cols-1 gap-4 xl:grid-cols-[1.2fr_0.9fr_0.9fr] xl:auto-rows-24">
      <AppHeader class="xl:col-start-1 xl:row-start-1 xl:row-span-1" />

      <HeroSection class="xl:col-start-1 xl:row-start-2 xl:row-span-5" />

      <AboutSection class="xl:col-start-3 xl:row-start-1 xl:row-span-2" />

      <ExperienceSection class="xl:col-start-2 xl:row-start-1 xl:row-span-4" />

      <EducationSection class="xl:col-start-2 xl:row-start-5 xl:row-span-2" />

      <ProjectsSection class="xl:col-start-3 xl:row-start-3 xl:row-span-4" />

      <ContactSection class="xl:col-start-1 xl:row-start-5 xl:row-span-2" />
    </div>
  </PageContainer>
</template>
