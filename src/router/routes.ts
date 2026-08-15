import type { RouteRecordRaw } from 'vue-router'

import type { DocumentMetaKey } from './meta'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/AppLayout.vue'),
    meta: {
      title: 'metadata.home.title',
      description: 'metadata.home.description',
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/HomePage.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/error/NotFoundPage.vue'),
    meta: {
      title: 'metadata.notFound.title' as DocumentMetaKey,
      description: 'metadata.notFound.description' as DocumentMetaKey,
    },
  },
]
