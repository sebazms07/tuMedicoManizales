import { onMounted, onUnmounted, ref } from 'vue'

const fmt = new Intl.DateTimeFormat('es-CO', {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
  timeZone: 'America/Bogota',
})

// Separa "2:47 a. m." en hora y periodo para darles estilos distintos
export function formatTime(date: Date) {
  const parts = fmt.formatToParts(date)
  const time = parts.filter(p => p.type === 'hour' || p.type === 'minute' || p.type === 'literal').map(p => p.value).join('').trim()
  const period = parts.find(p => p.type === 'dayPeriod')?.value ?? ''
  return { time: time.replace(/\s+$/, ''), period }
}

// Hora de Manizales. Es null en el HTML estático y se llena al hidratar.
export function useClock() {
  const now = ref<Date | null>(null)
  let timer: ReturnType<typeof setInterval> | undefined
  onMounted(() => {
    now.value = new Date()
    timer = setInterval(() => (now.value = new Date()), 10_000)
  })
  onUnmounted(() => clearInterval(timer))
  return now
}

export const addMinutes = (d: Date, m: number) => new Date(d.getTime() + m * 60_000)
