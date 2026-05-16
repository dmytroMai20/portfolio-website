import { getAbout, getCv, getProjects, getContact } from '../lib/queries'
import AboutSection from '../components/AboutSection'
import CVSection from '../components/CVSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'

export default async function Page() {
  const [about, cv, projects, contact] = await Promise.all([
    getAbout(),
    getCv(),
    getProjects(),
    getContact(),
  ])

  return (
    <>
      {about && <AboutSection {...about} />}
      {cv && <CVSection {...cv} />}
      <ProjectsSection projects={projects} />
      {contact && <ContactSection {...contact} />}
    </>
  )
}
