export type Language = 'pt' | 'en' | 'fr'

/** A labelled row of slots inside the digital-inventory modules. */
export interface TechCategory {
  label: string
  items: string[]
}

export interface TechGroup {
  title: string
  /** Explicit, translated state marker: "in use" vs "studying". */
  badge: string
  note: string
  /** Optional contextual note, e.g. where a technology was used. */
  context?: string
  groups: TechCategory[]
}

/**
 * Only earned `certification` items may display a professional-certification
 * seal. Academic education, training courses and certifications still in
 * preparation use a neutral marker instead.
 */
export type CertificationKind = 'academic' | 'certification' | 'in-progress' | 'course'

export interface CertificationGroup {
  label: string
  kind: CertificationKind
  /** Neutral per-item label shown inside the file card. */
  itemLabel: string
  items: Array<{
    name: string
    link?: string
    linkLabel?: string
  }>
}

/**
 * Single source of truth for every visible string.
 * Each language file must satisfy this interface, so a missing section is a
 * compile-time error instead of a partially translated page.
 */
export interface Translation {
  meta: {
    title: string
    description: string
  }
  a11y: {
    skip: string
    menu: string
    closeMenu: string
    languageGroup: string
    newTab: string
    backToTop: string
  }
  nav: {
    about: string
    experience: string
    technologies: string
    certifications: string
    projects: string
    contact: string
  }
  hero: {
    eyebrow: string
    name: string
    role: string
    description: string
    projectsCta: string
    githubCta: string
    photoAlt: string
    scrollHint: string
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    asideLabel: string
    aside: string
  }
  experience: {
    eyebrow: string
    title: string
    intro: string
    items: Array<{ title: string; description: string }>
  }
  technologies: {
    eyebrow: string
    title: string
    used: TechGroup
    learning: TechGroup
  }
  certifications: {
    eyebrow: string
    title: string
    groups: CertificationGroup[]
  }
  projects: {
    eyebrow: string
    title: string
    intro: string
    githubLabel: string
    items: Array<{ name: string; kind: string; description: string }>
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    github: string
    linkedin: string
    note: string
  }
  footer: {
    stack: string
    rights: string
  }
}
