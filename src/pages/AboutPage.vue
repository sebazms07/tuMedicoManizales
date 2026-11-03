<script setup lang="ts">
import PageIntro from '@/components/PageIntro.vue'
import TrustSection from '@/components/TrustSection.vue'
import PartnersStrip from '@/components/PartnersStrip.vue'
import CtaBand from '@/components/CtaBand.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Nosotros',
  description: 'Más de 25 años llevando atención médica de alta calidad a los hogares de Manizales. Médicos con experiencia y sentido humano.',
  path: '/nosotros',
})
</script>

<template>
  <PageIntro
    eyebrow="Nosotros"
    title="Más de 25 años llevando la consulta a tu casa"
    text="Tu Médico es un equipo de médicos con amplia experiencia, especialistas en atención domiciliaria. Cumplimos nuestra promesa de servicio con innovación y seguridad para nuestros pacientes."
  />
  <TrustSection />
  <PartnersStrip />
  <CtaBand />
</template>
