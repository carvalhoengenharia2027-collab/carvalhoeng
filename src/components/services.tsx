"use client"

import { FileSearch, Ruler, FileText, HardHat, ClipboardList, Building2 } from "lucide-react"

const services = [
  {
    title: "Perícias e Vistorias Técnicas",
    description:
      "Laudos técnicos detalhados para avaliar a segurança e conformidade do seu imóvel. Relatórios assinados por Engenheiro Civil com registro CREA.",
    icon: FileSearch,
  },
  {
    title: "Projetos de Engenharia",
    description:
      "Projetos Estruturais, Elétricos e Hidrossanitários completos para residências e comércios. Do croqui ao projeto executivo aprovado.",
    icon: Ruler,
  },
  {
    title: "Alvará de Construção",
    description:
      "Aprovação de projetos e obtenção de Alvará de Construção junto à Prefeitura. Habite-se, Carta de Ocupação e Alvará de Funcionamento para empresas.",
    icon: FileText,
  },
  {
    title: "Alvarás junto às Prefeituras",
    description:
      "Assessoria completa para aprovações junto à Prefeitura de Goiânia e Aparecida de Goiânia. Desmembramento, retificação de áreas e averbação em cartório.",
    icon: Building2,
  },
  {
    title: "Regularização de Imóveis",
    description:
      "Regularização de obras construídas sem alvará, ampliações e reformas não documentadas. INSS de obras e conformidade com a legislação vigente.",
    icon: ClipboardList,
  },
  {
    title: "Acompanhamento de Obras",
    description:
      "Gestão e execução de obras residenciais e comerciais do início ao fim. ART (Anotação de Responsabilidade Técnica) e controle de qualidade em cada etapa.",
    icon: HardHat,
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(30,63,216,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#1E3FD8] text-sm font-mono uppercase tracking-widest mb-3">Nossos Serviços</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4 tracking-tight">
            Soluções completas{" "}
            <span className="text-[#1E3FD8]">em engenharia</span>
          </h2>
          <p className="text-[#888888] max-w-2xl mx-auto">
            Da perícia técnica ao acompanhamento de obras. Cuidamos de todo o processo para que você não precise se preocupar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: "#0d0d0d",
                border: "1px solid rgba(30,63,216,0.25)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(30,63,216,0.7)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(30,63,216,0.25)"
              }}
            >
              {/* Ícone estilo Nexus: fundo escuro simples, sem preenchimento azul */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid #222222",
                }}
              >
                <service.icon className="w-5 h-5 text-[#1E3FD8]" />
              </div>

              {/* Título em azul — igual Nexus */}
              <h3 className="text-lg font-bold text-[#1E3FD8] mb-3 leading-snug">
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
                Solicitar orçamento
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
