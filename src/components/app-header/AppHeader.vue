<script setup lang="ts">
import { RouterLink } from 'vue-router'

import AppLogo from '@/components/AppLogo.vue'
import ThemeDropdown from '@/components/app-header/ThemeDropdown.vue'
import LangDropdown from '@/components/app-header/LangDropdown.vue'
</script>

<template>
  <header class="flex gap-6 items-center flex-row px-8 py-6" :aria-label="$t('navigation.main')">
    <div class="flex w-full flex-row items-center justify-between gap-8">
      <RouterLink class="text-inherit font-bold no-underline px-6" :to="{ name: 'home' }">
        <AppLogo :aria-label="$t('app.name')" role="img" />
      </RouterLink>
      <div class="flex items-center gap-2">
        <ThemeDropdown />
        <LangDropdown />
      </div>
    </div>
  </header>
</template>
