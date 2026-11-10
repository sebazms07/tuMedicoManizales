<script setup lang="ts">
import { Phone, Clock, MapPin } from 'lucide-vue-next'
import { site } from '@/data/site'
import { services } from '@/data/services'
import { phoneLink, whatsappLink } from '@/composables/useContact'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="mx-2 mt-8 rounded-t-panel bg-ink pt-6 pb-24 text-white/80 sm:mx-4 md:pb-0">
    <div class="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <p class="font-display text-3xl font-bold tracking-tight text-white">Tu Médico</p>
        <p class="mt-1 text-white/70">{{ site.tagline }}, en {{ site.city }} las 24 horas</p>
        <p class="mt-4 max-w-sm">
          Un equipo de médicos con amplia experiencia, especialistas en atención domiciliaria.
        </p>
        <ul class="mt-6 space-y-2.5">
          <li class="flex items-center gap-3"><Phone class="size-4 text-white/50" aria-hidden="true" /><a :href="phoneLink" class="inline-block py-1 underline-offset-4 hover:text-white hover:underline">{{ site.phoneDisplay }}</a></li>
          <li class="flex items-center gap-3"><Clock class="size-4 text-white/50" aria-hidden="true" />{{ site.hours }}</li>
          <li class="flex items-center gap-3"><MapPin class="size-4 text-white/50" aria-hidden="true" />{{ site.city }}, {{ site.region }}, {{ site.country }}</li>
        </ul>
      </div>
      <nav aria-label="Servicios">
        <p class="font-display text-lg font-semibold text-white">Servicios</p>
        <ul class="mt-3 space-y-1">
          <li v-for="s in services" :key="s.slug">
            <RouterLink :to="`/servicios/${s.slug}`" class="inline-block py-1 underline-offset-4 hover:text-white hover:underline">{{ s.name }}</RouterLink>
          </li>
        </ul>
      </nav>
      <nav aria-label="Enlaces">
        <p class="font-display text-lg font-semibold text-white">Tu Médico</p>
        <ul class="mt-3 space-y-1">
          <li><RouterLink to="/agendar" class="inline-block py-1 underline-offset-4 hover:text-white hover:underline">Agendar visita</RouterLink></li>
          <li><RouterLink to="/planes" class="inline-block py-1 underline-offset-4 hover:text-white hover:underline">Planes</RouterLink></li>
          <li><RouterLink to="/nosotros" class="inline-block py-1 underline-offset-4 hover:text-white hover:underline">Nosotros</RouterLink></li>
          <li><RouterLink to="/contacto" class="inline-block py-1 underline-offset-4 hover:text-white hover:underline">Contacto y pagos</RouterLink></li>
          <li><RouterLink to="/documentos-legales" class="inline-block py-1 underline-offset-4 hover:text-white hover:underline">Documentos legales (RTE)</RouterLink></li>
          <li><a :href="whatsappLink()" target="_blank" rel="noopener" class="inline-block py-1 underline-offset-4 hover:text-white hover:underline">WhatsApp</a></li>
        </ul>
      </nav>
    </div>
    <div class="border-t border-white/10">
      <div class="container-page flex flex-col gap-2 py-6 text-sm text-white/70 md:flex-row md:justify-between">
        <p>© {{ year }} {{ site.name }}, {{ site.legalEntity }}. Todos los derechos reservados.</p>
        <p>En una emergencia vital llama a la línea {{ site.emergencyLine }}.</p>
      </div>
    </div>
  </footer>
</template>
