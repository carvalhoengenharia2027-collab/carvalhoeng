import { AlertCircle } from 'lucide-react'

const cases = [
  'Estabelecimentos comerciais sem Carta de Ocupação que precisam renovar o Alvará de Funcionamento',
  'Obras construídas sem alvará',
  'Ampliações, reformas ou alterações realizadas sem alvará',
  'Muros que avançaram a calçada ou chanfro (esquina)',
  'Imóveis sem área permeável ou que não obedeceram os recuos',
  'Imóveis que não conferem com a escritura',
  'Proprietários que desejam revender o imóvel financiado ou realizar refinanciamento',
]

export default function WhoShouldRegularize() {
  return (
    <section id="quem-precisa" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-tag">Você se encaixa?</p>
          <h2 className="section-title mb-4">Quem precisa regularizar o imóvel?</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Se você tem alguma dessas situações, podemos te ajudar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {cases.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border p-5 rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground text-sm leading-relaxed">{item}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5562998062169"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Meu imóvel tem essa situação — quero regularizar
          </a>
        </div>
      </div>
    </section>
  )
}
