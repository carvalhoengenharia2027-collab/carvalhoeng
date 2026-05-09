"use client"

import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Send, CheckCircle, Loader2, MapPin, Clock, Phone } from "lucide-react"

export function CTASection() {
  const [state, handleSubmit] = useForm("xpwzgvkq") // substitua pelo seu form ID do Formspree
  const [activeTab, setActiveTab] = useState<"quick" | "form">("quick")

  return (
    <section id="contato" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#1E3FD8]/8 blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#1E3FD8] text-sm font-mono uppercase tracking-widest mb-3">Contato</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fafafa] mb-6 text-balance">
            Regularize seu imóvel{" "}
            <span className="text-[#1E3FD8]">hoje mesmo</span>
          </h2>
          <p className="text-lg text-[#888888] max-w-xl mx-auto">
            Consulta inicial sem compromisso. Fale com um Engenheiro Civil registrado no CREA.
          </p>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: Phone, label: "WhatsApp", value: "(62) 9 8062-1690" },
            { icon: Clock, label: "Horário", value: "Seg–Sex, 8h às 18h" },
            { icon: MapPin, label: "Endereço", value: "Ed. Office Flamboyant, Goiânia/GO" },
          ].map((info) => (
            <div key={info.label} className="flex items-start gap-3 p-4 rounded-xl border border-[#1a1a1a] bg-[#080808]">
              <div className="w-9 h-9 rounded-lg bg-[#1E3FD8]/10 border border-[#1E3FD8]/20 flex items-center justify-center shrink-0">
                <info.icon className="w-4 h-4 text-[#1E3FD8]" />
              </div>
              <div>
                <p className="text-xs text-[#666666] uppercase tracking-wider mb-0.5">{info.label}</p>
                <p className="text-sm text-[#fafafa]">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-[#111111] border border-[#1a1a1a] rounded-lg p-1 gap-1">
            <button
              onClick={() => setActiveTab("quick")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "quick" ? "bg-[#1a1a1a] text-[#fafafa]" : "text-[#666666] hover:text-[#888888]"
              }`}
            >
              Contato rápido
            </button>
            <button
              onClick={() => setActiveTab("form")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "form" ? "bg-[#1a1a1a] text-[#fafafa]" : "text-[#666666] hover:text-[#888888]"
              }`}
            >
              Formulário
            </button>
          </div>
        </div>

        {/* Quick contact */}
        {activeTab === "quick" && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#1E3FD8] text-white hover:bg-[#3d5ce8] font-semibold px-10 py-7 text-lg shadow-[0_0_30px_rgba(30,63,216,0.4)] hover:shadow-[0_0_50px_rgba(30,63,216,0.6)] transition-all duration-300"
            >
              <a
                href="https://wa.me/5562998062169?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chamar no WhatsApp
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#1a1a1a] bg-transparent text-[#fafafa] hover:bg-[#151515] hover:border-[#1E3FD8] px-8 py-7 text-lg transition-all duration-300"
            >
              <a href="mailto:carvalhoeng@outlook.com.br">
                <Mail className="mr-2 h-5 w-5" />
                ou envie um e-mail
              </a>
            </Button>
          </div>
        )}

        {/* Formal form */}
        {activeTab === "form" && (
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-8 sm:p-10">
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle className="w-14 h-14 text-[#1E3FD8]" />
                <h3 className="text-xl font-semibold text-[#fafafa]">Mensagem enviada!</h3>
                <p className="text-[#888888]">Recebemos seu contato. Retornaremos em até 1 dia útil.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#666666] uppercase tracking-wider">Nome completo *</label>
                    <input
                      required
                      name="name"
                      placeholder="Seu nome"
                      className="w-full bg-[#111111] border border-[#1a1a1a] rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#444444] text-sm focus:outline-none focus:border-[#1E3FD8] transition-colors"
                    />
                    <ValidationError field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#666666] uppercase tracking-wider">Telefone *</label>
                    <input
                      required
                      name="phone"
                      placeholder="(62) 99999-9999"
                      className="w-full bg-[#111111] border border-[#1a1a1a] rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#444444] text-sm focus:outline-none focus:border-[#1E3FD8] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#666666] uppercase tracking-wider">E-mail *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      className="w-full bg-[#111111] border border-[#1a1a1a] rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#444444] text-sm focus:outline-none focus:border-[#1E3FD8] transition-colors"
                    />
                    <ValidationError field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#666666] uppercase tracking-wider">Tipo de serviço</label>
                    <select
                      name="service"
                      className="w-full bg-[#111111] border border-[#1a1a1a] rounded-lg px-4 py-3 text-[#fafafa] text-sm focus:outline-none focus:border-[#1E3FD8] transition-colors"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="alvara">Alvará de Construção</option>
                      <option value="habite-se">Habite-se</option>
                      <option value="regularizacao">Regularização de Obras</option>
                      <option value="projeto">Projeto de Engenharia</option>
                      <option value="pericia">Perícia / Laudo Técnico</option>
                      <option value="obra">Obras Residenciais</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#666666] uppercase tracking-wider">Mensagem *</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Descreva brevemente sua situação ou o serviço que precisa..."
                    className="w-full bg-[#111111] border border-[#1a1a1a] rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#444444] text-sm focus:outline-none focus:border-[#1E3FD8] transition-colors resize-none"
                  />
                  <ValidationError field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1E3FD8] hover:bg-[#3d5ce8] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
                  >
                    {state.submitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {state.submitting ? "Enviando..." : "Enviar mensagem"}
                  </button>
                  <p className="text-xs text-[#444444]">Respondemos em até 1 dia útil</p>
                </div>
              </form>
            )}
          </div>
        )}

        <p className="text-sm text-[#666666] text-center mt-8">
          Atendimento em Goiânia, Aparecida de Goiânia e interior de Goiás
        </p>
      </div>
    </section>
  )
}
