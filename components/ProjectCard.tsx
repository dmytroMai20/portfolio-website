interface ProjectCardProps {
  title?: string
  description?: string
  technologies?: string[]
  status?: 'Completed' | 'In Progress'
}

export default function ProjectCard({ title, description, technologies, status }: ProjectCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${
          status === 'Completed'
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {status}
        </span>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies?.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
