import { useI18n } from '../i18n'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { InventoryGlyph, StatusStrip, TileField } from './Visuals'

export function Technologies() {
  const { t } = useI18n()
  const modules = [t.technologies.used, t.technologies.learning] as const

  return (
    <Section
      id="technologies"
      eyebrow={t.technologies.eyebrow}
      title={t.technologies.title}
      scene={<TileField variant={2} />}
    >
      <div className="tech-grid">
        {modules.map((module, moduleIndex) => (
          <Reveal
            key={module.title}
            className={`tech-group inv-module${moduleIndex === 1 ? ' is-study' : ''}`}
            delay={moduleIndex * 80}
          >
            <div className="module-chrome" aria-hidden="true">
              <StatusStrip compact />
            </div>
            <p className="module-badge">
              <span className="module-badge-led" aria-hidden="true" />
              {module.badge}
            </p>
            <h3 className="tech-group-title">{module.title}</h3>
            <p className="tech-note">{module.note}</p>
            {module.context ? <p className="module-context">{module.context}</p> : null}

            <div className="inv-categories">
              {module.groups.map((category, categoryIndex) => (
                <div className="inv-category" key={category.label}>
                  <p className="inv-category-label">{category.label}</p>
                  <ul className="chip-list">
                    {category.items.map((item, itemIndex) => (
                      <li key={item} className="inv-slot">
                        <InventoryGlyph
                          tone={moduleIndex === 0 ? 'blue' : 'violet'}
                          index={categoryIndex * 2 + itemIndex}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
