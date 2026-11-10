<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; text?: string }>()
</script>

<template>
  <section class="container-page pt-10 pb-8 md:pt-16 md:pb-12">
    <p v-if="eyebrow" class="chip animate-rise">{{ eyebrow }}</p>
    <h1 class="mt-4 max-w-3xl animate-rise text-4xl font-bold [animation-delay:60ms] md:text-[3.5rem]">{{ title }}</h1>
    <p v-if="text" class="mt-5 max-w-2xl animate-rise text-lg text-muted [animation-delay:120ms] md:text-xl">{{ text }}</p>
    <slot />
  </section>
</template>
