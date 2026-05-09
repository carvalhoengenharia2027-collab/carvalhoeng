import { Target, Eye, Scale, Star, Award, Handshake } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'Missão',
    text: 'Transformar projetos em realidade, unindo tecnologia e qualidade para oferecer soluções práticas e eficientes.',
  },
  {
    icon: Eye,
    title: 'Visão',
    text: 'Ser referência em engenharia pela qualidade, confiança e adaptação às necessidades de cada cliente.',
  },
  {
    icon: Scale,
    title: 'Valores',
    text: 'Compromisso, ética e dedicação total para atingir objetivos com impacto positivo na sociedade.',
  },
  {
    icon: Star,
    title: 'Satisfação',
    text: 'Atender com excelência, garantindo que cada cliente fique totalmente satisfeito.',
  },
  {
    icon: Award,
    title: 'Qualidade',
    text: 'Manter alto padrão em todas as etapas: do atendimento à entrega final.',
  },
  {
    icon: Handshake,
    title: 'Confiança',
    text: 'Agir com honestidade e seriedade em cada compromisso assumido.',
  },
]

export default function About() {
  return (
    <section id="empresa" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="section-tag">Quem Somos</p>
          <h2 className="section-title mb-6">
            Há mais de 10 anos transformando projetos em realidade
          </h2>
          <p className="text-secondary leading-relaxed text-lg">
            Engenharia focada em aprovações, regularizações e projetos residenciais e comerciais. 
            Atendemos Goiânia, Aparecida de Goiânia e interior de Goiás com agilidade e segurança jurídica.
          </p>
          <p className="text-secondary leading-relaxed mt-4">
            <span className="font-semibold text-foreground">Responsável Técnico:</span> Engº Civil Caio Maracaípe — CREA 1017786453D-GO
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon
            return (
              <div
                key={pillar.title}
                className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">
                  {pillar.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">{pillar.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
