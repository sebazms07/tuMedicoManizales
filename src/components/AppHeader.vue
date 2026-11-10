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

  <!-- Cabecera flotante: una píldora que acompaña el recorrido sin tapar el contenido -->
  <header class="sticky top-0 z-40 px-2 pt-2 sm:px-4 sm:pt-3">
    <div
      class="material relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 rounded-full pr-2.5 pl-5 ring-1 ring-ink/10 transition-shadow duration-300 md:h-[4.5rem] md:pr-3 md:pl-7"
      :class="scrolled || open ? 'shadow-float' : ''"
    >
      <RouterLink to="/" class="press flex shrink-0 items-center rounded-full" aria-label="Tu Médico Manizales, inicio">
        <img :src="asset('img/logo.png')" alt="Tu Médico · Cuando lo necesitas" width="452" height="134" class="h-9 w-auto md:h-11" />
      </RouterLink>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="Principal">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="rounded-full px-4 py-2.5 font-bold text-ink/75 transition hover:bg-ink/5 hover:text-ink"
          active-class="!bg-brand-50 !text-brand"
        >
          {{ l.label }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-2">
        <a :href="phoneLink" class="btn-ghost hidden !px-5 md:inline-flex">
          <Phone class="size-4" aria-hidden="true" />
          {{ site.phoneDisplay }}
        </a>
        <RouterLink to="/agendar" class="btn-urgent hidden md:inline-flex">Pedir médico</RouterLink>

        <button
          type="button"
          class="press inline-flex h-11 items-center gap-2 rounded-full bg-ink px-4 font-bold text-white lg:hidden"
          :aria-expanded="open"
          aria-controls="menu-movil"
          @click="open = !open"
        >
          <X v-if="open" class="size-5" aria-hidden="true" />
          <Menu v-else class="size-5" aria-hidden="true" />
          {{ open ? 'Cerrar' : 'Menú' }}
        </button>
      </div>

      <!-- El menú nace del botón que lo abre (arriba a la derecha) y vuelve a él al cerrarse -->
      <Transition
        enter-from-class="opacity-0 scale-[0.96]"
        enter-active-class="transition duration-300 ease-spring"
        leave-to-class="opacity-0 scale-[0.96]"
        leave-active-class="transition duration-200 ease-spring"
      >
        <nav v-if="open" id="menu-movil" class="absolute inset-x-0 top-full mt-2 origin-top-right rounded-panel bg-white p-3 shadow-float ring-1 ring-ink/10 lg:hidden" aria-label="Menú móvil">
          <ul class="flex flex-col">
            <li v-for="l in links" :key="l.to">
              <RouterLink :to="l.to" class="press block rounded-tile px-4 py-3.5 font-display text-2xl font-bold hover:bg-mist active:bg-mist" active-class="bg-brand-50 text-brand">
                {{ l.label }}
              </RouterLink>
            </li>
            <li class="mt-2">
              <RouterLink to="/agendar" class="btn-urgent w-full py-4 text-lg">Agendar visita médica</RouterLink>
            </li>
          </ul>
        </nav>
      </Transition>
    </div>
  </header>
</template>
