"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "João Silva",
    location: "Anápolis/GO",
    initials: "JS",
    text: "Regularizei meu imóvel através da Carvalho Engenharia em apenas 15 dias. Agradeço imensamente o atendimento excepcional e a agilidade impressionante. Indico a todos!",
    stars: 5,
  },
  {
    name: "Maria Santos",
    location: "Goiânia/GO",
    initials: "MS",
    text: "Profissionais extremamente competentes. Conseguiram resolver uma pendência que eu tinha há anos com a prefeitura. O processo foi transparente e o resultado superou minhas expectativas.",
    stars: 5,
  },
  {
    name: "Carlos Oliveira",
    location: "Aparecida de Goiânia/GO",
    initials: "CO",
    text: "Atendimento humanizado e preço justo. Recomendo para quem precisa de regularização ou qualquer serviço de engenharia. A equipe é muito atenciosa e sempre disponível.",
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(30,63,216,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-[#1E3FD8] font-semibold mb-3">Depoimentos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-3">
            O que nossos clientes dizem
          </h2>
          <p className="text-[#888888]">
            Imóveis regularizados, famílias satisfeitas e propriedades valorizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#1E3FD8]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(30,63,216,0.08)]"
            >
              <Quote className="w-6 h-6 text-[#1E3FD8]/30" />

              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-[#1E3FD8] text-[#1E3FD8]" />
                ))}
              </div>

              <p className="text-[#aaaaaa] text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>

              <div className="pt-4 border-t border-[#1a1a1a] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1E3FD8]/10 border border-[#1E3FD8]/20 flex items-center justify-center shrink-0">
                  <span className="text-[#1E3FD8] text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-[#fafafa] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#666666] text-xs mt-0.5">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
