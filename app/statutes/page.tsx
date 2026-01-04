import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download } from "lucide-react"
import { getImagePath } from "@/lib/utils"

export default function StatutesPage() {
  const sections = [
    {
      title: "Capítulo I - Nombre, Definición, Duración y Colores",
      articles: [
        {
          number: "Artículo 1",
          content: "Con el nombre de CLUB DE VOLEIBOL CORPORACIÓN DEPORTIVA ISE, funcionará este organismo deportivo, que, en adelante, y para los efectos de este Estatuto, se denominará el Club."
        },
        {
          number: "Artículo 2",
          content: "El Club es un organismo de derecho privado, sin ánimo de lucro, dotado de Reconocimiento deportivo otorgado por el Alcalde a través del Ente Deportivo Municipal o por quien haga sus veces."
        },
        {
          number: "Artículo 3",
          content: "El término de duración del Club es indefinido."
        },
        {
          number: "Artículo 4",
          content: "Los colores oficiales del Club son azul, amarillo y verde."
        }
      ]
    },
    {
      title: "Capítulo II - Domicilio, Jurisdicción, Objeto y Estructura",
      articles: [
        {
          number: "Artículo 5",
          content: "El domicilio del Club es el Municipio de Cúcuta, con dirección de la sede administrativa del club en la Calle 2#15-20, Apto 402, Torre A, Condominio Torres del Parque, Departamento de Norte de Santander, territorio dentro del cual ejercerá jurisdicción."
        },
        {
          number: "Artículo 6",
          content: "El objeto del Club es fomentar y patrocinar la práctica del deporte de Voleibol, la recreación y el aprovechamiento del tiempo libre en el municipio e impulsar programas de interés público y social."
        },
        {
          number: "Artículo 7",
          content: "El Club tendrá un Órgano de Dirección (Asamblea), un Órgano de Administración (cinco miembros incluyendo Presidente/Representante Legal) y un Órgano de Disciplina (Comisión Disciplinaria)."
        }
      ]
    },
    {
      title: "Capítulo III - Constitución y Afiliación",
      articles: [
        {
          number: "Artículo 8",
          content: "El Club estará constituido como una asociación por un número mínimo de diez (10) deportistas."
        },
        {
          number: "Artículo 9",
          content: "Requisitos para la afiliación: Ficha técnica, certificado médico, foto, consentimiento informado y manifestación de aceptación de normas legales."
        },
        {
          number: "Artículo 10",
          content: "La competencia para resolver sobre la admisión de nuevos afiliados corresponde al Responsable del Club."
        },
        {
          number: "Artículo 11",
          content: "El Responsable dispone de quince (15) días hábiles para resolver solicitudes de admisión o desafiliación voluntaria."
        },
        {
          number: "Artículo 12",
          content: "Causales de suspensión: Incumplimiento de pagos, no participar en eventos oficiales sin justa causa, inasistencia a asambleas o violación de normas."
        },
        {
          number: "Artículo 13",
          content: "La afiliación se pierde por mantener la causal de suspensión por seis meses o por renuncia del afiliado."
        },
        {
          number: "Artículo 14",
          content: "La Comisión Disciplinaria es competente para imponer sanciones, excepto en mora de pagos donde la desafiliación es automática."
        }
      ]
    },
    {
      title: "Capítulo IV - Deberes y Derechos de los Afiliados",
      articles: [
        {
          number: "Artículo 15",
          content: "Deberes: Cumplir normas, asistir a asambleas, pagar cuotas, participar en actividades, asistir a entrenamientos y observar buena conducta."
        },
        {
          number: "Artículo 16",
          content: "Derechos: Intervenir con voz y voto, elegir y ser elegido, participar en actividades y solicitar convocatorias de asamblea."
        }
      ]
    },
    {
      title: "Capítulo V - Del Órgano de Dirección",
      articles: [
        {
          number: "Artículo 17",
          content: "La Asamblea se constituye con la presencia física de la mitad más uno de la totalidad de los afiliados en uso de sus derechos."
        },
        {
          number: "Artículo 18",
          content: "Tipos de reuniones: Ordinaria (anual), Por derecho propio, Extraordinaria con carácter de ordinaria, Extraordinaria, De segunda convocatoria y Universal."
        },
        {
          number: "Artículo 19",
          content: "Funciones: Aprobar estatutos, analizar finanzas, elegir responsables y miembros de comisiones, fijar cuotas y aprobar presupuestos."
        },
        {
          number: "Artículo 30",
          content: "Las decisiones se denominan Acuerdos y se adoptan por mayoría simple (mitad más uno), salvo excepciones de dos terceras partes."
        }
      ]
    },
    {
      title: "Capítulo VI - Del Órgano de Administración",
      articles: [
        {
          number: "Artículo 31",
          content: "Requisitos: Ser mayor de 18 años, saber leer y escribir, acreditar conocimiento de reglamentos y cumplir con el Decreto Ley 1228 de 1995."
        },
        {
          number: "Artículo 46",
          content: "Funciones generales: Administrar económica y administrativamente al club, cumplir normas, preparar estados financieros y convocar a asambleas."
        }
      ]
    },
    {
      title: "Capítulo VII - Del Órgano Disciplinario",
      articles: [
        {
          number: "Artículo 51",
          content: "La Comisión Disciplinaria es el órgano encargado de conocer y resolver las faltas cometidas contra el estatuto o reglamentos."
        },
        {
          number: "Artículo 54",
          content: "Las autoridades disciplinarias se crean para cada competición con el fin de garantizar la aplicación inmediata de sanciones."
        }
      ]
    },
    {
      title: "Capítulo VIII - Órgano de Control",
      articles: [
        {
          number: "Artículo 55",
          content: "El Club tendrá un Revisor Fiscal Principal elegido en Asamblea por un período de cuatro años."
        },
        {
          number: "Artículo 60",
          content: "Funciones del Revisor: Velar por el cumplimiento de normas, asistir a reuniones de órganos y ejercer control de cuentas y estados financieros."
        }
      ]
    },
    {
      title: "Capítulo IX - Del Régimen Económico",
      articles: [
        {
          number: "Artículo 61",
          content: "El patrimonio está constituido por bienes muebles, inmuebles, valores, archivos, implementos deportivos y trofeos."
        },
        {
          number: "Artículo 62",
          content: "Origen de fondos: Cuotas de afiliación, cuotas de sostenimiento, donaciones, contratos con terceros e ingresos legales."
        }
      ]
    },
    {
      title: "Capítulo X - Del Estatuto, sus Reglamentos y Reformas",
      articles: [
        {
          number: "Artículo 65",
          content: "El estatuto es el conjunto de normas básicas de obligatorio cumplimiento que rigen la actividad del organismo deportivo."
        },
        {
          number: "Artículo 67",
          content: "La adopción o reforma del estatuto requiere el voto favorable de las dos terceras partes de los afiliados."
        }
      ]
    },
    {
      title: "Capítulo XI - De la Disolución y Liquidación",
      articles: [
        {
          number: "Artículo 69",
          content: "Causales de disolución: Decisión de la asamblea (2/3 de votos), imposibilidad de cumplir objeto o falta de número mínimo de afiliados."
        },
        {
          number: "Artículo 70",
          content: "En caso de disolución se nombrará un liquidador; los activos sobrantes pasarán a una entidad con fines idénticos designada por la asamblea."
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />

      <main>
        {/* Header */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${getImagePath("/Estatuto.jpeg")})`,
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
                <h2 className="font-bold text-lg mb-1">Solicita el Documento Completo</h2>
                <p className="text-sm text-muted-foreground">Estatutos actualizados - Versión 2021</p>
              </div>
              <Button size="lg" variant="default" asChild>
                <a href="https://wa.me/573002071818" target="_blank" rel="noopener noreferrer">
                  Solicitar Documento
                </a>
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
                    <p className="text-muted-foreground text-sm">Marzo 12, 2021</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Aprobado por</h3>
                    <p className="text-muted-foreground text-sm">IMRD</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Registro</h3>
                    <p className="text-muted-foreground text-sm">Cámara de Comercio - NIT 901259682-4</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Consultas</h3>
                    <p className="text-muted-foreground text-sm">corporaciondeportivaise@gmail.com</p>
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
