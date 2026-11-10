<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { services } from '@/data/services'
import { asset } from '@/composables/useContact'
</script>

<template>
  <ul class="grid gap-x-4 gap-y-9 sm:grid-cols-2 md:grid-cols-3">
    <li v-for="(s, i) in services" :key="s.slug" :class="i === 0 ? 'sm:col-span-2 md:row-span-2' : ''">
      <RouterLink :to="`/servicios/${s.slug}`" class="press group flex h-full flex-col">
        <div class="relative overflow-hidden rounded-panel bg-mist" :class="i === 0 ? 'aspect-[16/10] md:aspect-auto md:flex-1' : 'aspect-[16/10]'">
          <img :src="asset(s.image)" alt="" width="760" height="427" loading="lazy" class="size-full object-cover transition duration-500 group-hover:scale-[1.03]" />
          <span v-if="s.available24h" class="absolute top-3 left-3 rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-ink">Las 24 horas</span>
        </div>
        <div class="mt-4 flex items-start gap-3 px-2">
          <div class="min-w-0 flex-1">
            <h3 class="font-bold group-hover:text-brand" :class="i === 0 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'">{{ s.name }}</h3>
            <p class="mt-1.5 text-muted">{{ s.short }}</p>
          </div>
          <ArrowUpRight class="mt-1 size-6 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" aria-hidden="true" />
        </div>
      </RouterLink>
    </li>
  </ul>
</template>
