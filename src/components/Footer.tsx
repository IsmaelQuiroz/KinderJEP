export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-16 pb-8 px-5" style={{ background: '#2D2624' }}>
      {/* Decorative */}
      <div
        className="absolute -top-10 left-1/4 w-48 h-48 opacity-10"
        style={{ background: '#FF6B6B', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
      />
      <div
        className="absolute top-0 right-10 w-32 h-32 opacity-10"
        style={{ background: '#4ECDC4', borderRadius: '50%' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#FF6B6B] flex items-center justify-center text-white text-xl font-black" style={{ fontFamily: 'Nunito, sans-serif' }}>
                P
              </div>
              <div>
                <div className="text-white font-black text-base" style={{ fontFamily: 'Nunito, sans-serif' }}>J. E. Pestalozzi</div>
                <div className="text-[#7C6F66] text-xs">Jardín de Niños · Sector 4 Totolapa</div>
              </div>
            </div>
            <p className="text-[#A09590] text-sm leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Más de 15 años formando pequeños con corazón, mente y manos, como nos enseñó el gran pedagogo Johann Heinrich Pestalozzi.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-black mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>Navegación</h4>
            <ul className="space-y-2">
              {[
                ['#inicio', 'Inicio'],
                ['#programas', 'Programas'],
                ['#nosotros', 'Nosotros'],
                ['#galeria', 'Galería'],
                ['#contacto', 'Contacto'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[#A09590] text-sm hover:text-[#FF6B6B] transition-colors duration-200"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <h4 className="text-white font-black mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>Encuéntranos</h4>
            <div className="space-y-3 text-sm text-[#A09590]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <div className="flex items-start gap-2"><span>📍</span> Sector 4, Totolapa, Tihuatlán, Veracruz</div>
              <div className="flex items-start gap-2"><span>📞</span> (782) 111-8694</div>
              <div className="flex items-start gap-2"><span>✉️</span> pestalozzi.totolapa@edu.mx</div>
              <div className="flex items-start gap-2"><span>⏰</span> Lun–Vie · 9:00 am – 12:00 pm</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#7C6F66] text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>
            © 2025 Jardín de Niños Juan Enrique Pestalozzi · Sector 4 Totolapa · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-2 text-xs text-[#7C6F66]" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Hecho con <span className="text-[#FF6B6B]">❤️</span> para la comunidad de Totolapa
          </div>
        </div>
      </div>
    </footer>
  )
}
