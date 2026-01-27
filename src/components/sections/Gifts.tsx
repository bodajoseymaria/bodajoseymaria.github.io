import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Gift, Copy, Check, Heart } from 'lucide-react'
import { WEDDING_DATA } from '@/lib/constants'

export default function Gifts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [copied, setCopied] = useState(false)
  
  const copyIBAN = async () => {
    try {
      await navigator.clipboard.writeText(WEDDING_DATA.gifts.iban.replace(/\s/g, ''))
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      console.error('Error al copiar:', err)
    }
  }
  
  return (
    <section id="regalos" className="section bg-white" ref={ref}>
      <div className="container-wedding">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Lista de Bodas
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="section-subtitle"
        >
          <Gift className="inline mr-2" size={16} />
          Regalos
        </motion.p>
        
        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-lg mx-auto text-center"
        >
          {/* Mensaje */}
          <p className="font-body text-lg text-charcoal/80 mb-10">
            Vuestra presencia es el mejor regalo. Si aún así deseáis tener un detalle 
            con nosotros, podéis hacerlo mediante transferencia bancaria:
          </p>
          
          {/* Tarjeta IBAN */}
          <div className="card bg-cream border-2 border-primary/10">
            {/* IBAN */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-[0.2em] text-charcoal/50 uppercase mb-2">
                IBAN
              </p>
              <p className="font-mono text-lg md:text-xl text-charcoal tracking-wider">
                {WEDDING_DATA.gifts.iban}
              </p>
            </div>
            
            {/* Titular */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-[0.2em] text-charcoal/50 uppercase mb-2">
                Titular
              </p>
              <p className="font-body text-charcoal">
                {WEDDING_DATA.gifts.holder}
              </p>
            </div>
            
            {/* Concepto */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-[0.2em] text-charcoal/50 uppercase mb-2">
                Concepto
              </p>
              <p className="font-body text-charcoal">
                {WEDDING_DATA.gifts.concept}
              </p>
            </div>
            
            {/* Botón copiar */}
            <motion.button
              onClick={copyIBAN}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 font-sans text-sm tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                copied 
                  ? 'bg-sage text-white' 
                  : 'bg-primary hover:bg-primary-dark text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check size={18} />
                  <span>¡IBAN Copiado!</span>
                </>
              ) : (
                <>
                  <Copy size={18} />
                  <span>Copiar IBAN</span>
                </>
              )}
            </motion.button>
          </div>
          
          {/* Agradecimiento */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-script text-2xl text-primary mt-10 flex items-center justify-center gap-2"
          >
            Gracias de corazón <Heart size={18} className="fill-primary" />
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
