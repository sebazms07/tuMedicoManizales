<script setup lang="ts">
import { services } from '@/data/services'
import AppIcon from './AppIcon.vue'
</script>

<template>
  <section aria-labelledby="need-title" class="container-page pb-4">
    <h2 id="need-title" class="text-2xl font-bold md:text-3xl">¿Qué necesitas hoy?</h2>
    <ul class="mt-5 grid gap-2 sm:grid-cols-2 md:gap-3 lg:grid-cols-3">
      <li v-for="s in services" :key="s.slug">
        <RouterLink
          :to="`/servicios/${s.slug}`"
          class="press group flex h-full items-center gap-4 rounded-tile bg-mist p-3.5 hover:bg-brand-50 active:bg-brand-50 md:p-5"
        >
          <span class="grid size-12 shrink-0 place-items-center rounded-full bg-white text-brand">
            <AppIcon :name="s.icon" class="size-6" />
          </span>
          <span class="min-w-0 text-lg leading-tight font-bold group-hover:text-brand">{{ s.name }}</span>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
