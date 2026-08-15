<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import * as info from '@/data/info.json'
</script>

<template>
  <Card class="ghost justify-center">
    <CardHeader>
      <CardTitle class="text-5xl">{{ $t('app.name') }}</CardTitle>
      <CardDescription class="text-lg">{{ $t('home.description') }}</CardDescription>
    </CardHeader>
    <CardContent class="flex flex-row gap-2">
      <Button asChild>
        <a :href="`mailto:${info.email}`">{{ $t('buttons.contactMe') }}</a>
      </Button>
      <Button asChild variant="secondary">
        <a href="/files/resume.pdf" target="_blank">{{ $t('buttons.resume') }}</a>
      </Button>
    </CardContent>
  </Card>
</template>
