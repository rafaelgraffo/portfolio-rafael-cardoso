import { useI18n } from '../i18n'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { ExternalLink } from './ExternalLink'
import { FileGlyph, SealGlyph, StatusStrip, TileField } from './Visuals'

export function Certifications() {
  const { t } = useI18n()

  return (
    <Section
      id="certifications"
      eyebrow={t.certifications.eyebrow}
      title={t.certifications.title}
      scene={<TileField variant={3} />}
    >
      <div className="cert-groups">
        {t.certifications.groups.map((group, groupIndex) => (
          <section
            className="cert-group"
            key={group.label}
            data-kind={group.kind}
            aria-label={group.label}
          >
            <div className="cert-group-head">
              {group.kind === 'certification' ? (
                <span className="cert-group-seal">
                  <SealGlyph />
                </span>
              ) : (
                <span className="cert-group-mark" aria-hidden="true" />
              )}
              <h3 className="cert-group-title">{group.label}</h3>
              <StatusStrip tones={['blue', 'cyan', 'gold', 'green']} compact />
            </div>

            <ul className="cert-list">
              {group.items.map((item, itemIndex) => (
                <li key={item.name} className="cert-item">
                  <Reveal
                    className="cert-inner file-card"
                    delay={(groupIndex * 3 + itemIndex) * 50}
                  >
                    <div className="file-tab" aria-hidden="true">
                      <FileGlyph />
                      <StatusStrip tones={['blue', 'cyan', 'gold', 'green']} compact />
                    </div>
                    <p className="cert-label">
                      {group.kind === 'certification' ? (
                        <SealGlyph />
                      ) : (
                        <span className="cert-mark" aria-hidden="true" />
                      )}
                      {group.itemLabel}
                    </p>
                    <div className="cert-main">
                      <h4 className="cert-name">{item.name}</h4>
                      {item.link && item.linkLabel ? (
                        <ExternalLink className="text-link" href={item.link}>
                          {item.linkLabel} <span aria-hidden="true">↗</span>
                        </ExternalLink>
                      ) : null}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  )
}
