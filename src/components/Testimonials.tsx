import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'João Silva',
    location: 'Anápolis, GO',
    text: 'Regularizei meu imóvel através da Carvalho Engenharia em apenas 15 dias, agradeço imensamente o atendimento excepcional e a agilidade impressionante. Indico a todos!',
    rating: 5,
  },
  {
    name: 'Maria Fernanda',
    location: 'Goiânia, GO',
    text: 'Processo muito tranquilo e rápido. A equipe foi muito atenciosa e cuidadosa em cada etapa. Meu habite-se saiu sem nenhuma complicação.',
    rating: 5,
  },
  {
    name: 'Carlos Eduardo',
    location: 'Aparecida de Goiânia, GO',
    text: 'Excelente empresa! Consegui o alvará da minha loja em tempo recorde. Atendimento de primeira e ótimo custo-benefício. Recomendo!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-tag">O que dizem de nós</p>
          <h2 className="section-title">Feedback de clientes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-card border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-secondary leading-relaxed mb-6 italic">{`"${t.text}"`}</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-secondary text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
