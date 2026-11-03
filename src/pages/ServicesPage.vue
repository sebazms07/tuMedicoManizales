<script setup lang="ts">
import PageIntro from '@/components/PageIntro.vue'
import ServicesGrid from '@/components/ServicesGrid.vue'
import CtaBand from '@/components/CtaBand.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Servicios',
  description: 'Médico a domicilio 24/7, salud ocupacional, electrocardiogramas, curaciones, abogados en responsabilidad médica y certificados de defunción en Manizales.',
  path: '/servicios',
})
</script>

<template>
  <PageIntro eyebrow="Servicios" title="Todo lo que necesitas, sin salir de casa" text="Elige un servicio para ver los detalles y pedirlo en un toque." />
  <section class="container-page pb-16"><ServicesGrid /></section>
  <CtaBand />
</template>
