export default function ProjectsSection() {
  const projects = [
    {
      title: "Project One",
      description: "An innovative solution that addresses complex business challenges through cutting-edge technology and thoughtful design.",
      technologies: ["React", "TypeScript", "Node.js"],
      status: "Completed"
    },
    {
      title: "Project Two", 
      description: "A comprehensive platform designed to streamline workflows and enhance productivity for teams of all sizes.",
      technologies: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      status: "In Progress"
    },
    {
      title: "Project Three",
      description: "Open-source contribution focused on improving developer experience and building community tools.",
      technologies: ["JavaScript", "Python", "Docker"],
      status: "Completed"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
