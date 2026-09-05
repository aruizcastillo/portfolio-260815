<script setup lang="ts">
import AppHeader from '@/components/app-header/AppHeader.vue'
import AppFooter from '@/components/app-footer/AppFooter.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col">
    <AppHeader class="pt-6 pb-[clamp(2rem,calc(13.333vw-5.333rem),4rem)]" />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
