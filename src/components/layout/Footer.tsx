import { Heart } from 'lucide-react'
import { WEDDING_DATA } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 px-6">
      <div className="container-wedding text-center">
        {/* Nombres */}
        <h3 className="font-script text-4xl mb-4">
          {WEDDING_DATA.groom} & {WEDDING_DATA.bride}
        </h3>
        
        {/* Fecha y lugar */}
        <p className="font-sans text-sm tracking-[0.2em] text-white/60 uppercase mb-6">
          {WEDDING_DATA.dateFormatted} · Santander
        </p>
        
        {/* Hashtag */}
        <p className="font-body text-lg text-primary-light mb-8">
          {WEDDING_DATA.hashtag}
        </p>
        
        {/* Separador */}
        <div className="w-16 h-px bg-white/20 mx-auto mb-8" />
        
        {/* Hecho con amor */}
        <p className="font-sans text-xs tracking-widest text-white/40 uppercase flex items-center justify-center gap-2">
          Hecho con <Heart size={12} className="text-primary fill-primary" /> para nuestros seres queridos
        </p>
      </div>
    </footer>
  )
}
