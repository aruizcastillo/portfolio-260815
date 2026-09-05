import { ref } from 'vue'

export function useHoverDropdown(delay = 120) {
  const open = ref(false)
  let timer: ReturnType<typeof setTimeout>

  const canHover = window.matchMedia('(hover: hover)').matches

  const enter = () => {
    if (!canHover) return

    clearTimeout(timer)
    open.value = true
  }

  const leave = () => {
    if (!canHover) return

    timer = setTimeout(() => {
      open.value = false
    }, delay)
  }

  return {
    open,
    enter,
    leave,
  }
}
