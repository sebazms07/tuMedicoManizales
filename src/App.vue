<script setup lang="ts">
import { useHead } from '@unhead/vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import StickyContactBar from './components/StickyContactBar.vue'
import { site } from './data/site'

useHead({
  titleTemplate: t => (t ? `${t} | ${site.name}` : `${site.name} · Médico a domicilio 24/7`),
  htmlAttrs: { lang: 'es-CO' },
})
</script>

<template>
  <a href="#contenido" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
    Saltar al contenido
  </a>
  <AppHeader />
  <main id="contenido">
    <RouterView :key="$route.path" />
  </main>
  <AppFooter />
  <StickyContactBar />
</template>
