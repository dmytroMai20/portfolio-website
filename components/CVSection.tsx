import ExperienceCard from './ExperienceCard'
import EducationCard from './EducationCard'

export interface Experience {
  key: string
  title?: string
  company?: string
  period?: string
  description?: string
}

export interface Education {
  key: string
  degree?: string
  institution?: string
  period?: string
  description?: string
}

export interface CVSectionProps {
  experiences?: Experience[]
  education?: Education[]
  cvFileUrl?: string | null
}

export default function CVSection({ experiences, education, cvFileUrl }: CVSectionProps) {
  return (
    <section id="cv" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Curriculum Vitae</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Experience</h3>
              <div className="space-y-4">
                {experiences?.map((exp) => (
                  <ExperienceCard
                    key={exp.key}
                    title={exp.title}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                  />
                ))}
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Education</h3>
              <div className="space-y-4">
                {education?.map((edu) => (
                  <EducationCard
                    key={edu.key}
                    degree={edu.degree}
                    institution={edu.institution}
                    period={edu.period}
                    description={edu.description}
                  />
                ))}
              </div>
            </div>
          </div>
          {cvFileUrl && (
            <div className="mt-8 text-center">
              <a
                href={cvFileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-colors duration-200"
              >
                Download Full CV
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
