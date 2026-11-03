<script setup lang="ts">
import { Stethoscope, BriefcaseMedical, HeartPulse, Bandage, Scale, FileText } from 'lucide-vue-next'
import type { IconName } from '@/data/services'

defineProps<{ name: IconName }>()
const icons = {
  stethoscope: Stethoscope,
  briefcase: BriefcaseMedical,
  heartPulse: HeartPulse,
  bandage: Bandage,
  scale: Scale,
  fileText: FileText,
}
</script>

<template>
  <component :is="icons[name]" aria-hidden="true" />
</template>
