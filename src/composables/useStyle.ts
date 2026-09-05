import { computed, ref, watch, type Ref } from 'vue'

export const styles = ['soft', 'bold', 'sharp'] as const

export type Style = (typeof styles)[number]
export type ResolvedStyle = Style

const STYLE_STORAGE_KEY = 'style'

function isStyle(value: string | null): value is Style {
  return value !== null && styles.includes(value as Style)
}

function getInitialStyle(): Style {
  if (typeof window === 'undefined') {
    return 'soft'
  }

  try {
    const storedStyle = window.localStorage.getItem(STYLE_STORAGE_KEY)

    return isStyle(storedStyle) ? storedStyle : 'soft'
  } catch {
    return 'soft'
  }
}

const style = ref<Style>(getInitialStyle())
const resolvedStyle = computed<ResolvedStyle>(() => style.value)

function applyStyle(value: ResolvedStyle): void {
  document.documentElement.dataset.style = value
}

watch(resolvedStyle, applyStyle, { immediate: typeof document !== 'undefined' })

if (typeof window !== 'undefined') {
  watch(style, (value) => {
    try {
      window.localStorage.setItem(STYLE_STORAGE_KEY, value)
    } catch {
      // The preference still works for the current session when storage is unavailable.
    }
  })
}

export function useStyle(): { style: Ref<Style>; resolvedStyle: Readonly<Ref<ResolvedStyle>> } {
  return { style, resolvedStyle }
}
