"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Medal, Award } from "lucide-react"
import { getImagePath } from "@/lib/utils"
import { useState } from "react"

export default function AchievementsPage() {
  const [selectedMedia, setSelectedMedia] = useState<"photos" | "videos">("photos")

  const achievements = [
    {
      year: "2025",
      title: "International Volleyball Cup, Medellín",
      category: "Pre-Mini",
      position: "Campeones",
      icon: Trophy,
    },
    {
      year: "2025",
      title: "Torneo Corazonista, Barranquilla",
      category: "Mini",
      position: "Sub-campeones",
      icon: Trophy,
    },
    {
      year: "2025",
      title: "U-17, Linorvol",
      category: "Menores",
      position: "Campeones",
      icon: Trophy,
    },
    {
      year: "2025",
      title: "Ciudad Dulce, Barichara",
      category: "Benjamin",
      position: "Campeones",
      icon: Trophy,
    },
    {
      year: "2024",
      title: "Ciudad Dulce, Barichara",
      category: "Mini",
      position: "Sub-campeones",
      icon: Trophy,
    },
    {
      year: "2024",
      title: "Ciudad Dulce, Barichara",
      category: "Benjamin",
      position: "Campeones",
      icon: Trophy,
    },
    {
      year: "2024",
      title: "Torneo la Hormiga, Bucaramanga",
      category: "Menores",
      position: "Sub-campeones",
      icon: Trophy,
    },
    {
      year: "2024",
      title: "Ciudad Mitrada, Pamplona",
      category: "Mini",
      position: "Campeones",
      icon: Trophy,
    },
    {
      year: "2024",
      title: "Internacional Volleyball Cup, Medellín",
      category: "Pre-Mini",
      position: "Sub-campeones",
      icon: Trophy,
    },
    {
      year: "2023",
      title: "Copa Pamplona",
      category: "Menores",
      position: "Campeones",
      icon: Trophy,
    },
    {
      year: "2023",
      title: "Torneo IMRD",
      category: "Infantil",
      position: "Campeones",
      icon: Trophy,
    },
    {
      year: "2022",
      title: "Torneo de la Amistad",
      position: "Campeones",
      category: "Infantil",
      icon: Trophy,
    },
  ]

  const photos = [
    { src: "/achievements/images/1.jpeg", position: "center" },
    { src: "/achievements/images/2.jpeg", position: "center" },
    { src: "/achievements/images/3.jpeg", position: "center" },
    { src: "/achievements/images/4.jpeg", position: "center" },
    { src: "/achievements/images/5.jpeg", position: "center" },
    { src: "/achievements/images/6.jpeg", position: "50% 10%" },
    { src: "/achievements/images/7.jpeg", position: "center" },
    { src: "/achievements/images/8.jpeg", position: "center" },
    { src: "/achievements/images/9.jpeg", position: "50% 20%" },
    { src: "/achievements/images/10.jpeg", position: "center" },
    { src: "/achievements/images/11.jpeg", position: "center" },
    { src: "/achievements/images/12.jpeg", position: "center" },
    { src: "/achievements/images/13.jpeg", position: "50% 40%" },
    { src: "/achievements/images/14.jpeg", position: "center" },
  ]

  const videos = [
    "/achievements/video/1.mp4"
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
              backgroundImage: "url(/palmares.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "50% 35%",
            }}
          >
            <div className="absolute inset-0 bg-primary/80" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Palmarés</h1>
            <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
              Una trayectoria de éxitos y reconocimientos
            </p>
          </div>
        </section>

        {/* Trophy Room */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Sala de Trofeos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {achievements.map((achievement, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0">
                        <achievement.icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-accent mb-1">{achievement.year}</div>
                        <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.category}</p>
                        <p className="text-sm text-muted-foreground">{achievement.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-primary-foreground/80">Campeonatos</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">200+</div>
                <div className="text-primary-foreground/80">Medallas</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">40+</div>
                <div className="text-primary-foreground/80">Trofeos</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">4</div>
                <div className="text-primary-foreground/80">Años de Éxito</div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Multimedia</h2>

            {/* Media Tabs */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setSelectedMedia("photos")}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${selectedMedia === "photos"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
              >
                Fotos
              </button>
              <button
                onClick={() => setSelectedMedia("videos")}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${selectedMedia === "videos"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
              >
                Videos
              </button>
            </div>

            {/* Photo Gallery */}
            {selectedMedia === "photos" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {photos.map((photo, i) => (
                  <div
                    key={i}
                    className="aspect-video bg-muted rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                    style={{
                      backgroundImage: `url(${getImagePath(photo.src)})`,
                      backgroundSize: "cover",
                      backgroundPosition: photo.position,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Video Gallery */}
            {selectedMedia === "videos" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {videos.map((video, i) => (
                  <div key={i} className="aspect-video bg-muted rounded-lg overflow-hidden border border-border shadow-sm">
                    <video
                      src={getImagePath(video)}
                      controls
                      className="w-full h-full object-cover"
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
