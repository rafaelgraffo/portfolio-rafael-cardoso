import { useI18n } from '../i18n'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { PixelDots } from './PixelDecor'
import { PanelHeader, StatusStrip, TileField } from './Visuals'

export function About() {
  const { t } = useI18n()

  return (
    <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title} scene={<TileField variant={1} />}>
      <div className="about-grid">
        <div className="about-copy">
          {t.about.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 70}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
        <aside className="about-aside tech-panel">
          <div className="panel-chrome" aria-hidden="true">
            <PanelHeader />
          </div>
          <div className="panel-body">
            <p className="mono-label">{t.about.asideLabel}</p>
            <PixelDots count={5} />
            <p className="about-aside-text">{t.about.aside}</p>
          </div>
          <div className="panel-foot" aria-hidden="true">
            <StatusStrip tones={['blue', 'cyan', 'gold', 'green', 'violet']} compact />
          </div>
        </aside>
      </div>
    </Section>
  )
}
