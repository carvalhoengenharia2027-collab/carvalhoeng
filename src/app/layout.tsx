import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://carvalho-engenharia.com"),
  title: {
    default: "Carvalho Engenharia | Alvará, Habite-se e Regularização em Goiânia",
    template: "%s | Carvalho Engenharia",
  },
  description:
    "Alvará de Construção, Habite-se, Regularização de Obras e Projetos de Engenharia em Goiânia e Aparecida de Goiânia. Mais de 10 anos de experiência. CREA 1017786453D-GO.",
  keywords: [
    "alvará de construção Goiânia",
    "habite-se Goiânia",
    "regularização de obras Goiânia",
    "projeto arquitetônico Goiânia",
    "regularização imobiliária",
    "CREA Goiânia",
    "engenharia civil Goiânia",
    "Aparecida de Goiânia",
    "Carvalho Engenharia",
    "averbação de construção",
    "INSS obras Goiânia",
  ],
  authors: [{ name: "Caio Maracaípe", url: "https://carvalho-engenharia.com" }],
  creator: "Carvalho Engenharia",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://carvalho-engenharia.com",
    siteName: "Carvalho Engenharia",
    title: "Carvalho Engenharia | Alvará, Habite-se e Regularização em Goiânia",
    description:
      "Alvará de Construção, Habite-se, Regularização de Obras e Projetos de Engenharia em Goiânia. +10 anos de experiência.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carvalho Engenharia — Regularização de Imóveis em Goiânia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carvalho Engenharia | Alvará, Habite-se e Regularização em Goiânia",
    description:
      "Alvará, Habite-se e Regularização de Obras em Goiânia. CREA 1017786453D-GO. +10 anos.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://carvalho-engenharia.com",
  },
  verification: {
    google: "_8llKmEMAfxglCw0iqE8xCEWcsVpN4-4UpJ6FBIZt1o",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
