export interface NewsItem {
  id: string
  slug: string
  title: string
  date: string
  description: string
  content: string // HTML or Markdown content
  image: string
  imagePosition?: string // e.g., "center", "top", "bottom", "75% 25%"
}

export const newsData: NewsItem[] = [
  {
    id: "4",
    slug: "torneo-departamental",
    title: "Participación en el Torneo Departamental",
    date: "Marzo 2026",
    description: "La Corporación Deportiva ISE celebra la clasificación de sus tres equipos a la Fase Nacional de Voleibol U13. Con deportistas nacidas entre 2014 y 2018, este hito liderado por el presidente Iván Silva consolida el éxito de su proceso formativo y el apoyo incondicional de las familias.",
    image: "/Noticia4.jpeg",
    imagePosition: "50% 10%",
    content: `
    <div class="comunicado-container">
    <div class="header-banner">
        <div class="emoji-bar">🥇 🥈 🥉 🏆</div>
        <h1>LOGRO HISTÓRICO: RUMBO AL NACIONAL</h1>
    </div>

    <div class="content-body">
        <p>La <strong>Corporación Deportiva ISE</strong> sigue creciendo de la mano de su comunidad y hoy celebra un importante logro en su proceso formativo. 💚🏐</p>

        <div class="highlight-box">
            Gracias al compromiso de nuestras deportistas, el apoyo de los padres de familia y el trabajo constante de nuestro equipo técnico, logramos clasificar a la fase nacional de voleibol categoría U13 con nuestros tres equipos en competencia, integrados por niñas de las categorías 2014, 2015, 2016, 2017 y 2018.
        </div>

        <p>Este resultado no solo refleja el talento en la cancha, sino también los valores, la disciplina y el sentido de pertenencia que se construyen día a día en cada entrenamiento.</p>

        <p>Queremos expresar un agradecimiento especial a todos los padres de familia, quienes con su apoyo incondicional, esfuerzo y confianza hacen posible que cada una de nuestras deportistas continúe creciendo y cumpliendo sus sueños dentro y fuera de la cancha.</p>

        <p>Bajo el liderazgo de nuestro presidente <strong>Iván Silva</strong>, seguimos fortalecer un proyecto deportivo que busca formar no solo grandes jugadoras, sino también excelentes personas.</p>

        <p>Ahora nos preparamos con ilusión y responsabilidad para representar de la mejor manera a nuestro club y a nuestro departamento en la fase nacional.</p>
    </div>

    <div class="footer-signature">
        <strong>Corporación Deportiva ISE</strong>
        <span>Formando deportistas de excelencia</span>
        <div class="valedictory">¡VAMOS CON TODA! 💪🏐</div>
    </div>
</div>
    `
  },
  {
    id: "3",
    slug: "torneo-reyes-de-la-frontera",
    title: "Torneo Reyes de la Frontera",
    date: "Marzo 2026",
    description: "La Corporación Deportiva ISE destacó en el torneo Reyes de la Frontera, logrando resultados sobresalientes en sus categorías formativas.",
    image: "/Noticia3.jpeg",
    imagePosition: "top center",
    content: `
    <div class="card-torneo">
      <div class="header-torneo">
        <h2>Reyes de la Frontera 🏐</h2>
      </div>

      <div class="content-torneo">
        <p>Este fin de semana, la <strong>Corporación Deportiva ISE</strong> vivió una jornada inolvidable de competencia y aprendizaje, demostrando el fruto del trabajo constante en nuestras categorías base.</p>

        <h3>Resultados Destacados:</h3>
        <table class="results-table">
          <tr>
            <td><strong>Categoría Mini</strong></td>
            <td>🏆 Campeones y 🥈 Subcampeones</td>
          </tr>
          <tr>
            <td><strong>Categoría Infantil</strong></td>
            <td>🏆 Campeones</td>
          </tr>
        </table>

        <p>Actualmente, el equipo se encuentra en una fase intensiva de preparación para el <strong>Departamental U13</strong> de la Liga Norte Santandereana de Voleibol, ajustando detalles técnicos y tácticos para los retos del 2026.</p>

        <p class="highlight">¡Un agradecimiento especial a los padres de familia por su apoyo incondicional!</p>
      </div>

      <div class="footer-torneo">
        Seguimos creciendo, compitiendo y soñando en grande. 💚🔥
      </div>
    </div>
    `
  },
  {
    id: "2",
    slug: "copa-nacional-color-voley",
    title: "Copa Nacional Color Voley",
    date: "Enero 2026",
    description: "La corporación finaliza su participación en el Copa Nacional Color Voley en la ciudad de Medellín con el equipo Infantil",
    image: "/Noticia2.jpeg",
    imagePosition: "center",
    content: `
    <h3>💚🏐 Destacada participación en la III Copa Nacional Color Voley 2026</h3>

    <p>
    Realizada en <strong>Envigado, Antioquia</strong>, este importante evento dejó un balance altamente positivo para el inicio del año, reflejando el crecimiento y los frutos de un proyecto deportivo sólido en la <strong>categoría infantil</strong>.
    </p>

    <p>
    Durante la competencia, el equipo mostró un excelente volumen de juego, asumiendo nuevos retos y logrando la <strong>clasificación a la Fase Oro</strong>, entre los <strong>12 mejores clubes del torneo a nivel nacional</strong>. Este resultado evidencia, con carácter y calidad, el alto nivel que se viene formando en nuestro club de cara a las próximas competencias nacionales.
    </p>

    <p>
    Extendemos un agradecimiento muy especial a los <strong>padres de familia</strong>, quienes fazem posible la participación de sus hijas en estos eventos y respaldan de manera constante cada proceso formativo. <em>Gracias por creer y confiar en nosotros.</em> 🏐💚
    </p>

    <p>
    <strong>Seguimos formando atletas competitivas para nuestro Departamento.</strong>
    </p>

    `
  },
  {
    id: "1",
    slug: "campeonato-nacional-color-fest",
    title: "Campeonato Nacional Color Fest",
    date: "Enero 2026",
    description: "La corporación inicia su temporada 2026 con la participación en el Campeonato Nacional Color Fest en la ciudad de Medellín con el equipo Infantil",
    image: "/Noticia1.jpeg",
    imagePosition: "center",
    content: `
  <p>¡Inicia la cuenta regresiva! Nuestra corporación arranca oficialmente su calendario deportivo 2026 enfrentando uno de los retos más importantes a nivel nacional. Nuestro <strong>equipo Infantil</strong> viajará al departamento de Antioquia para hacer su gran debut en el <strong>Campeonato Nacional Color Fest</strong>.</p>
  
  <hr />

  <h3>📍 Información del Torneo</h3>
  <ul>
    <li><strong>Fechas:</strong> Del 11 al 14 de enero de 2026.</li>
    <li><strong>Sede:</strong> Polideportivo Sur de Envigado, Antioquia.</li>
    <li><strong>Nivel:</strong> Competencia contra los mejores clubes de Colombia.</li>
    <li><strong>Hito:</strong> Es nuestra primera participación oficial en este prestigioso certamen.</li>
  </ul>

  <h3>📋 Nuestra Delegación</h3>
  <p>El equipo ha pasado por un proceso de preparación intensa para representar con orgullo nuestros colores. El grupo está conformado por:</p>
  <ul>
    <li><strong>Staff Técnico:</strong> Liderado por el profesor <strong>Ivan Silva Monsalve</strong> y el asistente <strong>Aldair Rojas Lozada</strong>.</li>
    <li><strong>Atletas:</strong> 10 deportistas seleccionados del semillero.</li>
    <li><strong>Total:</strong> Una delegación de 12 integrantes comprometidos con la excelencia deportiva.</li>
  </ul>

  <hr />

  <h3>🎥 ¡Apóyanos en Vivo!</h3>
  <p>No queremos que te pierdas ni un segundo de la acción. Estaremos transmitiendo los encuentros y compartiendo el día a día de nuestros deportistas a través de nuestras plataformas digitales:</p>
  
  <blockquote>
    <strong>Transmisión oficial:</strong> Sigue cada partido en nuestra página de Facebook haciendo clic aquí: 
    <br />
    <a href="https://web.facebook.com/p/Corporaci%C3%B3n-Deportiva-ISE-100062486202456/?locale=es_LA&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" style="color: #007bff; text-decoration: underline;">
      <strong>Corporación Deportiva ISE - Facebook Oficial</strong>
    </a>
  </blockquote>
  
  <p>¡Le deseamos el mayor de los éxitos a nuestro semillero en esta experiencia inolvidable en la ciudad de la eterna primavera!</p>
`
  }
]
