'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    const text = `Olá! Me chamo ${form.name}. ${form.message} — ${form.email} | ${form.phone}`
    window.open(`https://wa.me/5562998062169?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
  }

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="section-tag">Contato</p>
            <h2 className="section-title mb-4">Fale com a nossa equipe</h2>
            <div className="w-16 h-1 bg-[#d4a017] mb-8" />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0e1f42] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.32 9.22a19.79 19.79 0 01-3.07-8.67A2 2 0 012.22 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.72 6.72l1.06-1.06a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#0e1f42] text-sm uppercase tracking-wider mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/5562998062169"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d4a017] hover:underline"
                  >
                    (62) 9 9806-2169
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0e1f42] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#0e1f42] text-sm uppercase tracking-wider mb-1">E-mail</p>
                  <a href="mailto:carvalhoeng@outlook.com.br" className="text-[#d4a017] hover:underline text-sm">
                    carvalhoeng@outlook.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0e1f42] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#0e1f42] text-sm uppercase tracking-wider mb-1">Endereço</p>
                  <a
                    href="https://maps.app.goo.gl/ts9Y59i94xj94m3R6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-sm leading-relaxed hover:text-[#d4a017] transition-colors"
                  >
                    Edifício Office Flamboyant<br />
                    Av. Dep. Jamel Cecílio, 3310<br />
                    Jardim Goiás, Goiânia — GO
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0e1f42] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#0e1f42] text-sm uppercase tracking-wider mb-1">Horário</p>
                  <p className="text-gray-600 text-sm">Segunda à Sexta — 8h às 18h</p>
                  <p className="text-gray-400 text-xs mt-0.5">Por agendamento</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#f8f7f4] p-8">
            <h3 className="font-bold text-[#0e1f42] text-lg mb-6">Envie sua mensagem</h3>

            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <p className="font-bold text-[#0e1f42] text-lg">Mensagem enviada!</p>
                <p className="text-gray-500 text-sm mt-2">Em breve entraremos em contato.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a6b] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a6b] transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Seu telefone/WhatsApp"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a6b] transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Descreva sua necessidade"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a6b] transition-colors resize-none"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#0e1f42] text-white font-bold text-sm py-4 uppercase tracking-wider hover:bg-[#1a3a6b] transition-colors"
                >
                  Enviar pelo WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
