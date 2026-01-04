import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"
import { getImagePath } from "@/lib/utils"

export default function CategoriesPage() {
  const categories = [
    {
      name: "Benjamin",
      ageRange: "9-10 años",
      schedule: "Lunes, Miércoles, Viernes 3:30 PM - 6:00 PM",
      description: "Iniciación y fundamentos básicos del voleibol. Enfoque en técnica y trabajo en equipo. Participación en torneos locales, regionales y nacionales",
      image: "/categories/Benjamin3.jpeg",
      imagePosition: "center",
      imageHeight: "300px",
    },
    {
      name: "Mini",
      ageRange: "11-12 años",
      schedule: "Lunes, Miércoles, Viernes 3:30 PM - 6:00 PM",
      description: "Desarrollo de habilidades avanzadas y participación en torneos locales, regionales, nacionales e internacionales.",
      image: "/categories/Mini.jpeg",
      imagePosition: "center",
      imageHeight: "300px",
    },
    {
      name: "Infantil",
      ageRange: "13-15 años",
      schedule: "Lunes, Miercoles, Viernes 3:30 PM - 6:00 PM",
      scheduleTwo: "Martes, Jueves, Sábado 3:30 PM - 6:00 PM",
      description: "Preparación competitiva de alto nivel. Participación en campeonatos nacionales e internacionales.",
      image: "/categories/Infantil3.jpeg",
      imagePosition: "center",
      imageHeight: "300px",
    },
    {
      name: "Juvenil",
      ageRange: "16-17 años",
      schedule: "Lunes, Miércoles, Viernes 3:30 PM - 6:00 PM",
      scheduleTwo: "Lunes, Martes, Miércoles, Jueves 5:30 PM - 8:00 PM",
      description: "Equipo formativo y competitivo de alto nivel. Participación en campeonatos nacionales e internacionales.",
      image: "/categories/Juvenil.jpeg",
      imagePosition: "50% 40%",
      imageHeight: "300px",
    },
  ]

  return (
    <>
      <Navigation />

      <main>
        {/* Header */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${getImagePath("/categories/Categorias.jpeg")})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-primary/80" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Nuestras Categorías</h1>
            <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
              Programas diseñados para cada edad y nivel de experiencia
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {categories.map((category, i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div
                    className="bg-muted w-full"
                    style={{
                      backgroundImage: `url(${getImagePath(category.image)})`,
                      backgroundSize: "cover",
                      backgroundPosition: category.imagePosition,
                      height: category.imageHeight,
                    }}
                  />
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{category.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-accent shrink-0" />
                        <span className="font-medium">Edad:</span>
                        <span className="text-muted-foreground">{category.ageRange}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Clock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Horario:</span>
                          <p className="text-muted-foreground"><strong>Formativo: </strong>{category.schedule}</p>
                          {category.scheduleTwo && (
                            <p className="text-muted-foreground">
                              <strong>Élite: </strong>{category.scheduleTwo}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">¿No sabes cuál categoría es para ti?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contáctanos y te ayudaremos a encontrar el programa perfecto según tu edad y nivel
            </p>
            <Button size="lg" variant="default" asChild>
              <a href="https://wa.me/573002071818" target="_blank" rel="noopener noreferrer">
                Consulta Gratuita
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
