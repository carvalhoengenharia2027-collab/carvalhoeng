"use client"

import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Facilidade na compra ou venda de imóveis",
  "Financiamento junto à Caixa e demais bancos",
  "Averbação da construção na escritura, valorizando o imóvel",
  "Renovação e emissão do Alvará de Funcionamento para empresas",
  "Viabiliza processos de inventário ou partilha",
  "Obtenção da Carta de Ocupação e Habite-se",
  "Acompanhamento completo junto à prefeitura",
  "Desmembramento (desdobro) e retificação de áreas",
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#1E3FD8]/5 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1E3FD8]/30 bg-[#1E3FD8]/8 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#1E3FD8] animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-[#1E3FD8] font-semibold">Por que regularizar?</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4 leading-tight">
              Benefícios da{" "}
              <span className="text-[#1E3FD8]">Regularização Imobiliária</span>
            </h2>

            <p className="text-[#888888] mb-8 leading-relaxed">
              Mesmo após o fim da anistia, a regularização continua sendo essencial para valorizar
              seu imóvel, garantir segurança jurídica e facilitar negócios.
            </p>

            <a
              href="https://wa.me/5562998062169?text=Olá!%20Quero%20regularizar%20meu%20imóvel."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1E3FD8] hover:bg-[#3d5ce8] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(30,63,216,0.3)]"
            >
              Quero regularizar meu imóvel
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right — checklist */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-4 rounded-xl border border-[#1a1a1a] hover:border-[#1E3FD8]/30 bg-[#0a0a0a] hover:bg-[#0d0d0d] transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1E3FD8]/10 border border-[#1E3FD8]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1E3FD8]/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3FD8]" />
                </div>
                <p className="text-[#aaaaaa] text-sm leading-relaxed group-hover:text-[#fafafa] transition-colors pt-1">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
