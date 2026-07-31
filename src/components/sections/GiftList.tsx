import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, MessageCircle, CheckCircle2 } from 'lucide-react'
import { GIFT_LIST } from '@/lib/giftList'
import { WEDDING_DATA } from '@/lib/constants'

function whatsappUrl(phone: string, itemName: string) {
  const text = `¡Hola! Nos gustaría regalaros: ${itemName}`
  return `https://wa.me/${phone.replace(/[^\d]/g, '')}?text=${encodeURIComponent(text)}`
}

export default function GiftList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div id="lista-de-bodas" className="mt-20 pt-16 border-t border-primary/10 scroll-mt-24" ref={ref}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="font-display text-2xl text-primary text-center mb-4"
      >
        Lista de Bodas
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-body text-base text-charcoal/70 bg-cream border border-primary/15 rounded-lg px-5 py-4 mb-10 max-w-2xl mx-auto text-center"
      >
        Hemos seleccionado algunos artículos que nos vendrían genial para esta nueva
        etapa. Si os apetece regalarnos alguno, escribidnos por WhatsApp para
        decírnoslo y así evitamos que se repita.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {GIFT_LIST.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`card group bg-cream border-2 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md ${
              item.reserved ? 'border-sage/40' : 'border-primary/10'
            }`}
          >
            <div className="relative aspect-square overflow-hidden -mx-6 -mt-6 mb-4">
              {item.reserved ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-50 grayscale"
                  loading="lazy"
                />
              ) : (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </a>
              )}
              {item.reserved && (
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal/10">
                  <span className="flex items-center gap-1.5 bg-sage text-white font-sans text-xs tracking-[0.1em] uppercase px-3 py-1.5 rounded-full shadow">
                    <CheckCircle2 size={14} />
                    Ya reservado
                  </span>
                </div>
              )}
            </div>

            <p className={`font-body mb-4 flex-1 ${item.reserved ? 'text-charcoal/50 line-through' : 'text-charcoal'}`}>
              {item.name}
            </p>

            {item.reserved ? (
              <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-sage text-center py-3">
                Alguien ya se lo va a regalar
              </p>
            ) : (
              <>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs tracking-[0.15em] uppercase text-primary hover:text-primary-dark inline-flex items-center gap-1 mb-4"
                >
                  Ver producto <ExternalLink size={14} />
                </a>

                <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-charcoal/50 mb-2">
                  Escríbeles por WhatsApp para reservarlo
                </p>
                <div className="flex items-center gap-2">
                  {WEDDING_DATA.gifts.contacts.map((contact) => (
                    <a
                      key={contact.phone}
                      href={whatsappUrl(contact.phone, item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-1 rounded-full font-sans text-[11px] tracking-[0.1em] uppercase bg-primary hover:bg-primary-dark text-white transition-all duration-300 flex items-center justify-center gap-1 whitespace-nowrap"
                    >
                      <MessageCircle size={14} className="shrink-0" />
                      {contact.name}
                    </a>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
