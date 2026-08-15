<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t('home.sections.projects') }}</CardTitle>
    </CardHeader>
    <CardContent>
      <p class="text-muted-foreground">{{ $t('home.placeholder') }}</p>
    </CardContent>
  </Card>
</template>
