<script setup lang="ts">
import { RouterView } from 'vue-router'

import 'vue-sonner/style.css'
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <div>
    <RouterView />
  </div>

  <Toaster position="top-center" />
</template>
