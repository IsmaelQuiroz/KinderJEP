


export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: 'linear-gradient(135deg, #FFFBF4 0%, #FFF0E8 50%, #E8F8F5 100%)' }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 opacity-30 animate-float"
        style={{ background: '#FF6B6B', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
      />
      <div
        className="absolute top-1/4 -right-16 w-64 h-64 opacity-20 animate-float"
        style={{ background: '#4ECDC4', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', animationDelay: '1.5s' }}
      />
      <div
        className="absolute bottom-10 left-1/4 w-48 h-48 opacity-20 animate-float"
        style={{ background: '#FFD93D', borderRadius: '50% 50% 30% 70% / 40% 60% 40% 60%', animationDelay: '2.5s' }}
      />

      {/* Floating stars / shapes */}
      {[
        { top: '15%', left: '10%', color: '#FF6B6B', size: 16, delay: '0s' },
        { top: '25%', right: '12%', color: '#FFD93D', size: 22, delay: '0.8s' },
        { top: '60%', left: '6%', color: '#4ECDC4', size: 14, delay: '1.2s' },
        { top: '70%', right: '8%', color: '#C084FC', size: 18, delay: '0.4s' },
        { top: '40%', left: '45%', color: '#6EE7B7', size: 12, delay: '1.8s' },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute animate-bounce-slow pointer-events-none"
          style={{ top: s.top, left: s.left, right: s.right, animationDelay: s.delay }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill={s.color}>
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
        </div>
      ))}

      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD93D]/30 text-[#8B6800] text-xs font-bold mb-6 border border-[#FFD93D]/50" style={{ fontFamily: 'Nunito, sans-serif' }}>
            <span>🏫</span> Sector 4 · Totolapa Tih. Ver.
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4 text-[#2D2624]" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Jardín de niños{' '}
            <span
              className="relative inline-block"
              style={{ color: '#FF6B6B' }}
            >
              Juan Enrique
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 8C50 2 100 10 198 4" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{' '}
            <span style={{ color: '#4ECDC4' }}>Pestalozzi</span>
          </h1>

          <p className="text-lg text-[#5C5550] leading-relaxed mb-8 max-w-md" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Un espacio lleno de amor, creatividad y aprendizaje donde cada niño y niña desarrolla su potencial en un ambiente seguro y feliz.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="px-8 py-3.5 rounded-full bg-[#FF6B6B] text-white font-black text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B6B]/30"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              ¡Inscribe a tu hij@! 🌟
            </a>
            <a
              href="#programas"
              className="px-8 py-3.5 rounded-full border-2 border-[#4ECDC4] text-[#4ECDC4] font-black text-base transition-all duration-300 hover:bg-[#4ECDC4] hover:text-white"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Ver programas
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-10 flex gap-8">
            {[
              { num: '15+', label: 'Años de experiencia' },
              { num: '200+', label: 'Niños egresados' },
              {  label: 'Docentes certificados' },
            ].map((s) => (
              <div key={s.label}>
              { 
                s.label == 'Docentes certificados' ? ( 
                      <div className="text-2xl font-black text-[#FF6B6B]" style={{ fontFamily: 'Nunito, sans-serif' }}>{s.label}</div>
                  ) : (
                    <>
                      <div className="text-2xl font-black text-[#FF6B6B]" style={{ fontFamily: 'Nunito, sans-serif' }}>{s.num}</div>
                      <div className="text-xs text-[#7C6F66]" style={{ fontFamily: 'Poppins, sans-serif' }}>{s.label}</div> 
                    </>
                  )
              }
              
              </div>
            ))}
          </div>
        </div>

        {/* Right: Hero image collage */}
        <div className="relative flex items-center justify-center h-[480px]">
          {/* Main image */}
          <div
            className="absolute w-72 h-72 md:w-80 md:h-80 overflow-hidden shadow-2xl"
            style={{ borderRadius: '40% 60% 60% 40% / 50% 50% 50% 50%', top: '5%', left: '10%' }}
          >
            <img
              src="https://images.unsplash.com/photo-1761208663763-c4d30657c910?w=640&h=640&fit=crop&auto=format"
              alt="Niños jugando en el salón de clases"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Secondary image */}
          <div
            className="absolute w-44 h-44 overflow-hidden shadow-xl border-4 border-white"
            style={{ borderRadius: '50%', bottom: '8%', right: '5%', animationDelay: '1s' }}
          >
            <img
              src="https://images.unsplash.com/photo-1770096679844-57ca92c2b64b?w=400&h=400&fit=crop&auto=format"
              alt="Niños dibujando con su maestra"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Fun sticker cards */}
          <div
            className="absolute top-4 right-4 bg-[#FFD93D] rounded-2xl px-4 py-2.5 shadow-lg animate-wiggle"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            <span className="text-2xl">🎨</span>
            <div className="text-xs font-black text-[#5C3800]">Arte y creatividad</div>
          </div>

          <div
            className="absolute bottom-16 left-2 bg-white rounded-2xl px-4 py-2.5 shadow-lg border-2 border-[#4ECDC4] animate-float"
            style={{ animationDelay: '2s', fontFamily: 'Nunito, sans-serif' }}
          >
            <span className="text-2xl">📚</span>
            <div className="text-xs font-black text-[#2D2624]">Aprendizaje lúdico</div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path fill="#FFFFFF" d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  )
}
