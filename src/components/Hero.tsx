import { useI18n } from '../i18n'
import { GITHUB_URL, LINKEDIN_URL, PROFILE_IMAGE } from '../data/links'
import { ExternalLink } from './ExternalLink'
import { PixelDots } from './PixelDecor'
import { CabinetChrome, MazeBackdrop, PixelDivider, StatusStrip } from './Visuals'

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="scene-layer" aria-hidden="true">
        <MazeBackdrop />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="eyebrow-caret" aria-hidden="true" />
            {t.hero.eyebrow}
          </p>
          <h1 id="hero-title" className="hero-name">
            {t.hero.name}
          </h1>
          <p className="hero-role">{t.hero.role}</p>
          <p className="hero-description">{t.hero.description}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              {t.hero.projectsCta}
              <span aria-hidden="true">↘</span>
            </a>
            <ExternalLink className="btn btn-ghost" href={GITHUB_URL}>
              {t.hero.githubCta}
              <span aria-hidden="true">↗</span>
            </ExternalLink>
          </div>

          <div className="hero-socials">
            <ExternalLink href={GITHUB_URL}>{t.contact.github}</ExternalLink>
            <span className="social-separator" aria-hidden="true">
              /
            </span>
            <ExternalLink href={LINKEDIN_URL}>{t.contact.linkedin}</ExternalLink>
          </div>

          <div className="hero-status" aria-hidden="true">
            <StatusStrip />
          </div>
        </div>

        <div className="hero-visual">
          <div className="arcade-cabinet">
            <CabinetChrome position="top" />
            <div className="portrait-frame">
              <span className="corner corner-tl" aria-hidden="true" />
              <span className="corner corner-tr" aria-hidden="true" />
              <span className="corner corner-bl" aria-hidden="true" />
              <span className="corner corner-br" aria-hidden="true" />
              <img
                src={PROFILE_IMAGE}
                alt={t.hero.photoAlt}
                width="600"
                height="600"
                loading="eager"
                decoding="async"
              />
            </div>
            <CabinetChrome position="bottom" />
          </div>
          <p className="portrait-caption">
            <PixelDots count={7} />
            <span>{t.hero.scrollHint}</span>
          </p>
        </div>
      </div>

      <div className="container hero-divider">
        <PixelDivider />
      </div>
    </section>
  )
}
