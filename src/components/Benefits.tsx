const benefits = [
  { icon: '🏠', text: 'Facilidade na compra ou venda de imóveis' },
  { icon: '🏦', text: 'Possibilidade de financiamento junto à Caixa e demais bancos' },
  { icon: '📄', text: 'Averbação da construção na escritura, valorizando o imóvel' },
  { icon: '🏢', text: 'Viabilidade na renovação do Alvará de Funcionamento para empresas' },
  { icon: '⚖️', text: 'Viabiliza futuros processos de inventário ou partilha' },
  { icon: '✅', text: 'Obtenção da Carta de Ocupação e Habite-se' },
  { icon: '🚀', text: 'Acompanhamento completo junto à prefeitura, agilizando todo o processo' },
  { icon: '📐', text: 'Desmembramento (desdobro) e retificação de áreas' },
]

export default function Benefits() {
  return (
    <section id="vantagens" className="py-24 bg-[#f8f7f4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="section-tag">Por que regularizar</p>
          <h2 className="section-title mb-4">
            Benefícios da Regularização Imobiliária
          </h2>
          <div className="w-16 h-1 bg-[#d4a017] mb-6" />
          <p className="text-gray-500 text-lg leading-relaxed">
            Mesmo após o fim da anistia, a regularização continua sendo essencial para valorizar seu imóvel,
            garantir segurança jurídica e facilitar negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-white p-6 hover:bg-[#0e1f42] group transition-all duration-300 cursor-default"
            >
              <span className="text-3xl block mb-4">{benefit.icon}</span>
              <p className="text-gray-700 group-hover:text-white text-sm leading-relaxed transition-colors duration-300">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#0e1f42] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg">Regularize seu imóvel agora</p>
            <p className="text-white/50 text-sm mt-1">Consulta gratuita — sem compromisso</p>
          </div>
          <a
            href="https://wa.me/5562998062169"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-8 py-4 uppercase tracking-wider hover:bg-[#1da851] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar Agora
          </a>
        </div>
      </div>
    </section>
  )
}
