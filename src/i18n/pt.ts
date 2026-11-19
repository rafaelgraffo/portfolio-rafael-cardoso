import type { Translation } from './types'

export const pt: Translation = {
  meta: {
    title: "Rafael Cardoso — Gestão de TI & Engenharia de Software",
    description:
      "Portfólio de Rafael Cardoso. Mais de dez anos em Tecnologia da Informação, com atuação em gestão de TI, operações, infraestrutura, suporte e liderança, em transição para engenharia de software, Cloud e DevOps.",
  },
  a11y: {
    skip: "Pular para o conteúdo",
    menu: "Abrir menu de navegação",
    closeMenu: "Fechar menu de navegação",
    languageGroup: "Selecionar idioma",
    newTab: "(abre em nova aba)",
    backToTop: "Voltar ao topo",
  },
  nav: {
    about: "Sobre",
    experience: "Experiência",
    technologies: "Tecnologias",
    certifications: "Certificações",
    projects: "Projetos",
    contact: "Contato",
  },
  hero: {
    eyebrow: "// TECNOLOGIA DA INFORMAÇÃO",
    name: "Rafael Cardoso",
    role: "Gestão de TI & Engenharia de Software",
    description:
      "Mais de dez anos em Tecnologia da Informação entre suporte, infraestrutura, operações e gestão de TI. Sigo agora em transição para engenharia de software, Cloud e DevOps, unindo experiência operacional a estudo contínuo.",
    projectsCta: "Ver projetos",
    githubCta: "GitHub",
    photoAlt: "Foto de perfil de Rafael Cardoso",
    scrollHint: "Role para explorar",
  },
  about: {
    eyebrow: "01 / SOBRE",
    title: "Sobre mim",
    paragraphs: [
      "Construí minha trajetória em Tecnologia da Informação ao longo de mais de dez anos, com foco em suporte técnico. O dia a dia com sistemas, pessoas e processos me deu uma visão prática de infraestrutura, operações e gestão de TI.",
      "Dessa base vieram a liderança de equipes e a melhoria contínua: documentar, padronizar e simplificar sempre fizeram parte do trabalho. É sobre essa experiência que venho evoluindo para engenharia de software, Cloud Computing e DevOps.",
      "Estudo de forma contínua e avanço com projetos práticos, conectando o que aprendo a problemas reais, sem deixar de lado o rigor operacional que trouxe da área de TIC.",
    ],
    asideLabel: "EM RESUMO",
    aside: "Gestão de TI · Liderança · Operações · Infraestrutura · Engenharia de Software",
  },
  experience: {
    eyebrow: "02 / EXPERIÊNCIA",
    title: "Experiência",
    intro: "Atuação em gestão de TI, operações, infraestrutura, suporte e liderança de equipes.",
    items: [
      {
        title: "Gestão de TI",
        description:
          "Organização de rotinas, priorização de demandas e alinhamento entre tecnologia, processos e pessoas.",
      },
      {
        title: "Operações & Infraestrutura",
        description:
          "Acompanhamento de ambientes, disponibilidade de sistemas e suporte à continuidade das operações.",
      },
      {
        title: "Suporte Técnico",
        description:
          "Atendimento, diagnóstico e tratamento de incidentes, com comunicação clara e registro do que foi feito.",
      },
      {
        title: "Liderança & Melhoria Contínua",
        description:
          "Condução de fluxos de trabalho, padronização de práticas e evolução incremental dos processos da equipe.",
      },
    ],
  },
  technologies: {
    eyebrow: "03 / TECNOLOGIAS",
    title: "Tecnologias",
    used: {
      title: "Stack e ferramentas",
      badge: "Em uso",
      note: "Tecnologias presentes no dia a dia, em contexto profissional e nos projetos publicados no perfil, incluindo o PALCO Angola e o Nativo Sabe.",
      context: "FastAPI e Python utilizados em contexto profissional em projeto interno relacionado ao GLPI.",
      groups: [
        { label: "Versionamento", items: ["Git", "GitHub"] },
        { label: "Linguagens & runtime", items: ["JavaScript", "TypeScript", "Python", "Node.js"] },
        { label: "Web & mobile", items: ["HTML5", "CSS3", "React", "React Native", "Expo", "Vite"] },
        { label: "Backend & infraestrutura", items: ["Fastify", "FastAPI", "Supabase", "PostgreSQL", "Docker"] },
        { label: "Dados & qualidade", items: ["SQL", "Zod", "Vitest"] },
        { label: "Ferramentas & plataformas", items: ["GLPI"] },
      ],
    },
    learning: {
      title: "Tecnologias em estudo",
      badge: "Em estudo",
      note: "Temas que estudo e pratico neste momento, ainda em formação, com foco em aplicações de uso cotidiano.",
      groups: [
        { label: "Nuvem & infraestrutura", items: ["Cloud Computing (AWS)", "Arquitetura serverless", "DevOps"] },
        { label: "Engenharia & IA", items: ["Engenharia de Software", "Engenharia de Software assistida por IA"] },
        { label: "Linguagens & aplicações", items: ["Java", "Desenvolvimento de aplicações"] },
      ],
    },
  },
  certifications: {
    eyebrow: "04 / CERTIFICAÇÕES & FORMAÇÃO",
    title: "Certificações & Formação",
    groups: [
      {
        label: "Formação acadêmica",
        kind: "academic",
        itemLabel: "Formação",
        items: [
          { name: "Gestão da Tecnologia da Informação" },
          { name: "Pós-graduação em Gestão de Projetos" },
        ],
      },
      {
        label: "Certificações",
        kind: "certification",
        itemLabel: "Certificação",
        items: [
          { name: "Cisco CCST Cybersecurity" },
          {
            name: "AWS Certified Cloud Practitioner",
            link: "https://www.credly.com/badges/6d12bd69-4c20-46d2-b550-f1f5788ba3e3",
            linkLabel: "Ver badge na Credly",
          },
          { name: "Furukawa FCP" },
        ],
      },
      {
        label: "Certificação em preparação",
        kind: "in-progress",
        itemLabel: "Em preparação",
        items: [
          { name: "AWS Certified Solutions Architect – Associate" },
        ],
      },
      {
        label: "Cursos de Formação / Capacitação",
        kind: "course",
        itemLabel: "Curso",
        items: [
          { name: "Desenvolvimento Full Stack — SENAI-SP" },
          { name: "ITIL 4" },
        ],
      },
    ],
  },
  projects: {
    eyebrow: "05 / PROJETOS SELECIONADOS",
    title: "Projetos selecionados",
    intro: "Três projetos que fazem parte do meu percurso recente.",
    githubLabel: "Perfil no GitHub",
    // Descrições mantidas deliberadamente neutras: substituir por texto validado
    // pelo Rafael antes de publicar, sem acrescentar resultados ou métricas.
    items: [
      {
        name: "PALCO Angola",
        kind: "Aplicação & serviços",
        description:
          "Iniciativa de software ligada ao universo de eventos do PALCO Angola, com aplicação e serviços em desenvolvimento.",
      },
      {
        name: "Nativo Sabe",
        kind: "Web",
        description: "Projeto web estruturado com Vite, React e TypeScript.",
      },
      {
        name: "RETROGAMER-1986",
        kind: "Retrô / pixel art",
        description: "Projeto de temática retrô, com identidade visual inspirada em pixel art.",
      },
    ],
  },
  contact: {
    eyebrow: "06 / CONTATO",
    title: "Vamos conversar",
    description: "Conheça meus projetos e minha trajetória pelos canais públicos abaixo.",
    github: "GitHub",
    linkedin: "LinkedIn",
    note: "GitHub e LinkedIn são meus canais públicos.",
  },
  footer: {
    stack: "Site estático · React + Vite + TypeScript",
    rights: "© 2026 Rafael Cardoso. Todos os direitos reservados.",
  },
}
