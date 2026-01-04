import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download } from "lucide-react"

export default function StatutesPage() {
  const sections = [
    {
      title: "Capítulo I - Disposiciones Generales",
      articles: [
        {
          number: "Artículo 1",
          content:
            "La Corporación Deportiva ISE es una entidad sin ánimo de lucro dedicada a la formación y promoción del voleibol.",
        },
        {
          number: "Artículo 2",
          content: "Su domicilio principal se encuentra en la ciudad, con jurisdicción en todo el territorio nacional.",
        },
      ],
    },
    {
      title: "Capítulo II - Objetivos",
      articles: [
        {
          number: "Artículo 3",
          content: "Promover la práctica del voleibol en todas las categorías y niveles competitivos.",
        },
        {
          number: "Artículo 4",
          content: "Formar atletas integrales mediante valores de disciplina, respeto y trabajo en equipo.",
        },
        {
          number: "Artículo 5",
          content: "Participar en competencias deportivas locales, regionales y nacionales.",
        },
      ],
    },
    {
      title: "Capítulo III - Miembros",
      articles: [
        {
          number: "Artículo 6",
          content:
            "Son miembros de la corporación todos los atletas, entrenadores y personal administrativo debidamente registrados.",
        },
        {
          number: "Artículo 7",
          content: "Los derechos y deberes de los miembros están establecidos en el reglamento interno.",
        },
      ],
    },
    {
      title: "Capítulo IV - Órganos de Dirección",
      articles: [
        {
          number: "Artículo 8",
          content: "La Asamblea General es el máximo órgano de dirección de la corporación.",
        },
        {
          number: "Artículo 9",
          content: "La Junta Directiva está conformada por siete miembros elegidos por la Asamblea General.",
        },
      ],
    },
    {
      title: "Capítulo V - Régimen Económico",
      articles: [
        {
          number: "Artículo 10",
          content:
            "Los recursos económicos provienen de cuotas de afiliación, patrocinios, donaciones y eventos deportivos.",
        },
        {
          number: "Artículo 11",
          content: "Los recursos serán destinados exclusivamente al cumplimiento de los objetivos corporativos.",
        },
      ],
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
              backgroundImage: "url(/placeholder.svg?height=400&width=1920&query=legal+documents+professional)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-primary/80" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <FileText className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Estatutos</h1>
            <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
              Marco legal y reglamentario de la Corporación Deportiva ISE
            </p>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-8 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="font-bold text-lg mb-1">Descarga el Documento Completo</h2>
                <p className="text-sm text-muted-foreground">Estatutos actualizados - Versión 2024</p>
              </div>
              <Button size="lg" variant="default">
                <Download className="h-4 w-4 mr-2" />
                Descargar PDF
              </Button>
            </div>
          </div>
        </section>

        {/* Statutes Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {sections.map((section, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {section.articles.map((article, j) => (
                      <div key={j} className="border-l-4 border-accent pl-4 py-2">
                        <h4 className="font-bold mb-2">{article.number}</h4>
                        <p className="text-muted-foreground leading-relaxed">{article.content}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Información Adicional</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Última Actualización</h3>
                    <p className="text-muted-foreground text-sm">Enero 15, 2024</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Aprobado por</h3>
                    <p className="text-muted-foreground text-sm">Asamblea General Ordinaria</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Registro</h3>
                    <p className="text-muted-foreground text-sm">Cámara de Comercio - NIT 900.XXX.XXX-X</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Consultas</h3>
                    <p className="text-muted-foreground text-sm">info@cdise.com</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
