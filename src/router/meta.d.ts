import 'vue-router'

export type DocumentMetaKey = 'metadata.default.title' | 'metadata.default.description' | 'metadata.home.title' | 'metadata.home.description' | 'metadata.notFound.title' | 'metadata.notFound.description'

declare module 'vue-router' {
  interface RouteMeta {
    title?: DocumentMetaKey
    description?: DocumentMetaKey
  }
}
