// Tras el build: 404.html para GitHub Pages y sitemap.xml con todas las páginas generadas
import { copyFileSync, existsSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = new URL('../dist/', import.meta.url).pathname
const siteUrl = 'https://tumedicomanizales.com'

if (existsSync(join(dist, '404/index.html'))) copyFileSync(join(dist, '404/index.html'), join(dist, '404.html'))

const pages = []
const walk = dir => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f)
    if (statSync(p).isDirectory()) walk(p)
    else if (f === 'index.html') pages.push('/' + p.slice(dist.length).replace(/index\.html$/, ''))
  }
}
walk(dist)

const urls = pages
  .filter(p => p !== '/404/')
  .sort()
  .map(p => `  <url><loc>${siteUrl}${p}</loc></url>`)
  .join('\n')
writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
console.log(`postbuild: 404.html y sitemap.xml (${pages.length - 1} páginas)`)
