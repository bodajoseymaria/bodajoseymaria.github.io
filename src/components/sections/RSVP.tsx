import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CalendarCheck, ExternalLink } from 'lucide-react'
import { WEDDING_DATA } from '@/lib/constants'

export default function RSVP() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="confirmar" className="section bg-cream-dark" ref={ref}>
      <div className="container-wedding">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Confirma tu Asistencia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="section-subtitle"
        >
          <CalendarCheck className="inline mr-2" size={16} />
          RSVP
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center font-body text-charcoal/70 max-w-xl mx-auto mb-10"
        >
          Por favor, confirmad vuestra asistencia antes del{' '}
          <strong className="text-primary">{WEDDING_DATA.rsvpDeadline}</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card p-0 overflow-hidden">
            <iframe
              src={WEDDING_DATA.googleFormUrl}
              width="100%"
              height="2136"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Formulario de confirmación de asistencia"
              className="bg-white"
            >
              Cargando formulario...
            </iframe>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 text-center"
          >
            <a
              href={WEDDING_DATA.googleFormOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Confirmar asistencia</span>
              <ExternalLink size={16} />
            </a>
            <p className="mt-4 font-sans text-xs text-charcoal/50">
              Si el formulario no carga bien, ábrelo en una pestaña nueva con el botón de arriba.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
