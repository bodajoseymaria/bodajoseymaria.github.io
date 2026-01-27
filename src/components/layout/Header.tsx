import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { WEDDING_DATA } from '@/lib/constants'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'El Día', href: '#dia' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Alojamiento', href: '#alojamiento' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Regalos', href: '#regalos' },
  { label: 'Confirmar', href: '#confirmar' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-cream/95 backdrop-blur-md shadow-sm py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-wedding flex items-center justify-between px-6">
          {/* Logo / Nombres */}
          <a 
            href="#inicio"
            className={`font-script text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            {WEDDING_DATA.groom.split(' ')[0]} & {WEDDING_DATA.bride}
          </a>
          
          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:text-primary ${
                  isScrolled ? 'text-charcoal' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Botón Menú Móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-charcoal' : 'text-white'
            }`}
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      
      {/* Menú Móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-cream shadow-2xl"
            >
              {/* Cerrar */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-5 right-5 p-2 text-charcoal"
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </button>
              
              {/* Navegación */}
              <nav className="flex flex-col pt-20 px-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans text-sm tracking-[0.15em] uppercase py-4 border-b border-charcoal/10 text-charcoal hover:text-primary transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              
              {/* Fecha */}
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <p className="font-script text-2xl text-primary mb-1">
                  {WEDDING_DATA.dateShort}
                </p>
                <p className="font-sans text-xs tracking-widest text-charcoal/50 uppercase">
                  Santander
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
