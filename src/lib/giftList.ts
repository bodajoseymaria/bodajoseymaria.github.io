// ============================================
// LISTA DE BODA - EDITAR AQUÍ
// Para añadir o quitar artículos, edita este array.
// Las imágenes están en public/images/gifts/
// ============================================

export interface GiftItem {
  id: string
  name: string
  image: string
  url: string
  // true cuando alguien ya ha avisado por WhatsApp de que lo regala
  reserved?: boolean
}

export const GIFT_LIST: GiftItem[] = [
  {
    id: 'consola',
    name: 'Consola de doble tablero de pino',
    image: '/images/gifts/consola.jpg',
    url: 'https://www.laredoute.es/ppdp/prod-350271911.aspx',
  },
  {
    id: 'aparador',
    name: 'Aparador en madera color natural',
    image: '/images/gifts/aparador.jpg',
    url: 'https://klasthome.com/es/aparadores/1981-aparador-en-madera-color-natural',
  },
  {
    id: 'mesa-centro',
    name: 'Mesa de centro de teca maciza 100 cm',
    image: '/images/gifts/mesa-centro.jpg',
    url: 'https://www.berahgetah.es/products/mesa-de-centro-de-cristal-y-teca-100-cm',
  },
  {
    id: 'comoda',
    name: 'Cómoda de 3 cajones en madera color natural',
    image: '/images/gifts/comoda.jpg',
    url: 'https://klasthome.com/es/comodas-infantiles-juveniles/4152-comoda-de-3-cajones-en-madera-color-natural',
  },
  {
    id: 'cabecero',
    name: 'Cabecero rústico pino natural',
    image: '/images/gifts/cabecero.jpg',
    url: 'https://mueblesbaena.com/producto/cabecero-rustico-pino-natural-varias-medidas/',
  },
]
