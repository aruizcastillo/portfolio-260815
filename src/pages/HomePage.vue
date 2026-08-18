<script setup lang="ts">
import { PageContainer } from '@/components/ui/page'

import ContactSection from '@/components/sections/ContactSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
</script>

<template>
  <PageContainer size="wider">
    <div class="grid grid-cols-1 gap-4 xl:grid-cols-[1.2fr_0.9fr_0.9fr] xl:auto-rows-2.5 xl:pt-[2dvh] xl:pb-[16dvh]">
      <HeroSection class="xl:col-start-1 xl:row-start-1 xl:row-span-16" />

      <AboutSection class="xl:col-start-2 xl:row-start-1 xl:row-span-6" />

      <ExperienceSection class="xl:col-start-2 xl:row-start-7 xl:row-span-18" />

      <EducationSection class="xl:col-start-3 xl:row-start-17 xl:row-span-8" />

      <ProjectsSection class="xl:col-start-3 xl:row-start-1 xl:row-span-16" />

      <ContactSection class="xl:col-start-1 xl:row-start-17 xl:row-span-8" />
    </div>
  </PageContainer>
</template>
