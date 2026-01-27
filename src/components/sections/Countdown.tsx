import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCountdown } from '@/hooks/useCountdown'
import { WEDDING_DATA } from '@/lib/constants'

export default function Countdown() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const timeLeft = useCountdown(WEDDING_DATA.date)
  
  const units = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ]
  
  return (
    <section className="py-16 bg-white border-y border-charcoal/5" ref={ref}>
      <div className="container-wedding px-6">
        {/* Texto superior */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center font-sans text-sm tracking-[0.2em] text-charcoal/50 uppercase mb-10"
        >
          Faltan
        </motion.p>
        
        {/* Contador */}
        <div className="flex justify-center items-center gap-3 sm:gap-6 md:gap-10">
          {units.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Número */}
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 flex items-center justify-center 
                              bg-cream border border-charcoal/10">
                  <span className="font-display text-3xl sm:text-4xl md:text-5xl text-primary font-light">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Efecto shimmer */}
                <div className="absolute inset-0 animate-shimmer pointer-events-none" />
              </div>
              
              {/* Label */}
              <span className="block mt-3 font-sans text-[10px] sm:text-xs tracking-[0.2em] text-charcoal/50 uppercase">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
        
        {/* Texto inferior */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center font-sans text-sm tracking-[0.2em] text-charcoal/50 uppercase mt-10"
        >
          para el gran día
        </motion.p>
      </div>
    </section>
  )
}
