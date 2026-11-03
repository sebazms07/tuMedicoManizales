<script setup lang="ts">
import { Phone } from 'lucide-vue-next'
import { site, triage } from '@/data/site'
import { whatsappLink } from '@/composables/useContact'
import WhatsAppIcon from './WhatsAppIcon.vue'

const tones = {
  urgent: { bar: 'bg-signal', text: 'text-signal-600' },
  warn: { bar: 'bg-caution', text: 'text-caution-ink' },
  calm: { bar: 'bg-calm', text: 'text-calm' },
} as const

// ['Dolor en el pecho', 'Caídas'] -> 'Dolor en el pecho, caídas.'
const sentence = (items: readonly string[]) => items.map((s, i) => (i ? s.toLowerCase() : s)).join(', ') + '.'
</script>

<template>
  <section aria-labelledby="triage-title" class="container-page py-16 md:py-24">
    <div class="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
      <h2 id="triage-title" class="text-4xl font-extrabold md:text-6xl">Llegamos según lo que sientes</h2>
      <p class="text-lg text-muted md:pb-2">
        Clasificamos cada caso con la escala de triage para que quien más lo necesita reciba atención primero.
      </p>
    </div>

    <!-- Escala de triage: de más a menos grave -->
    <ol class="mt-12 overflow-hidden rounded-xl border border-ink/10 bg-white">
      <li class="grid grid-cols-[0.5rem_1fr] border-b border-ink/10 bg-vital-50">
        <span class="bg-vital" aria-hidden="true" />
        <div class="flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between md:px-7">
          <p>
            <span class="font-display font-bold text-vital">Triage 1, emergencia vital.</span>
            No respira, está inconsciente o sangra sin parar.
          </p>
          <a :href="`tel:${site.emergencyLine}`" class="btn shrink-0 bg-vital !py-2.5 text-white hover:brightness-110">
            <Phone class="size-4" aria-hidden="true" /> Llama al {{ site.emergencyLine }}
          </a>
        </div>
      </li>
      <li v-for="t in triage" :key="t.level" class="grid grid-cols-[0.5rem_1fr] border-b border-ink/10 last:border-b-0">
        <span :class="tones[t.tone].bar" aria-hidden="true" />
        <div class="grid gap-x-8 gap-y-3 p-5 md:grid-cols-[11rem_1fr_auto] md:items-center md:px-7 md:py-7">
          <p class="flex items-baseline gap-2 md:block">
            <span class="numeral block text-5xl leading-none font-extrabold md:text-6xl">{{ t.minutes }}</span>
            <span class="font-bold" :class="tones[t.tone].text">minutos, {{ t.level.toLowerCase() }}</span>
          </p>
          <div>
            <h3 class="text-2xl font-bold">{{ t.title }}</h3>
            <p class="mt-1 text-muted">{{ sentence(t.symptoms) }}</p>
          </div>
          <a
            :href="whatsappLink('Hola, necesito un médico a domicilio en Manizales. Mis síntomas son: ')"
            target="_blank"
            rel="noopener"
            class="press inline-flex items-center gap-2 self-start font-bold text-whatsapp hover:underline"
          >
            <WhatsAppIcon class="size-5" /> Pedir por WhatsApp
          </a>
        </div>
      </li>
    </ol>
  </section>
</template>
