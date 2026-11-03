<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Send, ShieldCheck, Zap } from 'lucide-vue-next'
import { services } from '@/data/services'
import { plans, site } from '@/data/site'
import { phoneLink, whatsappLink } from '@/composables/useContact'
import { useSeo } from '@/composables/useSeo'
import WhatsAppIcon from '@/components/WhatsAppIcon.vue'

useSeo({
  title: 'Agendar visita médica',
  description: 'Agenda tu visita médica a domicilio en Manizales: elige el servicio, el día y la franja horaria. Confirmamos por WhatsApp.',
  path: '/agendar',
})

const patients = ['Niño o niña', 'Adulto', 'Adulto mayor'] as const
const slots = [
  { id: 'mañana', label: 'Mañana', hint: '6 a.m. – 12 m.' },
  { id: 'tarde', label: 'Tarde', hint: '12 m. – 6 p.m.' },
  { id: 'noche', label: 'Noche', hint: '6 p.m. – 12 a.m.' },
] as const

const form = reactive({
  service: services[0].slug,
  plan: '',
  name: '',
  patient: '' as (typeof patients)[number] | '',
  neighborhood: '',
  address: '',
  date: '',
  slot: '',
  reason: '',
})
const errors = ref<Record<string, string>>({})
const minDate = ref('')
const sent = ref(false)
const attempted = ref(false)

const route = useRoute()
onMounted(() => {
  // La consulta (?servicio=...) solo existe en el navegador; se aplica tras hidratar
  const s = String(route.query.servicio ?? '')
  if (services.some(x => x.slug === s)) form.service = s
  const p = String(route.query.plan ?? '')
  if (plans.some(x => x.id === p)) form.plan = p
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  minDate.value = d.toISOString().slice(0, 10)
})

const selectedService = computed(() => services.find(s => s.slug === form.service)!)
const selectedPlan = computed(() => plans.find(p => p.id === form.plan))

function validate() {
  const e: Record<string, string> = {}
  if (form.name.trim().length < 3) e.name = 'Escribe el nombre del paciente.'
  if (!form.patient) e.patient = 'Elige el tipo de paciente.'
  if (!form.neighborhood.trim()) e.neighborhood = 'Escribe el barrio.'
  if (form.address.trim().length < 5) e.address = 'Escribe la dirección completa.'
  if (!form.date) e.date = 'Elige una fecha.'
  else if (minDate.value && form.date < minDate.value) e.date = 'La fecha no puede ser anterior a hoy.'
  if (!form.slot) e.slot = 'Elige una franja horaria.'
  errors.value = e
  return Object.keys(e).length === 0
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('es-CO', { weekday: 'long', day: 'numeric', month: 'long' })
}

function buildMessage() {
  const lines = [
    'Hola, quiero agendar una visita con Tu Médico:',
    '',
    `• Servicio: ${selectedService.value.name}`,
    selectedPlan.value ? `• Plan: ${selectedPlan.value.name}` : '',
    `• Paciente: ${form.name.trim()} (${form.patient})`,
    `• Dirección: ${form.address.trim()}, barrio ${form.neighborhood.trim()}`,
    `• Fecha: ${formatDate(form.date)} · ${form.slot}`,
    form.reason.trim() ? `• Motivo: ${form.reason.trim()}` : '',
  ]
  return lines.filter((l, i) => l !== '' || i === 1).join('\n')
}

// Tras el primer intento, los errores se corrigen en vivo mientras se escribe
watch(form, () => attempted.value && validate())

function submit() {
  attempted.value = true
  if (!validate()) {
    const first = document.querySelector<HTMLElement>('[aria-invalid="true"]')
    first?.focus()
    return
  }
  window.open(whatsappLink(buildMessage()), '_blank', 'noopener')
  sent.value = true
}
</script>

