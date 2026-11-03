<script setup lang="ts">
import { stats, testimonials, values } from '@/data/site'
</script>

<template>
  <section aria-labelledby="trust-title" class="bg-mist py-16 md:py-24">
    <div class="container-page">
      <div class="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
        <h2 id="trust-title" class="text-4xl font-extrabold md:text-6xl">Nuestros pacientes son nuestra familia</h2>
        <p class="text-lg text-muted md:pb-2">Nuestra experiencia y profesionalismo nos permiten acompañar de forma integral a cada paciente y a su familia.</p>
      </div>

      <dl class="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-ink/10 lg:grid-cols-4">
        <div v-for="s in stats" :key="s.label" class="flex flex-col-reverse bg-paper p-5 md:p-7">
          <dt class="mt-2 text-muted">{{ s.label }}</dt>
          <dd class="numeral text-4xl font-extrabold text-brand md:text-5xl">{{ s.value }}</dd>
        </div>
      </dl>

      <div class="mt-14 grid gap-10 md:grid-cols-3">
        <figure v-for="t in testimonials" :key="t.name">
          <blockquote class="font-display text-2xl leading-snug font-semibold [font-stretch:90%]">“{{ t.text }}”</blockquote>
          <figcaption class="mt-4 text-muted">{{ t.name }}, {{ t.city }}</figcaption>
        </figure>
      </div>

      <ul class="mt-16 grid gap-8 md:grid-cols-3">
        <li v-for="v in values" :key="v.title" class="border-t-2 border-ink pt-5">
          <h3 class="text-2xl font-bold">{{ v.title }}</h3>
          <p class="mt-2 text-muted">{{ v.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
