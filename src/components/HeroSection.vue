<script setup lang="ts">
import { computed } from 'vue'
import { Phone, ArrowRight } from 'lucide-vue-next'
import { site, triage } from '@/data/site'
import { phoneLink, whatsappLink } from '@/composables/useContact'
import { addMinutes, formatTime, useClock } from '@/composables/useClock'
import AvailableBadge from './AvailableBadge.vue'
import WhatsAppIcon from './WhatsAppIcon.vue'

const now = useClock()
const current = computed(() => (now.value ? formatTime(now.value) : null))
const arrivals = computed(() =>
  triage.map(t => ({ ...t, at: now.value ? formatTime(addMinutes(now.value, t.minutes)) : null })),
)

const bar = { urgent: 'bg-signal', warn: 'bg-caution', calm: 'bg-calm' } as const
</script>

<template>
  <section class="container-page grid gap-8 pt-8 pb-12 md:pt-14 md:pb-20 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12">
    <div class="flex flex-col">
      <div class="animate-rise self-start"><AvailableBadge /></div>
      <h1 class="mt-5 animate-rise text-[2.5rem] font-bold [animation-delay:60ms] sm:text-6xl lg:text-[4.25rem]">
        Tu médico en casa, a cualquier hora.
      </h1>
      <p class="mt-5 max-w-[34rem] animate-rise text-lg text-muted [animation-delay:120ms] md:text-xl">
        ¿Enfermo y cansado de esperar la cita de tu EPS o de hacer fila en urgencias? Un médico con experiencia llega a tu casa en {{ site.city }}, de día o de madrugada.
      </p>

      <div class="mt-8 flex animate-rise flex-col gap-3 whitespace-nowrap [animation-delay:180ms] sm:flex-row sm:flex-wrap">
        <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn-whatsapp px-7 py-4 text-lg">
          <WhatsAppIcon class="size-6" />
          Pedir médico por WhatsApp
        </a>
        <a :href="phoneLink" class="btn-ghost px-7 py-4 text-lg">
          <Phone class="size-5" aria-hidden="true" />
          Llamar al {{ site.phoneDisplay }}
        </a>
      </div>
      <RouterLink to="/agendar" class="group mt-5 inline-flex min-h-11 animate-rise items-center gap-1.5 self-start font-bold text-brand underline-offset-4 [animation-delay:220ms] hover:underline">
        ¿No es urgente? Agenda una visita programada
        <ArrowRight class="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </RouterLink>
    </div>

    <!-- Reloj de llegada: la promesa de tiempo con horas reales de Manizales -->
    <aside
      class="relative animate-rise self-start rounded-panel bg-ink p-5 text-white [animation-delay:140ms] sm:p-7 lg:self-center"
      aria-labelledby="clock-title"
    >
      <div class="px-1 pt-1 sm:px-2">
        <p id="clock-title" class="text-white/75">
          {{ current ? 'Hora actual en Manizales' : 'Atendemos las 24 horas' }}
        </p>
        <p class="numeral mt-1 flex items-baseline gap-3 leading-none whitespace-nowrap" aria-live="off">
          <template v-if="current">
            <span class="text-[3.5rem] font-extrabold sm:text-[5.25rem]">{{ current.time }}</span>
            <span class="text-xl font-bold sm:text-2xl text-white/75">{{ current.period }}</span>
          </template>
          <span v-else class="text-[3.5rem] font-extrabold sm:text-[5.25rem]">24/7</span>
        </p>
        <p class="mt-7 font-display text-lg font-bold">Si nos escribes ahora, llegamos hacia las:</p>
      </div>

      <ul class="mt-3 space-y-2">
        <li v-for="a in arrivals" :key="a.level" class="flex items-center gap-3 sm:gap-4 rounded-tile bg-white/[0.08] px-3.5 py-3.5 sm:px-4">
          <span class="h-11 w-2 shrink-0 rounded-full" :class="bar[a.tone]" aria-hidden="true" />
          <span class="numeral w-[6.75rem] shrink-0 text-xl font-bold whitespace-nowrap sm:w-36 sm:text-2xl">
            <template v-if="a.at">{{ a.at.time }}<span class="ml-1 text-xs font-semibold text-white/75 sm:text-sm">{{ a.at.period }}</span></template>
            <template v-else>{{ a.minutes }} min</template>
          </span>
          <span class="min-w-0 text-sm leading-snug text-white/80">
            <span class="block text-base font-bold text-white">{{ a.title }}</span>
            {{ a.symptoms.slice(0, 2).join(', ').toLowerCase() }}
          </span>
        </li>
      </ul>
      <p class="mt-4 px-1 text-sm text-white/75 sm:px-2">
        Emergencia vital (no respira, inconsciente): llama al {{ site.emergencyLine }}.
      </p>
    </aside>
  </section>
</template>
