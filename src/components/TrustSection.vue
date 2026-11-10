<script setup lang="ts">
import { stats, testimonials, values } from '@/data/site'
</script>

<template>
  <section aria-labelledby="trust-title" class="panel bg-mist py-14 md:py-20">
    <div class="container-page">
      <div class="max-w-2xl">
        <h2 id="trust-title" class="h-display">Nuestros pacientes son nuestra familia</h2>
        <p class="mt-4 text-lg text-muted">Nuestra experiencia y profesionalismo nos permiten acompañar de forma integral a cada paciente y a su familia.</p>
      </div>

      <dl class="mt-10 grid grid-cols-2 gap-2.5 md:gap-4 lg:grid-cols-4">
        <div v-for="s in stats" :key="s.label" class="flex flex-col-reverse justify-end rounded-tile bg-white p-5 md:p-6">
          <dt class="mt-2 leading-snug text-muted">{{ s.label }}</dt>
          <dd class="numeral text-[2rem] font-extrabold text-brand md:text-5xl">{{ s.value }}</dd>
        </div>
      </dl>

      <div class="mt-2.5 grid gap-2.5 md:mt-4 md:grid-cols-3 md:gap-4">
        <figure v-for="t in testimonials" :key="t.name" class="flex flex-col rounded-tile bg-white p-6">
          <blockquote class="text-xl leading-snug font-medium">“{{ t.text }}”</blockquote>
          <figcaption class="mt-auto pt-5 text-muted">{{ t.name }}, {{ t.city }}</figcaption>
        </figure>
      </div>

      <ul class="mt-12 grid gap-8 md:mt-16 md:grid-cols-3">
        <li v-for="v in values" :key="v.title">
          <h3 class="text-2xl font-bold">{{ v.title }}</h3>
          <p class="mt-2 text-muted">{{ v.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
