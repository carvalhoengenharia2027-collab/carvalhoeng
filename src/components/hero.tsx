'use client'

import { useState, useEffect } from "react"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHRASES = [
  { pre: "Seu imóvel ainda", highlight: "não tem Habite-se?" },
  { pre: "Construiu sem", highlight: "alvará de obra?" },
  { pre: "Quer vender mas o", highlight: "banco bloqueou?" },
  { pre: "Empresa sem", highlight: "Alvará de Funcionamento?" },
  { pre: "Obra diferente", highlight: "da escritura?" },
  { pre: "Regularize seu", highlight: "imóvel agora." },
]

function useTypewriterCycle(
  phrases: typeof PHRASES,
  typeSpeed = 55,
  pauseMs = 2400,
  deleteSpeed = 28
) {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [displayPre, setDisplayPre] = useState("")
  const [displayHighlight, setDisplayHighlight] = useState("")
  const [phase, setPhase] = useState<"typing-pre" | "typing-hl" | "pause" | "deleting">("typing-pre")

  useEffect(() => {
    const current = phrases[phraseIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (phase === "typing-pre") {
      if (displayPre.length < current.pre.length) {
        timeout = setTimeout(() => setDisplayPre(current.pre.slice(0, displayPre.length + 1)), typeSpeed)
      } else {
        timeout = setTimeout(() => setPhase("typing-hl"), 120)
      }
    } else if (phase === "typing-hl") {
      if (displayHighlight.length < current.highlight.length) {
        timeout = setTimeout(() => setDisplayHighlight(current.highlight.slice(0, displayHighlight.length + 1)), typeSpeed)
      } else {
        timeout = setTimeout(() => setPhase("pause"), pauseMs)
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 0)
    } else if (phase === "deleting") {
      const totalLen = displayPre.length + displayHighlight.length
      if (totalLen > 0) {
        timeout = setTimeout(() => {
          if (displayHighlight.length > 0) {
            setDisplayHighlight(prev => prev.slice(0, -1))
          } else {
            setDisplayPre(prev => prev.slice(0, -1))
          }
        }, deleteSpeed)
      } else {
        const next = (phraseIdx + 1) % phrases.length
        setPhraseIdx(next)
        setPhase("typing-pre")
      }
    }
    return () => clearTimeout(timeout)
  }, [phase, displayPre, displayHighlight, phraseIdx, phrases, typeSpeed, pauseMs, deleteSpeed])

  const isTypingHighlight = phase === "typing-hl" || phase === "pause"
  const showCursor = phase !== "pause"
  return { displayPre, displayHighlight, isTypingHighlight, showCursor, phraseIdx }
}

export function Hero() {
  const { displayPre, displayHighlight, isTypingHighlight, showCursor, phraseIdx } =
    useTypewriterCycle(PHRASES)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,63,216,0.12)_0%,transparent_60%)] pointer-events-none z-0" />

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
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <div className="px-4 py-1.5 rounded-full border border-[#1E3FD8]/40 bg-[#1E3FD8]/10 backdrop-blur-md flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#1E3FD8] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#1E3FD8] font-semibold">+10 anos de experiência</span>
          </div>
          <div className="px-4 py-1.5 rounded-full border border-[#fafafa]/10 bg-[#fafafa]/5 backdrop-blur-md flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3 text-[#1E3FD8]" />
            <span className="text-[10px] uppercase tracking-widest text-[#888888] font-semibold">CREA 1017786453D-GO</span>
          </div>
        </div>

        {/* Título principal com carrossel */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#fafafa] mb-6 tracking-tight leading-[1.2] min-h-[2.8em] md:min-h-[2.2em] flex flex-col items-center justify-center gap-1">
          <span>
            {displayPre || "\u00A0"}
            {!isTypingHighlight && showCursor && (
              <span className="inline-block w-[3px] h-[0.85em] bg-[#fafafa] ml-1 align-middle animate-pulse" aria-hidden="true" />
            )}
          </span>
          <span className="text-[#1E3FD8] inline-flex items-baseline">
            {displayHighlight}
            {isTypingHighlight && showCursor && (
              <span className="inline-block w-[3px] h-[0.85em] bg-[#1E3FD8] ml-1 align-middle animate-pulse" aria-hidden="true" />
            )}
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-[#888888] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Alvará de Construção, Habite-se, Regularização de Obras e Projetos de Engenharia em{" "}
          <strong className="text-[#fafafa]">Goiânia e Aparecida de Goiânia</strong>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button
            asChild
            className="bg-[#1E3FD8] hover:bg-[#3d5ce8] text-white font-bold px-8 py-6 rounded-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(30,63,216,0.4)] text-base"
          >
            <a
              href="https://wa.me/5562998062169?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Orçamento Grátis
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#2a2a2a] text-[#fafafa] hover:bg-[#111111] px-8 py-6 rounded-xl transition-all text-base"
          >
            <a href="#servicos">Ver Serviços</a>
          </Button>
        </div>

        {/* Indicadores de frase */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {PHRASES.map((_, i) => (
            <span
              key={i}
              className="block h-[3px] rounded-full transition-all duration-500"
              style={{
                width: i === phraseIdx ? "24px" : "8px",
                backgroundColor: i === phraseIdx ? "#1E3FD8" : "#2a2a2a",
              }}
            />
          ))}
        </div>

        {/* Mini features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto pt-8 border-t border-[#1a1a1a]">
          {[
            { emoji: "📋", label: "Alvará & Habite-se" },
            { emoji: "🏠", label: "Regularização de Obras" },
            { emoji: "🏗️", label: "Projetos de Engenharia" },
            { emoji: "🔍", label: "Perícias e Laudos" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 group">
              <div className="w-14 h-14 rounded-full bg-[#111111] flex items-center justify-center border border-[#222222] group-hover:border-[#1E3FD8]/50 transition-colors text-2xl select-none">
                {item.emoji}
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
