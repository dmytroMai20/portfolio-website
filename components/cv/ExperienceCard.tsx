interface ExperienceCardProps {
  title?: string
  company?: string
  period?: string
  description?: string
}

export default function ExperienceCard({ title, company, period, description }: ExperienceCardProps) {
  return (
    <div>
      <h4 className="font-medium text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{company} • {period}</p>
      {description && (
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      )}
    </div>
  )
}
