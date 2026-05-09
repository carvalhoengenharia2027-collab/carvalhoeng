const testimonials = [
  {
    name: 'João Silva',
    location: 'Anápolis — GO',
    text: 'Regularizei meu imóvel através da Carvalho Engenharia em apenas 15 dias. Agradeço imensamente o atendimento excepcional e a agilidade impressionante. Indico a todos!',
    rating: 5,
  },
  {
    name: 'Maria Fernanda',
    location: 'Goiânia — GO',
    text: 'Processo muito tranquilo e rápido. A equipe foi muito atenciosa e cuidadosa em cada etapa. Meu habite-se saiu sem nenhuma complicação.',
    rating: 5,
  },
  {
    name: 'Carlos Eduardo',
    location: 'Aparecida de Goiânia — GO',
    text: 'Excelente empresa! Consegui o alvará da minha loja em tempo recorde. Atendimento de primeira e ótimo custo-benefício. Recomendo!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-[#f8f7f4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag">Depoimentos</p>
          <h2 className="section-title">O que dizem nossos clientes</h2>
          <div className="w-16 h-1 bg-[#d4a017] mx-auto mt-5" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-gray-100 p-8 relative">
              <div className="absolute top-6 right-6 text-6xl text-[#d4a017]/10 font-display font-bold leading-none">"</div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <span key={s} className="text-[#d4a017]">★</span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm italic">"{t.text}"</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-[#0e1f42] text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
