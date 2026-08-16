<script setup lang="ts">
import AppHeader from '@/components/app-header/AppHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <RouterView />
    </main>
  </div>
</template>
