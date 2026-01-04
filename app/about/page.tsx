import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export default function AboutPage() {
  const coaches = [
    {
      name: "Ivan Silva",
      role: "Director Técnico",
      image: "/IvanSilva.jpeg",
    },
    {
      name: "Ana Rodríguez",
      role: "Entrenadora Sub-18",
      image: "/female-volleyball-coach.jpg",
    },
    {
      name: "Miguel Torres",
      role: "Entrenador Sub-16",
      image: "/male-volleyball-coach-2.jpg",
    },
    {
      name: "Laura Sánchez",
      role: "Preparadora Física",
      image: "/female-fitness-coach.png",
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
              backgroundImage: "url(/QuienesSomos.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "50% 25%",
            }}
          >
            <div className="absolute inset-0 bg-primary/80" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Quiénes Somos</h1>
            <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
              Una historia de pasión, dedicación y excelencia deportiva
            </p>
          </div>
        </section>

        {/* History */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundada en 2022, la Corporación Deportiva ISE nació del sueño de crear un espacio donde jóvenes
                talentosos pudieran desarrollar sus habilidades en el voleibol bajo los más altos estándares de
                formación deportiva y humana.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A lo largo de los años, hemos crecido hasta convertirnos en una de las instituciones deportivas más
                prestigiosas de la región, formando no solo atletas de élite, sino también personas comprometidas con
                los valores de disciplina, respeto y trabajo en equipo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Con más de 100 campeonatos en las diferentes categorias, y más de 50 atletas formados y 150 en formación, continuamos nuestra misión de
                elevar el nivel del voleibol en nuestro país.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Misión</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Formar atletas integrales mediante la práctica del voleibol, promoviendo la ética, valores de disciplina,
                    trabajo en equipo y excelencia deportiva.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Visión</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser reconocidos como la principal institución formadora de talentos en voleibol en todas las categorias, destacando por
                    nuestra excelencia técnica y humana.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Valores</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Disciplina, responsabilidad, respeto, trabajo en equipo, compromiso, pasión, excelencia, y desarrollo integral de
                    cada atleta.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Coaching Staff */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4 text-center">Cuerpo Técnico</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Nuestro equipo de profesionales altamente calificados y apasionados por el voleibol
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {coaches.map((coach, i) => (
                <Card key={i} className="overflow-hidden">
                  <div
                    className="h-64 bg-muted"
                    style={{
                      backgroundImage: `url(${coach.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg mb-1">{coach.name}</h3>
                    <p className="text-sm text-accent font-medium">{coach.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
