<script setup lang="ts">
import { partners } from '@/data/site'
import { asset } from '@/composables/useContact'
</script>

<template>
  <section aria-labelledby="partners-title" class="container-page py-14">
    <h2 id="partners-title" class="font-display text-xl font-bold">Aliados estratégicos que confían en nosotros</h2>
    <ul class="mt-6 grid grid-cols-2 items-center gap-4 sm:grid-cols-4">
      <li v-for="p in partners" :key="p.name" class="flex h-24 items-center justify-center rounded-xl border border-ink/10 bg-white px-4">
        <img :src="asset(p.logo)" :alt="p.name" width="450" height="253" loading="lazy" class="max-h-20 w-auto object-contain mix-blend-multiply" />
      </li>
    </ul>
  </section>
</template>
