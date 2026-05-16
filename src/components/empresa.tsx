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
      className="group relative rounded-xl p-6 text-center transition-all duration-500"
      style={{ backgroundColor: "#0d0d0d", border: "1px solid #1a1a1a" }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(30,63,216,0.5)"
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#1a1a1a"
      }}
    >
      <p className="text-3xl font-bold mb-1 tabular-nums" style={{ color: "#1E3FD8" }}>
        {count}{stat.suffix}
      </p>
      <p className="text-sm" style={{ color: "#888888" }}>{stat.label}</p>
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
    <section id="empresa" className="py-24 border-t border-white/5 relative overflow-hidden" style={{ backgroundColor: "#080808" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(30,63,216,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono uppercase tracking-widest mb-3" style={{ color: "#1E3FD8" }}>Quem Somos</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: "#fafafa" }}>
            Há mais de 10 anos{" "}
            <span style={{ color: "#1E3FD8" }}>transformando projetos em realidade</span>
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: "#888888" }}>
            Engenharia focada em aprovações, regularizações e projetos residenciais e comerciais.
            Atendemos Goiânia, Aparecida de Goiânia e interior de Goiás com responsabilidade técnica registrada no CREA.
          </p>
        </div>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} animate={animate} />
          ))}
        </div>

        {/* Pilares — estilo exato Nexus */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative p-8 rounded-2xl transition-all duration-500"
              style={{ backgroundColor: "#0d0d0d", border: "1px solid #1a1a1a" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(30,63,216,0.5)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#1a1a1a"
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: "rgba(30,63,216,0.04)" }}
              />

              <div className="relative z-10">
                {/* Ícone em caixa azul — estilo Nexus */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500"
                  style={{
                    backgroundColor: "rgba(30,63,216,0.15)",
                    border: "1px solid rgba(30,63,216,0.4)",
                  }}
                >
                  <pillar.icon className="w-6 h-6" style={{ color: "#1E3FD8" }} />
                </div>

                <h3
                  className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#1E3FD8]"
                  style={{ color: "#fafafa" }}
                >
                  {pillar.title}
                </h3>

                <p
                  className="text-sm leading-relaxed transition-colors duration-300 group-hover:text-[#aaaaaa]"
                  style={{ color: "#888888" }}
                >
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CREA badge */}
        <div className="mt-12 flex justify-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl"
            style={{ border: "1px solid rgba(30,63,216,0.2)", backgroundColor: "rgba(30,63,216,0.05)" }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#1E3FD8" }} />
            <span className="text-sm" style={{ color: "#888888" }}>
              Responsável Técnico: <strong style={{ color: "#fafafa" }}>Engº Civil Caio Maracaípe</strong>
              {" — "}
              <span className="font-mono text-xs" style={{ color: "#1E3FD8" }}>CREA 1017786453D-GO</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
