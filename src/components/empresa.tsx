"use client"

import { useEffect, useRef, useState } from "react"
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
  { value: 10, suffix: "+", label: "anos de experiência" },
  { value: 200, suffix: "+", label: "imóveis regularizados" },
  { value: 2, suffix: "", label: "cidades atendidas" },
  { value: 100, suffix: "%", label: "clientes satisfeitos" },
]

function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatCard({ stat, animate }: { stat: typeof stats[0]; animate: boolean }) {
  const count = useCountUp(stat.value, 1200, animate)
  return (
    <div
      className="group relative p-6 rounded-2xl bg-[#0a0a0a]/50 border border-[#1a1a1a] hover:border-[#1E3FD8]/50 transition-all duration-500 backdrop-blur-sm text-center"
    >
      <div className="absolute inset-0 rounded-2xl bg-[#1E3FD8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <p className="relative z-10 text-3xl font-bold text-[#1E3FD8] mb-1 tabular-nums">
        {count}{stat.suffix}
      </p>
      <p className="relative z-10 text-[#888888] text-sm">{stat.label}</p>
    </div>
  )
}

export function Empresa() {
  const ref = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="empresa" className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(30,63,216,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#1E3FD8] text-sm font-mono uppercase tracking-widest mb-3">Quem Somos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4 leading-tight">
            Há mais de 10 anos{" "}
            <span className="text-[#1E3FD8]">transformando projetos em realidade</span>
          </h2>
          <p className="text-[#888888] max-w-2xl mx-auto leading-relaxed">
            Engenharia focada em aprovações, regularizações e projetos residenciais e comerciais.
            Atendemos Goiânia, Aparecida de Goiânia e interior de Goiás com responsabilidade técnica registrada no CREA.
          </p>
        </div>

        {/* Stats com contador animado */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} animate={animate} />
          ))}
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative p-8 rounded-2xl bg-[#0a0a0a]/50 border border-[#1a1a1a] hover:border-[#1E3FD8]/50 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#1E3FD8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#1E3FD8]/30 group-hover:shadow-[0_0_20px_rgba(30,63,216,0.2)] transition-all duration-500">
                  <pillar.icon className="w-6 h-6 text-[#1E3FD8]" />
                </div>

                <h3 className="text-xl font-bold text-[#fafafa] mb-3 group-hover:text-[#1E3FD8] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#888888] group-hover:text-[#aaaaaa] transition-colors">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CREA badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-[#1E3FD8]/20 bg-[#1E3FD8]/5">
            <div className="w-2 h-2 rounded-full bg-[#1E3FD8] animate-pulse" />
            <span className="text-sm text-[#888888]">
              Responsável Técnico: <strong className="text-[#fafafa]">Engº Civil Caio Maracaípe</strong>
              {" — "}
              <span className="text-[#1E3FD8] font-mono text-xs">CREA 1017786453D-GO</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
