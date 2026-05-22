import { WEDDING_DATA } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 px-6">
      <div className="container-wedding text-center">
        {/* Nombres */}
        <h3 className="font-display text-4xl mb-4">
          {WEDDING_DATA.bride} & {WEDDING_DATA.groom}
        </h3>
        
        {/* Fecha y lugar */}
        <p className="font-sans text-sm tracking-[0.2em] text-white/60 uppercase mb-6">
          {WEDDING_DATA.dateFormatted} · Santander
        </p>
        
        {/* Hashtag */}
        <p className="font-body text-lg text-primary-light">
          {WEDDING_DATA.hashtag}
        </p>
      </div>
    </footer>
  )
}
