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
  <section class="container-page grid gap-10 pt-8 pb-14 md:pt-14 md:pb-20 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
    <div class="flex flex-col">
      <div class="animate-rise"><AvailableBadge /></div>
      <h1 class="mt-6 animate-rise text-[3rem] font-extrabold [animation-delay:60ms] sm:text-7xl lg:text-[5rem]">
        Tu médico en casa,<br class="hidden sm:inline" /> a cualquier hora.
      </h1>
      <p class="mt-6 max-w-[34rem] animate-rise text-lg text-muted [animation-delay:120ms] md:text-xl">
        ¿Enfermo y cansado de esperar la cita de tu EPS o de hacer fila en urgencias? Un médico con experiencia llega a tu casa en {{ site.city }}, de día o de madrugada.
      </p>

      <div class="mt-8 flex animate-rise flex-col gap-3 [animation-delay:180ms] sm:flex-row">
        <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn-whatsapp px-7 py-4 text-lg">
          <WhatsAppIcon class="size-6" />
          Pedir médico por WhatsApp
        </a>
        <a :href="phoneLink" class="btn-ghost px-6 py-4 text-lg">
          <Phone class="size-5" aria-hidden="true" />
          {{ site.phoneDisplay }}
        </a>
      </div>
      <RouterLink to="/agendar" class="group mt-5 inline-flex animate-rise items-center gap-1.5 self-start font-bold text-brand [animation-delay:220ms]">
        ¿No es urgente? Agenda una visita programada
        <ArrowRight class="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </RouterLink>
    </div>

    <!-- Reloj de llegada: la promesa de tiempo con horas reales de Manizales -->
    <aside
      class="relative animate-rise self-start overflow-hidden rounded-2xl bg-ink p-6 text-white [animation-delay:140ms] sm:p-8"
      aria-labelledby="clock-title"
    >
      <p id="clock-title" class="text-white/70">
        {{ current ? 'Hora actual en Manizales' : 'Atendemos las 24 horas' }}
      </p>
      <p class="numeral mt-1 flex items-baseline gap-3 leading-none" aria-live="off">
        <template v-if="current">
          <span class="text-[4.5rem] font-extrabold sm:text-8xl">{{ current.time }}</span>
          <span class="text-2xl font-bold text-white/70">{{ current.period }}</span>
        </template>
        <span v-else class="text-[4.5rem] font-extrabold sm:text-8xl">24/7</span>
      </p>

      <p class="mt-8 font-display text-lg font-bold">Si nos escribes ahora, llegamos hacia las:</p>
      <ul class="mt-4 space-y-px overflow-hidden rounded-lg">
        <li v-for="a in arrivals" :key="a.level" class="flex items-center gap-4 bg-white/[0.06] py-3 pr-4">
          <span class="h-10 w-1.5 shrink-0" :class="bar[a.tone]" aria-hidden="true" />
          <span class="numeral w-28 shrink-0 text-2xl font-bold sm:w-32">
            <template v-if="a.at">{{ a.at.time }}<span class="ml-1 text-sm font-semibold text-white/60">{{ a.at.period }}</span></template>
            <template v-else>{{ a.minutes }} min</template>
          </span>
          <span class="min-w-0 text-sm leading-snug text-white/80">
            <span class="block font-bold text-white">{{ a.title }}</span>
            {{ a.symptoms.slice(0, 2).join(', ').toLowerCase() }}
          </span>
        </li>
      </ul>
      <p class="mt-5 text-sm text-white/60">
        Emergencia vital (no respira, inconsciente): llama al {{ site.emergencyLine }}.
      </p>
    </aside>
  </section>
</template>
