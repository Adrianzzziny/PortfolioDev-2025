import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  location: string
  type: string
  description: string
  responsibilities: string[]
  achievements?: string[]
  technologies: string[]
}

export default function ExperienceCard({
  title,
  company,
  period,
  location,
  type,
  description,
  responsibilities,
  achievements,
  technologies,
}: ExperienceCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex items-center gap-2 text-primary font-medium">
            <Building className="h-4 w-4" />
            <span>{company}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>
                {location} · {type}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>

        <div>
          <h4 className="font-medium mb-2">Principales funciones:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        {achievements && achievements.length > 0 && (
          <div>
            <h4 className="font-medium mb-2">Logros destacados:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-green-700 dark:text-green-400">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="font-medium mb-2">Tecnologías:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
