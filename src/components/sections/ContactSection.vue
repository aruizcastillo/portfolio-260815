<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { Copy, Check, Mail } from '@lucide/vue'
import { toast } from 'vue-sonner'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import GitHubIcon from '~icons/simple-icons/github'
import LinkedInIcon from '~icons/simple-icons/linkedin'

import * as info from '@/data/info.json'

const emailCopied = ref(false)
const { t } = useI18n()

async function copyEmail() {
  await navigator.clipboard.writeText(info.email)
  emailCopied.value = true
  toast.success(t('contact.emailCopied'))
  setTimeout(() => {
    emailCopied.value = false
  }, 2000)
}
</script>

<template>
  <Card class="ghost flex flex-col justify-end">
    <CardContent>
      <div class="flex flex-col gap-1 items-start">
        <Button asChild variant="link" class="text-muted-foreground">
          <a :href="info.linkedin.url" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon class="w-5 h-5" />
            {{ info.linkedin.username }}
          </a>
        </Button>
        <Button asChild variant="link" class="text-muted-foreground">
          <a :href="info.github.url" target="_blank" rel="noopener noreferrer">
            <GitHubIcon class="w-5 h-5" />
            {{ info.github.username }}
          </a>
        </Button>
        <div class="flex flex-row items-center">
          <Button asChild variant="link" class="text-muted-foreground">
            <a :href="`mailto:${info.email}`" target="_blank" rel="noopener noreferrer">
              <Mail data-icon="inline-start" />
              {{ info.email }}
            </a>
          </Button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <Button variant="ghost" size="sm" :aria-label="t('buttons.copyEmail')" @click="copyEmail">
                  <Transition mode="out-in" enter-active-class="transition duration-100 ease-out" enter-from-class="scale-75 opacity-0" enter-to-class="scale-100 opacity-100" leave-active-class="transition duration-100 ease-in" leave-from-class="scale-100 opacity-100" leave-to-class="scale-75 opacity-0">
                    <Check v-if="emailCopied" data-icon="inline-start" />
                    <Copy v-else data-icon="inline-start" />
                  </Transition>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>{{ t('buttons.copyEmail') }}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
