import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <span className="font-extrabold text-2xl tracking-tight">Carvalho Engenharia</span>
              <p className="text-white/50 text-sm mt-1">Projetos e Consultoria</p>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              CNPJ: 36.075.475/0001-94
            </p>
            <p className="text-white/40 text-sm mt-2 leading-relaxed">
              Resp. Técnico: Engº Civil Caio Maracaípe<br />
              CREA 1017786453D-GO
            </p>
          </div>

          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Links</p>
            <ul className="space-y-2">
              {[
                { label: 'Empresa', href: '#empresa' },
                { label: 'Serviços', href: '#servicos' },
                { label: 'Benefícios', href: '#beneficios' },
                { label: 'Depoimentos', href: '#depoimentos' },
                { label: 'Contato', href: '#contato' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Contato</p>
            <ul className="space-y-3 text-sm text-white/40">
              <li>
                <a href="https://wa.me/5562998062169" className="hover:text-white transition-colors">
                  (62) 9 9806-2169
                </a>
              </li>
              <li>
                <a href="mailto:carvalhoeng@outlook.com.br" className="hover:text-white transition-colors">
                  carvalhoeng@outlook.com.br
                </a>
              </li>
              <li className="leading-relaxed">
                Edifício Office Flamboyant<br />
                Av. Dep. Jamel Cecílio, 3310<br />
                Jardim Goiás, Goiânia/GO
              </li>
            </ul>

            <a
              href="https://www.instagram.com/carvalho.eng"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-white/40 hover:text-primary text-sm transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @carvalho.eng
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm">
          <p>© 2024 Carvalho Engenharia. Todos os direitos reservados.</p>
          <p>Goiânia, Goiás — Brasil</p>
        </div>
      </div>
    </footer>
  )
}
