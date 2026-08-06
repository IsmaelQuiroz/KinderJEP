import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Programas', href: '#programas' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-[#E8DDD4]">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-[#FF6B6B] flex items-center justify-center text-white text-lg font-black" style={{ fontFamily: 'Nunito, sans-serif' }}>
            P
          </div>
          <div>
            <div className="text-sm font-black leading-tight text-[#2D2624]" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Pestalozzi
            </div>
            <div className="text-[10px] text-[#7C6F66] leading-tight">Sector 4 Totolapa</div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-600 text-[#5C5550] hover:text-[#FF6B6B] transition-colors duration-200"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-5 py-2 rounded-full bg-[#FF6B6B] text-white text-sm font-bold transition-all duration-200 hover:scale-105 hover:shadow-md"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Inscríbete
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-[#2D2624]"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E8DDD4] px-5 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#2D2624] hover:text-[#FF6B6B] transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-2 text-center px-5 py-2.5 rounded-full bg-[#FF6B6B] text-white text-sm font-bold"
            onClick={() => setOpen(false)}
          >
            Inscríbete
          </a>
        </div>
      )}
    </nav>
  )
}
