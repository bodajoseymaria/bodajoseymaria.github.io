import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { WEDDING_DATA } from '@/lib/constants'

export default function Welcome() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section id="bienvenida" className="section bg-cream" ref={ref}>
      <div className="container-wedding text-center">
        {/* Ornamento */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
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
          className="section-title"
        >
          Bienvenidos
        </motion.h2>
        
        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="section-subtitle"
        >
          A nuestra boda
        </motion.p>
        
        {/* Mensaje */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <p className="font-body text-xl md:text-2xl text-charcoal/80 leading-relaxed italic">
            "{WEDDING_DATA.welcomeMessage}"
          </p>
        </motion.div>
        
        {/* Firma */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-script text-3xl text-primary mt-10"
        >
          {WEDDING_DATA.groom} & {WEDDING_DATA.bride}
        </motion.p>
        
        {/* Línea decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="floral-divider mt-10"
        />
      </div>
    </section>
  )
}
