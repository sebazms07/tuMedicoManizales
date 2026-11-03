export type IconName = 'stethoscope' | 'briefcase' | 'heartPulse' | 'bandage' | 'scale' | 'fileText'

export interface Service {
  slug: string
  name: string
  short: string
  description: string
  image: string
  icon: IconName
  available24h: boolean
  highlights: string[]
  faqs: { q: string; a: string }[]
  whatsappMessage: string
  seoTitle: string
  seoDescription: string
}

export const services: Service[] = [
  {
    slug: 'medico-a-domicilio',
    name: 'Médico a domicilio 24/7',
    short: 'Un médico en tu casa en 30 a 90 minutos, a cualquier hora.',
    description:
      'Estamos disponibles las 24 horas para darte la mejor atención médica sin salir de casa: niños, adultos y adultos mayores. Evita las filas de urgencias y la espera de una cita con tu EPS.',
    image: 'img/servicios/medico-domicilio.jpg',
    icon: 'stethoscope',
    available24h: true,
    highlights: [
      'Llegamos en 30, 60 o 90 minutos según la gravedad (triage)',
      'Incluye la aplicación de medicamentos para manejar la urgencia',
      'Atención pediátrica, de adultos y de adultos mayores',
      'Lunes a lunes, también festivos y de madrugada',
    ],
    faqs: [
      {
        q: '¿Cuánto tarda en llegar el médico?',
        a: 'Depende de los síntomas: 30 minutos para triage 2 (dolor en el pecho, desmayos, caídas), 60 minutos para triage 3 (fiebre, dolor moderado) y 90 minutos para triage 4 (dolor de garganta, virosis, diarrea).',
      },
      {
        q: '¿Atienden a niños y adultos mayores?',
        a: 'Sí. Nuestro equipo atiende población pediátrica, adultos y adultos mayores.',
      },
      {
        q: '¿Qué hago si es una emergencia vital?',
        a: 'Si la persona no respira, está inconsciente o tiene un sangrado que no para, llama de inmediato a la línea de emergencias 123.',
      },
    ],
    whatsappMessage: 'Hola, necesito un médico a domicilio en Manizales.',
    seoTitle: 'Médico a domicilio 24/7 en Manizales',
    seoDescription:
      'Médico a domicilio en Manizales las 24 horas. Llegamos en 30 a 90 minutos según tus síntomas. Pídelo por WhatsApp o llamada.',
  },
  {
    slug: 'salud-ocupacional',
    name: 'Exámenes de salud ocupacional',
    short: 'Ingreso, periódicos y egreso para tu empresa.',
    description:
      'Para tu empresa es obligatorio estar al día con las normas de salud ocupacional que exige el gobierno. Realizamos exámenes de ingreso, periódicos y de egreso para que evites sanciones (Resolución 0312 de 2019).',
    image: 'img/servicios/salud-ocupacional.jpg',
    icon: 'briefcase',
    available24h: false,
    highlights: [
      'Exámenes de ingreso, periódicos y de egreso',
      'Cumplimiento de la Resolución 0312 de 2019 (SG-SST)',
      'Programación según la agenda de tu empresa',
    ],
    faqs: [
      {
        q: '¿Pueden ir a las instalaciones de mi empresa?',
        a: 'Escríbenos con el número de trabajadores y la ubicación y te proponemos la mejor forma de programar los exámenes.',
      },
      {
        q: '¿Qué norma deben cumplir las empresas?',
        a: 'La Resolución 0312 de 2019 define los estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).',
      },
    ],
    whatsappMessage: 'Hola, quiero información sobre exámenes de salud ocupacional para mi empresa.',
    seoTitle: 'Exámenes de salud ocupacional en Manizales',
    seoDescription:
      'Exámenes médicos ocupacionales de ingreso, periódicos y egreso en Manizales. Cumple la Resolución 0312 de 2019 y evita sanciones.',
  },
  {
    slug: 'electrocardiograma',
    name: 'Electrocardiogramas',
    short: 'Revisa cómo está tu corazón sin salir de casa.',
    description:
      'Es muy importante saber cómo está tu corazón. Hazte un chequeo periódico con un electrocardiograma tomado por nuestro equipo.',
    image: 'img/servicios/electrocardiograma.jpg',
    icon: 'heartPulse',
    available24h: false,
    highlights: ['Toma del electrocardiograma a domicilio', 'Ideal para chequeos periódicos', 'Útil para adultos mayores y pacientes con factores de riesgo'],
    faqs: [
      {
        q: '¿Necesito una orden médica?',
        a: 'Escríbenos y te orientamos según tu caso. Si tienes síntomas como dolor en el pecho, pide de inmediato un médico a domicilio.',
      },
    ],
    whatsappMessage: 'Hola, quiero agendar un electrocardiograma.',
    seoTitle: 'Electrocardiograma a domicilio en Manizales',
    seoDescription: 'Electrocardiograma a domicilio en Manizales. Conoce cómo está tu corazón con un chequeo periódico sin salir de casa.',
  },
  {
    slug: 'curaciones',
    name: 'Curación de heridas y escaras',
    short: 'Manejo de heridas de baja y alta complejidad.',
    description:
      'Contamos con sistemas avanzados para manejar heridas y escaras complicadas, con las mejores tasas de curación. Atendemos al paciente en casa para evitar traslados.',
    image: 'img/servicios/curaciones.jpg',
    icon: 'bandage',
    available24h: false,
    highlights: [
      'Heridas y escaras de baja y alta complejidad',
      'Sistemas avanzados de curación',
      'Seguimiento en casa, sin traslados del paciente',
    ],
    faqs: [
      {
        q: '¿Hacen seguimiento de la herida?',
        a: 'Sí. Programamos las curaciones que el paciente necesite y acompañamos a la familia durante el proceso.',
      },
    ],
    whatsappMessage: 'Hola, necesito el servicio de curación de heridas o escaras a domicilio.',
    seoTitle: 'Curación de heridas y escaras a domicilio en Manizales',
    seoDescription:
      'Curación de heridas y escaras de baja y alta complejidad a domicilio en Manizales, con sistemas avanzados y seguimiento en casa.',
  },
  {
    slug: 'responsabilidad-medica',
    name: 'Abogados en responsabilidad médica',
    short: 'Si sientes que se vulneró tu derecho a la salud.',
    description:
      'Contamos con un equipo de abogados especialistas en derecho médico que puede llevar tu caso: mala praxis, negligencia, impericia, tutelas y cualquier falla en el acto médico.',
    image: 'img/servicios/responsabilidad-medica.jpg',
    icon: 'scale',
    available24h: false,
    highlights: ['Casos de mala praxis, negligencia e impericia', 'Tutelas en salud', 'Abogados especialistas en derecho médico'],
    faqs: [
      {
        q: '¿Cómo empiezo?',
        a: 'Escríbenos con un resumen de tu caso y te contactamos para una primera orientación.',
      },
    ],
    whatsappMessage: 'Hola, quiero asesoría de un abogado en responsabilidad médica.',
    seoTitle: 'Abogados en responsabilidad médica en Manizales',
    seoDescription: 'Abogados especialistas en derecho médico en Manizales: mala praxis, negligencia, impericia y tutelas en salud.',
  },
  {
    slug: 'certificado-defuncion',
    name: 'Certificado de defunción a domicilio',
    short: 'Disponible las 24 horas, sin trámites extra.',
    description:
      'Si fallece un familiar o un amigo en casa, necesitas su certificado de defunción sin dar vueltas. Comunícate con nosotros a cualquier hora y lo expedimos a domicilio.',
    image: 'img/servicios/certificado-defuncion.jpg',
    icon: 'fileText',
    available24h: true,
    highlights: ['Atención las 24 horas', 'Un médico va hasta el domicilio', 'Te acompañamos con respeto en un momento difícil'],
    faqs: [
      {
        q: '¿Puedo pedirlo de madrugada?',
        a: 'Sí. El servicio funciona las 24 horas, todos los días.',
      },
    ],
    whatsappMessage: 'Hola, necesito un certificado de defunción a domicilio.',
    seoTitle: 'Certificado de defunción a domicilio 24 horas en Manizales',
    seoDescription: 'Certificado de defunción a domicilio en Manizales, las 24 horas. Comunícate con nosotros y un médico va hasta la casa.',
  },
]

export const getService = (slug: string) => services.find(s => s.slug === slug)
