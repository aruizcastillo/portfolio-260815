import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setupDocumentMeta } from './router/document-meta'
import { i18n } from './i18n'

import './main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(i18n)
setupDocumentMeta(router, i18n)
app.use(router)

app.mount('#app')
