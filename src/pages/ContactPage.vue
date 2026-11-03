<script setup lang="ts">
import { Phone, Clock, MapPin, CreditCard, CalendarDays } from 'lucide-vue-next'
import { site } from '@/data/site'
import { phoneLink, whatsappLink } from '@/composables/useContact'
import { useSeo, businessJsonLd } from '@/composables/useSeo'
import PageIntro from '@/components/PageIntro.vue'
import WhatsAppIcon from '@/components/WhatsAppIcon.vue'

useSeo({
  title: 'Contacto y pagos',
  description: `Contáctanos 24/7 al ${site.phoneDisplay} o por WhatsApp. Médico a domicilio en Manizales, Caldas.`,
  path: '/contacto',
  jsonLd: businessJsonLd,
})
</script>

<template>
  <PageIntro eyebrow="Contacto" title="Estamos aquí las 24 horas" text="La forma más rápida de pedir tu médico es WhatsApp o una llamada. Te respondemos de inmediato." />

  <section class="container-page grid gap-4 pb-12 md:grid-cols-3">
    <a :href="whatsappLink()" target="_blank" rel="noopener" class="group flex flex-col rounded-xl bg-whatsapp p-7 text-white transition hover:brightness-110">
      <WhatsAppIcon class="size-10" />
      <span class="mt-6 font-display text-2xl font-bold">Escríbenos por WhatsApp</span>
      <span class="mt-1 text-white/80">Respuesta inmediata al {{ site.phoneDisplay }}</span>
    </a>
    <a :href="phoneLink" class="group card flex flex-col p-7 transition hover:border-brand">
      <Phone class="size-10 text-brand" aria-hidden="true" />
      <span class="mt-6 font-display text-2xl font-bold">Llámanos</span>
      <span class="mt-1 text-muted">{{ site.phoneDisplay }}</span>
    </a>
    <RouterLink to="/agendar" class="group card flex flex-col p-7 transition hover:border-brand">
      <CalendarDays class="size-10 text-brand" aria-hidden="true" />
      <span class="mt-6 font-display text-2xl font-bold">Agenda una visita</span>
      <span class="mt-1 text-muted">Elige el día y la franja horaria</span>
    </RouterLink>
  </section>

  <section class="container-page grid gap-4 pb-16 md:grid-cols-2">
    <div class="card p-7">
      <h2 class="text-2xl font-bold">Horario y cobertura</h2>
      <ul class="mt-5 space-y-4 text-lg">
        <li class="flex gap-3"><Clock class="mt-1 size-5 shrink-0 text-brand" aria-hidden="true" />{{ site.hours }}, incluidos festivos</li>
        <li class="flex gap-3"><MapPin class="mt-1 size-5 shrink-0 text-brand" aria-hidden="true" />{{ site.city }}, {{ site.region }}, {{ site.country }}</li>
      </ul>
    </div>
    <div id="pagos" class="card p-7">
      <h2 class="flex items-center gap-3 text-2xl font-bold"><CreditCard class="size-6 text-brand" aria-hidden="true" />Pagos</h2>
      <p class="mt-4 text-lg text-muted">Paga con tarjeta de crédito, débito bancario o efectivo, de forma rápida y segura. Al confirmar tu servicio te indicamos el medio de pago.</p>
    </div>
  </section>
</template>
