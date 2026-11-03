<script setup lang="ts">
import { useHead } from '@unhead/vue'
import PageIntro from '@/components/PageIntro.vue'

useHead({ title: 'Página no encontrada', meta: [{ name: 'robots', content: 'noindex' }] })
</script>

<template>
  <PageIntro eyebrow="Error 404" title="No encontramos esta página" text="Pero sí podemos enviarte un médico. Vuelve al inicio o escríbenos.">
    <div class="mt-8 flex flex-wrap gap-3">
      <RouterLink to="/" class="btn-primary">Ir al inicio</RouterLink>
      <RouterLink to="/servicios" class="btn-ghost">Ver servicios</RouterLink>
    </div>
  </PageIntro>
</template>
