import { CheckCircle } from 'lucide-react'

const trustBadges = [
  '+10 anos de experiência',
  'CREA Ativo',
  'Atuamos em Goiânia e Aparecida',
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with warm overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100"
      />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C2510F' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 text-balance">
          Regularize seu imóvel.
          <br />
          <span className="text-primary">Sem burocracia, com segurança.</span>
        </h1>

        <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Alvará de Construção, Habite-se, Regularização de Obras e Projetos de Engenharia em Goiânia e Aparecida de Goiânia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://wa.me/5562998062169"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-base px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Solicitar Orçamento Grátis
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 border-2 border-foreground/20 text-foreground font-semibold text-base px-8 py-4 rounded-xl hover:border-primary hover:text-primary transition-all duration-300"
          >
            Ver Serviços
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-secondary">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
