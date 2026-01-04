import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Corporación Deportiva ISE - Volleyball Club",
  description:
    "Corporación Deportiva ISE es un club profesional de volleyball dedicado a la excelencia deportiva, disciplina y trabajo en equipo. Unirnos a nuestra comunidad de atletas apasionados.",
  generator: "Corporación Deportiva ISE",
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
