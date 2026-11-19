import { useI18n } from '../i18n'
import { GITHUB_DISPLAY, GITHUB_URL, LINKEDIN_DISPLAY, LINKEDIN_URL } from '../data/links'
import { Section } from './Section'
import { ExternalLink } from './ExternalLink'
import { PortalField, PortalGlyph } from './Visuals'

export function Contact() {
  const { t } = useI18n()

  return (
    <Section
      id="contact"
      eyebrow={t.contact.eyebrow}
      title={t.contact.title}
      className="section-contact"
      scene={<PortalField />}
    >
      <p className="contact-description">{t.contact.description}</p>

      <div className="portal-stage">
        <div className="contact-links">
          <ExternalLink className="contact-link" href={GITHUB_URL}>
            <span className="contact-link-name">{t.contact.github}</span>
            <span className="contact-link-mono">{GITHUB_DISPLAY}</span>
            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
            <span className="contact-glyph" aria-hidden="true">
              <PortalGlyph />
            </span>
          </ExternalLink>
          <ExternalLink className="contact-link" href={LINKEDIN_URL}>
            <span className="contact-link-name">{t.contact.linkedin}</span>
            <span className="contact-link-mono">{LINKEDIN_DISPLAY}</span>
            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
            <span className="contact-glyph" aria-hidden="true">
              <PortalGlyph />
            </span>
          </ExternalLink>
        </div>
      </div>

      <p className="contact-note">{t.contact.note}</p>
    </Section>
  )
}
