<script setup lang="ts">
import { RouterLink } from 'vue-router'

import ThemeDropdown from '@/components/app-header/ThemeDropdown.vue'
import LangDropdown from '@/components/app-header/LangDropdown.vue'
</script>

<template>
  <header class="flex gap-6 p-4 items-center flex-row" :aria-label="$t('navigation.main')">
    <div class="flex w-full flex-row items-center justify-between gap-8">
      <RouterLink class="text-inherit font-bold no-underline" :to="{ name: 'home' }">
        <img src="/logo.svg" :alt="$t('app.name')" class="size-8" />
      </RouterLink>
      <div class="flex items-center gap-2">
        <ThemeDropdown />
        <LangDropdown />
      </div>
    </div>
  </header>
</template>
