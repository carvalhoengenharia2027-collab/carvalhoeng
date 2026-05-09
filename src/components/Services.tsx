const services = [
  {
    number: '01',
    title: 'Perícias e Vistorias Técnicas',
    description:
      'Realizamos perícias, vistorias e laudos técnicos detalhados para avaliar a segurança e conformidade do seu imóvel.',
    items: ['Laudos técnicos', 'Vistorias de segurança', 'Avaliações de conformidade'],
  },
  {
    number: '02',
    title: 'Projetos de Engenharia',
    description:
      'A Carvalho Engenharia oferece a melhor solução em Projetos Estruturais, Elétricos e Hidrossanitários.',
    items: ['Projetos estruturais', 'Projetos elétricos', 'Projetos hidrossanitários'],
  },
  {
    number: '03',
    title: 'Alvarás, Regularizações e Laudos',
    description:
      'Fazemos a regularização completa do seu imóvel junto à prefeitura, de forma rápida e segura.',
    items: ['Alvará de construção', 'Habite-se', 'Regularização de obras', 'Averbação'],
  },
  {
    number: '04',
    title: 'Obras Residenciais',
    description:
      'Acompanhamos e executamos todas as obras do início ao fim, com controle de qualidade em cada etapa.',
    items: ['Acompanhamento de obras', 'Gestão técnica', 'Execução residencial'],
  },
]

const WHATSAPP = 'https://wa.me/5562998062169'

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #0e1f42 0%, #1a3a6b 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#d4a017] text-xs font-bold tracking-[0.4em] uppercase mb-3">
            O que fazemos
          </p>
          <h2 className="font-display text-4xl text-white">Nossos Serviços</h2>
          <div className="w-16 h-0.5 bg-[#d4a017] mx-auto mt-5" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-[#d4a017]/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="font-display text-5xl font-bold text-[#d4a017]/30 leading-none group-hover:text-[#d4a017]/50 transition-colors">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">{service.title}</h3>
                </div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-5">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/50 text-sm">
                    <div className="w-1 h-1 bg-[#d4a017] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#d4a017] text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all duration-200"
              >
                Entre em contato
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
