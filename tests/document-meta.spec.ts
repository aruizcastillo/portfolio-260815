import { createI18n } from 'vue-i18n'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'

import { setupDocumentMeta } from '@/router/document-meta'

const messages = {
  en: { metadata: { default: { title: 'Vue Starter', description: 'Default description' }, home: { title: 'Page · Vue Starter', description: 'Page description' } } },
  es: { metadata: { default: { title: 'Vue Starter', description: 'Descripción predeterminada' }, home: { title: 'Página · Vue Starter', description: 'Descripción de página' } } },
}

describe('setupDocumentMeta', () => {
  let cleanup: (() => void) | undefined

  beforeEach(() => {
    document.title = ''
    document.head.innerHTML = '<meta name="description" content="Initial description" />'
  })

  afterEach(() => cleanup?.())

  it('applies defaults before the initial route is resolved', () => {
    const { router, i18n } = createTestApplication()
    cleanup = setupDocumentMeta(router, i18n)
    expect(document.title).toBe('Vue Starter')
    expect(description()).toBe('Default description')
  })

  it('updates route metadata and reacts to locale changes', async () => {
    const { router, i18n } = createTestApplication()
    cleanup = setupDocumentMeta(router, i18n)
    await router.push('/page')
    i18n.global.locale.value = 'es'
    await Promise.resolve()
    expect(document.title).toBe('Página · Vue Starter')
    expect(description()).toBe('Descripción de página')
  })

  it('uses defaults and reuses the existing description element', async () => {
    const { router, i18n } = createTestApplication()
    const meta = document.querySelector('meta[name="description"]')
    cleanup = setupDocumentMeta(router, i18n)
    await router.push('/without-meta')
    expect(description()).toBe('Default description')
    expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1)
    expect(document.querySelector('meta[name="description"]')).toBe(meta)
  })
})

function createTestApplication() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/page', component: { template: '<div />' }, meta: { title: 'metadata.home.title', description: 'metadata.home.description' } },
      { path: '/without-meta', component: { template: '<div />' } },
    ],
  })
  const i18n = createI18n({ legacy: false, locale: 'en', messages })
  return { router, i18n }
}

function description(): string | null {
  return document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content ?? null
}
