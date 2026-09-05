<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useStyle } from '@/composables/useStyle'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import { SwatchBook } from '@lucide/vue'

import { useHoverDropdown } from '@/composables/useHoverDropdown'

const { locale, t } = useI18n()
const { style } = useStyle()

const {
  open,
  enter,
  leave,
} = useHoverDropdown()
</script>

<template>
  <DropdownMenu :key="locale" :modal="false" :aria-label="t('common.style')" v-model:open="open">
    <DropdownMenuTrigger @mouseenter="enter" @mouseleave="leave">
      <Button type="button" variant="ghost" class="flex items-center gap-2">
        <SwatchBook />
        <span class="hidden sm:block">{{ t(`style.${style}`) }}</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" @mouseenter="enter" @mouseleave="leave" @close-auto-focus.prevent>
      <DropdownMenuLabel>
        {{ t('common.style') }}
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup v-model="style">
        <DropdownMenuRadioItem value="soft">
          {{ t('style.soft') }}
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="bold">
          {{ t('style.bold') }}
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="sharp">
          {{ t('style.sharp') }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