<template>
  <section class="container-page grid gap-10 pt-10 pb-16 md:pt-16 lg:grid-cols-[1fr_1.35fr]">
    <div class="lg:sticky lg:top-28 lg:self-start">
      <p class="eyebrow">Visita programada</p>
      <h1 class="mt-3 text-4xl font-extrabold md:text-6xl">Agenda tu visita médica</h1>
      <p class="mt-5 text-lg text-muted">Llena estos datos en menos de un minuto. Al enviar, se abre WhatsApp con tu solicitud lista y te confirmamos el horario.</p>

      <div class="mt-8 rounded-xl border border-signal/25 bg-signal-50 p-6">
        <p class="flex items-center gap-2 font-display text-xl font-bold text-signal-600"><Zap class="size-5" aria-hidden="true" />¿Es urgente?</p>
        <p class="mt-2 text-ink/80">No llenes el formulario: pide tu médico ya y llegamos en 30 a 90 minutos.</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn-whatsapp !py-2.5"><WhatsAppIcon class="size-5" />WhatsApp</a>
          <a :href="phoneLink" class="btn-ghost !py-2.5">Llamar {{ site.phoneDisplay }}</a>
        </div>
      </div>
      <p class="mt-6 flex items-start gap-2 text-sm text-muted">
        <ShieldCheck class="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        Tus datos no se guardan en este sitio: solo se envían a nuestro WhatsApp cuando tú lo decides.
      </p>
    </div>

    <form class="card space-y-7 p-6 md:p-9" novalidate @submit.prevent="submit">
      <div>
        <label for="service" class="mb-2 block font-semibold">Servicio</label>
        <select id="service" v-model="form.service" class="field">
          <option v-for="s in services" :key="s.slug" :value="s.slug">{{ s.name }}</option>
        </select>
        <p v-if="selectedPlan" class="mt-2 text-sm text-brand">Plan de interés: <strong>{{ selectedPlan.name }}</strong></p>
      </div>

      <div class="grid gap-5 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label for="name" class="mb-2 block font-semibold">Nombre del paciente</label>
          <input id="name" v-model="form.name" class="field" autocomplete="name" :aria-invalid="!!errors.name" aria-describedby="name-err" />
          <p v-if="errors.name" id="name-err" class="mt-1.5 text-sm text-signal-600">{{ errors.name }}</p>
        </div>
      </div>

      <fieldset>
        <legend class="mb-2 font-semibold">El paciente es</legend>
        <div class="grid grid-cols-3 gap-2">
          <label v-for="p in patients" :key="p" class="press cursor-pointer">
            <input v-model="form.patient" type="radio" name="patient" :value="p" class="peer sr-only" :aria-invalid="!!errors.patient" />
            <span class="block rounded-lg border-2 border-ink/15 bg-white px-2 py-3 text-center font-medium transition peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-brand/25">{{ p }}</span>
          </label>
        </div>
        <p v-if="errors.patient" class="mt-1.5 text-sm text-signal-600">{{ errors.patient }}</p>
      </fieldset>

      <div class="grid gap-5 sm:grid-cols-[1fr_1.6fr]">
        <div>
          <label for="neighborhood" class="mb-2 block font-semibold">Barrio</label>
          <input id="neighborhood" v-model="form.neighborhood" class="field" placeholder="Ej. Palermo" :aria-invalid="!!errors.neighborhood" aria-describedby="nb-err" />
          <p v-if="errors.neighborhood" id="nb-err" class="mt-1.5 text-sm text-signal-600">{{ errors.neighborhood }}</p>
        </div>
        <div>
          <label for="address" class="mb-2 block font-semibold">Dirección</label>
          <input id="address" v-model="form.address" class="field" autocomplete="street-address" placeholder="Calle, número, apto" :aria-invalid="!!errors.address" aria-describedby="addr-err" />
          <p v-if="errors.address" id="addr-err" class="mt-1.5 text-sm text-signal-600">{{ errors.address }}</p>
        </div>
      </div>

      <div>
        <label for="date" class="mb-2 block font-semibold">Fecha</label>
        <input id="date" v-model="form.date" type="date" :min="minDate || undefined" class="field sm:max-w-xs" :aria-invalid="!!errors.date" aria-describedby="date-err" />
        <p v-if="errors.date" id="date-err" class="mt-1.5 text-sm text-signal-600">{{ errors.date }}</p>
      </div>

      <fieldset>
        <legend class="mb-2 font-semibold">Franja horaria</legend>
        <div class="grid grid-cols-3 gap-2">
          <label v-for="s in slots" :key="s.id" class="press cursor-pointer">
            <input v-model="form.slot" type="radio" name="slot" :value="s.id" class="peer sr-only" :aria-invalid="!!errors.slot" />
            <span class="block rounded-lg border-2 border-ink/15 bg-white px-2 py-3 text-center transition peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-brand/25">
              <span class="block font-semibold">{{ s.label }}</span>
              <span class="block text-xs opacity-75">{{ s.hint }}</span>
            </span>
          </label>
        </div>
        <p v-if="errors.slot" class="mt-1.5 text-sm text-signal-600">{{ errors.slot }}</p>
      </fieldset>

      <div>
        <label for="reason" class="mb-2 block font-semibold">Motivo de la visita <span class="font-normal text-muted">(opcional)</span></label>
        <textarea id="reason" v-model="form.reason" rows="3" class="field" placeholder="Cuéntanos brevemente los síntomas o lo que necesitas" />
      </div>

      <button type="submit" class="btn-whatsapp w-full py-4 text-lg">
        <Send class="size-5" aria-hidden="true" />
        Enviar solicitud por WhatsApp
      </button>
      <p v-if="sent" role="status" class="rounded-xl bg-calm-50 px-4 py-3 text-calm">
        ¡Listo! Abrimos WhatsApp con tu solicitud. Si no se abrió, <a :href="whatsappLink(buildMessage())" target="_blank" rel="noopener" class="font-semibold underline">toca aquí</a>.
      </p>
    </form>
  </section>
</template>
