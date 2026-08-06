const testimonials = [
  {
    name: 'María Guadalupe Torres',
    role: 'Mamá de Sofía, 4 años',
    text: 'Desde que Sofía entró al Jardín Pestalozzi floreció de una manera increíble. Las maestras son muy cariñosas y dedicadas. Mi hija llora cuando es fin de semana porque quiere ir a la escuela.',
    avatar: '👩',
    stars: 5,
    color: '#FF6B6B',
  },
  {
    name: 'Carlos Mendoza Ruiz',
    role: 'Papá de Diego, 5 años',
    text: 'Lo que más me gusta es el método de enseñanza. Diego aprendió a leer sin darse cuenta, jugando y cantando. Las actividades son muy variadas y los niños siempre están motivados.',
    avatar: '👨',
    stars: 5,
    color: '#4ECDC4',
  },
  {
    name: 'Ana Lucía Hernández',
    role: 'Mamá de Valentina, 3 años',
    text: 'Nunca pensé que a los 3 años mi hija estaría tan feliz en la escuela. El ambiente es seguro, limpio y muy estimulante. Las maestras comunican cada avance con mucho cariño.',
    avatar: '👩‍👧',
    stars: 5,
    color: '#FFD93D',
  },
]

export default function Testimonials() {
  return (
    <section
      className="py-20 px-5"
      style={{ background: 'linear-gradient(135deg, #FFF5EC 0%, #FFFBF4 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B6B]/15 text-[#CC3333] text-xs font-bold mb-4 border border-[#FF6B6B]/30" style={{ fontFamily: 'Nunito, sans-serif' }}>
            <span>💬</span> Testimonios
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#2D2624] mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Lo que dicen{' '}
            <span style={{ color: '#FF6B6B' }}>las familias</span>
          </h2>
          <p className="text-[#7C6F66] max-w-md mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            La opinión de nuestras familias es el mayor reconocimiento que podemos recibir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ border: `2px solid ${t.color}25` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-[#FFD93D] text-lg">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <div
                className="text-4xl font-black mb-2 leading-none"
                style={{ color: t.color, fontFamily: 'Georgia, serif' }}
              >
                "
              </div>
              <p className="text-[#5C5550] text-sm leading-relaxed mb-6 italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: t.color + '20' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-black text-sm text-[#2D2624]" style={{ fontFamily: 'Nunito, sans-serif' }}>{t.name}</div>
                  <div className="text-xs text-[#7C6F66]" style={{ fontFamily: 'Poppins, sans-serif' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
