export interface NewsItem {
    id: string
    slug: string
    title: string
    date: string
    description: string
    content: string // HTML or Markdown content
    image: string
}

export const newsData: NewsItem[] = [
    {
        id: "1",
        slug: "campeonato-regional-2025",
        title: "Campeonato Regional 2025",
        date: "Enero 15, 2025",
        description: "Nuestro equipo Sub-18 obtiene el primer lugar en el torneo regional.",
        image: "/volleyball-team-celebration.png",
        content: `
      <p>Nuestro equipo Sub-18 ha logrado una victoria histórica en el Campeonato Regional 2025, demostrando un nivel de juego excepcional y un espíritu de equipo inquebrantable.</p>
      <h3>El camino a la victoria</h3>
      <p>Durante tres días de intensa competencia, nuestros atletas enfrentaron a los mejores equipos de la región. La final fue un partido reñido que se decidió en el quinto set, donde la disciplina táctica y la preparación física marcaron la diferencia.</p>
      <h3>Jugadores destacados</h3>
      <p>Queremos felicitar a todos los integrantes del plantel, y hacer una mención especial a nuestro capitán por su liderazgo dentro y fuera de la cancha.</p>
      <p>¡Este trofeo es solo el comienzo de una gran temporada!</p>
    `
    },
    {
        id: "2",
        slug: "nuevas-instalaciones",
        title: "Nuevas Instalaciones",
        date: "Diciembre 20, 2024",
        description: "Inauguramos nuestra cancha techada de última generación.",
        image: "/indoor-volleyball-court.jpg",
        content: `
      <p>Con gran orgullo anunciamos la apertura oficial de nuestro nuevo complejo deportivo techado, diseñado para cumplir con los estándares internacionales de la FIVB.</p>
      <h3>Características del nuevo complejo</h3>
      <ul>
        <li>Superficie sintética de alto impacto para reducir lesiones.</li>
        <li>Iluminación LED de grado profesional.</li>
        <li>Gradas con capacidad para 500 espectadores.</li>
        <li>Vestuarios modernos y climatizados.</li>
      </ul>
      <p>Estas instalaciones permitirán que nuestros equipos entrenen bajo cualquier condición climática y nos posicionan como uno de los clubes mejor equipados del país.</p>
    `
    },
    {
        id: "3",
        slug: "torneo-de-verano",
        title: "Torneo de Verano",
        date: "Diciembre 10, 2024",
        description: "Inscripciones abiertas para nuestro tradicional torneo de verano.",
        image: "/volleyball-tournament.jpg",
        content: `
      <p>¡Vuelve el evento más esperado del año! El Torneo de Verano ISE 2025 está listo para recibir a equipos de todas las categorías.</p>
      <h3>Información del evento</h3>
      <p>El torneo se llevará a cabo del 20 al 25 de Enero en nuestras instalaciones. Contaremos con categorías desde Mini-Voley hasta Mayores, en ramas masculina y femenina.</p>
      <h3>Inscripciones</h3>
      <p>Los equipos interesados pueden inscribirse hasta el 10 de Enero. No pierdas la oportunidad de competir contra los mejores y disfrutar de una semana llena de voleibol y camaradería.</p>
      <p>Contáctanos para más información sobre costos y requisitos.</p>
    `
    }
]
