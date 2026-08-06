const programs = [
  {
    emoji: '🎨',
    title: 'Arte y Creatividad',
    desc: 'Pintamos, moldeamos y creamos mundos imaginarios. La expresión artística desarrolla habilidades cognitivas y emocionales.',
    color: '#FF6B6B',
    bg: '#FFF0F0',
    ages: '3 - 6 años',
  },
  {
    emoji: '📖',
    title: 'Lectoescritura',
    desc: 'Iniciamos el camino a la lectura de forma lúdica, respetando el ritmo de cada niño con metodología Pestalozzi.',
    color: '#4ECDC4',
    bg: '#F0FFFE',
    ages: '4 - 6 años',
  },
  {
    emoji: '🔢',
    title: 'Lógica y Matemáticas',
    desc: 'Bloques, cuentas y juegos. Los números cobran vida mientras los pequeños descubren patrones y relaciones.',
    color: '#FFD93D',
    bg: '#FFFBEA',
    ages: '3 - 6 años',
  },
  {
    emoji: '🌱',
    title: 'Naturaleza y Ciencias',
    desc: 'Huerto escolar, experimentos sencillos y exploración del entorno. Sembramos curiosidad científica desde pequeños.',
    color: '#6EE7B7',
    bg: '#F0FDF7',
    ages: '3 - 6 años',
  },
  {
    emoji: '🎵',
    title: 'Música y Ritmo',
    desc: 'Canciones, instrumentos y baile. La música estimula el lenguaje, la memoria y la coordinación motriz.',
    color: '#C084FC',
    bg: '#FAF0FF',
    ages: '2 - 6 años',
  },
  {
    emoji: '⚽',
    title: 'Psicomotricidad',
    desc: 'Juegos al aire libre, circuitos de movimiento y actividades físicas que fortalecen cuerpo y mente.',
    color: '#F97316',
    bg: '#FFF5EC',
    ages: '2 - 6 años',
  },
]

export default function Programs() {
  return (
    <section id="programas" className="bg-white py-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4ECDC4]/15 text-[#2A8A85] text-xs font-bold mb-4 border border-[#4ECDC4]/30" style={{ fontFamily: 'Nunito, sans-serif' }}>
            <span>✨</span> Nuestros programas
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#2D2624] mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Aprendemos jugando{' '}
            <span style={{ color: '#FF6B6B' }}>cada día</span>
          </h2>
          <p className="text-[#7C6F66] max-w-xl mx-auto text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Cada actividad está diseñada para despertar la curiosidad natural de los niños, siguiendo la filosofía de Johann Heinrich Pestalozzi: aprender con corazón, mente y manos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default"
              style={{ background: p.bg, border: `2px solid ${p.color}20` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: p.color + '22' }}
              >
                {p.emoji}
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-black text-[#2D2624]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {p.title}
                </h3>
              </div>
              <p className="text-sm text-[#5C5550] leading-relaxed mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {p.desc}
              </p>
              <div
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: p.color + '20', color: p.color, fontFamily: 'Nunito, sans-serif' }}
              >
                👶 {p.ages}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
