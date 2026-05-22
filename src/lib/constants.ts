// ============================================
// DATOS DE LA BODA - EDITAR AQUÍ
// ============================================

export const WEDDING_DATA = {
  // Nombres de los novios
  groom: 'José María',
  bride: 'María',
  
  // Fecha y hora del evento
  date: new Date('2026-11-28T12:30:00'),
  dateFormatted: '28 de noviembre de 2026',
  dateShort: '28/11/2026',
  
  // Ceremonia
  ceremony: {
    name: 'Monasterio del Soto de Iruz',
    time: '12:30h',
    address: 'Soto de Iruz, Santander, Cantabria',
    mapsUrl: 'https://maps.app.goo.gl/2tU97ny3DvFDE68x5',
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
    iban: 'ES83 2100 2288 1001 0053 1296',
    holder: 'José María Jiménez Ríos',
    concept: 'Boda María y José María',
    weddingListNote: 'Lista de bodas: a partir de julio la iremos poniendo',
  },
  
  // Fecha límite RSVP
  rsvpDeadline: '15 de septiembre de 2026',
  
  // Google Form RSVP (iframe + enlace para abrir en pestaña nueva)
  googleFormUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSdkKz7ufuX2jWQfeftRlhGfctXkzoDB1XvdRdz4dK88-2uxeA/viewform?embedded=true',
  googleFormOpenUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSdkKz7ufuX2jWQfeftRlhGfctXkzoDB1XvdRdz4dK88-2uxeA/viewform',
  
  // Hashtag de la boda
  hashtag: '#MaríaYJoseMaríaNov2026',
  
  // Redes sociales (opcional)
  instagram: '',
  
  // Mensaje de bienvenida
  welcomeMessage: 'Nos hace mucha ilusión compartir con vosotros uno de los días más importantes de nuestra vida.',
}

// Enlaces de reserva (27–29 nov 2026, fin de semana de la boda)
const BOOKING_DATES =
  'checkin=2026-11-27&checkout=2026-11-29&group_adults=2&no_rooms=1&group_children=0'

// Hoteles recomendados
export const HOTELS = [
  {
    name: 'Abba Santander',
    stars: 3,
    url: `https://www.booking.com/hotel/es/abba-santander.html?${BOOKING_DATES}`,
  },
  {
    name: 'Gran Hotel Victoria',
    stars: 4,
    url: 'https://www.booking.com/hotel/es/gran-victoria.es.html?label=central-plaza-MgrONhVN6kFc8bijPDAorwS389146671494%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-585076439213%3Alp9213903%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcGt_tphEo8pawEozW2KQ80&sid=238c975ca72fe38cfc7f84f9b11dae02&aid=311090&ucfs=1&checkin=2026-11-27&checkout=2026-11-29&group_adults=2&no_rooms=1&group_children=0&srpvid=7c17a135537e0127&srepoch=1779404282&matching_block_id=9239301_409460319_2_42_0_388622&atlas_src=hp_iw_btn',
  },
  {
    name: 'Hotel Palacio del Mar',
    stars: 4,
    url: 'https://www.booking.com/hotel/es/palaciodelmar.es.html?aid=311090&label=central-plaza-MgrONhVN6kFc8bijPDAorwS389146671494%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-585076439213%3Alp9213903%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcGt_tphEo8pawEozW2KQ80&sid=238c975ca72fe38cfc7f84f9b11dae02&all_sr_blocks=9018401_88181433_0_34_0&checkin=2026-11-27&checkout=2026-11-29&dest_id=-401949&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=7&highlighted_blocks=9018401_88181433_0_34_0&hpos=7&matching_block_id=9018401_88181433_0_34_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=9018401_88181433_0_34_0__16764&srepoch=1779404361&srpvid=5ddea103c44001c3&type=total&ucfs=1&',
  },
  {
    name: 'Dorma Coliseum',
    stars: 4,
    url: 'https://www.online-reservations.com/?hotelid=91155&gacc=gmcc&gad_source=1&gad_campaignid=20870933251&gbraid=0AAAAACsYb7ne4KrZ7yCflEAdPH8VFdMMD&gclid=CjwKCAjw2rrQBhBuEiwAarLWHVom7B79TEewOWITzNsOVvezhcLohLFk_ZDZDcw-Qf-X3o4rHbO7YhoCnysQAvD_BwE',
  },
  {
    name: 'Hotel Bahía Santander',
    stars: 4,
    url: 'https://www.hotelbahiasantander.com/?gad_source=1&gad_campaignid=8844383898&gbraid=0AAAAACg8VhMYzdwhTWuwaPulrIpgHr3-n&gclid=Cj0KCQjw_b_QBhCSARIsAP6hR4c4C_qCuiN26mTWosBNCJpGZdPSXP5zaj6ymgK49FVU_IyhjW840IIaAlwjEALw_wcB',
  },
  {
    name: 'Hotel Sardinero',
    stars: 5,
    url: 'https://www.hotelsardinero.es/?gad_source=1&gad_campaignid=8861319502&gbraid=0AAAAACg8VhMvNwD-hveFvFk51JjQxZ23o&gclid=Cj0KCQjw_b_QBhCSARIsAP6hR4djNVH9mg8D0vEES72jDNcPir_crUGpw30q03lQhXUXWhmxVBqd0wkaAnFdEALw_wcB',
  },
  {
    name: 'Hotel Chiqui',
    stars: 4,
    url: 'https://www.hotelchiqui.com/es/?utm_source=google&utm_medium=organic&utm_campaign=Google_My_Business',
  },
]

// Apartamentos recomendados
export const APARTMENTS = [
  {
    name: 'Apartamentos Art Suite Santander',
    url: 'https://www.booking.com/hotel/es/central-plaza.es.html?aid=311090&label=central-plaza-MgrONhVN6kFc8bijPDAorwS389146671494%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-585076439213%3Alp9213903%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcGt_tphEo8pawEozW2KQ80&sid=238c975ca72fe38cfc7f84f9b11dae02&all_sr_blocks=191498705_373149017_2_0_0&checkin=2026-11-27&checkout=2026-11-29&dest_id=-401949&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=191498705_373149017_2_0_0&hpos=1&matching_block_id=191498705_373149017_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=191498705_373149017_2_0_0__19000&srepoch=1779404078&srpvid=5ddea103c44001c3&type=total&ucfs=1&',
  },
]
