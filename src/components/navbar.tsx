"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, Clock } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#empresa", label: "Empresa" },
    { href: "#servicos", label: "Serviços" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#quem-precisa", label: "Quem Precisa" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <>
      {/* Barra de contato superior */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#050505] border-b border-[#1a1a1a] hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 h-9 text-xs text-[#666666]">
            <a
              href="tel:+5562980621690"
              className="flex items-center gap-1.5 hover:text-[#1E3FD8] transition-colors"
            >
              <Phone size={12} />
              (62) 9 8062-1690
            </a>
            <span className="text-[#2a2a2a]">|</span>
            <a
              href="mailto:carvalhoeng@outlook.com.br"
              className="flex items-center gap-1.5 hover:text-[#1E3FD8] transition-colors"
            >
              <Mail size={12} />
              carvalhoeng@outlook.com.br
            </a>
            <span className="text-[#2a2a2a]">|</span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              Seg–Sex, 8h às 18h
            </span>
          </div>
        </div>
      </div>

      {/* Navbar principal */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-300 lg:top-9 top-0 ${
          isScrolled
            ? "bg-[#080808]/80 backdrop-blur-xl border-b border-[#1a1a1a] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <div className="w-10 h-10 rounded-lg bg-[#1E3FD8] flex items-center justify-center shadow-[0_0_20px_rgba(30,63,216,0.4)]">
                <span className="text-white font-bold text-sm tracking-tight">CE</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-[#fafafa] text-sm tracking-tight">CARVALHO</span>
                <span className="text-[#1E3FD8] text-xs font-semibold tracking-widest uppercase">Engenharia</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#888888] hover:text-[#fafafa] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="bg-[#1E3FD8] text-white hover:bg-[#3d5ce8] font-semibold shadow-[0_0_25px_rgba(30,63,216,0.5)] hover:shadow-[0_0_40px_rgba(30,63,216,0.7)] transition-all duration-300"
              >
                <a href="https://wa.me/5562998062169" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                </a>
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-[#fafafa]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-[#222222]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 pb-3 border-b border-[#1a1a1a] text-xs text-[#666666]">
                  <a href="tel:+5562980621690" className="flex items-center gap-2 hover:text-[#1E3FD8] transition-colors">
                    <Phone size={12} /> (62) 9 8062-1690
                  </a>
                  <a href="mailto:carvalhoeng@outlook.com.br" className="flex items-center gap-2 hover:text-[#1E3FD8] transition-colors">
                    <Mail size={12} /> carvalhoeng@outlook.com.br
                  </a>
                  <span className="flex items-center gap-2">
                    <Clock size={12} /> Seg–Sex, 8h às 18h
                  </span>
                </div>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[#888888] hover:text-[#fafafa] transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="bg-[#1E3FD8] text-white hover:bg-[#3d5ce8] font-medium mt-2 shadow-[0_0_20px_rgba(30,63,216,0.4)]"
                >
                  <a
                    href="https://wa.me/5562998062169"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
