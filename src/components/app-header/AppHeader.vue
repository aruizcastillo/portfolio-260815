<script setup lang="ts">
import { RouterLink } from 'vue-router'

import AppLogo from '@/components/AppLogo.vue'
import ThemeDropdown from '@/components/app-header/ThemeDropdown.vue'
import LangDropdown from '@/components/app-header/LangDropdown.vue'
import StyleDropdown from '@/components/app-header/StyleDropdown.vue'
import PageContainer from '@/components/ui/page/PageContainer.vue'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import GitHubIcon from '~icons/simple-icons/github'
import LinkedInIcon from '~icons/simple-icons/linkedin'

import * as info from '@/data/info.json'
</script>

<template>
  <PageContainer size="wide">
    <header class="flex gap-6 items-center flex-row" :aria-label="$t('navigation.main')">
      <div class="flex w-full flex-row items-center justify-between gap-2">
        <RouterLink class="text-inherit font-bold no-underline" :to="{ name: 'home' }">
          <AppLogo :aria-label="$t('app.name')" role="img" />
        </RouterLink>
        <div class="flex flex-row items-center gap-2 h-5">
          <nav class="flex flex-row items-center gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <Button asChild variant="ghost">
                    <a :href="info.linkedin.url" target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon data-icon="inline-start"/>
                      <span class="sr-only">{{ info.linkedin.name }}</span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <span>{{ info.linkedin.name }}</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <Button asChild variant="ghost">
                    <a :href="info.github.url" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon data-icon="inline-start"/>
                      <span class="sr-only">{{ info.github.name }}</span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <span>{{ info.github.name }}</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
          <Separator orientation="vertical" />
          <div class="flex items-center gap-1">
            <StyleDropdown />
            <ThemeDropdown />
            <LangDropdown />
          </div>
        </div>
      </div>
    </header>
  </PageContainer>
</template>
