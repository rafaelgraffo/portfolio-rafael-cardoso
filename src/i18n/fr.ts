import type { Translation } from './types'

export const fr: Translation = {
  meta: {
    title: "Rafael Cardoso — Gestion informatique & génie logiciel",
    description:
      "Portfolio de Rafael Cardoso : plus de dix ans dans les technologies de l'information, en gestion informatique, opérations, infrastructure, support et leadership, en transition vers le génie logiciel, le Cloud et le DevOps.",
  },
  a11y: {
    skip: "Aller au contenu",
    menu: "Ouvrir le menu de navigation",
    closeMenu: "Fermer le menu de navigation",
    languageGroup: "Choisir la langue",
    newTab: "(s'ouvre dans un nouvel onglet)",
    backToTop: "Retour en haut",
  },
  nav: {
    about: "À propos",
    experience: "Expérience",
    technologies: "Technologies",
    certifications: "Certifications",
    projects: "Projets",
    contact: "Contact",
  },
  hero: {
    eyebrow: "// TECHNOLOGIES DE L'INFORMATION",
    name: "Rafael Cardoso",
    role: "Gestion informatique & génie logiciel",
    description:
      "Plus de dix ans dans les technologies de l'information, entre support technique, infrastructure, opérations et gestion informatique. Je poursuis aujourd'hui une transition vers le génie logiciel, le Cloud et le DevOps, en alliant expérience opérationnelle et apprentissage continu.",
    projectsCta: "Voir les projets",
    githubCta: "GitHub",
    photoAlt: "Photo de profil de Rafael Cardoso",
    scrollHint: "Faites défiler pour explorer",
  },
  about: {
    eyebrow: "01 / À PROPOS",
    title: "À propos de moi",
    paragraphs: [
      "J'ai construit mon parcours dans les technologies de l'information pendant plus de dix ans, axé sur le support technique. Le quotidien avec les systèmes, les personnes et les processus m'a donné une vision concrète de l'infrastructure, des opérations et de la gestion informatique.",
      "Cette base m'a mené au leadership d'équipe et à l'amélioration continue : documenter, standardiser et simplifier ont toujours fait partie du travail. C'est sur cette expérience que j'évolue aujourd'hui vers le génie logiciel, le Cloud Computing et le DevOps.",
      "J'étudie de façon continue et j'avance par des projets concrets, en reliant ce que j'apprends à des problèmes réels, sans perdre la rigueur opérationnelle acquise dans les TI.",
    ],
    asideLabel: "EN BREF",
    aside: "Gestion informatique · Leadership · Opérations · Infrastructure · Génie logiciel",
  },
  experience: {
    eyebrow: "02 / EXPÉRIENCE",
    title: "Expérience",
    intro: "Intervention en gestion informatique, opérations, infrastructure, support et leadership d'équipe.",
    items: [
      {
        title: "Gestion informatique",
        description:
          "Organisation des routines, priorisation des demandes et alignement entre technologie, processus et personnes.",
      },
      {
        title: "Opérations & Infrastructure",
        description:
          "Suivi des environnements, disponibilité des systèmes et soutien à la continuité des opérations.",
      },
      {
        title: "Support technique",
        description:
          "Prise en charge, diagnostic et traitement des incidents, avec une communication claire et le suivi des interventions.",
      },
      {
        title: "Leadership & Amélioration continue",
        description:
          "Conduite des flux de travail, standardisation des pratiques et évolution progressive des processus de l'équipe.",
      },
    ],
  },
  technologies: {
    eyebrow: "03 / TECHNOLOGIES",
    title: "Technologies",
    used: {
      title: "Stack et outils",
      badge: "En usage",
      note: "Technologies du quotidien, en contexte professionnel et dans les projets publiés sur mon profil, dont PALCO Angola et Nativo Sabe.",
      context: "FastAPI et Python utilisés dans un contexte professionnel sur un projet interne lié à GLPI.",
      groups: [
        { label: "Versionnement", items: ["Git", "GitHub"] },
        { label: "Langages & runtime", items: ["JavaScript", "TypeScript", "Python", "Node.js"] },
        { label: "Web & mobile", items: ["HTML5", "CSS3", "React", "React Native", "Expo", "Vite"] },
        { label: "Backend & infrastructure", items: ["Fastify", "FastAPI", "Supabase", "PostgreSQL", "Docker"] },
        { label: "Données & qualité", items: ["SQL", "Zod", "Vitest"] },
        { label: "Outils & plateformes", items: ["GLPI"] },
      ],
    },
    learning: {
      title: "Sujets en cours d'apprentissage",
      badge: "À l'étude",
      note: "Sujets que j'étudie et pratique actuellement, encore en formation, avec un focus sur les applications du quotidien.",
      groups: [
        { label: "Cloud & infrastructure", items: ["Cloud Computing (AWS)", "Architecture serverless", "DevOps"] },
        { label: "Ingénierie & IA", items: ["Génie logiciel", "Ingénierie logicielle assistée par IA"] },
        { label: "Langages & applications", items: ["Java", "Développement d'applications"] },
      ],
    },
  },
  certifications: {
    eyebrow: "04 / CERTIFICATIONS & FORMATION",
    title: "Certifications & Formation",
    groups: [
      {
        label: "Formation académique",
        kind: "academic",
        itemLabel: "Formation",
        items: [
          { name: "Gestion des technologies de l'information" },
          { name: "Études de troisième cycle en gestion de projets" },
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
            linkLabel: "Voir le badge sur Credly",
          },
          { name: "Furukawa FCP" },
        ],
      },
      {
        label: "Certification en préparation",
        kind: "in-progress",
        itemLabel: "En préparation",
        items: [
          { name: "AWS Certified Solutions Architect – Associate" },
        ],
      },
      {
        label: "Cours de formation / Perfectionnement",
        kind: "course",
        itemLabel: "Cours",
        items: [
          { name: "Développement Full Stack — SENAI-SP" },
          { name: "ITIL 4" },
        ],
      },
    ],
  },
  projects: {
    eyebrow: "05 / PROJETS SÉLECTIONNÉS",
    title: "Projets sélectionnés",
    intro: "Trois projets qui font partie de mon parcours récent.",
    githubLabel: "Profil GitHub",
    // Descriptions volontairement neutres : à remplacer par un texte validé par
    // Rafael avant publication, sans ajouter de résultats ni de métriques.
    items: [
      {
        name: "PALCO Angola",
        kind: "Application & services",
        description:
          "Initiative logicielle liée à l'univers des événements PALCO Angola, avec une application et des services en développement.",
      },
      {
        name: "Nativo Sabe",
        kind: "Web",
        description: "Projet web structuré avec Vite, React et TypeScript.",
      },
      {
        name: "RETROGAMER-1986",
        kind: "Rétro / pixel art",
        description: "Projet au thème rétro, avec une identité visuelle inspirée du pixel art.",
      },
    ],
  },
  contact: {
    eyebrow: "06 / CONTACT",
    title: "Échangeons",
    description: "Découvrez mes projets et mon parcours via les canaux publics ci-dessous.",
    github: "GitHub",
    linkedin: "LinkedIn",
    note: "GitHub et LinkedIn sont mes canaux publics.",
  },
  footer: {
    stack: "Site statique · React + Vite + TypeScript",
    rights: "© 2026 Rafael Cardoso. Tous droits réservés.",
  },
}
