<script setup lang="ts">
import { Phone } from 'lucide-vue-next'
import { site } from '@/data/site'
import { phoneLink, whatsappLink } from '@/composables/useContact'
import WhatsAppIcon from './WhatsAppIcon.vue'

withDefaults(defineProps<{ title?: string; message?: string }>(), {
  title: '¿Necesitas un médico ahora?',
  message: undefined,
})
</script>

<template>
  <section class="py-10">
    <div class="panel bg-brand py-12 text-white md:py-16">
      <div class="container-page flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 class="h-display">{{ title }}</h2>
          <p class="mt-3 text-lg text-white/85">Escríbenos o llámanos. Atendemos {{ site.hours.toLowerCase() }}.</p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row md:shrink-0">
          <a :href="whatsappLink(message)" target="_blank" rel="noopener" class="btn-whatsapp px-7 py-4 text-lg">
            <WhatsAppIcon class="size-6" /> WhatsApp
          </a>
          <a :href="phoneLink" class="btn bg-white px-7 py-4 text-lg text-ink hover:bg-paper">
            <Phone class="size-5" aria-hidden="true" /> {{ site.phoneDisplay }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
