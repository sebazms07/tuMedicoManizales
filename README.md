# Tu Médico Manizales

Sitio web de **Tu Médico** (médico a domicilio 24/7 en Manizales), hecho con Vue 3, Vite, Tailwind CSS y vite-ssg (cada página se genera como HTML estático para un buen SEO). Se publica en GitHub Pages.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/ (HTML por página, 404.html y sitemap.xml)
npm run preview  # sirve dist/ localmente
```

## Editar contenido

Todo el contenido está en `src/data/`:

| Archivo | Qué contiene |
| --- | --- |
| `src/data/site.ts` | Teléfono, WhatsApp, horario, cifras, tiempos de triage, testimonios, aliados y planes |
| `src/data/services.ts` | Los servicios: textos, imagen, beneficios, preguntas frecuentes, mensaje de WhatsApp y SEO |

Las imágenes están en `public/img/`. Los documentos legales se agregan como PDF en `public/docs/` y se listan en `src/pages/LegalPage.vue`.

## Cómo se contrata

- **Urgente:** botones de WhatsApp (con mensaje prellenado) y llamada, siempre visibles (barra fija en móvil).
- **Programada:** `/agendar` valida el formulario y abre WhatsApp con la solicitud lista. No hay servidor ni base de datos.
  Los servicios y planes enlazan con `/agendar?servicio=<slug>&plan=<id>`.

## Publicar en GitHub Pages

1. Sube el repositorio a GitHub (rama `main`).
2. En **Settings → Pages**, elige **Source: GitHub Actions**. El workflow `.github/workflows/deploy.yml` construye y publica con cada push.
3. Dominio propio: `public/CNAME` contiene `tumedicomanizales.com`. En el DNS crea registros `A` hacia las IP de GitHub Pages (185.199.108.153, .109.153, .110.153, .111.153) y un `CNAME` de `www` hacia `<usuario>.github.io`.
4. Si publicas sin dominio, en `usuario.github.io/<repo>`, borra `public/CNAME` y cambia el paso de build a `BASE_PATH=/<repo>/ npm run build`.
