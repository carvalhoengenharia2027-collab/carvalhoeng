const cases = [
  'Estabelecimentos comerciais que não possuem Carta de Ocupação e precisam renovar o Alvará de Funcionamento',
  'Obras construídas sem alvará',
  'Ampliações, reformas e alterações sem alvará',
  'Muros que avançaram a calçada ou chanfro (esquina)',
  'Imóveis sem área permeável ou que não obedeceram os recuos',
  'Imóveis que não conferem com a escritura',
  'Imóveis que o proprietário deseja revender, financiar ou realizar refinanciamento',
]

export default function WhoShouldRegularize() {
  return (
    <section
      id="quem-deve"
      className="py-24"
      style={{ background: 'linear-gradient(135deg, #091530 0%, #0e1f42 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#d4a017] text-xs font-bold tracking-[0.4em] uppercase mb-3">
            Quem Deve Regularizar
          </p>
          <h2 className="font-display text-4xl text-white mb-4">Você se encaixa em alguma dessas situações?</h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Se qualquer um dos casos abaixo descreve seu imóvel, entre em contato — podemos ajudar.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {cases.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-5 bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-[#d4a017]/40 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-[#d4a017] flex items-center justify-center">
                <span className="text-[#0e1f42] font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="text-white/80 leading-relaxed pt-1">{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5562998062169"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-[#d4a017] text-[#d4a017] font-bold text-sm px-10 py-4 uppercase tracking-wider hover:bg-[#d4a017] hover:text-[#0e1f42] transition-all duration-300"
          >
            Consulta Gratuita pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
