"use client"

const steps = [
  {
    number: "01",
    title: "Consulta Gratuita",
    description: "Você nos descreve a situação do seu imóvel. Avaliamos o caso sem custo e sem compromisso.",
  },
  {
    number: "02",
    title: "Orçamento Detalhado",
    description: "Apresentamos um orçamento transparente com prazo, etapas e tudo que será necessário.",
  },
  {
    number: "03",
    title: "Coleta de Documentos",
    description: "Orientamos você sobre os documentos necessários e cuidamos de toda a burocracia.",
  },
  {
    number: "04",
    title: "Aprovação e Entrega",
    description: "Acompanhamos o processo junto à prefeitura até a entrega do alvará, habite-se ou certidão.",
  },
]

export function Process() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,63,216,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#1E3FD8] text-sm font-mono uppercase tracking-widest mb-3">Como Funciona</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4">
            Do contato à{" "}
            <span className="text-[#1E3FD8]">documentação em mãos</span>
          </h2>
          <p className="text-[#888888] max-w-xl mx-auto">
            Processo simples, transparente e sem surpresas. Você foca no seu imóvel, a gente cuida da burocracia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#1E3FD8]/30 to-transparent z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-[#0d0d0d] border border-[#1a1a1a] group-hover:border-[#1E3FD8]/50 flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(30,63,216,0.2)]">
                <span className="text-2xl font-bold text-[#1E3FD8] font-mono">{step.number}</span>
              </div>
              <h3 className="text-base font-bold text-[#fafafa] mb-2 group-hover:text-[#1E3FD8] transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-[#888888] leading-relaxed max-w-[220px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://wa.me/5562998062169?text=Olá!%20Gostaria%20de%20fazer%20uma%20consulta%20gratuita."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1E3FD8] hover:bg-[#3d5ce8] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-[0_0_25px_rgba(30,63,216,0.35)]"
          >
            Iniciar consulta gratuita
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
