<script setup lang="ts">
import { Card, CardHeader } from '@/components/ui/card'

import ThemeDropdown from '@/components/app-header/ThemeDropdown.vue'
import LangDropdown from '@/components/app-header/LangDropdown.vue'
import AppLogo from '@/components/AppLogo.vue'
</script>

<template>
  <Card class="ghost justify-center">
    <CardHeader class="flex flex-row items-center justify-between">
      <AppLogo :aria-label="$t('app.name')" role="img" class="size-8" />
      <div class="flex items-center gap-2">
        <ThemeDropdown />
        <LangDropdown />
      </div>
    </CardHeader>
  </Card>
</template>
