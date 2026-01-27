import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Church, PartyPopper, MapPin, Clock } from 'lucide-react'
import { WEDDING_DATA } from '@/lib/constants'

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const events = [
    {
      icon: Church,
      title: 'Ceremonia',
      time: WEDDING_DATA.ceremony.time,
      name: WEDDING_DATA.ceremony.name,
      address: WEDDING_DATA.ceremony.address,
      mapsUrl: WEDDING_DATA.ceremony.mapsUrl,
    },
    {
      icon: PartyPopper,
      title: 'Celebración',
      time: WEDDING_DATA.reception.time,
      name: WEDDING_DATA.reception.name,
      address: WEDDING_DATA.reception.address,
      mapsUrl: WEDDING_DATA.reception.mapsUrl,
    },
  ]
  
  return (
    <section id="dia" className="section bg-cream-dark" ref={ref}>
      <div className="container-wedding">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          El Gran Día
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="section-subtitle"
        >
          {WEDDING_DATA.dateFormatted}
        </motion.p>
        
        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto mt-16">
          {/* Línea central (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />
          
          {/* Eventos */}
          <div className="space-y-12 md:space-y-0">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className={`relative md:w-1/2 ${
                  index === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'
                }`}
              >
                {/* Punto en la línea (desktop) */}
                <div className={`hidden md:block absolute top-8 w-4 h-4 bg-primary rounded-full border-4 border-cream-dark ${
                  index === 0 ? '-right-2' : '-left-2'
                }`} />
                
                {/* Tarjeta */}
                <div className="card text-center md:text-left">
                  {/* Icono */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage/10 text-sage mb-6">
                    <event.icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  {/* Título */}
                  <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-4">
                    {event.title}
                  </h3>
                  
                  {/* Hora */}
                  <div className="flex items-center justify-center md:justify-start gap-2 text-primary mb-3">
                    <Clock size={16} />
                    <span className="font-sans text-lg tracking-wider">{event.time}</span>
                  </div>
                  
                  {/* Lugar */}
                  <p className="font-body text-charcoal/80 mb-1">
                    {event.name}
                  </p>
                  <p className="font-body text-sm text-charcoal/50 mb-6">
                    {event.address}
                  </p>
                  
                  {/* Botón Maps */}
                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-sans text-sm tracking-wider"
                  >
                    <MapPin size={16} />
                    <span>Ver en Google Maps</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Nota */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center font-body text-sm text-charcoal/50 italic mt-12"
        >
          💡 Recomendamos llegar con al menos 15 minutos de antelación
        </motion.p>
      </div>
    </section>
  )
}
