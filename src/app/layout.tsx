import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carvalho Engenharia | Alvará, Habite-se, Regularização em Goiânia',
  description: 'Alvará de Construção, Habite-se, Regularização de Obras, Projetos de Engenharia, Desmembramento, Averbação de Construção em Goiânia e Aparecida de Goiânia.',
  keywords: 'alvará de construção, habite-se, regularização de obras, engenharia goiânia, projeto arquitetônico, aparecida de goiânia',
  openGraph: {
    title: 'Carvalho Engenharia | Alvará, Habite-se, Regularização',
    description: 'Há mais de 10 anos transformando projetos em realidade com qualidade e segurança em Goiânia.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
