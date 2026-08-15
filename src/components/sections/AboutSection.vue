<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t('home.sections.about') }}</CardTitle>
    </CardHeader>
    <CardContent>
      <p class="text-muted-foreground">{{ $t('home.about') }}</p>
    </CardContent>
  </Card>
</template>
