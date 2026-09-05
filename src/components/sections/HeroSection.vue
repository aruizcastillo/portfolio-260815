<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { Send, FileText } from '@lucide/vue'

import * as info from '@/data/info.json'
</script>

<template>
  <Card class="ghost text-center">
    <CardHeader>
      <CardTitle class="text-5xl">{{ $t('app.name') }}</CardTitle>
      <CardDescription class="text-lg">{{ $t('home.description') }}</CardDescription>
    </CardHeader>
    <CardContent class="flex flex-row gap-2 self-center">
      <Button asChild>
        <a :href="`mailto:${info.email}`">
          <Send data-icon="inline-start" />
          {{ $t('buttons.contactMe') }}
        </a>
      </Button>
      <Button asChild variant="secondary">
        <a :href="$t('cvPath')" target="_blank">
          <FileText data-icon="inline-start" />
          {{ $t('buttons.resume') }}
        </a>
      </Button>
    </CardContent>
  </Card>
</template>
