'use client'

import { useState, useEffect } from "react"
import { HardHat, FileCheck, Home, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

function useTypewriter(text: string, speed = 65, delay = 400) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let i = 0
    setDisplayText("")
    setIsComplete(false)
    const tick = () => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
        timeout = setTimeout(tick, speed)
      } else {
        setIsComplete(true)
      }
    }
    timeout = setTimeout(tick, delay)
    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return { displayText, isComplete }
}

export function Hero() {
  const FULL_TEXT = "Regularize seu imóvel."
  const { displayText, isComplete } = useTypewriter(FULL_TEXT, 65, 400)

  const breakWord = "imóvel."
  const breakIndex = FULL_TEXT.indexOf(breakWord)
  const line1Full = FULL_TEXT.slice(0, breakIndex)
  const line1disp = displayText.slice(0, Math.min(displayText.length, line1Full.length))
  const line2disp = displayText.length > line1Full.length ? displayText.slice(line1Full.length) : ""

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,63,216,0.10)_0%,transparent_60%)] pointer-events-none z-0" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="px-4 py-1.5 rounded-full border border-[#1E3FD8]/40 bg-[#1E3FD8]/10 backdrop-blur-md flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#1E3FD8] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#1E3FD8] font-semibold">+10 anos de experiência</span>
          </div>
          <div className="px-4 py-1.5 rounded-full border border-[#fafafa]/10 bg-[#fafafa]/5 backdrop-blur-md flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3 text-[#1E3FD8]" />
            <span className="text-[10px] uppercase tracking-widest text-[#888888] font-semibold">CREA 1017786453D-GO</span>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-bold text-[#fafafa] mb-6 tracking-tight leading-[1.15]">
          <span>{line1disp || "Regularize seu "}</span>
          {(displayText.length >= line1Full.length || !displayText) && <br />}
          <span className="text-[#1E3FD8] inline-flex items-baseline">
            {line2disp || (displayText ? "" : "imóvel.")}
            <span
              className={`inline-block w-[3px] h-[0.85em] bg-[#1E3FD8] ml-1 align-middle ${isComplete ? "animate-[blink_1s_steps(1)_infinite]" : "opacity-100"}`}
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-[#888888] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Alvará de Construção, Habite-se, Regularização de Obras e Projetos de Engenharia em{" "}
          <strong className="text-[#fafafa]">Goiânia e Aparecida de Goiânia</strong>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            asChild
            className="bg-[#1E3FD8] hover:bg-[#3d5ce8] text-white font-bold px-8 py-6 rounded-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(30,63,216,0.4)]"
          >
            <a href="https://wa.me/5562998062169?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento." target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento Grátis
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#1a1a1a] text-[#fafafa] hover:bg-[#111111] px-8 py-6 rounded-xl transition-all"
          >
            <a href="#servicos">Ver Serviços</a>
          </Button>
        </div>

        {/* Mini features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto pt-8 border-t border-[#1a1a1a]">
          {[
            { icon: FileCheck, label: "Alvará & Habite-se" },
            { icon: Home, label: "Regularização de Obras" },
            { icon: HardHat, label: "Projetos de Engenharia" },
            { icon: CheckCircle2, label: "Perícias e Laudos" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 group">
              <div className="w-14 h-14 rounded-full bg-[#111111] flex items-center justify-center border border-[#222222] group-hover:border-[#1E3FD8]/50 transition-colors">
                <item.icon className="w-7 h-7 text-[#1E3FD8]" />
              </div>
              <span className="text-xs font-semibold text-[#aaaaaa] group-hover:text-[#fafafa] transition-colors text-center leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
