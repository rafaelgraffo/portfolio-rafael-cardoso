import { useI18n } from '../i18n'
import { GITHUB_URL } from '../data/links'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { ExternalLink } from './ExternalLink'
import { PixelDots } from './PixelDecor'
import { ProjectGlyph, StatusStrip, TileField } from './Visuals'

export function Projects() {
  const { t } = useI18n()

  return (
    <Section
      id="projects"
      eyebrow={t.projects.eyebrow}
      title={t.projects.title}
      intro={t.projects.intro}
      scene={<TileField variant={4} />}
    >
      <div className="projects-head">
        <ExternalLink className="text-link" href={GITHUB_URL}>
          {t.projects.githubLabel} <span aria-hidden="true">↗</span>
        </ExternalLink>
      </div>

      <ol className="project-grid">
        {t.projects.items.map((project, index) => (
          <li key={project.name} className="project-card" data-variant={index}>
            <div className="project-card-art" aria-hidden="true">
              <ProjectGlyph variant={index} />
            </div>
            <div className="project-card-top" aria-hidden="true">
              <span className="project-slot">{String(index + 1).padStart(2, '0')}</span>
              <StatusStrip tones={['blue', 'gold', 'cyan', 'violet']} compact />
            </div>
            <Reveal className="project-body" delay={index * 60}>
              <div className="project-title-line">
                <h3>{project.name}</h3>
              </div>
              <span className="project-kind">{project.kind}</span>
              <p>{project.description}</p>
            </Reveal>
            <div className="project-card-foot" aria-hidden="true">
              <PixelDots count={5} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
