import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://corpoise.com"),
  title: {
    default: "Corporación Deportiva ISE - Club de Voleibol en Cúcuta",
    template: "%s | Corporación Deportiva ISE",
  },
  description:
    "Únete a la Corporación Deportiva ISE, el mejor club de voleibol en Cúcuta. Formación deportiva integral para niños y jóvenes con entrenadores expertos. ¡Inscríbete hoy!",
  keywords: [
    "Voleibol Cúcuta",
    "Club de Voleibol",
    "Escuela de Voleibol",
    "Entrenamiento Deportivo",
    "Corporación Deportiva ISE",
    "Deportes Norte de Santander",
    "Voleibol Infantil",
    "Voleibol Juvenil",
    "ISE"
  ],
  authors: [{ name: "Corporación Deportiva ISE" }],
  creator: "Corporación Deportiva ISE",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://corpoise.com",
    title: "Corporación Deportiva ISE - Excelencia en Voleibol",
    description: "Formando campeones con disciplina, pasión y trabajo en equipo. El mejor club de voleibol en Cúcuta y Norte de Santander.",
    siteName: "Corporación Deportiva ISE",
    images: [
      {
        url: "/Logo.png", // Next.js will resolve this to the absolute URL thanks to metadataBase
        width: 800,
        height: 600,
        alt: "Logo Corporación Deportiva ISE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporación Deportiva ISE",
    description: "Club de Voleibol líder en Cúcuta. Formación, competencia y valores.",
    images: ["/Logo.png"],
  },
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
