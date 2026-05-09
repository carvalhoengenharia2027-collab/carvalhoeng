import { FileSearch, HardHat, FileCheck, Home, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: FileSearch,
    title: 'Perícias e Vistorias Técnicas',
    description: 'Laudos técnicos detalhados para avaliar segurança e conformidade do imóvel.',
  },
  {
    icon: HardHat,
    title: 'Projetos de Engenharia',
    description: 'Projetos Estruturais, Elétricos e Hidrossanitários completos.',
  },
  {
    icon: FileCheck,
    title: 'Alvarás, Regularizações e Laudos',
    description: 'Regularização completa do imóvel junto à prefeitura.',
  },
  {
    icon: Home,
    title: 'Obras Residenciais',
    description: 'Acompanhamento e execução de obras do início ao fim.',
  },
]

const WHATSAPP = 'https://wa.me/5562998062169'

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag">Nossos Serviços</p>
          <h2 className="section-title">Soluções completas em engenharia</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.title}
                className="bg-card border border-border p-8 rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-foreground font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-secondary leading-relaxed mb-6">{service.description}</p>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
                >
                  Solicitar via WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
