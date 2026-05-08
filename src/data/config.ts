export const config = {
  clinicName: "Instalaciones Sirga SL",
  cif: "B-81.933.251",
  analyticsId: "G-1234567890", // Placeholder para Google Analytics o similar
  heroStyle: "background", // Estilos: 'split', 'background', 'minimal', 'glass', 'interactive'
  headerStyle: "classic", // Estilos: 'classic', 'minimal', 'centered', 'pill'
  testimonialsStyle: "grid", // Estilos: 'grid', 'slider', 'bento'
  navigation: [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    { name: "Contacto", href: "/contacto" },
  ],
  description: "Instalaciones Sirga SL: Especialistas en instalaciones de climatización, mantenimiento 24/7 y soluciones industriales. Más de 20 años de experiencia en el sector.",
  contact: {
    phone: "91 341 55 26",
    email: "administracion@instalaciones-sirga.es",
    address: "C/ Puerto del escudo 12, Pol. Ind. Prado Overa, 28919 Leganés (Madrid)",
    city: "Leganés",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Instalaciones+Sirga+SL+Leganes"
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com"
  },
  schedule: [
    { day: "L - V", hours: "08:00 - 18:00", highlight: false },
    { day: "Sábado", hours: "Cerrado", highlight: true, closed: true },
    { day: "Domingo", hours: "Cerrado", highlight: true, closed: true }
  ],
  hero: {
    badge: "Más de 20 años de experiencia",
    title: "Instalaciones <span class=\"text-white\">SIRGA, SL</span>",
    description: "A la vanguardia de las nuevas tecnologías. Especialistas en instalaciones industriales, climatización y mantenimiento técnico.",
    image: "/images/hero.png"
  },
  services: [
    {
      title: "Instalaciones de Climatización",
      description: "Montaje de instalaciones de calefacción y climatización, cuartos de calderas, biomasa y reformas a todos los niveles.",
      icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>`
    },
    {
      title: "Mantenimiento 24/7",
      description: "Mantenimiento preventivo y correctivo para instalaciones de climatización, calefacción, a.c.s, gas y electricidad. Servicio continuo los 365 días del año.",
      icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`
    },
    {
      title: "Instalaciones Hidráulicas",
      description: "Ejecución de instalaciones de protección contra-incendios, gas, vapor, agua sobrecalentada y fontanería industrial o residencial.",
      icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>`
    }
  ],
  testimonials: []
};
