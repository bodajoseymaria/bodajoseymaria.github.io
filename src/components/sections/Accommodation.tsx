import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Hotel, Home, Star, ExternalLink } from 'lucide-react'
import { HOTELS, APARTMENTS } from '@/lib/constants'

export default function Accommodation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section id="alojamiento" className="section bg-cream-dark" ref={ref}>
      <div className="container-wedding">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Alojamiento
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="section-subtitle"
        >
          Para quienes venís de fuera
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center font-body text-charcoal/70 max-w-xl mx-auto mb-12"
        >
          Os dejamos algunas opciones de alojamiento cercanas al lugar de la celebración.
        </motion.p>
        
        {/* Hoteles */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Hotel size={24} className="text-primary" />
            <h3 className="font-display text-2xl text-charcoal">Hoteles</h3>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOTELS.map((hotel, index) => (
              <motion.a
                key={hotel.name}
                href={hotel.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="card group cursor-pointer hover:shadow-md transition-all duration-300"
              >
                {/* Estrellas */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: hotel.stars }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={12} 
                      className="text-gold fill-gold" 
                    />
                  ))}
                </div>
                
                {/* Nombre */}
                <h4 className="font-display text-lg text-charcoal group-hover:text-primary transition-colors mb-2">
                  {hotel.name}
                </h4>
                
                {/* Enlace */}
                <span className="inline-flex items-center gap-1 font-sans text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver hotel <ExternalLink size={10} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Apartamentos */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Home size={24} className="text-primary" />
            <h3 className="font-display text-2xl text-charcoal">Apartamentos</h3>
          </motion.div>
          
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {APARTMENTS.map((apt, index) => (
              <motion.a
                key={apt.name}
                href={apt.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -2 }}
                className="card py-6 text-center group hover:shadow-md transition-all duration-300"
              >
                <h4 className="font-sans text-sm text-charcoal group-hover:text-primary transition-colors">
                  {apt.name}
                </h4>
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Nota */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center font-body text-sm text-charcoal/50 italic mt-12"
        >
          💡 Recomendamos reservar con antelación
        </motion.p>
      </div>
    </section>
  )
}
