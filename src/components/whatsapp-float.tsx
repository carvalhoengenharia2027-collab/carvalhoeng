"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5562998062169?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white font-semibold px-4 py-3 rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_32px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="text-sm hidden sm:inline whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[200px] transition-all duration-300 opacity-0 group-hover:opacity-100">
        Falar no WhatsApp
      </span>
    </a>
  )
}
