import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Base URL para las imágenes (maneja el base path de Vite)
const BASE_URL = import.meta.env.BASE_URL

// Lista de imágenes disponibles
const images = [
  `${BASE_URL}images/1.jpeg`,
  `${BASE_URL}images/2.jpeg`,
  `${BASE_URL}images/3.jpeg`,
  `${BASE_URL}images/4.jpeg`,
  `${BASE_URL}images/5.jpeg`,
  `${BASE_URL}images/6.jpeg`,
  `${BASE_URL}images/7.jpeg`,
  `${BASE_URL}images/8.jpeg`,
  `${BASE_URL}images/9.jpeg`,
  `${BASE_URL}images/10.jpeg`,
  `${BASE_URL}images/11.jpeg`,
  `${BASE_URL}images/12.jpeg`,
  `${BASE_URL}images/13.jpeg`,
  `${BASE_URL}images/14.jpeg`,
  `${BASE_URL}images/15.jpeg`,
  `${BASE_URL}images/17.jpeg`,
  `${BASE_URL}images/18.jpeg`,
  `${BASE_URL}images/19.jpeg`,
  `${BASE_URL}images/20.jpeg`,
  `${BASE_URL}images/22.jpeg`,
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  // Obtener el índice de la imagen seleccionada
  const getCurrentImageIndex = (image: string) => {
    return images.findIndex(img => img === image)
  }

  // Navegar a la imagen anterior
  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? images.length - 1 : prev - 1
      setSelectedImage(images[newIndex])
      return newIndex
    })
  }

  // Navegar a la imagen siguiente
  const goToNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === images.length - 1 ? 0 : prev + 1
      setSelectedImage(images[newIndex])
      return newIndex
    })
  }

  // Manejar cuando se selecciona una imagen
  const handleImageClick = (image: string) => {
    const index = getCurrentImageIndex(image)
    setCurrentIndex(index)
    setSelectedImage(image)
  }

  // Manejar teclado (flechas izquierda/derecha)
  useEffect(() => {
    if (!selectedImage) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setCurrentIndex((prev) => {
          const newIndex = prev === 0 ? images.length - 1 : prev - 1
          setSelectedImage(images[newIndex])
          return newIndex
        })
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        setCurrentIndex((prev) => {
          const newIndex = prev === images.length - 1 ? 0 : prev + 1
          setSelectedImage(images[newIndex])
          return newIndex
        })
      } else if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <>
      <section id="galeria" className="section bg-cream" ref={ref}>
        <div className="container-wedding">
          {/* Ornamento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8 text-center"
          >
            <svg 
              className="w-24 h-auto mx-auto text-primary/30" 
              viewBox="0 0 100 40" 
              fill="currentColor"
            >
              <path d="M50 0 C30 0 20 20 0 20 C20 20 30 40 50 40 C70 40 80 20 100 20 C80 20 70 0 50 0" />
            </svg>
          </motion.div>
          
          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-title text-center"
          >
            Nuestra Galería
          </motion.h2>
          
          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="section-subtitle text-center mb-12"
          >
            Momentos especiales
          </motion.p>
          
          {/* Grid de imágenes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-7xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón anterior */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-200 hover:scale-110"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Imagen */}
            <img
              src={selectedImage}
              alt={`Imagen ${currentIndex + 1} de ${images.length}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg mx-auto"
            />

            {/* Botón siguiente */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-200 hover:scale-110"
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={24} />
            </button>

            {/* Botón cerrar */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              aria-label="Cerrar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Contador de imágenes */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
