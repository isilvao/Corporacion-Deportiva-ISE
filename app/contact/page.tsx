"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <>
      <Navigation />

      <main>
        {/* Header */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url(/Contacto.JPG)",
              backgroundSize: "cover",
              backgroundPosition: "50% 35%",
            }}
          >
            <div className="absolute inset-0 bg-primary/80" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contacto</h1>
            <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
              Estamos aquí para responder tus preguntas
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

              <Card>
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-bold text-lg mb-2">Teléfono</h3>
                  <p className="text-muted-foreground text-sm">+57 300 207 1818</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm">corporaciondeportivaise@gmail.com</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Redes Sociales</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5 text-accent-foreground" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5 text-accent-foreground" />
                    </a>
                    <a
                      href="https://www.youtube.com/@corporaciondeportivaise6069"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube className="h-5 w-5 text-accent-foreground" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-4">Envíanos un mensaje</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                ¿Tienes alguna duda o quieres inscribirte? Contáctanos directamente por WhatsApp.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <a href="https://wa.me/573002071818" target="_blank" rel="noopener noreferrer">
                  Chat en WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
        {/* Map */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Encuéntranos</h2>
            <div className="max-w-6xl mx-auto">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.967059452657!2d-72.49538092426535!3d7.898510305657899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645a1ac5d6439%3A0x9ef794178c961f0d!2sCorporaci%C3%B3n%20Deportiva%20Ise!5e0!3m2!1ses-419!2sco!4v1767498564598!5m2!1ses-419!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
