interface EducationCardProps {
  degree?: string
  institution?: string
  period?: string
  description?: string
}

export default function EducationCard({ degree, institution, period, description }: EducationCardProps) {
  return (
    <div>
      <h4 className="font-medium text-foreground">{degree}</h4>
      <p className="text-sm text-muted-foreground">{institution} • {period}</p>
      {description && (
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      )}
    </div>
  )
}
