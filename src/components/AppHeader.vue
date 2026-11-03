<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X, Phone } from 'lucide-vue-next'
import { site } from '@/data/site'
import { asset, phoneLink } from '@/composables/useContact'

const links = [
  { to: '/servicios', label: 'Servicios' },
  { to: '/planes', label: 'Planes' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (open.value = false))

// El borde inferior solo aparece cuando hay contenido pasando por debajo
const scrolled = ref(false)
const onScroll = () => (scrolled.value = window.scrollY > 4)
const onKey = (e: KeyboardEvent) => e.key === 'Escape' && (open.value = false)
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <Transition
    enter-from-class="opacity-0"
    enter-active-class="transition-opacity duration-300 ease-spring"
    leave-to-class="opacity-0"
    leave-active-class="transition-opacity duration-200 ease-spring"
  >
    <div v-if="open" class="fixed inset-0 z-30 bg-ink/30 lg:hidden" aria-hidden="true" @click="open = false" />
  </Transition>

  <header
    class="material sticky top-0 z-40 transition-shadow duration-300"
    :class="scrolled || open ? 'shadow-[0_1px_0_rgb(15_35_64/0.08),0_10px_30px_-18px_rgb(15_35_64/0.35)]' : ''"
  >
    <div class="container-page flex h-16 items-center justify-between gap-4 md:h-20">
      <RouterLink to="/" class="press flex shrink-0 items-center" aria-label="Tu Médico Manizales, inicio">
        <img :src="asset('img/logo.png')" alt="Tu Médico · Cuando lo necesitas" width="452" height="134" class="h-10 w-auto md:h-12" />
      </RouterLink>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="Principal">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="relative rounded-md px-3 py-2 font-bold text-ink/75 transition hover:text-ink active:bg-ink/5 after:absolute after:inset-x-3 after:-bottom-[1.15rem] after:h-[3px] after:bg-transparent"
          active-class="!text-ink after:!bg-brand"
        >
          {{ l.label }}
        </RouterLink>
      </nav>

      <div class="hidden items-center gap-2 md:flex">
        <a :href="phoneLink" class="btn-ghost !px-4 !py-2.5">
          <Phone class="size-4" aria-hidden="true" />
          {{ site.phoneDisplay }}
        </a>
        <RouterLink to="/agendar" class="btn-urgent !px-5 !py-2.5">Pedir médico</RouterLink>
      </div>

      <button
        type="button"
        class="press grid size-11 place-items-center rounded-lg border-2 border-ink/15 bg-white lg:hidden"
        :aria-expanded="open"
        aria-controls="menu-movil"
        :aria-label="open ? 'Cerrar menú' : 'Abrir menú'"
        @click="open = !open"
      >
        <X v-if="open" class="size-5" />
        <Menu v-else class="size-5" />
      </button>
    </div>

    <!-- El menú nace del botón que lo abre (arriba a la derecha) y vuelve a él al cerrarse -->
    <Transition
      enter-from-class="opacity-0 scale-[0.96] blur-sm"
      enter-active-class="transition duration-300 ease-spring"
      leave-to-class="opacity-0 scale-[0.96] blur-sm"
      leave-active-class="transition duration-200 ease-spring"
    >
      <nav v-if="open" id="menu-movil" class="absolute inset-x-0 top-full origin-top-right border-t border-ink/10 bg-white shadow-[0_24px_40px_-24px_rgb(15_35_64/0.45)] lg:hidden" aria-label="Menú móvil">
        <ul class="container-page flex flex-col py-3">
          <li v-for="l in links" :key="l.to">
            <RouterLink :to="l.to" class="press block rounded-lg px-3 py-3.5 font-display text-2xl font-bold [font-stretch:84%] hover:bg-ink/5 active:bg-ink/5">
              {{ l.label }}
            </RouterLink>
          </li>
          <li class="mt-2">
            <RouterLink to="/agendar" class="btn-urgent w-full">Agendar visita médica</RouterLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>
