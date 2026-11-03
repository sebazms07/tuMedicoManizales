import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('./pages/HomePage.vue') },
  { path: '/servicios', name: 'services', component: () => import('./pages/ServicesPage.vue') },
  { path: '/servicios/:slug', name: 'service', component: () => import('./pages/ServicePage.vue') },
  { path: '/agendar', name: 'booking', component: () => import('./pages/BookingPage.vue') },
  { path: '/planes', name: 'plans', component: () => import('./pages/PlansPage.vue') },
  { path: '/nosotros', name: 'about', component: () => import('./pages/AboutPage.vue') },
  { path: '/contacto', name: 'contact', component: () => import('./pages/ContactPage.vue') },
  { path: '/documentos-legales', name: 'legal', component: () => import('./pages/LegalPage.vue') },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('./pages/NotFoundPage.vue') },
]
