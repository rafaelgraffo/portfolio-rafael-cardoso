import { useRef } from 'react'
import type { KeyboardEvent } from 'react'
import { languageCodes, languageNames, languages, useI18n } from '../i18n'

/**
 * Three ON/OFF switches with a stepped (pixel-art) finish.
 * Implemented as a radiogroup with roving tabindex and arrow-key support so it
 * stays fully usable with a keyboard and a screen reader.
 */
export function LanguageSwitch() {
  const { language, setLanguage, t } = useI18n()
  const buttons = useRef<Array<HTMLButtonElement | null>>([])

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const total = languages.length
    let next = index

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        next = (index + 1) % total
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        next = (index - 1 + total) % total
        break
      case 'Home':
        next = 0
        break
      case 'End':
        next = total - 1
        break
      default:
        return
    }

    event.preventDefault()
    const target = languages[next]
    if (target) {
      setLanguage(target)
      buttons.current[next]?.focus()
    }
  }

  return (
    <div className="lang-switch" role="radiogroup" aria-label={t.a11y.languageGroup}>
      {languages.map((lang, index) => {
        const active = lang === language
        return (
          <button
            key={lang}
            ref={(element) => {
              buttons.current[index] = element
            }}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={`${languageCodes[lang]} — ${languageNames[lang]}`}
            tabIndex={active ? 0 : -1}
            className={`lang-option${active ? ' is-on' : ''}`}
            onClick={() => setLanguage(lang)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            <span className="lang-track" aria-hidden="true">
              <span className="lang-knob" />
            </span>
            <span className="lang-code">{languageCodes[lang]}</span>
          </button>
        )
      })}
    </div>
  )
}
