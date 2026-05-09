const pillars = [
  {
    icon: '🎯',
    title: 'Missão',
    text: 'Transformar projetos em realidade, unindo tecnologia, recursos humanos e qualidade para oferecer soluções práticas e eficientes.',
  },
  {
    icon: '🔭',
    title: 'Visão',
    text: 'Ser referência em engenharia pela qualidade, confiança e adaptação às necessidades de cada cliente.',
  },
  {
    icon: '⚖️',
    title: 'Valores',
    text: 'Compromisso, ética e dedicação total para atingir objetivos com impacto positivo na sociedade.',
  },
  {
    icon: '⭐',
    title: 'Satisfação',
    text: 'Atender com excelência, garantindo que cada cliente fique totalmente satisfeito.',
  },
  {
    icon: '🏆',
    title: 'Qualidade',
    text: 'Manter alto padrão de qualidade em todas as etapas: do atendimento à entrega final.',
  },
  {
    icon: '🤝',
    title: 'Confiança',
    text: 'Agir com honestidade e seriedade em cada compromisso assumido.',
  },
]

export default function About() {
  return (
    <section id="empresa" className="py-24 bg-[#f8f7f4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="section-tag">Quem Somos</p>
            <h2 className="section-title mb-6">
              Há mais de 10 anos transformando projetos em realidade
            </h2>
            <div className="w-16 h-1 bg-[#d4a017] mb-6" />
            <p className="text-gray-600 leading-relaxed text-lg">
              A Carvalho Engenharia é especializada em regularização de obras, aprovação de projetos e consultoria técnica em Goiânia e Aparecida de Goiânia. Nossa equipe atua com agilidade e segurança jurídica para garantir que o seu imóvel esteja em conformidade com a legislação vigente.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Responsável Técnico: <strong>Engº Civil Caio Maracaípe</strong> — CREA 1017786453D-GO
            </p>
          </div>

          <div
            className="relative"
            style={{
              background: 'linear-gradient(135deg, #0e1f42, #1a3a6b)',
              padding: '2.5rem',
            }}
          >
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#d4a017]" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#d4a017]" />
            <p className="text-white/40 text-xs uppercase tracking-widest mb-4">CNPJ</p>
            <p className="text-white font-bold text-lg mb-1">36.075.475/0001-94</p>
            <p className="text-white/60 text-sm mb-8">Carvalho Engenharia - Projetos e Consultoria</p>

            <div className="space-y-3">
              {['Goiânia — GO', 'Aparecida de Goiânia — GO', 'Interior de Goiás'].map((city) => (
                <div key={city} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#d4a017]" />
                  <span className="text-white/70 text-sm">{city}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Atendimento</p>
              <p className="text-white text-sm">Segunda à Sexta — 8h às 18h</p>
              <p className="text-white/50 text-xs mt-1">Por agendamento</p>
            </div>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white border border-gray-100 p-6 hover:border-[#d4a017] hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-3xl block mb-3">{pillar.icon}</span>
              <h3 className="font-bold text-[#0e1f42] text-sm uppercase tracking-wider mb-2 group-hover:text-[#b8860b] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
