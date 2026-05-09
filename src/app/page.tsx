import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Empresa } from "@/components/empresa"
import { Services } from "@/components/services"
import { Benefits } from "@/components/benefits"
import { WhoPrecisa } from "@/components/who-precisa"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Navbar />
      <Hero />
      <Empresa />
      <Services />
      <Benefits />
      <WhoPrecisa />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
