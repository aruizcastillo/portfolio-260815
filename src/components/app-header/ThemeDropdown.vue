<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { useTheme, type Theme } from '@/composables/useTheme'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import { Eclipse, Sun, Moon } from '@lucide/vue'

import { useHoverDropdown } from '@/composables/useHoverDropdown'

const { locale, t } = useI18n()
const { theme } = useTheme()

const themeIcons = { system: Eclipse, light: Sun, dark: Moon } satisfies Record<Theme, typeof Eclipse>
const themeIcon = computed(() => themeIcons[theme.value])

const {
  open,
  enter,
  leave,
} = useHoverDropdown()
</script>

<template>
  <DropdownMenu :key="locale" :modal="false" :aria-label="t('common.theme')" v-model:open="open">
    <DropdownMenuTrigger>
      <Button type="button" variant="ghost" class="flex items-center gap-2" @mouseenter="enter" @mouseleave="leave">
        <component :is="themeIcon" aria-hidden="true" />
        <span class="hidden sm:block">{{ t(`theme.${theme}`) }}</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" @mouseenter="enter" @mouseleave="leave" @close-auto-focus.prevent>
      <DropdownMenuLabel>{{ t('common.theme') }}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup v-model="theme">
        <DropdownMenuRadioItem value="system">
          <Eclipse />
          {{ t('theme.system') }}
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="light">
          <Sun />
          {{ t('theme.light') }}
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="dark">
          <Moon />
          {{ t('theme.dark') }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
