import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Navigation } from 'lucide-react'
import { WEDDING_DATA } from '@/lib/constants'

export default function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const BASE_URL = import.meta.env.BASE_URL
  
  const locations = [
    {
      title: 'Ceremonia',
      ...WEDDING_DATA.ceremony,
      image: `${BASE_URL}images/convento.webp`,
    },
    {
      title: 'Celebración',
      ...WEDDING_DATA.reception,
      image: `${BASE_URL}images/finca.webp`,
    },
  ]
  
  return (
    <section id="ubicacion" className="section bg-white" ref={ref}>
      <div className="container-wedding">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Cómo Llegar
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="section-subtitle"
        >
          Ubicaciones
        </motion.p>
        
        {/* Mapas */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {locations.map((location, index) => (
            <motion.div
              key={location.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="card p-0 overflow-hidden"
            >
              {/* Imagen del lugar */}
              <div className="aspect-video bg-charcoal/5 relative overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Info */}
              <div className="p-6 md:p-8">
                <p className="font-sans text-xs tracking-[0.2em] text-primary uppercase mb-2">
                  {location.title}
                </p>
                <h3 className="font-display text-xl md:text-2xl text-charcoal mb-2">
                  {location.name}
                </h3>
                <p className="font-body text-sm text-charcoal/60 mb-4">
                  {location.address}
                </p>
                
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-secondary text-xs py-3 px-6"
                >
                  <Navigation size={14} />
                  <span>Abrir en Maps</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
