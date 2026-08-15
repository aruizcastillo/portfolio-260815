<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import * as info from '@/data/info.json'
</script>

<template>
  <Card class="ghost">
    <CardHeader>
      <CardTitle class="text-5xl">Alex Ruiz Castillo</CardTitle>
      <CardDescription class="text-lg">Diseño y desarrollo aplicaciones web modernas y escalables.</CardDescription>
    </CardHeader>
    <CardContent class="flex flex-row gap-2">
      <Button asChild>
        <a :href="`mailto:${info.email}`">Contact me</a>
      </Button>
      <Button asChild variant="secondary">
        <a href="/files/resume.pdf" target="_blank">Resume</a>
      </Button>
    </CardContent>
  </Card>
</template>
