<script setup lang="ts">
import { Phone, CalendarDays } from 'lucide-vue-next'
import WhatsAppIcon from './WhatsAppIcon.vue'
import { phoneLink, whatsappLink } from '@/composables/useContact'
</script>

<template>
  <!-- Barra flotante en móvil: pedir el médico siempre a un toque -->
  <nav aria-label="Contacto rápido" class="material fixed inset-x-2.5 bottom-[max(0.625rem,env(safe-area-inset-bottom))] z-40 rounded-[1.75rem] p-1.5 shadow-float ring-1 ring-ink/10 md:hidden">
    <div class="grid grid-cols-[1fr_1.6fr_1fr] gap-1.5">
      <a :href="phoneLink" class="press flex h-14 flex-col items-center justify-center gap-1 rounded-[1.25rem] bg-white text-sm leading-none font-bold text-ink ring-1 ring-ink/10">
        <Phone class="size-5 text-brand" aria-hidden="true" />
        Llamar
      </a>
      <a :href="whatsappLink()" target="_blank" rel="noopener" class="press flex h-14 items-center justify-center gap-2 rounded-[1.25rem] bg-whatsapp text-lg font-bold text-white">
        <WhatsAppIcon class="size-6" />
        WhatsApp
      </a>
      <RouterLink to="/agendar" class="press flex h-14 flex-col items-center justify-center gap-1 rounded-[1.25rem] bg-white text-sm leading-none font-bold text-ink ring-1 ring-ink/10">
        <CalendarDays class="size-5 text-brand" aria-hidden="true" />
        Agendar
      </RouterLink>
    </div>
  </nav>
</template>
