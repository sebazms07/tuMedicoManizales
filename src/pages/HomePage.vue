<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import HeroSection from '@/components/HeroSection.vue'
import NeedPicker from '@/components/NeedPicker.vue'
import TriageTimes from '@/components/TriageTimes.vue'
import ServicesGrid from '@/components/ServicesGrid.vue'
import PlansGrid from '@/components/PlansGrid.vue'
import TrustSection from '@/components/TrustSection.vue'
import PartnersStrip from '@/components/PartnersStrip.vue'
import CtaBand from '@/components/CtaBand.vue'
import { useSeo, businessJsonLd } from '@/composables/useSeo'

useSeo({
  description:
    'Médico a domicilio 24/7 en Manizales. Llegamos en 30 a 90 minutos. Salud ocupacional, electrocardiogramas, curaciones y certificados de defunción. Pide por WhatsApp.',
  path: '/',
  jsonLd: businessJsonLd,
})
</script>

<template>
  <HeroSection />
  <NeedPicker />
  <TriageTimes />

  <section aria-labelledby="services-title" class="container-page pb-14 md:pb-20">
    <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 id="services-title" class="h-display">A domicilio o programados</h2>
      </div>
      <RouterLink to="/servicios" class="group inline-flex min-h-11 items-center gap-1.5 font-bold text-brand underline-offset-4 hover:underline">
        Ver todos los servicios <ArrowRight class="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </RouterLink>
    </div>
    <div class="mt-8 md:mt-10"><ServicesGrid /></div>
  </section>

  <TrustSection />

  <section aria-labelledby="plans-title" class="container-page py-14 md:py-20">
    <h2 id="plans-title" class="h-display max-w-2xl">Elige cómo quieres estar cubierto</h2>
    <div class="mt-8 md:mt-10"><PlansGrid /></div>
  </section>

  <PartnersStrip />
  <CtaBand />
</template>
