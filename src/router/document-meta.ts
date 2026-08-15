import { watch } from 'vue'
import type { Ref } from 'vue'
import type { RouteLocationNormalizedLoaded, Router } from 'vue-router'

import type { DocumentMetaKey } from './meta'

type DocumentMetaI18n = {
  global: {
    locale: Ref<string>
    t: (key: DocumentMetaKey) => string
  }
}

const defaultTitleKey: DocumentMetaKey = 'metadata.default.title'
const defaultDescriptionKey: DocumentMetaKey = 'metadata.default.description'

function applyDocumentMeta(route: RouteLocationNormalizedLoaded, i18n: DocumentMetaI18n): void {
  document.title = i18n.global.t(route.meta.title ?? defaultTitleKey)

  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (description) description.content = i18n.global.t(route.meta.description ?? defaultDescriptionKey)
}

export function setupDocumentMeta(router: Router, i18n: DocumentMetaI18n): () => void {
  applyDocumentMeta(router.currentRoute.value, i18n)

  const removeAfterEach = router.afterEach((to) => applyDocumentMeta(to, i18n))
  const stopWatchingLocale = watch(i18n.global.locale, () => applyDocumentMeta(router.currentRoute.value, i18n))

  return () => {
    removeAfterEach()
    stopWatchingLocale()
  }
}
