import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, Globe } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import ExperienceCard from "./components/experience-card"

export default function Page() {
  const experiences = [
    {
      title: "Desarrollador Web Freelance",
      company: "Profesional independiente",
      period: "Ago. 2024 - Actualidad",
      location: "Lima, Perú",
      type: "En remoto",
      description:
        "Diseño y desarrollo de aplicaciones web interactivas, especializándome en experiencias de usuario para puntos de venta y autoservicio.",
      responsibilities: [
        "Desarrollo en React + Tailwind de interfaces modernas y responsivas",
        "Implementación de menús interactivos con carrito dinámico (estilo McDonald's kiosk)",
        "Optimización de la experiencia de usuario (UX/UI) para clientes en punto de venta",
        "Configuración de arquitectura escalable para futuras integraciones backend",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    },
    {
      title: "Desarrollador Frontend",
      company: "Kruma",
      period: "Feb. 2024 - Jul. 2024",
      location: "Lima, Perú",
      type: "En remoto",
      description:
        "Actualización y modernización de la interfaz gráfica del sistema interno de la firma de abogados Rubio Leguía Normand.",
      responsibilities: [
        "Refactorización de componentes en React + TypeScript para mejorar mantenibilidad",
        "Implementación de nuevas vistas con CSS responsivo",
        "Optimización de performance en renderizado de componentes y carga de datos",
        "Colaboración en integración con APIs existentes",
        "Mejora de consistencia visual aplicando lineamientos de diseño",
      ],
      technologies: ["React", "TypeScript", "CSS", "APIs REST"],
    },
    {
      title: "Asistente de Aulas y Laboratorios",
      company: "CIBERTEC",
      period: "Jul. 2023 - Jul. 2025",
      location: "Lima, Perú",
      type: "Presencial",
      description:
        "Soporte técnico y administrativo en laboratorios de cómputo, asegurando el correcto funcionamiento de equipos y software para el desarrollo de clases.",
      responsibilities: [
        "Instalación, configuración y clonación de software en laboratorios (Windows e iMac)",
        "Coordinación con jefaturas académicas para preparación de laboratorios",
        "Soporte técnico a docentes y estudiantes (Blackboard, VPN, Azure Virtual Desktop)",
        "Monitoreo de asistencia docente y comunicación de incidencias",
      ],
      achievements: [
        "Desarrollo de sistema automatizado de horarios que generaba PDFs para impresión",
        "Creación de sistema básico de reservas de laboratorios digitalizando el proceso de solicitudes",
      ],
      technologies: ["Windows", "macOS", "Azure", "Blackboard", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Gestor Operativo",
      company: "Kruma",
      period: "Jul. 2020 - Sept. 2020",
      location: "Lima, Perú",
      type: "En remoto",
      description:
        "Mantenimiento y soporte a las operaciones tecnológicas de educación SPEEXX de la Universidad César Vallejo.",
      responsibilities: [
        "Gestión de tickets de incidencia",
        "Asesoría en el uso de aplicaciones web",
        "Soporte técnico a usuarios finales",
      ],
      technologies: ["SPEEXX", "Gestión de tickets", "Soporte técnico"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Adrian.dev</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                Sobre mi
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experiencia
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Proyectos
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contacto
              </Link>
            </nav>
          </div>
          <a className="flex items-end"
          href="/CV_Adrian_Escobar_Rodriguez_SP.pdf" 
          download="AdrianEscobarCV.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          >
          <Button variant="outline" className="ml-auto bg-transparent">
            Descargar CV
          </Button>
          </a>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              

              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Adrian Escobar Rodriguez
                </h1>
                <h2 className="text-2xl font-semibold text-primary">Frontend Developer</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Especializado en crear experiencias de usuario excepcionales con React, Next.js y TypeScript.
                  Apasionado por el desarrollo frontend y las interfaces modernas.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/Adrianzzziny" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/adrian-alexis-escobar-rodriguez-36738b172/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:adri-escobar@hotmail.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Experiencia Profesional
            </h2>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  title={experience.title}
                  company={experience.company}
                  period={experience.period}
                  location={experience.location}
                  type={experience.type}
                  description={experience.description}
                  responsibilities={experience.responsibilities}
                  achievements={experience.achievements}
                  technologies={experience.technologies}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Proyectos</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Estacion Roll Food Order App"
                description="Aplicación completa de autoservicio para pedidos de comida oriental diseñada para tablets en restaurantes, similar a las pantallas de McDonald's pero adaptada al mercado peruano."
                image="/screenEstacionRoll.png"
                link1="https://github.com/Adrianzzziny/estacion-roll-food-order-app"
                link2="https://estacion-roll-food-order-app.vercel.app/"
                tags={["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"]}
              />
              <ProjectCard
                title="Sistema de Reservas de Laboratorios"
                description="Plataforma web que permite a estudiantes reservar espacios en laboratorios de cómputo con validaciones en tiempo real, control de cupos y panel administrativo."
                image="/screenReservaAulas.png"
                link1="https://github.com/Adrianzzziny/sistema-de-reservas-de-laboratorios"
                link2="https://sistema-de-reservas-de-laboratorios.vercel.app/"
                tags={["React", "TypeScript", "CSS", "LocalStorage"]}
              />
              <ProjectCard
                title="Sistema de Horarios"
                description="Sistema que genera automáticamente horarios semanales de salones a partir de archivos Excel, simplificando la creación de horarios impresos para aulas."
                image="/screenSistemaHorarios.png"
                link1="https://github.com/Adrianzzziny/Sistema-de-Horarios-"
                link2="https://github.com/Adrianzzziny/Sistema-de-Horarios-"
                tags={["HTML", "CSS", "JavaScript", "Excel Integration"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2025 Adrian Escobar Rodriguez. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terminos de Servicio
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacidad
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
