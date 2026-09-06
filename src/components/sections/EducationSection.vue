<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Item, ItemHeader, ItemTitle, ItemDescription, ItemContent } from '@/components/ui/item'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

interface Education {
  institution: string
  degree?: string
  duration: string
  description: string
  stack?: string[]
}

const { tm } = useI18n()
const educations = computed(() => [...(tm('education') as Education[])].reverse())
</script>

<template>
  <Card class="flex h-full min-h-0 flex-col gap-2">
    <CardHeader>
      <CardTitle class="text-muted-foreground">{{ $t('home.sections.education') }}</CardTitle>
    </CardHeader>

    <CardContent class="min-h-0 flex-1">
      <ScrollArea class="h-full **:data-[slot=scroll-area-viewport]:scroll-fade pr-2">
        <template v-for="(education, index) in educations" :key="education.institution">
          <Separator v-if="index > 0" class="my-4" />
          <Item size="sm" class="p-0">
            <ItemHeader class="flex flex-col items-start">
              <ItemTitle>{{ education.institution }}</ItemTitle>
              <div class="flex flex-row justify-between w-full gap-2">
                <!-- <ItemDescription class="text-xs">
                  {{ education.degree }}
                </ItemDescription> -->
                <ItemDescription class="text-xs">
                  {{ education.duration }}
                </ItemDescription>
              </div>
            </ItemHeader>
            <ItemContent class="text-sm">
              <p>{{ education.description }}</p>
            </ItemContent>
          </Item>
        </template>
      </ScrollArea>
    </CardContent>
  </Card>
</template>
