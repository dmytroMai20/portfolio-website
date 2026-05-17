import { getAbout, getCv, getProjects, getContact } from '../lib/queries'
import { AboutSection } from '../components/about'
import { CVSection } from '../components/cv'
import { ProjectsSection } from '../components/projects'
import { ContactSection } from '../components/contact'
import AnimatedSection from '../components/ui/AnimatedSection'

export const revalidate = 1800 // refresh every 30 minutes

export default async function Page() {
  const [about, cv, projects, contact] = await Promise.all([
    getAbout(),
    getCv(),
    getProjects(),
    getContact(),
  ])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dmytro Mai',
    jobTitle: 'Software Engineer',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dmytromai.com',
    email: contact?.email,
    knowsAbout: ['TypeScript', 'React', 'Next.js', 'Node.js', 'C++', 'Multithreading', 'Performance Optimization', 'System Design', 'Cache-aware Design'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimatedSection>
        {about && <AboutSection {...about} />}
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        {cv && <CVSection {...cv} />}
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <ProjectsSection projects={projects} />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        {contact && <ContactSection {...contact} />}
      </AnimatedSection>
    </>
  )
}
