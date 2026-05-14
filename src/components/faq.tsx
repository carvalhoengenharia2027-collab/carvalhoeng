"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Quanto tempo leva para regularizar um imóvel em Goiânia?",
    a: "O prazo varia conforme a situação do imóvel e a demanda na prefeitura, mas em média trabalhamos com 30 a 90 dias para processos de regularização. Casos mais simples, como emissão de Habite-se para obra nova, podem ser mais rápidos. Fazemos uma avaliação prévia gratuita para te dar um prazo mais preciso.",
  },
  {
    q: "Meu imóvel foi construído há anos sem alvará. Ainda dá para regularizar?",
    a: "Sim! A regularização de obras já construídas sem alvará é exatamente um dos nossos serviços mais procurados. O processo envolve levantamento da situação atual, elaboração de projetos e aprovação junto à prefeitura. Cada caso é avaliado individualmente — fale conosco para entender sua situação.",
  },
  {
    q: "Preciso do Habite-se para vender ou financiar meu imóvel?",
    a: "Sim. O Habite-se é um documento obrigatório para qualquer transação imobiliária formal, financiamento pela Caixa ou outros bancos, e também para inventários e partilhas. Sem ele, a venda pode ser bloqueada ou o comprador pode não conseguir financiamento.",
  },
  {
    q: "O que é a ART e por que ela é importante?",
    a: "A ART (Anotação de Responsabilidade Técnica) é o documento que registra a responsabilidade de um engenheiro por um serviço técnico. Ela é obrigatória por lei para qualquer obra, projeto ou laudo e garante segurança jurídica para o proprietário. Todos os nossos serviços incluem ART assinada.",
  },
  {
    q: "Vocês atendem apenas Goiânia?",
    a: "Atendemos principalmente Goiânia e Aparecida de Goiânia, onde temos expertise total nos processos junto às prefeituras locais. Para cidades do interior de Goiás, podemos atender dependendo da demanda — entre em contato para verificar disponibilidade.",
  },
  {
    q: "Como funciona a consulta inicial?",
    a: "A consulta inicial é gratuita e sem compromisso. Você nos descreve a situação do seu imóvel via WhatsApp ou e-mail, enviamos as informações necessárias, avaliamos o caso e apresentamos um orçamento detalhado. Só iniciamos o processo após sua aprovação.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(30,63,216,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="text-[#1E3FD8] text-sm font-mono uppercase tracking-widest mb-3">Dúvidas Frequentes</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-3">
            Perguntas{" "}
            <span className="text-[#1E3FD8]">mais comuns</span>
          </h2>
          <p className="text-[#888888]">
            Respostas rápidas para as dúvidas que mais recebemos. Não encontrou a sua?{" "}
            <a
              href="https://wa.me/5562998062169"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E3FD8] hover:underline"
            >
              Fale conosco.
            </a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#1a1a1a] rounded-xl overflow-hidden transition-colors hover:border-[#1E3FD8]/30"
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-sm font-semibold text-[#fafafa] leading-snug pr-2">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#1E3FD8] shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-96" : "max-h-0"}`}
              >
                <p className="px-5 pb-5 text-sm text-[#888888] leading-relaxed border-t border-[#1a1a1a] pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
