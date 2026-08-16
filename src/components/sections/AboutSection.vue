<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
</script>

<template>
  <Card class="flex h-full min-h-0 flex-col gap-2">
    <CardHeader>
      <CardTitle class="text-muted-foreground">{{ $t('home.sections.about') }}</CardTitle>
    </CardHeader>
    <CardContent>
      <p class="text-sm">{{ $t('home.about') }}</p>
    </CardContent>
  </Card>
</template>
