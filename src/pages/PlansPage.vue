<script setup lang="ts">
import PageIntro from '@/components/PageIntro.vue'
import PlansGrid from '@/components/PlansGrid.vue'
import CtaBand from '@/components/CtaBand.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Planes',
  description: 'Visita médica particular, plan consulta familiar y convenio con especialistas en Manizales. Pide información sin compromiso.',
  path: '/planes',
})
</script>

<template>
  <PageIntro eyebrow="Planes" title="Atención médica a tu medida" text="Paga solo la visita que necesitas o protege a toda tu familia durante el año. Escríbenos y te contamos las opciones y valores." />
  <section class="container-page pt-4 pb-16"><PlansGrid /></section>
  <CtaBand title="¿Dudas sobre qué plan elegir?" message="Hola, quiero información sobre los planes de Tu Médico." />
</template>
