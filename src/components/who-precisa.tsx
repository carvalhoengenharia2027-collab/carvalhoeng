"use client"

import { AlertTriangle } from "lucide-react"

const situations = [
  "Estabelecimentos comerciais sem Carta de Ocupação que precisam renovar o Alvará de Funcionamento",
  "Obras construídas sem alvará",
  "Ampliações, reformas ou alterações realizadas sem alvará",
  "Muros que avançaram a calçada ou chanfro (esquina)",
  "Imóveis sem área permeável ou que não obedeceram os recuos",
  "Imóveis que não conferem com a escritura",
  "Proprietários que desejam revender o imóvel financiado ou realizar refinanciamento",
]

export function WhoPrecisa() {
  return (
    <section id="quem-precisa" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <p className="text-[#1E3FD8] text-sm font-mono uppercase tracking-widest mb-3">Você se encaixa?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4">
            Quem precisa{" "}
            <span className="text-[#1E3FD8]">regularizar o imóvel?</span>
          </h2>
          <p className="text-[#888888] max-w-xl mx-auto">
            Se você tem alguma dessas situações, podemos ajudar. Consulta inicial sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {situations.map((situation, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-5 rounded-2xl border border-[#1a1a1a] bg-[#080808] hover:border-[#1E3FD8]/40 hover:shadow-[0_0_30px_rgba(30,63,216,0.06)] transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-[#1a1010] border border-[#ff4444]/20 flex items-center justify-center shrink-0 group-hover:border-[#1E3FD8]/30 group-hover:bg-[#1E3FD8]/10 transition-all">
                <AlertTriangle className="w-4 h-4 text-[#ff8844] group-hover:text-[#1E3FD8] transition-colors" />
              </div>
              <p className="text-sm text-[#888888] leading-relaxed pt-1 group-hover:text-[#aaaaaa] transition-colors">
                {situation}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5562998062169?text=Olá!%20Gostaria%20de%20regularizar%20meu%20imóvel."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1E3FD8] hover:bg-[#3d5ce8] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(30,63,216,0.35)]"
          >
            Quero regularizar meu imóvel
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
