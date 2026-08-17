<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Item, ItemHeader, ItemTitle, ItemDescription, ItemContent } from '@/components/ui/item'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import { ArrowUpRight, CodeXml } from '@lucide/vue'

import * as info from '@/data/info.json'

interface Projects {
  name: string
  description: string
  repoUrl: string
  websiteUrl?: string
  stack?: string[]
}
const { tm } = useI18n()
const projects = computed(() => [...(tm('projects') as Projects[])].reverse())
</script>

<template>
  <Card class="flex h-full min-h-0 flex-col gap-2">
    <CardHeader>
      <CardTitle class="text-muted-foreground">{{ $t('home.sections.projects') }}</CardTitle>
    </CardHeader>

    <CardContent class="min-h-0 flex-1">
      <ScrollArea class="h-[90%] **:data-[slot=scroll-area-viewport]:scroll-fade pr-2">
        <template v-for="(project, index) in projects" :key="project.name">
          <Separator v-if="index > 0" class="my-4" />
          <Item size="sm" class="p-0">
            <ItemHeader>
              <ItemTitle>
                <Button asChild variant="link" class="flex items-center gap-2 px-0!">
                  <a v-if="project.websiteUrl" :href="project.websiteUrl" target="_blank" rel="noopener noreferrer">
                    {{ project.name }}
                    <ArrowUpRight data-icon="inline-end" />
                  </a>
                  <template v-else>{{ project.name }}</template>
                </Button>
              </ItemTitle>
              <ItemDescription>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger as-child>
                      <Button asChild variant="ghost" size="sm" class="text-xs">
                        <a :href="project.repoUrl" target="_blank" rel="noopener noreferrer">
                          <CodeXml data-icon="inline-start" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{{ $t('buttons.viewRepository') }}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </ItemDescription>
            </ItemHeader>
            <ItemContent class="text-sm">
              <p>{{ project.description }}</p>
              <ul class="flex flex-row flex-wrap gap-2 mt-2">
                <li v-for="tech in project.stack" :key="tech">
                  <Badge variant="secondary" class="font-mono text-muted-foreground">{{ tech }}</Badge>
                </li>
              </ul>
            </ItemContent>
          </Item>
        </template>
      </ScrollArea>
      <Button asChild variant="link" class="text-muted-foreground my-2">
        <a :href="`${info.github.url}?tab=repositories`" target="_blank" rel="noopener noreferrer">
          {{ $t('buttons.viewOnGithub') }}
          <ArrowUpRight data-icon="inline-end" />
        </a>
      </Button>
    </CardContent>
  </Card>
</template>
