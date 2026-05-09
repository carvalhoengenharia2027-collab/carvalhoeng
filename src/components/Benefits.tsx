import { Check } from 'lucide-react'

const benefits = [
  'Facilidade na compra ou venda de imóveis',
  'Possibilidade de financiamento junto à Caixa e demais bancos',
  'Averbação da construção na escritura, valorizando o imóvel',
  'Viabilidade na renovação e emissão do Alvará de Funcionamento para empresas',
  'Viabiliza futuros processos de inventário ou partilha',
  'Obtenção da Carta de Ocupação e Habite-se',
  'Acompanhamento completo junto à prefeitura, agilizando o processo',
  'Desmembramento (desdobro) e retificação de áreas',
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="section-tag">Por que regularizar?</p>
          <h2 className="section-title mb-4">
            Benefícios da Regularização Imobiliária
          </h2>
          <p className="text-secondary text-lg leading-relaxed">
            Mesmo após o fim da anistia, a regularização é essencial para valorizar seu imóvel, 
            garantir segurança jurídica e facilitar negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-start gap-4 py-3"
            >
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <p className="text-foreground leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
