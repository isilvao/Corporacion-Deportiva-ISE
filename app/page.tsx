import Link from "next/link"
import Image from "next/image"
import { newsData } from "@/lib/news"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Target, Calendar } from "lucide-react"
import { getImagePath } from "@/lib/utils"

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${getImagePath("/Background.jpeg")})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-primary/80" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance drop-shadow-md">
              Corporación Deportiva ISE
            </h1>

            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl font-medium text-primary-foreground/95 leading-relaxed">
                Formando campeones con disciplina, pasión y trabajo en equipo desde 2022
              </p>

              <p className="text-lg md:text-xl italic text-primary-foreground/90 font-light">
                "Integración para unir, Superación para crecer, Éxito para trascender"
              </p>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0">
                    <Trophy className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">15+ Títulos</h3>
                    <p className="text-sm text-muted-foreground">Campeonatos regionales y nacionales</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">200+ Atletas</h3>
                    <p className="text-sm text-muted-foreground">En todas nuestras categorías</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0">
                    <Target className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Excelencia</h3>
                    <p className="text-sm text-muted-foreground">Entrenamiento de clase mundial</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0">
                    <Calendar className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Inscripciones</h3>
                    <p className="text-sm text-muted-foreground">Abiertas para 2026</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                Club de Noticias
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">Últimas Noticias</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData.map((news) => (
                <Link key={news.id} href={`/news/${news.slug}`} className="group h-full">
                  <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-card flex flex-col group-hover:-translate-y-2">
                    <div className="relative h-64 w-full bg-muted overflow-hidden">
                      <Image
                        src={getImagePath(news.image)}
                        alt={news.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        style={{ objectPosition: news.imagePosition || "center" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-accent font-medium text-sm mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>{news.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-accent transition-colors leading-tight">
                        {news.title}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {news.description}
                      </p>
                      <div className="flex items-center gap-2 text-accent font-bold group-hover:gap-3 transition-all duration-300">
                        Leer más <span className="text-xl">→</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Únete a la Familia ISE</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90 text-pretty">
              Desarrolla tu potencial con los mejores entrenadores y las mejores instalaciones
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Contáctanos Hoy
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
