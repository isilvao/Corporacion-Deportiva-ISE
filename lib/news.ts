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
    slug: "campeonato-nacional-color-fest",
    title: "Campeonato Nacional Color Fest",
    date: "Enero 2026",
    description: "La corporación inicia su temporada 2026 con la participación en el Campeonato Nacional Color Fest en la ciudad de Medellín con el equipo Infantil",
    image: "/QuienesSomos.jpeg",
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
  },
]
