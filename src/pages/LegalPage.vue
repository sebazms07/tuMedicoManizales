<script setup lang="ts">
import PageIntro from '@/components/PageIntro.vue'
import { site } from '@/data/site'
import { whatsappLink } from '@/composables/useContact'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Documentos legales · Régimen Tributario Especial',
  description: `Documentos legales del Régimen Tributario Especial de ${site.legalEntity} (${site.name}).`,
  path: '/documentos-legales',
})

// Agrega aquí los PDF en public/docs/ y sus nombres para que aparezcan en la lista
const documents: { name: string; file: string }[] = []
</script>

<template>
  <PageIntro eyebrow="Transparencia" title="Documentos legales del Régimen Tributario Especial" />
  <section class="container-page pb-16">
    <ul v-if="documents.length" class="divide-y divide-ink/10 border-y border-ink/10">
      <li v-for="d in documents" :key="d.file" class="py-4">
        <a :href="d.file" target="_blank" rel="noopener" class="font-semibold text-brand hover:underline">{{ d.name }}</a>
      </li>
    </ul>
    <p v-else class="card max-w-2xl p-7 text-lg text-muted">
      Estamos actualizando esta sección. Si necesitas algún documento, <a :href="whatsappLink('Hola, solicito los documentos del Régimen Tributario Especial.')" target="_blank" rel="noopener" class="font-semibold text-brand underline">escríbenos</a> y te lo enviamos.
    </p>
  </section>
</template>
