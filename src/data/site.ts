// Fuente única de los datos de contacto y la marca. Edita aquí y se actualiza todo el sitio.
export const site = {
  name: 'Tu Médico Manizales',
  shortName: 'Tu Médico',
  tagline: 'Tu médico cuando lo necesitas',
  url: 'https://tumedicomanizales.com',
  city: 'Manizales',
  region: 'Caldas',
  country: 'Colombia',
  // Número en formato local para mostrar y en formato internacional para links
  phoneDisplay: '317 520 8417',
  phoneE164: '+573175208417',
  whatsapp: '573175208417',
  hours: 'Lunes a lunes, las 24 horas',
  emergencyLine: '123',
  legalEntity: 'FUNEG',
}

export const stats = [
  { value: '25+', label: 'años atendiendo hogares de Manizales' },
  { value: '2.150+', label: 'pacientes satisfechos' },
  { value: '850+', label: 'familias que confían en nosotros' },
  { value: '98%', label: 'de satisfacción global' },
]

export const triage = [
  {
    level: 'Triage 2',
    minutes: 30,
    tone: 'urgent',
    title: 'Síntomas que no dan espera',
    symptoms: ['Dolor en el pecho', 'Desmayos o lipotimias', 'Dolor intenso', 'Caídas', 'Pérdida de conocimiento'],
  },
  {
    level: 'Triage 3',
    minutes: 60,
    tone: 'warn',
    title: 'Malestar que preocupa',
    symptoms: ['Fiebre', 'Dolor moderado', 'Cólico abdominal', 'Dolor de cabeza'],
  },
  {
    level: 'Triage 4',
    minutes: 90,
    tone: 'calm',
    title: 'Consulta prioritaria',
    symptoms: ['Dolor de garganta', 'Dolor lumbar', 'Diarrea', 'Síntomas urinarios', 'Virosis', 'Gastritis'],
  },
] as const

export const values = [
  {
    title: 'Solo médicos con experiencia',
    text: 'Un equipo profesional y especializado en atención domiciliaria, incluida la población pediátrica y los adultos mayores.',
  },
  {
    title: 'Alta calidad reconocida',
    text: 'Las principales aseguradoras nos han dado durante años las calificaciones más altas entre las empresas de atención domiciliaria del país.',
  },
  {
    title: 'Sentido humano',
    text: 'Atendemos a tu familiar como si fuera nuestro. Acompañamos al paciente y a la familia de forma integral.',
  },
]

export const testimonials = [
  { name: 'Diego P.', city: 'Manizales', text: 'Felicitaciones, muy rápido y eficiente el servicio.' },
  { name: 'Claudia R.', city: 'Manizales', text: 'El diagnóstico y el tratamiento que me dieron fueron muy adecuados.' },
  { name: 'Ricardo L.', city: 'Manizales', text: 'El médico me atendió muy bien y fue muy efectivo.' },
]

export const partners = [
  { name: 'Home Care', logo: 'img/partners/homecare.jpg' },
  { name: 'Seguros Falabella', logo: 'img/partners/seguros-falabella.jpg' },
  { name: 'Farmacenter', logo: 'img/partners/farmacenter.jpg' },
  { name: 'CVM', logo: 'img/partners/cvm.jpg' },
]

export const plans = [
  {
    id: 'visita',
    name: 'Visita médica particular',
    summary: 'Pago único por visita, cuando la necesites.',
    features: ['Disponible 24/7', 'Incluye medicamentos para manejar la urgencia', 'Cubre a una persona'],
    cta: 'Pedir visita',
    service: 'medico-a-domicilio',
    featured: true,
  },
  {
    id: 'familiar',
    name: 'Plan consulta familiar',
    summary: 'Tu núcleo familiar cubierto durante todo el año.',
    features: ['Acceso a todos nuestros servicios', 'Varias opciones según tu familia', 'Atención prioritaria'],
    cta: 'Quiero información',
    service: 'medico-a-domicilio',
    featured: false,
  },
  {
    id: 'especialistas',
    name: 'Convenio con especialistas',
    summary: 'Médicos especialistas con descuentos para ti.',
    features: ['Amplio portafolio de especialistas', 'Excelentes descuentos', 'Te ayudamos a agendar'],
    cta: 'Quiero información',
    service: 'medico-a-domicilio',
    featured: false,
  },
]
