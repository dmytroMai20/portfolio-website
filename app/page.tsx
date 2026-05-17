import { getAbout, getCv, getProjects, getContact } from '../lib/queries'
import { AboutSection } from '../components/about'
import { CVSection } from '../components/cv'
import { ProjectsSection } from '../components/projects'
import { ContactSection } from '../components/contact'

export const revalidate = 1800 // refresh every 30 minutes

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
