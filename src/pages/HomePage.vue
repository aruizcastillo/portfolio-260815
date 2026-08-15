<script setup lang="ts">
import { PageContainer } from '@/components/ui/page'
</script>

<template>
  <PageContainer centered>
    <h1 class="text-3xl font-bold">{{ $t('app.name') }}</h1>

    <p class="text-muted-foreground">
      {{ $t('home.description') }}
    </p>
  </PageContainer>
</template>
