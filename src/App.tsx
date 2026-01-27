import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Welcome from '@/components/sections/Welcome'
import Countdown from '@/components/sections/Countdown'
import Timeline from '@/components/sections/Timeline'
import Location from '@/components/sections/Location'
import Accommodation from '@/components/sections/Accommodation'
import Gifts from '@/components/sections/Gifts'
import Gallery from '@/components/sections/Gallery'
import RSVP from '@/components/sections/RSVP'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Efecto de grano sutil (opcional, descomentar si se desea) */}
      {/* <div className="grain-overlay" /> */}
      
      {/* Header con navegación */}
      <Header />
      
      {/* Contenido principal */}
      <main>
        {/* Hero con imagen de fondo */}
        <Hero />
        
        {/* Mensaje de bienvenida */}
        <Welcome />
        
        {/* Cuenta atrás */}
        <Countdown />
        
        {/* Timeline del día */}
        <Timeline />
        
        {/* Mapas de ubicación */}
        <Location />
        
        {/* Hoteles y apartamentos */}
        <Accommodation />
        
        {/* Lista de regalos / IBAN */}
        <Gifts />
        
        {/* Galería de imágenes */}
        <Gallery />
        
        {/* Formulario RSVP (Google Forms) */}
        <RSVP />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
