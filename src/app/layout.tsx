import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Carvalho Engenharia | Alvará, Habite-se, Regularização em Goiânia',
  description: 'Alvará de Construção, Habite-se, Regularização de Obras, Projetos de Engenharia, Desmembramento, Averbação de Construção em Goiânia e Aparecida de Goiânia. Mais de 10 anos de experiência.',
  keywords: 'alvará de construção, habite-se, regularização de obras, engenharia goiânia, projeto arquitetônico, aparecida de goiânia, CREA, engenheiro civil',
  openGraph: {
    title: 'Carvalho Engenharia | Alvará, Habite-se, Regularização',
    description: 'Há mais de 10 anos transformando projetos em realidade com qualidade e segurança em Goiânia e Aparecida de Goiânia.',
    url: 'https://www.carvalho-engenharia.com',
    siteName: 'Carvalho Engenharia',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#FAF9F6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
