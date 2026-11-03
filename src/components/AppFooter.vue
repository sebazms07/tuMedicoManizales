<script setup lang="ts">
import { Phone, Clock, MapPin } from 'lucide-vue-next'
import { site } from '@/data/site'
import { services } from '@/data/services'
import { phoneLink, whatsappLink } from '@/composables/useContact'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative mt-8 overflow-hidden bg-ink pt-6 text-white/80">
    <div class="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <p class="font-display text-4xl font-extrabold text-white [font-stretch:84%]">Tu Médico</p>
        <p class="mt-1 text-white/60">{{ site.tagline }}, en {{ site.city }} las 24 horas</p>
        <p class="mt-4 max-w-sm">
          Un equipo de médicos con amplia experiencia, especialistas en atención domiciliaria.
        </p>
        <ul class="mt-6 space-y-2.5">
          <li class="flex items-center gap-3"><Phone class="size-4 text-white/50" aria-hidden="true" /><a :href="phoneLink" class="hover:text-white">{{ site.phoneDisplay }}</a></li>
          <li class="flex items-center gap-3"><Clock class="size-4 text-white/50" aria-hidden="true" />{{ site.hours }}</li>
          <li class="flex items-center gap-3"><MapPin class="size-4 text-white/50" aria-hidden="true" />{{ site.city }}, {{ site.region }}, {{ site.country }}</li>
        </ul>
      </div>
      <nav aria-label="Servicios">
        <p class="font-display text-lg font-semibold text-white">Servicios</p>
        <ul class="mt-4 space-y-2">
          <li v-for="s in services" :key="s.slug">
            <RouterLink :to="`/servicios/${s.slug}`" class="hover:text-white">{{ s.name }}</RouterLink>
          </li>
        </ul>
      </nav>
      <nav aria-label="Enlaces">
        <p class="font-display text-lg font-semibold text-white">Tu Médico</p>
        <ul class="mt-4 space-y-2">
          <li><RouterLink to="/agendar" class="hover:text-white">Agendar visita</RouterLink></li>
          <li><RouterLink to="/planes" class="hover:text-white">Planes</RouterLink></li>
          <li><RouterLink to="/nosotros" class="hover:text-white">Nosotros</RouterLink></li>
          <li><RouterLink to="/contacto" class="hover:text-white">Contacto y pagos</RouterLink></li>
          <li><RouterLink to="/documentos-legales" class="hover:text-white">Documentos legales (RTE)</RouterLink></li>
          <li><a :href="whatsappLink()" target="_blank" rel="noopener" class="hover:text-white">WhatsApp</a></li>
        </ul>
      </nav>
    </div>
    <div class="border-t border-white/10">
      <div class="container-page flex flex-col gap-2 py-6 text-sm text-white/50 md:flex-row md:justify-between">
        <p>© {{ year }} {{ site.name }}, {{ site.legalEntity }}. Todos los derechos reservados.</p>
        <p>En una emergencia vital llama a la línea {{ site.emergencyLine }}.</p>
      </div>
    </div>
  </footer>
</template>
