<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Check, Phone, CalendarDays, ArrowLeft } from 'lucide-vue-next'
import { getService, services } from '@/data/services'
import { site } from '@/data/site'
import { asset, phoneLink, whatsappLink } from '@/composables/useContact'
import { useSeo, businessJsonLd } from '@/composables/useSeo'
import AppIcon from '@/components/AppIcon.vue'
import FaqList from '@/components/FaqList.vue'
import WhatsAppIcon from '@/components/WhatsAppIcon.vue'
import NotFoundPage from './NotFoundPage.vue'

const route = useRoute()
const service = computed(() => getService(String(route.params.slug)))
const others = computed(() => services.filter(s => s.slug !== service.value?.slug).slice(0, 3))

if (service.value) {
  const s = service.value
  useSeo({
    title: s.seoTitle,
    description: s.seoDescription,
    path: `/servicios/${s.slug}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Service', name: s.name, description: s.description, areaServed: site.city, provider: businessJsonLd },
        {
          '@type': 'FAQPage',
          mainEntity: s.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
      ],
    },
  })
}
</script>

<template>
  <NotFoundPage v-if="!service" />
  <article v-else>
    <div class="container-page pt-6 md:pt-10">
      <RouterLink to="/servicios" class="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink">
        <ArrowLeft class="size-4" aria-hidden="true" /> Todos los servicios
      </RouterLink>
    </div>

    <section class="container-page grid gap-10 pt-6 pb-14 md:grid-cols-[1.1fr_1fr] md:items-center md:pb-20">
      <div>
        <span class="inline-flex items-center gap-2 rounded-md bg-brand-50 px-2.5 py-1 font-bold text-brand">
          <AppIcon :name="service.icon" class="size-4" />
          {{ service.available24h ? 'Disponible 24 horas' : 'Servicio programado' }}
        </span>
        <h1 class="mt-5 animate-rise text-4xl font-extrabold md:text-6xl">{{ service.name }}</h1>
        <p class="mt-5 animate-rise text-lg text-muted [animation-delay:80ms] md:text-xl">{{ service.description }}</p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a :href="whatsappLink(service.whatsappMessage)" target="_blank" rel="noopener" class="btn-whatsapp px-6 py-4 text-lg">
            <WhatsAppIcon class="size-6" /> Pedir por WhatsApp
          </a>
          <RouterLink :to="{ path: '/agendar', query: { servicio: service.slug } }" class="btn-ghost px-6 py-4 text-lg">
            <CalendarDays class="size-5" aria-hidden="true" /> Agendar
          </RouterLink>
        </div>
        <a :href="phoneLink" class="mt-4 inline-flex items-center gap-2 font-semibold text-brand">
          <Phone class="size-4" aria-hidden="true" /> o llama al {{ site.phoneDisplay }}
        </a>
      </div>
      <div class="overflow-hidden rounded-xl">
        <img :src="asset(service.image)" alt="" width="760" height="427" class="aspect-[4/3] w-full object-cover" />
      </div>
    </section>

    <section class="bg-mist/70 py-14 md:py-20">
      <div class="container-page grid gap-12 md:grid-cols-2">
        <div>
          <h2 class="text-3xl font-bold md:text-4xl">Qué incluye</h2>
          <ul class="mt-6 space-y-4">
            <li v-for="h in service.highlights" :key="h" class="flex gap-3 text-lg">
              <span class="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-calm text-white"><Check class="size-4" aria-hidden="true" /></span>
              {{ h }}
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-3xl font-bold md:text-4xl">Preguntas frecuentes</h2>
          <div class="mt-6"><FaqList :items="service.faqs" /></div>
        </div>
      </div>
    </section>

    <section class="container-page py-14">
      <h2 class="text-2xl font-bold">Otros servicios</h2>
      <ul class="mt-6 grid gap-3 sm:grid-cols-3">
        <li v-for="o in others" :key="o.slug">
          <RouterLink :to="`/servicios/${o.slug}`" class="card flex items-center gap-3 p-4 transition hover:border-brand">
            <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand"><AppIcon :name="o.icon" class="size-5" /></span>
            <span class="font-semibold leading-tight">{{ o.name }}</span>
          </RouterLink>
        </li>
      </ul>
    </section>
  </article>
</template>
