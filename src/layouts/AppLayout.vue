<script setup lang="ts">
import AppHeader from '@/components/app-header/AppHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <AppHeader />
    <main class="flex flex-1 flex-col">
      <RouterView />
    </main>
  </div>
</template>
