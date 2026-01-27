import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { WEDDING_DATA } from '@/lib/constants'

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `url(${import.meta.env.BASE_URL}images/hero.jpeg)`,
          // Fallback si no hay imagen
          backgroundColor: '#5C5C5C',
        }}
      >
        {/* Overlay con gradiente más sólido para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal/80" />
      </div>
      
      {/* Patrón decorativo superior */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-charcoal/60 to-transparent z-0" />
      
      {/* Capa sólida adicional para máxima legibilidad del texto */}
      <div className="absolute inset-0 bg-charcoal/50 z-[5]" />
      
      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-6 py-20">
        {/* Ornamento superior */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <span className="font-script text-3xl text-gold-light opacity-80">
            ¡Nos casamos!
          </span>
        </motion.div>
        
        {/* Nombres */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide mb-6"
        >
          <span className="block">{WEDDING_DATA.bride}</span>
          <span className="font-script text-4xl sm:text-5xl md:text-6xl text-gold-light my-2 block">&</span>
          <span className="block">{WEDDING_DATA.groom}</span>
        </motion.h1>
        
        {/* Línea decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto my-8"
        />
        
        {/* Fecha */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-sans text-lg sm:text-xl tracking-[0.3em] mb-3"
        >
          {WEDDING_DATA.dateShort}
        </motion.p>
        
        {/* Lugar */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-body text-lg text-white/70 mb-12"
        >
          Santander, Cantabria
        </motion.p>
        
        {/* Botón CTA */}
        <motion.a
          href="#confirmar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 
                     text-white px-10 py-4 font-sans text-sm tracking-[0.2em] uppercase 
                     transition-all duration-300 rounded-lg"
        >
          Confirmar Asistencia
        </motion.a>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <a href="#bienvenida" className="text-white/60 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>
      
      {/* Esquinas decorativas */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/20" />
    </section>
  )
}
