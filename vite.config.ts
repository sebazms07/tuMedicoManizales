import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { services } from './src/data/services'

export default defineConfig({
  // Con dominio propio (CNAME) la base es '/'. Para publicar en usuario.github.io/repo usa BASE_PATH=/repo/
  base: process.env.BASE_PATH ?? '/',
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  ssgOptions: {
    dirStyle: 'nested',
    formatting: 'minify',
    includedRoutes(paths) {
      return paths
        .filter(p => !p.includes(':'))
        .concat(services.map(s => `/servicios/${s.slug}`), ['/404'])
    },
  },
})
