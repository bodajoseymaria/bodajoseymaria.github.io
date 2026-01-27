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
        {/* Título */}
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
        
        {/* Google Form embebido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card p-0 overflow-hidden">
            {/* 
              INSTRUCCIONES PARA EL GOOGLE FORM:
              
              1. Crea un formulario en Google Forms con estos campos:
                 - Nombre completo (obligatorio)
                 - Email (obligatorio)
                 - Teléfono (opcional)
                 - ¿Asistirás a la boda? (Sí/No)
                 - Número de acompañantes (0-5)
                 - Nombres de los acompañantes
                 - ¿Alguna alergia o intolerancia alimentaria?
                 - ¿Necesitas transporte desde Santander? (Sí/No)
                 - Comentarios adicionales
              
              2. En Google Forms, haz clic en "Enviar" (arriba a la derecha)
              3. Selecciona el icono "<>" (Insertar)
              4. Copia la URL que aparece en el src del iframe
              5. Pégala en src/lib/constants.ts en la variable googleFormUrl
              
              Las respuestas se guardarán automáticamente en Google Sheets.
            */}
            
            <iframe
              src={WEDDING_DATA.googleFormUrl}
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Formulario de confirmación de asistencia"
              className="bg-white"
            >
              Cargando formulario...
            </iframe>
          </div>
          
          {/* Enlace alternativo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-6"
          >
            <a
              href={WEDDING_DATA.googleFormUrl.replace('?embedded=true', '')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:text-primary-dark transition-colors"
            >
              <span>¿No carga? Abrir formulario en nueva pestaña</span>
              <ExternalLink size={14} />
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
