import { defineQuery } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from '../sanity/lib/client'
import type {
  AboutQueryResult,
  ContactQueryResult,
  CvQueryResult,
  PersonalCardQueryResult,
  ProjectsQueryResult,
} from '../types/sanity.types'
import type { AboutSectionProps } from '../components/about'
import type { CVSectionProps, Experience, Education } from '../components/cv'
import type { ContactSectionProps, SocialLink } from '../components/contact'
import type { PersonalCardProps } from '../components/header'
import type { Project } from '../components/projects'

const builder = createImageUrlBuilder(client)

export const aboutQuery = defineQuery(`*[_type == "about"][0]`)
export const cvQuery = defineQuery(`*[_type == "cv"][0]{ experiences, education, "cvFileUrl": cvFile.asset->url }`)
export const contactQuery = defineQuery(`*[_type == "contact"][0]`)
export const personalCardQuery = defineQuery(`*[_type == "personalCard"][0]`)
export const projectsQuery = defineQuery(`*[_type == "project"]`)

export async function getAbout(): Promise<AboutSectionProps | null> {
  try {
    const result = await client.fetch<AboutQueryResult>(aboutQuery)
    if (!result) return null
    return {
      heading: result.heading,
      body: result.body as AboutSectionProps['body'],
    }
  } catch {
    return null
  }
}

export async function getCv(): Promise<CVSectionProps | null> {
  try {
    const result = await client.fetch<CvQueryResult>(cvQuery)
    if (!result) return null
    return {
      experiences: result.experiences?.map((exp): Experience => ({
        key: exp._key,
        title: exp.title,
        company: exp.company,
        period: exp.period,
        description: exp.description,
      })),
      education: result.education?.map((edu): Education => ({
        key: edu._key,
        degree: edu.degree,
        institution: edu.institution,
        period: edu.period,
        description: edu.description,
      })),
      cvFileUrl: result.cvFileUrl,
    }
  } catch {
    return null
  }
}

export async function getContact(): Promise<ContactSectionProps | null> {
  try {
    const result = await client.fetch<ContactQueryResult>(contactQuery)
    if (!result) return null
    return {
      heading: result.heading,
      description: result.description,
      email: result.email,
      phone: result.phone,
      location: result.location,
      socials: result.socials
        ?.filter((s): s is typeof s & { platform: string; url: string } => !!s.platform && !!s.url)
        .map((s): SocialLink => ({ platform: s.platform, url: s.url })),
    }
  } catch {
    return null
  }
}

export async function getPersonalCard(): Promise<PersonalCardProps | null> {
  try {
    const result = await client.fetch<PersonalCardQueryResult>(personalCardQuery)
    if (!result) return null
    return {
      name: result.name,
      title: result.title,
      email: result.email,
      phone: result.phone,
      avatarUrl: result.avatar
        ? builder.image(result.avatar).width(64).height(64).url()
        : null,
    }
  } catch {
    return null
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const result = await client.fetch<ProjectsQueryResult>(projectsQuery)
    return result.map((p): Project => ({
      id: p._id,
      title: p.title,
      description: p.description,
      technologies: p.technologies,
      status: p.status,
    }))
  } catch {
    return []
  }
}
