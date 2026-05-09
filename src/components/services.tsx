"use client"

import { FileSearch, Ruler, FileText, HardHat } from "lucide-react"

const services = [
  {
    icon: FileSearch,
    title: "Perícias e Vistorias Técnicas",
    description:
      "Laudos técnicos detalhados para avaliar a segurança e conformidade do seu imóvel. Relatórios assinados por Engenheiro Civil com registro CREA.",
    cta: "Solicitar laudo",
  },
  {
    icon: Ruler,
    title: "Projetos de Engenharia",
    description:
      "Projetos Estruturais, Elétricos e Hidrossanitários completos para residências e comércios. Do croqui ao projeto executivo aprovado.",
    cta: "Solicitar projeto",
  },
  {
    icon: FileText,
    title: "Alvarás, Regularizações e Laudos",
    description:
      "Regularização completa do imóvel junto à prefeitura: Alvará de Construção, Habite-se, Carta de Ocupação, averbação em cartório e INSS de obras.",
    cta: "Regularizar imóvel",
  },
  {
    icon: HardHat,
    title: "Obras Residenciais",
    description:
      "Acompanhamento e execução de obras do início ao fim. Gestão completa com ART (Anotação de Responsabilidade Técnica) e controle de qualidade.",
    cta: "Solicitar orçamento",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(30,63,216,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#1E3FD8] text-sm font-mono uppercase tracking-widest mb-3">Nossos Serviços</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4 tracking-tight">
            Soluções completas{" "}
            <span className="text-[#1E3FD8]">em engenharia</span>
          </h2>
          <p className="text-[#888888] max-w-2xl mx-auto">
            Da perícia técnica à obra finalizada. Cuidamos de todo o processo para que você não precise se preocupar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-[#080808] border border-[#1a1a1a] hover:border-[#1E3FD8]/50 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#1E3FD8]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#111111] border border-[#222222] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#1E3FD8]/40 transition-all duration-300 shadow-[0_0_0_0_rgba(30,63,216,0)] group-hover:shadow-[0_0_20px_rgba(30,63,216,0.2)]">
                  <service.icon className="w-7 h-7 text-[#1E3FD8]" />
                </div>

                <h3 className="text-xl font-bold text-[#fafafa] mb-3 group-hover:text-[#1E3FD8] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#888888] mb-6">
                  {service.description}
                </p>

                <a
                  href={`https://wa.me/5562998062169?text=Olá!%20Gostaria%20de%20informações%20sobre%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3FD8] hover:text-[#3d5ce8] transition-colors"
                >
                  {service.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
