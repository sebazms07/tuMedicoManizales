<script setup lang="ts">
import { Phone, CalendarDays } from 'lucide-vue-next'
import WhatsAppIcon from './WhatsAppIcon.vue'
import { phoneLink, whatsappLink } from '@/composables/useContact'
</script>

<template>
  <!-- Barra fija en móvil: contratar siempre a un toque -->
  <div class="fixed inset-x-0 bottom-0 z-40 material border-t border-white/60 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_-18px_rgb(15_35_64/0.35)] md:hidden">
    <div class="grid grid-cols-[1fr_1.4fr_1fr] gap-2">
      <a :href="phoneLink" class="press flex flex-col items-center justify-center gap-0.5 rounded-lg border-2 border-ink/10 bg-white py-2 text-xs font-bold text-ink">
        <Phone class="size-5 text-brand" aria-hidden="true" />
        Llamar
      </a>
      <a :href="whatsappLink()" target="_blank" rel="noopener" class="press flex items-center justify-center gap-2 rounded-lg bg-whatsapp py-2 font-bold text-white">
        <WhatsAppIcon class="size-6" />
        WhatsApp
      </a>
      <RouterLink to="/agendar" class="press flex flex-col items-center justify-center gap-0.5 rounded-lg border-2 border-ink/10 bg-white py-2 text-xs font-bold text-ink">
        <CalendarDays class="size-5 text-brand" aria-hidden="true" />
        Agendar
      </RouterLink>
    </div>
  </div>
</template>
