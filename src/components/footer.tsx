"use client"

import { Instagram, Mail } from "lucide-react"

const quickLinks = [
  { href: "#empresa", label: "Empresa" },
  { href: "#servicos", label: "Serviços" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#quem-precisa", label: "Quem Precisa" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
]

const socialLinks = [
  { href: "https://instagram.com/carvalho.eng", icon: Instagram, label: "Instagram" },
  { href: "mailto:carvalhoeng@outlook.com.br", icon: Mail, label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#1E3FD8] flex items-center justify-center">
                <span className="text-white font-bold text-xs tracking-tight">CE</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-[#fafafa] text-sm tracking-tight">CARVALHO</span>
                <span className="text-[#1E3FD8] text-xs font-semibold tracking-widest uppercase">Engenharia</span>
              </div>
            </a>
            <p className="text-sm text-[#888888] mb-2">
              Regularização de imóveis com segurança, agilidade e responsabilidade técnica.
            </p>
            <p className="text-sm text-[#666666]">
              Edifício Office Flamboyant<br />
              Av. Dep. Jamel Cecílio, 3310, Sala 301<br />
              Jardim Goiás — Goiânia/GO
            </p>
            <a
              href="https://wa.me/5562998062169"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-[#1E3FD8] hover:text-[#3d5ce8] transition-colors"
            >
              📲 (62) 9 8062-1690
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#fafafa] mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#888888] hover:text-[#1E3FD8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Info */}
          <div>
            <h3 className="font-semibold text-[#fafafa] mb-4">Redes Sociais</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#151515] border border-[#1a1a1a] flex items-center justify-center text-[#888888] hover:text-[#1E3FD8] hover:border-[#1E3FD8]/50 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="space-y-1 text-xs text-[#666666]">
              <p>CNPJ: 36.075.475/0001-94</p>
              <p>Resp. Técnico: Engº Civil Caio Maracaípe</p>
              <p className="text-[#1E3FD8]/70">CREA 1017786453D-GO</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#666666]">
            © {new Date().getFullYear()} Carvalho Engenharia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#666666]">
            Goiânia e Aparecida de Goiânia — Goiás
          </p>
        </div>
      </div>
    </footer>
  )
}
