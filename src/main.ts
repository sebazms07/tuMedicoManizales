import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './routes'
import './assets/main.css'

export const createApp = ViteSSG(App, {
  routes,
  base: import.meta.env.BASE_URL,
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 88 }
    return { top: 0 }
  },
})
