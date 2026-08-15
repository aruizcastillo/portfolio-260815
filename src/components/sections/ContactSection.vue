<script setup lang="ts">
import { Copy } from '@lucide/vue'
import { toast } from 'vue-sonner'
import { Card, CardContent } from '@/components/ui/card'

import * as info from '@/data/info.json'
import Button from '../ui/button/Button.vue'

async function copyEmail() {
  await navigator.clipboard.writeText(info.email)
  toast.success('Correo copiado al portapapeles')
}
</script>

<template>
  <Card>
    <CardContent>
      <ul>
        <li class="text-muted-foreground flex flex-row items-center">
           <a :href="`mailto:${info.email}`" target="_blank" rel="noopener noreferrer">{{ info.email }}</a>
           <Button variant="ghost" size="sm" aria-label="Copiar correo" title="Copiar correo" @click="copyEmail">
             <Copy data-icon="inline-start" />
           </Button>
        </li>
        <li class="text-muted-foreground"><a :href="info.linkedin.url" target="_blank" rel="noopener noreferrer">{{ info.linkedin.username }}</a></li>
        <li class="text-muted-foreground"><a :href="info.github.url" target="_blank" rel="noopener noreferrer">{{ info.github.username }}</a></li>
      </ul>
    </CardContent>
  </Card>
</template>
