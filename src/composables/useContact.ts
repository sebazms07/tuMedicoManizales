import { site } from '@/data/site'

export const DEFAULT_MESSAGE = 'Hola, necesito un médico a domicilio en Manizales.'

export function whatsappLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export const phoneLink = `tel:${site.phoneE164}`

// Rutas de archivos en /public respetando la base (útil si se publica en usuario.github.io/repo)
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
