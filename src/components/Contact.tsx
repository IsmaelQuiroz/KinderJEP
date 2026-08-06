import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputClass = "w-full rounded-2xl border-2 border-[#E8DDD4] bg-white px-4 py-3 text-sm text-[#2D2624] outline-none transition-all duration-200 focus:border-[#FF6B6B] focus:ring-4 focus:ring-[#FF6B6B]/10 placeholder-[#B0A59E]"

  const info = [
    { icon: '📍', label: 'Dirección', value: 'Sector 4 Totolapa, Tihuatlán, Ver.' },
    { icon: '📞', label: 'Teléfono', value: '(782) 111-8694' },
    { icon: '✉️', label: 'Correo', value: 'pestalozzi.totolapa@edu.mx' },
    { icon: '⏰', label: 'Horario', value: 'Lun–Vie · 9:00 am – 12:00 pm' },
  ]

  return (
    <section
      id="contacto"
      className="py-20 px-5 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6EE7B7]/20 text-[#047857] text-xs font-bold mb-4 border border-[#6EE7B7]/40" style={{ fontFamily: 'Nunito, sans-serif' }}>
            <span>📬</span> Contáctanos
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#2D2624] mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
            ¡Comencemos juntos{' '}
            <span style={{ color: '#4ECDC4' }}>este camino!</span>
          </h2>
          <p className="text-[#7C6F66] max-w-md mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Escríbenos para conocer más sobre nuestros programas, el proceso de inscripción o para agendar una visita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div>
            <div className="space-y-5 mb-8">
              {info.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF6B6B]/10 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#7C6F66] mb-0.5" style={{ fontFamily: 'Nunito, sans-serif' }}>{item.label}</div>
                    <div className="text-sm font-semibold text-[#2D2624]" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Inscription CTA card */}
            <div
              className="rounded-3xl p-6 text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #F97316 100%)' }}
            >
              <div
                className="absolute -top-8 -right-8 w-32 h-32 opacity-20"
                style={{ background: 'white', borderRadius: '50% 50% 30% 70% / 40% 60% 40% 60%' }}
              />
              <div className="text-3xl mb-2">🎒</div>
              <h3 className="text-xl font-black mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Inscripciones 2025–2026
              </h3>
              <p className="text-white/90 text-sm mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Los cupos son limitados. ¡Asegura el lugar de tu hijo o hija hoy mismo!
              </p>
              <div className="flex items-center gap-2 text-sm font-bold" style={{ fontFamily: 'Nunito, sans-serif' }}>
                <span className="w-2 h-2 rounded-full bg-[#3dff43] animate-pulse" />
                Aún hay Lugares disponibles
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="bg-[#F0FFF8] border-2 border-[#6EE7B7] rounded-3xl p-10 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-[#2D2624] mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  ¡Gracias por contactarnos!
                </h3>
                <p className="text-[#5C5550]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Nos pondremos en contacto contigo muy pronto. ¡Estamos emocionados de conocer a tu familia!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-[#7C6F66] mb-1.5 block" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. María González"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className={inputClass}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#7C6F66] mb-1.5 block" style={{ fontFamily: 'Nunito, sans-serif' }}>
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(782) 000-0000"
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      className={inputClass}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#7C6F66] mb-1.5 block" style={{ fontFamily: 'Nunito, sans-serif' }}>
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      placeholder="tu@correo.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#7C6F66] mb-1.5 block" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    placeholder="¿Cuántos años tiene tu hijo/a? ¿Tienes alguna pregunta?"
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className={inputClass + ' resize-none'}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#FF6B6B] text-white font-black text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FF6B6B]/30 active:scale-95"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  Enviar mensaje 💌
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
