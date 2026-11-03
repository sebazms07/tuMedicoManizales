import { useHead } from '@unhead/vue'
import { site } from '@/data/site'

export function useSeo(opts: { title?: string; description: string; path: string; jsonLd?: object }) {
  const url = `${site.url}${opts.path === '/' ? '/' : `${opts.path}/`}` // GitHub Pages sirve /ruta/
  const fullTitle = opts.title ? `${opts.title} | ${site.name}` : `${site.name} · Médico a domicilio 24/7`
  useHead({
    title: opts.title,
    link: [{ rel: 'canonical', href: url }],
    meta: [
      { name: 'description', content: opts.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'es_CO' },
      { property: 'og:site_name', content: site.name },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: opts.description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: `${site.url}/img/og.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    script: opts.jsonLd
      ? [{ type: 'application/ld+json', innerHTML: JSON.stringify(opts.jsonLd) }]
      : [],
  })
}

export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: site.name,
  url: site.url,
  telephone: site.phoneE164,
  image: `${site.url}/img/logo.png`,
  medicalSpecialty: 'PrimaryCare',
  areaServed: { '@type': 'City', name: site.city },
  address: { '@type': 'PostalAddress', addressLocality: site.city, addressRegion: site.region, addressCountry: 'CO' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
}
