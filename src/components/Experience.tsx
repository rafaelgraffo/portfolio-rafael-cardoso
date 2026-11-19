import { useI18n } from '../i18n'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { PathNode, RpgTerrain } from './Visuals'

export function Experience() {
  const { t } = useI18n()

  return (
    <Section
      id="experience"
      eyebrow={t.experience.eyebrow}
      title={t.experience.title}
      intro={t.experience.intro}
      scene={<RpgTerrain />}
    >
      <ol className="timeline">
        {t.experience.items.map((item, index) => (
          <li key={item.title} className="timeline-item">
            <span className="timeline-index" aria-hidden="true">
              <PathNode />
              <em>{String(index + 1).padStart(2, '0')}</em>
            </span>
            <Reveal className="timeline-body" delay={index * 60}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
