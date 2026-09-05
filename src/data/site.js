export const LINKS = {
  bookMijas: 'https://cal.com/sauhalla/sauna-cold-tub',
  bookCordoba: 'https://cal.com/sauhalla-cordoba/sauna-cold-tub?overlayCalendar=true',
  pack5: 'https://buy.stripe.com/aFa00l98C12bfGcf7gdwc02',
  pack10: 'https://buy.stripe.com/4gMaEZ1GadOX9hO1gqdwc03',
  sales: 'https://sauhalla-sales.framer.media/',
  instagram: 'https://www.instagram.com/sauhalla/',
  mapMijas: 'https://maps.app.goo.gl/gYAB1XutmZ4dBzKU8',
  mapCordoba: 'https://maps.app.goo.gl/LJ6LByd4jHQ4GsNp9',
  mapOffice: 'https://maps.app.goo.gl/oZ6DYGhnmF9hXCqE7',
  email: 'info@sauhalla.com',
};

export const NAV_ITEMS = [
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Ubicación', href: '#location' },
  { label: 'Precios', href: '#precios' },
  { label: 'Leasing empresas', href: '#leasing' },
  { label: 'Venta saunas', href: '#venta' },
  { label: 'Contacto', href: '#contacto' },
];

export const PLANS = [
  {
    id: 'single',
    title: 'Sesión única',
    price: '40€',
    note: 'Grupo de hasta 4 personas',
    cta: { label: 'Reservar', href: LINKS.bookMijas },
  },
  {
    id: 'pack5',
    title: 'Bono 5 sesiones',
    price: '175€',
    note: '35€ por sesión',
    featured: true,
    badge: 'Más elegido',
    cta: { label: 'Reservar', href: LINKS.pack5 },
  },
  {
    id: 'pack10',
    title: 'Bono 10 sesiones',
    price: '250€',
    note: '25€ por sesión',
    cta: { label: 'Reservar', href: LINKS.pack10 },
  },
  {
    id: 'gift',
    title: 'Bonos regalo',
    price: 'Consultar',
    note: 'Escríbenos y lo preparamos',
    cta: { label: 'Contactar', href: `mailto:${LINKS.email}` },
  },
];

export const BENEFITS = [
  'Sudoración profunda que apoya la depuración natural',
  'Menos tensión muscular tras el esfuerzo',
  'Activa la respuesta de relajación del cuerpo',
  'Calma y cabeza despejada al terminar',
  'Hábito asociado a mejor salud cardiovascular',
];

export const SAUNAS = [
  {
    id: 'skald-2',
    name: 'Skald 2',
    price: '8.999€',
    oldPrice: '9.500€',
    capacity: '2–3 personas',
    area: '2,5 m²',
  },
  {
    id: 'drakkar-4',
    name: 'Drakkar 4',
    price: '10.999€',
    capacity: '4–6 personas',
    area: '5,08 m²',
    featured: true,
  },
  {
    id: 'asgard-6',
    name: 'Asgard 6',
    price: '13.999€',
    oldPrice: '14.500€',
    capacity: '6–8 personas',
    area: '7,32 m²',
  },
];

export const SAUNA_INCLUDES = [
  'Estufa Harvia, eléctrica o de leña',
  'Instalación profesional incluida',
  'Tratamiento de la madera (térmico, protección UV o acabado carbón)',
  'Accesorios: cubo, cazo, termómetro y temporizador',
  'Compatible con 230V monofásico y 400V trifásico',
];

export const TUBS = [
  { id: 'nord-s', name: 'Nord S', price: '550€', capacity: '1 persona', volume: '464 L' },
  { id: 'nord-m', name: 'Nord M', price: '675€', capacity: '2 personas', volume: '595 L' },
];
