<script setup lang="ts">
import { Phone } from 'lucide-vue-next'
import { site, triage } from '@/data/site'
import { whatsappLink } from '@/composables/useContact'
import WhatsAppIcon from './WhatsAppIcon.vue'

const tones = {
  urgent: { bg: 'bg-signal-50', dot: 'bg-signal', text: 'text-signal-700' },
  warn: { bg: 'bg-caution-50', dot: 'bg-caution', text: 'text-caution-ink' },
  calm: { bg: 'bg-calm-50', dot: 'bg-calm', text: 'text-calm-700' },
} as const

// ['Dolor en el pecho', 'Caídas'] -> 'Dolor en el pecho, caídas.'
const sentence = (items: readonly string[]) => items.map((s, i) => (i ? s.toLowerCase() : s)).join(', ') + '.'
</script>

<template>
  <section aria-labelledby="triage-title" class="container-page py-14 md:py-20">
    <div class="max-w-2xl">
      <h2 id="triage-title" class="h-display">Llegamos según lo que sientes</h2>
      <p class="mt-4 text-lg text-muted">
        Clasificamos cada caso con la escala de triage para que quien más lo necesita reciba atención primero.
      </p>
    </div>

    <!-- Escala de triage: de más a menos grave -->
    <ol class="mt-8 grid gap-3 md:mt-10 lg:grid-cols-3 lg:gap-4">
      <li class="flex flex-col gap-4 rounded-tile bg-vital-50 p-5 md:flex-row md:items-center md:justify-between md:px-7 lg:col-span-3">
        <p class="flex gap-3">
          <span class="mt-1.5 size-3.5 shrink-0 rounded-full bg-vital" aria-hidden="true" />
          <span>
            <span class="font-display font-bold text-vital">Triage 1, emergencia vital.</span>
            No respira, está inconsciente o sangra sin parar.
          </span>
        </p>
        <a :href="`tel:${site.emergencyLine}`" class="btn shrink-0 bg-vital text-white hover:brightness-110">
          <Phone class="size-5" aria-hidden="true" /> Llama al {{ site.emergencyLine }}
        </a>
      </li>
      <li v-for="t in triage" :key="t.level" class="flex flex-col rounded-panel p-6 md:p-8" :class="tones[t.tone].bg">
        <p class="flex items-center gap-2.5 font-bold" :class="tones[t.tone].text">
          <span class="size-3.5 rounded-full" :class="tones[t.tone].dot" aria-hidden="true" />
          {{ t.level }}
        </p>
        <p class="mt-5 flex items-baseline gap-2.5">
          <span class="numeral text-7xl leading-none font-extrabold">{{ t.minutes }}</span>
          <span class="text-xl font-bold">minutos</span>
        </p>
        <h3 class="mt-5 text-2xl font-bold">{{ t.title }}</h3>
        <p class="mt-2 mb-7 text-ink/80">{{ sentence(t.symptoms) }}</p>
        <a
          :href="whatsappLink('Hola, necesito un médico a domicilio en Manizales. Mis síntomas son: ')"
          target="_blank"
          rel="noopener"
          class="btn mt-auto bg-white text-ink hover:bg-white/70"
        >
          <WhatsAppIcon class="size-5 text-whatsapp" /> Pedir por WhatsApp
        </a>
      </li>
    </ol>
  </section>
</template>
