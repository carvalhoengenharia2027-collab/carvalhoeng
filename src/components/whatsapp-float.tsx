"use client"

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5562998062169?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white font-semibold px-4 py-3 rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_32px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 group"
    >
      {/* Ícone oficial WhatsApp SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="white"
        aria-hidden="true"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.656zm6.757-4.242c1.496.886 3.119 1.352 4.778 1.353 5.145 0 9.332-4.187 9.334-9.332.001-2.497-.972-4.844-2.741-6.613s-4.113-2.741-6.613-2.742c-5.147 0-9.334 4.187-9.337 9.332-.001 1.748.487 3.452 1.411 4.926l-.944 3.448 3.535-.927zm10.511-6.425c-.21-.106-1.243-.614-1.436-.684-.193-.07-.333-.106-.473.106-.14.212-.544.684-.667.826-.123.14-.246.158-.456.052-.21-.105-.886-.327-1.688-1.043-.624-.557-1.046-1.245-1.168-1.456-.123-.21-.013-.324.092-.429.095-.095.21-.245.315-.368.105-.123.14-.21.21-.351.07-.14.035-.263-.017-.37-.053-.106-.473-1.14-.649-1.562-.172-.411-.347-.355-.473-.362-.123-.007-.263-.008-.403-.008s-.369.052-.562.263c-.193.21-.737.72-.737 1.754s.754 2.035.86 2.176c.105.14 1.484 2.266 3.596 3.176.502.216.894.346 1.199.444.505.161.964.138 1.326.084.405-.06 1.243-.509 1.418-.999.175-.491.175-.912.123-.999-.052-.087-.193-.14-.403-.245z" />
      </svg>
      <span className="text-sm hidden sm:inline whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[200px] transition-all duration-300 opacity-0 group-hover:opacity-100">
        Falar no WhatsApp
      </span>
    </a>
  )
}
