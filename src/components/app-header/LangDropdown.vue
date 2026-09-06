<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

import { setLocale, type SupportedLocale } from '@/i18n'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import { Languages } from '@lucide/vue'

import { useHoverDropdown } from '@/composables/useHoverDropdown'

const { locale, t } = useI18n()

watch(locale, (value) => setLocale(value as SupportedLocale))

const { open, enter, leave } = useHoverDropdown()
</script>

<template>
  <DropdownMenu :key="locale" v-model="locale" :modal="false" :aria-label="t('common.language')" v-model:open="open">
    <DropdownMenuTrigger @mouseenter="enter" @mouseleave="leave">
      <Button type="button" variant="ghost" class="flex items-center gap-2">
        <Languages />
        <span class="hidden sm:block">{{ t(`languages.${locale}`) }}</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" @mouseenter="enter" @mouseleave="leave" @close-auto-focus.prevent>
      <DropdownMenuLabel>{{ t('common.language') }}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup v-model="locale">
        <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="es">Español</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
