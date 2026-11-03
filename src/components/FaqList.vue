<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

defineProps<{ items: { q: string; a: string }[] }>()
</script>

<template>
  <div class="divide-y divide-ink/10 border-y border-ink/10">
    <details v-for="f in items" :key="f.q" class="group py-5">
      <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-bold [&::-webkit-details-marker]:hidden">
        {{ f.q }}
        <ChevronDown class="size-5 shrink-0 text-muted transition group-open:rotate-180" aria-hidden="true" />
      </summary>
      <p class="mt-3 text-muted">{{ f.a }}</p>
    </details>
  </div>
</template>
