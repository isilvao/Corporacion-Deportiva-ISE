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
    id: "2",
    slug: "copa-nacional-color-voley",
    title: "Copa Nacional Color Voley",
    date: "Enero 2026",
    description: "La corporación finaliza su participación en el Copa Nacional Color Voley en la ciudad de Medellín con el equipo Infantil",
    image: "/Noticia2.jpeg",
    content: `
    <h3>💚🏐 Destacada participación en la III Copa Nacional Color Voley 2026</h3>

    <p>
    Realizada en <strong>Envigado, Antioquia</strong>, este importante evento dejó un balance altamente positivo para el inicio del año, reflejando el crecimiento y los frutos de un proyecto deportivo sólido en la <strong>categoría infantil</strong>.
    </p>

    <p>
    Durante la competencia, el equipo mostró un excelente volumen de juego, asumiendo nuevos retos y logrando la <strong>clasificación a la Fase Oro</strong>, entre los <strong>12 mejores clubes del torneo a nivel nacional</strong>. Este resultado evidencia, con carácter y calidad, el alto nivel que se viene formando en nuestro club de cara a las próximas competencias nacionales.
    </p>

    <p>
    Extendemos un agradecimiento muy especial a los <strong>padres de familia</strong>, quienes hacen posible la participación de sus hijas en estos eventos y respaldan de manera constante cada proceso formativo. <em>Gracias por creer y confiar en nosotros.</em> 🏐💚
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
