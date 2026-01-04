"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"
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
              backgroundImage: "url(/placeholder.svg?height=400&width=1920&query=sports+facility+volleyball+court)",
              backgroundSize: "cover",
              backgroundPosition: "center",
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <MapPin className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-bold text-lg mb-2">Ubicación</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Instalaciones Deportivas ISE
                      <br />
                      Calle 123 #45-67
                      <br />
                      Ciudad, Colombia
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Phone className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-bold text-lg mb-2">Teléfono</h3>
                    <p className="text-muted-foreground text-sm">+57 300 123 4567</p>
                    <p className="text-muted-foreground text-sm">+57 (1) 234 5678</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Mail className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm">info@cdise.com</p>
                    <p className="text-muted-foreground text-sm">inscripciones@cdise.com</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Clock className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-bold text-lg mb-2">Horario</h3>
                    <p className="text-muted-foreground text-sm">
                      Lunes - Viernes: 8:00 AM - 8:00 PM
                      <br />
                      Sábados: 8:00 AM - 2:00 PM
                      <br />
                      Domingos: Cerrado
                    </p>
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
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Nombre Completo
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Correo Electrónico
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Teléfono
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+57 300 123 4567"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Mensaje
                        </label>
                        <Textarea
                          id="message"
                          placeholder="¿En qué podemos ayudarte?"
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Enviar Mensaje
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8157535255785!2d-74.07209708523654!3d4.624335596614134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a2c4b5c7e1f%3A0x1f2b3c4d5e6f7a8b!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
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
