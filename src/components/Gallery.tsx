const photos = [
  {
    src: 'https://images.unsplash.com/photo-1761208663763-c4d30657c910?w=600&h=500&fit=crop&auto=format',
    alt: 'Niños jugando con juguetes en el salón',
    label: 'Hora de juego libre',
    color: '#FF6B6B',
  },
  {
    src: 'https://images.unsplash.com/photo-1777056491418-d4ff81a4ad92?w=500&h=600&fit=crop&auto=format',
    alt: 'Niños sentados en mesa del salón',
    label: 'Actividades en grupo',
    color: '#4ECDC4',
  },
  {
    src: 'https://images.unsplash.com/photo-1770096679844-57ca92c2b64b?w=600&h=450&fit=crop&auto=format',
    alt: 'Niños dibujando con su maestra',
    label: 'Arte y expresión',
    color: '#FFD93D',
  },
  {
    src: 'https://images.unsplash.com/photo-1777056481869-feac70afe522?w=500&h=550&fit=crop&auto=format',
    alt: 'Pequeños en actividad escolar',
    label: 'Aprendizaje activo',
    color: '#C084FC',
  },
  {
    src: 'https://images.unsplash.com/photo-1605627079912-97c3810a11a4?w=600&h=400&fit=crop&auto=format',
    alt: 'Materiales de arte coloridos',
    label: 'Materiales creativos',
    color: '#6EE7B7',
  },
  {
    src: 'https://images.unsplash.com/photo-1679662487821-1e3aae311132?w=500&h=500&fit=crop&auto=format',
    alt: 'Materiales de manualidades',
    label: 'Manualidades',
    color: '#F97316',
  },
]

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="py-20 px-5"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F0FFFE 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C084FC]/15 text-[#7C3AED] text-xs font-bold mb-4 border border-[#C084FC]/30" style={{ fontFamily: 'Nunito, sans-serif' }}>
            <span>📸</span> Nuestra galería
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#2D2624] mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Un día en{' '}
            <span style={{ color: '#C084FC' }}>Pestalozzi</span>
          </h2>
          <p className="text-[#7C6F66] max-w-lg mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Momentos llenos de alegría, descubrimiento y crecimiento que se viven cada día en nuestro jardín.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl break-inside-avoid cursor-pointer"
              style={{ border: `3px solid ${p.color}30` }}
            >
              <div className="bg-gray-100">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to top, ${p.color}CC, transparent)` }}
              >
                <span
                  className="text-white text-sm font-black"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  {p.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
