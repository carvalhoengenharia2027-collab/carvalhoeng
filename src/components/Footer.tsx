export default function Footer() {
  return (
    <footer className="bg-[#091530] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="mb-4">
              <span className="font-display text-2xl font-bold tracking-wide">CARVALHO</span>
              <span className="text-[#d4a017] text-xs font-bold tracking-[0.3em] uppercase block">Engenharia</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Projetos e Consultoria em Engenharia.<br />
              CNPJ 36.075.475/0001-94
            </p>
            <p className="text-white/30 text-xs mt-3">
              Resp. Técnico: Engº Civil Caio Maracaípe<br />
              CREA 1017786453D-GO
            </p>
          </div>

          <div>
            <p className="text-[#d4a017] text-xs font-bold tracking-widest uppercase mb-4">Links</p>
            <ul className="space-y-2">
              {['Home', 'Empresa', 'Serviços', 'Vantagens', 'Depoimentos', 'Contato'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[#d4a017] text-xs font-bold tracking-widest uppercase mb-4">Contato</p>
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
                Av. Dep. Jamel Cecílio, 3310<br />
                Jardim Goiás, Goiânia — GO
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://www.instagram.com/carvalho.eng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/40 hover:text-[#d4a017] text-sm transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @carvalho.eng
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-white/25 text-xs">
          <p>© {new Date().getFullYear()} Carvalho Engenharia. Todos os direitos reservados.</p>
          <p>Goiânia, Goiás — Brasil</p>
        </div>
      </div>
    </footer>
  )
}
