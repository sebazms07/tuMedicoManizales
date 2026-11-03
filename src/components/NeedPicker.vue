<script setup lang="ts">
import { services } from '@/data/services'
import AppIcon from './AppIcon.vue'
</script>

<template>
  <section aria-labelledby="need-title" class="border-y border-ink/10 bg-white">
    <div class="container-page py-8 md:py-10">
      <h2 id="need-title" class="text-2xl font-bold md:text-3xl">¿Qué necesitas hoy?</h2>
      <ul class="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 sm:grid-cols-3 lg:grid-cols-6">
        <li v-for="s in services" :key="s.slug" class="bg-white">
          <RouterLink
            :to="`/servicios/${s.slug}`"
            class="press group flex h-full flex-col gap-4 p-4 hover:bg-brand-50 active:bg-brand-50 md:p-5"
          >
            <AppIcon :name="s.icon" class="size-6 text-brand" />
            <span class="font-bold leading-tight group-hover:text-brand">{{ s.name }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>
