import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n'
import { GITHUB_URL } from '../data/links'
import { ExternalLink } from './ExternalLink'
import { LanguageSwitch } from './LanguageSwitch'
import { PixelMark } from './PixelDecor'

const navItems = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'technologies', label: 'technologies' },
  { id: 'certifications', label: 'certifications' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
] as const

export function Header() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  // Close the mobile dropdown on Escape, outside click and viewport growth.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target
      if (headerRef.current && target instanceof Node && !headerRef.current.contains(target)) {
        setOpen(false)
      }
    }
    const onResize = () => {
      if (window.innerWidth > 1000) setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header ref={headerRef} className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top">
          <PixelMark className="brand-mark" />
          <span className="brand-text">{t.hero.name}</span>
          <span className="brand-accent" aria-hidden="true" />
        </a>

        <nav id="primary-nav" className={`nav${open ? ' is-open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                  {t.nav[item.label]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <LanguageSwitch />
          <ExternalLink className="header-github" href={GITHUB_URL}>
            {t.hero.githubCta} <span aria-hidden="true">↗</span>
          </ExternalLink>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? t.a11y.closeMenu : t.a11y.menu}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className={`menu-bars${open ? ' is-open' : ''}`} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
