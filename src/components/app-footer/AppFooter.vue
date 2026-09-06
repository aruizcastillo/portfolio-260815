<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'

import ContactSection from '@/components/sections/ContactSection.vue'
import { PageContainer } from '@/components/ui/page'

import { Copyright, MapPin } from '@lucide/vue'
import Separator from '../ui/separator/Separator.vue'
</script>

<template>
  <footer class="py-6">
    <PageContainer size="wide" gap="sm">
      <div class="flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div>
          <ContactSection />
        </div>
        <Separator class="shrink-0 sm:hidden" />
        <Card class="ghost flex justify-center w-full sm:w-auto">
          <CardContent class="flex flex-col items-center sm:items-start gap-4">
            <span class="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Copyright class="size-4" />
              {{ new Date().getFullYear() }} {{ $t('info.name') }}.
            </span>
            <span class="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin class="size-4" />
              {{ $t('info.location') }}
            </span>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  </footer>
</template>
