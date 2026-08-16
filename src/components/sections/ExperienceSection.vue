<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Item, ItemHeader, ItemTitle, ItemDescription, ItemContent } from '@/components/ui/item'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

interface Experience {
  company: string
  role: string
  duration: string
  description: string
  stack: string[]
}

const { tm } = useI18n()
const experiences = computed(() => [...(tm('experience') as Experience[])].reverse())
</script>

<template>
  <Card class="flex h-full min-h-0 flex-col gap-2">
    <CardHeader>
      <CardTitle class="text-muted-foreground">{{ $t('home.sections.experience') }}</CardTitle>
    </CardHeader>

    <CardContent class="min-h-0 flex-1">
      <ScrollArea class="h-full pr-4" viewport-class="scroll-fade">
        <template v-for="(experience, index) in experiences" :key="experience.company">
          <Separator v-if="index > 0" class="my-4" />
          <Item size="sm" class="p-0">
            <ItemHeader class="flex flex-col items-start">
              <ItemTitle>{{ experience.company }}</ItemTitle>
              <div class="flex flex-row justify-between w-full gap-2">
                <ItemDescription class="text-xs">
                  {{ experience.role }}
                </ItemDescription>
                <ItemDescription class="text-xs">
                  {{ experience.duration }}
                </ItemDescription>
              </div>
            </ItemHeader>
            <ItemContent>
              <p>{{ experience.description }}</p>
              <ul class="flex flex-row flex-wrap gap-2 mt-2">
                <li v-for="tech in experience.stack" :key="tech">
                  <Badge variant="secondary" class="font-mono text-muted-foreground">{{ tech }}</Badge>
                </li>
              </ul>
            </ItemContent>
          </Item>
        </template>
      </ScrollArea>
    </CardContent>
  </Card>
</template>
