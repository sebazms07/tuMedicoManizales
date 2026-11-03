<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { plans } from '@/data/site'
</script>

<template>
  <ul class="grid gap-4 lg:grid-cols-3">
    <li
      v-for="p in plans"
      :key="p.id"
      class="relative flex flex-col rounded-xl p-7"
      :class="p.featured ? 'bg-ink text-white' : 'card'"
    >
      <span v-if="p.featured" class="mb-4 self-start rounded-md bg-signal px-2.5 py-1 text-sm font-bold text-ink">El más solicitado</span>
      <h3 class="text-3xl font-bold">{{ p.name }}</h3>
      <p class="mt-2" :class="p.featured ? 'text-white/75' : 'text-muted'">{{ p.summary }}</p>
      <ul class="mt-6 mb-8 space-y-3">
        <li v-for="f in p.features" :key="f" class="flex gap-3">
          <Check class="mt-1 size-5 shrink-0" :class="p.featured ? 'text-signal' : 'text-calm'" aria-hidden="true" />
          <span>{{ f }}</span>
        </li>
      </ul>
      <RouterLink
        :to="{ path: '/agendar', query: { servicio: p.service, plan: p.id } }"
        class="mt-auto w-full"
        :class="p.featured ? 'btn bg-white text-ink hover:bg-paper' : 'btn-ghost'"
      >
        {{ p.cta }}
      </RouterLink>
    </li>
  </ul>
</template>
