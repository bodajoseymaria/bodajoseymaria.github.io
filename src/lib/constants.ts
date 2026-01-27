// ============================================
// DATOS DE LA BODA - EDITAR AQUÍ
// ============================================

export const WEDDING_DATA = {
  // Nombres de los novios
  groom: 'Jose María',
  bride: 'María',
  
  // Fecha y hora del evento
  date: new Date('2026-11-28T12:30:00'),
  dateFormatted: '28 de noviembre de 2026',
  dateShort: '28/11/2026',
  
  // Ceremonia
  ceremony: {
    name: 'Convento de San Francisco de El Soto',
    time: '12:30h',
    address: 'El Soto, Santander, Cantabria',
    mapsUrl: 'https://maps.app.goo.gl/gDRJcEwjq5ytYLQM6',
    // Para embeber el mapa, obtén el embed URL de Google Maps
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.1234567890!2d-3.1234567!3d43.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA3JzI0LjQiTiAzwrAwNyczMi40Ilc!5e0!3m2!1ses!2ses!4v1234567890',
  },
  
  // Celebración
  reception: {
    name: 'Finca de San Juan Hostería & Catering',
    time: '14:30h',
    address: 'Santander, Cantabria',
    mapsUrl: 'https://maps.app.goo.gl/hpw45ooQsqyp4wt26',
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.1234567890!2d-3.1234567!3d43.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA3JzI0LjQiTiAzwrAwNyczMi40Ilc!5e0!3m2!1ses!2ses!4v1234567890',
  },
  
  // Datos para regalos
  gifts: {
    iban: 'ES00 0000 0000 0000 0000',
    holder: 'María y Jose María',
    concept: 'Boda María y Jose María',
  },
  
  // Fecha límite RSVP
  rsvpDeadline: '15 de septiembre de 2026',
  
  // URL del Google Form para RSVP
  // Cómo obtenerla: Google Forms > Enviar > Icono <> > Copiar URL del src del iframe
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSewY6ykK7vssQ1nYDmCI7H1pyzEBQij4oVdi2jiaka9uxq7EA/viewform?embedded=true',
  
  // Hashtag de la boda
  hashtag: '#MaríaYJoseMaríaNov2026',
  
  // Redes sociales (opcional)
  instagram: '',
  
  // Mensaje de bienvenida
  welcomeMessage: 'Nos hace mucha ilusión compartir con vosotros uno de los días más importantes de nuestra vida.',
}

// Hoteles recomendados
// Nota: Las rutas de imágenes se corrigen en los componentes que las usan
export const HOTELS = [
  {
    name: 'Hotel Bahía Santander',
    stars: 4,
    url: 'https://www.hotelbahiasantander.com',
    image: 'images/hotels/bahia.jpg',
  },
  {
    name: 'Hotel Santemar',
    stars: 4,
    url: 'https://www.hotelsantemar.com',
    image: 'images/hotels/santemar.jpg',
  },
  {
    name: 'Hotel Silken Coliseum',
    stars: 4,
    url: 'https://www.hoteles-silken.com/hotel-coliseum-santander',
    image: 'images/hotels/silken.jpg',
  },
  {
    name: 'Gran Hotel Sardinero',
    stars: 5,
    url: 'https://www.hotelsardinero.es/',
    image: 'images/hotels/sardinero.jpg',
  },
]

// Apartamentos recomendados
export const APARTMENTS = [
  {
    name: 'Apartamentos Santander Central',
    url: 'https://www.booking.com/apartments/city/es/santander.en-gb.html',
  },
  {
    name: 'Zona del Sardinero',
    url: 'https://www.booking.com/apartments/city/es/santander.en-gb.html?ss=Sardinero',
  },
  {
    name: 'Airbnb Santander Centro',
    url: 'https://www.airbnb.es/santander-spain/stays/apartments',
  },
]
