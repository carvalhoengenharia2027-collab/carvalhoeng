import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Empresa } from "@/components/empresa"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Benefits } from "@/components/benefits"
import { WhoPrecisa } from "@/components/who-precisa"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Navbar />
      <Hero />
      <Empresa />
      <Services />
      <Process />
      <Benefits />
      <WhoPrecisa />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
