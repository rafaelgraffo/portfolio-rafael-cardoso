import type { Translation } from './types'

export const en: Translation = {
  meta: {
    title: "Rafael Cardoso — IT Management & Software Engineering",
    description:
      "Portfolio of Rafael Cardoso: over ten years in Information Technology across IT management, operations, infrastructure, support and leadership, now moving into software engineering, Cloud and DevOps.",
  },
  a11y: {
    skip: "Skip to content",
    menu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    languageGroup: "Select language",
    newTab: "(opens in a new tab)",
    backToTop: "Back to top",
  },
  nav: {
    about: "About",
    experience: "Experience",
    technologies: "Technologies",
    certifications: "Certifications",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    eyebrow: "// INFORMATION TECHNOLOGY",
    name: "Rafael Cardoso",
    role: "IT Management & Software Engineering",
    description:
      "Over ten years in Information Technology across technical support, infrastructure, operations and IT management. I am now moving into software engineering, Cloud and DevOps, combining operational experience with continuous learning.",
    projectsCta: "View projects",
    githubCta: "GitHub",
    photoAlt: "Profile photo of Rafael Cardoso",
    scrollHint: "Scroll to explore",
  },
  about: {
    eyebrow: "01 / ABOUT",
    title: "About me",
    paragraphs: [
      "I built my career in Information Technology over more than ten years, focused on technical support. Working daily with systems, people and processes gave me a practical view of infrastructure, operations and IT management.",
      "That foundation led to team leadership and continuous improvement: documenting, standardising and simplifying were always part of the job. It is on top of that experience that I am now growing into software engineering, Cloud Computing and DevOps.",
      "I study continuously and move forward through hands-on projects, connecting what I learn to real problems while keeping the operational discipline I brought from IT.",
    ],
    asideLabel: "IN SHORT",
    aside: "IT Management · Leadership · Operations · Infrastructure · Software Engineering",
  },
  experience: {
    eyebrow: "02 / EXPERIENCE",
    title: "Experience",
    intro: "Work across IT management, operations, infrastructure, support and team leadership.",
    items: [
      {
        title: "IT Management",
        description:
          "Organising routines, prioritising demands and aligning technology, processes and people.",
      },
      {
        title: "Operations & Infrastructure",
        description:
          "Monitoring environments, system availability and supporting continuity of operations.",
      },
      {
        title: "Technical Support",
        description:
          "Handling, diagnosing and treating incidents with clear communication and records of what was done.",
      },
      {
        title: "Leadership & Continuous Improvement",
        description:
          "Leading workflows, standardising practices and incrementally improving team processes.",
      },
    ],
  },
  technologies: {
    eyebrow: "03 / TECHNOLOGIES",
    title: "Technologies",
    used: {
      title: "Stack & tools",
      badge: "In use",
      note: "Technologies in my day-to-day work, in professional contexts and in the projects on my profile, including PALCO Angola and Nativo Sabe.",
      context: "FastAPI and Python used in a professional context in an internal project related to GLPI.",
      groups: [
        { label: "Version control", items: ["Git", "GitHub"] },
        { label: "Languages & runtime", items: ["JavaScript", "TypeScript", "Python", "Node.js"] },
        { label: "Web & mobile", items: ["HTML5", "CSS3", "React", "React Native", "Expo", "Vite"] },
        { label: "Backend & infrastructure", items: ["Fastify", "FastAPI", "Supabase", "PostgreSQL", "Docker"] },
        { label: "Data & quality", items: ["SQL", "Zod", "Vitest"] },
        { label: "Tools & platforms", items: ["GLPI"] },
      ],
    },
    learning: {
      title: "Currently studying",
      badge: "Studying",
      note: "Topics I am currently studying and practising, still building proficiency, with a focus on everyday applications.",
      groups: [
        { label: "Cloud & infrastructure", items: ["Cloud Computing (AWS)", "Serverless architecture", "DevOps"] },
        { label: "Engineering & AI", items: ["Software Engineering", "AI-assisted Software Engineering"] },
        { label: "Languages & applications", items: ["Java", "Application development"] },
      ],
    },
  },
  certifications: {
    eyebrow: "04 / CERTIFICATIONS & EDUCATION",
    title: "Certifications & Education",
    groups: [
      {
        label: "Academic education",
        kind: "academic",
        itemLabel: "Education",
        items: [
          { name: "Information Technology Management" },
          { name: "Postgraduate studies in Project Management" },
        ],
      },
      {
        label: "Certifications",
        kind: "certification",
        itemLabel: "Certification",
        items: [
          { name: "Cisco CCST Cybersecurity" },
          {
            name: "AWS Certified Cloud Practitioner",
            link: "https://www.credly.com/badges/6d12bd69-4c20-46d2-b550-f1f5788ba3e3",
            linkLabel: "View badge on Credly",
          },
          { name: "Furukawa FCP" },
        ],
      },
      {
        label: "Certification in progress",
        kind: "in-progress",
        itemLabel: "In progress",
        items: [
          { name: "AWS Certified Solutions Architect – Associate" },
        ],
      },
      {
        label: "Training Courses / Professional Development",
        kind: "course",
        itemLabel: "Course",
        items: [
          { name: "Full Stack Development — SENAI-SP" },
          { name: "ITIL 4" },
        ],
      },
    ],
  },
  projects: {
    eyebrow: "05 / SELECTED PROJECTS",
    title: "Selected projects",
    intro: "Three projects that are part of my recent path.",
    githubLabel: "GitHub profile",
    // Deliberately neutral descriptions: replace with text validated by Rafael
    // before publishing, without adding results or metrics.
    items: [
      {
        name: "PALCO Angola",
        kind: "Application & services",
        description:
          "Software initiative related to PALCO Angola events, with an application and services under development.",
      },
      {
        name: "Nativo Sabe",
        kind: "Web",
        description: "Web project structured with Vite, React and TypeScript.",
      },
      {
        name: "RETROGAMER-1986",
        kind: "Retro / pixel art",
        description: "Retro-themed project with a visual identity inspired by pixel art.",
      },
    ],
  },
  contact: {
    eyebrow: "06 / CONTACT",
    title: "Let's talk",
    description: "Explore my projects and my path through the public channels below.",
    github: "GitHub",
    linkedin: "LinkedIn",
    note: "GitHub and LinkedIn are my public channels.",
  },
  footer: {
    stack: "Static site · React + Vite + TypeScript",
    rights: "© 2026 Rafael Cardoso. All rights reserved.",
  },
}
