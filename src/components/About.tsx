const values = [
  { emoji: '💛', title: 'Amor y calidez', desc: 'Cada niño es recibido con afecto genuino. Creemos que el amor es la base de todo aprendizaje.' },
  { emoji: '🏆', title: 'Responsabilidad', desc: 'Guardar los juguetes y cuidar las pertenencias comunes.' },
  { emoji: '🤝', title: 'Comunidad', desc: 'Somos parte del corazón del Sector 4 Totolapa. Trabajamos juntos: familias, docentes y comunidad.' },
  { emoji: '🔬', title: 'Innovación pedagógica', desc: 'Aplicamos la metodología Pestalozzi actualizada con enfoques modernos de desarrollo infantil.' },
]

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-20 px-5 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FFF5EC 0%, #FFFBF4 60%, #F0FFFE 100%)' }}
    >
      {/* Decorative shape */}
      <div
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none"
        style={{ background: '#4ECDC4', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div
              className="w-full aspect-square max-w-sm mx-auto overflow-hidden shadow-2xl"
              style={{ borderRadius: '40% 60% 55% 45% / 45% 50% 50% 55%' }}
            >
              <img
                src="https://images.unsplash.com/photo-1771765812031-22653b4c70a6?w=600&h=600&fit=crop&auto=format"
                alt="Niños aprendiendo y creando arte en el salón"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 md:right-4 bg-[#FF6B6B] text-white rounded-3xl p-5 shadow-xl text-center"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              <div className="text-3xl font-black">15+</div>
              <div className="text-xs font-bold opacity-90">Años<br />sirviendo</div>
            </div>

            {/* Small blob decoration */}
            <div
              className="absolute -top-6 -left-6 w-20 h-20 bg-[#FFD93D] opacity-60 animate-float"
              style={{ borderRadius: '50% 50% 30% 70% / 40% 60% 40% 60%' }}
            />
          </div>

          {/* Right: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B6B]/15 text-[#CC3333] text-xs font-bold mb-4 border border-[#FF6B6B]/30" style={{ fontFamily: 'Nunito, sans-serif' }}>
              <span>🏡</span> Quiénes somos
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#2D2624] leading-tight mb-5" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Formando el futuro{' '}
              <span style={{ color: '#4ECDC4' }}>de Totolapa</span>
            </h2>

            <p className="text-[#5C5550] leading-relaxed mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
              El Jardín de Niños <strong>Juan Enrique Pestalozzi</strong> lleva más de 15 años siendo un pilar educativo en la comunidad del Sector 4 de Totolapa. Nos inspira la filosofía del gran pedagogo suizo: que la educación debe desarrollar el corazón, la mente y las manos de manera integral.
            </p>
            <p className="text-[#5C5550] leading-relaxed mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Nuestro equipo de docentes certificadas crea un ambiente cálido, seguro y estimulante donde cada niño y niña puede crecer, explorar y descubrir sus talentos únicos.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl p-4 border border-[#E8DDD4] hover:shadow-md transition-shadow duration-200">
                  <div className="text-2xl mb-2">{v.emoji}</div>
                  <h4 className="font-black text-sm text-[#2D2624] mb-1" style={{ fontFamily: 'Nunito, sans-serif' }}>{v.title}</h4>
                  <p className="text-xs text-[#7C6F66] leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
