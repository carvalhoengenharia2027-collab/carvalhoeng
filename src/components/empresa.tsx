"use client"

import { Target, Eye, Heart, Star, Award, ShieldCheck } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Missão",
    description: "Transformar projetos em realidade, unindo tecnologia e qualidade para oferecer soluções práticas e eficientes.",
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Ser referência em engenharia pela qualidade, confiança e adaptação às necessidades de cada cliente.",
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Compromisso, ética e dedicação total para atingir objetivos com impacto positivo na sociedade.",
  },
  {
    icon: Star,
    title: "Satisfação",
    description: "Atender com excelência, garantindo que cada cliente fique totalmente satisfeito.",
  },
  {
    icon: Award,
    title: "Qualidade",
    description: "Manter alto padrão em todas as etapas: do atendimento à entrega final.",
  },
  {
    icon: ShieldCheck,
    title: "Confiança",
    description: "Agir com honestidade e seriedade em cada compromisso assumido.",
  },
]

const stats = [
  { value: "10+", label: "anos de experiência" },
  { value: "100+", label: "imóveis regularizados" },
  { value: "CREA", label: "1017786453D-GO" },
  { value: "2", label: "cidades atendidas" },
]

export function Empresa() {
  return (
    <section id="empresa" className="py-24 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#1E3FD8] text-sm font-mono uppercase tracking-widest mb-3">Quem Somos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4 leading-tight">
            Há mais de 10 anos{" "}
            <span className="text-[#1E3FD8]">transformando projetos em realidade</span>
          </h2>
          <p className="text-[#888888] max-w-2xl mx-auto leading-relaxed">
            Engenharia focada em aprovações, regularizações e projetos residenciais e comerciais.
            Atendemos Goiânia, Aparecida de Goiânia e interior de Goiás.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-[#1a1a1a] rounded-xl p-6 text-center hover:border-[#1E3FD8]/30 transition-colors"
              style={{ backgroundColor: "rgba(30,63,216,0.03)" }}
            >
              <p className="text-3xl font-bold text-[#1E3FD8] mb-1">{stat.value}</p>
              <p className="text-[#888888] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative p-6 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#1E3FD8]/40 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#1E3FD8]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center mb-4 group-hover:border-[#1E3FD8]/40 transition-colors">
                  <pillar.icon className="w-6 h-6 text-[#1E3FD8]" />
                </div>
                <h3 className="text-lg font-bold text-[#fafafa] mb-2 group-hover:text-[#1E3FD8] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#888888] leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
