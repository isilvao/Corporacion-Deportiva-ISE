import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/Logo.png"
                  alt="ISE Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold">Corporación Deportiva ISE</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Excelencia deportiva, disciplina y trabajo en equipo desde 2022.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-accent transition-colors">
                  Categorías
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-accent transition-colors">
                  Palmarés
                </Link>
              </li>
              <li>
                <Link href="/statutes" className="hover:text-accent transition-colors">
                  Estatutos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80"><a href="https://maps.app.goo.gl/dngueNwvByvhTh9k6">Av. 9 Este #0 Norte-2 a 0 Norte-82, Quinta Oriental, Cúcuta, Norte de Santander</a></span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span className="text-primary-foreground/80">+57 3002071818</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span className="text-primary-foreground/80">corporaciondeportivaise@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://web.facebook.com/p/Corporaci%C3%B3n-Deportiva-ISE-100062486202456/?locale=es_LA&_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/corporaciondeportivaise/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@corporaciondeportivaise6069"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Corporación Deportiva ISE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
