import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { WEDDING_DATA } from '@/lib/constants'
import { useState, useEffect, useCallback } from 'react'

const BASE_URL = import.meta.env.BASE_URL

const allImages: { src: string; pos: string; portrait: boolean }[] = [
  { src: `${BASE_URL}images/hero.jpeg`, pos: '50% 35%', portrait: false },

  { src: `${BASE_URL}images/6.jpeg`,    pos: '50% 60%', portrait: false },
  { src: `${BASE_URL}images/9.jpeg`,    pos: '50% 28%', portrait: false },

  { src: `${BASE_URL}images/12.jpeg`,   pos: '50% 28%', portrait: true  },
  { src: `${BASE_URL}images/5.jpeg`,    pos: '50% 22%', portrait: true  },
  { src: `${BASE_URL}images/15.jpeg`,   pos: '50% 28%', portrait: true  },
  { src: `${BASE_URL}images/8.jpeg`,    pos: '50% 30%', portrait: false },
  { src: `${BASE_URL}images/19.jpeg`,   pos: '50% 45%', portrait: false },
]

const kenBurnsConfigs = [
  { initial: { scale: 1.14, x: '3%', y: '2%' },  animate: { scale: 1.0,  x: '-1%', y: '-1%' } },
  { initial: { scale: 1.0,  x: '-2%', y: '-2%' }, animate: { scale: 1.12, x: '1%',  y: '1%'  } },
  { initial: { scale: 1.12, x: '2%',  y: '-3%' }, animate: { scale: 1.02, x: '-2%', y: '1%'  } },
  { initial: { scale: 1.06, x: '-1%', y: '2%' },  animate: { scale: 1.14, x: '2%',  y: '-2%' } },
]

const SLIDE_DURATION = 5000

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 767px)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isMobile
}

export default function Hero() {
  const isMobile = useIsMobile()
  const slideshowImages = isMobile ? allImages.filter(i => i.portrait) : allImages

  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)

  useEffect(() => {
    setCurrent(0)
    setPrev(null)
  }, [isMobile])

  const advance = useCallback(() => {
    setCurrent(c => {
      setPrev(c)
      return (c + 1) % slideshowImages.length
    })
  }, [slideshowImages.length])

  useEffect(() => {
    const id = setInterval(advance, SLIDE_DURATION)
    return () => clearInterval(id)
  }, [advance])

  const goTo = (i: number) => {
    if (i === current) return
    setPrev(current)
    setCurrent(i)
  }

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] flex-col items-center justify-end overflow-hidden bg-charcoal"
    >
      {/* Slideshow background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          {slideshowImages.map(({ src, pos }, i) => {
            if (i !== current && i !== prev) return null
            const kb = kenBurnsConfigs[i % kenBurnsConfigs.length]
            const isActive = i === current
            return (
              <motion.div
                key={src}
                className="absolute inset-0 will-change-transform"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
                style={{ zIndex: isActive ? 2 : 1 }}
              >
                <motion.img
                  src={src}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: pos }}
                  initial={kb.initial}
                  animate={isActive ? kb.animate : kb.initial}
                  transition={{ duration: SLIDE_DURATION / 1000 + 1.5, ease: 'linear' }}
                />
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Overlay móvil: gradiente fuerte desde el centro hacia abajo para que el texto sea legible */}
        <div
          className="pointer-events-none absolute inset-0 z-10 md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.08) 35%, rgba(0,0,0,0.55) 58%, rgba(0,0,0,0.88) 78%, rgba(0,0,0,0.95) 100%)',
          }}
          aria-hidden
        />
        {/* Overlay escritorio */}
        <div
          className="pointer-events-none absolute inset-0 z-10 hidden md:block"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.1) 25%, rgba(10,10,10,0.15) 55%, rgba(10,10,10,0.82) 100%)',
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-10 hidden md:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 45%, transparent 75%)',
          }}
          aria-hidden
        />
      </div>

      {/* Text content */}
      <div className="relative z-20 w-full px-6 pb-24 pt-0 text-center md:pb-36 md:text-left lg:px-20 xl:px-32">
        <div className="mx-auto md:mx-0 md:max-w-[min(36rem,50vw)]">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-5"
          >
            <span className="font-script text-2xl text-gold-light drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] sm:text-3xl md:text-[2rem]">
              ¡Nos casamos!
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-display mb-6 flex flex-col items-center gap-1 font-light leading-[1.1] tracking-wide drop-shadow-[0_3px_18px_rgba(0,0,0,0.85)] md:items-start"
          >
            <span className="text-[clamp(2.6rem,8vw,5.5rem)] text-white">
              {WEDDING_DATA.bride}
            </span>
            <span className="font-script text-[clamp(2.2rem,6.5vw,4.5rem)] leading-none text-gold-light drop-shadow-[0_2px_16px_rgba(0,0,0,0.75)]">
              &amp;
            </span>
            <span className="text-[clamp(2.6rem,8vw,5.5rem)] text-white">
              {WEDDING_DATA.groom}
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mb-6 h-px w-32 origin-center bg-gradient-to-r from-transparent via-gold-light/70 to-transparent md:mx-0 md:origin-left md:w-52"
          />

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="font-sans text-lg font-medium tracking-[0.28em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-xl md:text-2xl md:tracking-[0.32em]"
          >
            {WEDDING_DATA.dateShort}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.82 }}
            className="font-body mt-2 text-base text-white/85 drop-shadow-[0_1px_10px_rgba(0,0,0,0.9)] md:text-lg"
          >
            Santander, Cantabria
          </motion.p>
        </div>
      </div>

      {/* Slide dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-14 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-20"
      >
        {slideshowImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Foto ${i + 1}`}
            className="relative h-1.5 overflow-hidden rounded-full transition-all duration-500"
            style={{ width: i === current ? '2rem' : '0.375rem', background: 'rgba(255,255,255,0.35)' }}
          >
            {i === current && (
              <motion.span
                key={current}
                className="absolute inset-y-0 left-0 rounded-full bg-gold-light"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <a href="#bienvenida" className="text-white/50 transition-colors hover:text-white/80">
          <ChevronDown size={26} />
        </a>
      </motion.div>

      {/* Corner decorations */}
      <div className="pointer-events-none absolute top-8 left-8 z-20 hidden h-16 w-16 border-l border-t border-white/25 md:block" />
      <div className="pointer-events-none absolute top-8 right-8 z-20 hidden h-16 w-16 border-r border-t border-white/25 md:block" />
      <div className="pointer-events-none absolute bottom-8 left-8 z-20 hidden h-16 w-16 border-l border-b border-white/25 md:block" />
      <div className="pointer-events-none absolute bottom-8 right-8 z-20 hidden h-16 w-16 border-r border-b border-white/25 md:block" />
    </section>
  )
}
