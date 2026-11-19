import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Language, Translation } from './types'
import { pt } from './pt'
import { en } from './en'
import { fr } from './fr'

export const languages: readonly Language[] = ['pt', 'en', 'fr'] as const

/** Native names are intentionally not translated: they stay recognisable. */
export const languageNames: Record<Language, string> = {
  pt: 'Português',
  en: 'English',
  fr: 'Français',
}

export const languageCodes: Record<Language, string> = {
  pt: 'PT',
  en: 'EN',
  fr: 'FR',
}

const htmlLangs: Record<Language, string> = { pt: 'pt-BR', en: 'en', fr: 'fr' }
const ogLocales: Record<Language, string> = { pt: 'pt_BR', en: 'en_US', fr: 'fr_FR' }
const dictionaries: Record<Language, Translation> = { pt, en, fr }
const STORAGE_KEY = 'rc-portfolio-language'

function isLanguage(value: string | null): value is Language {
  return value !== null && (languages as readonly string[]).includes(value)
}

function initialLanguage(): Language {
  if (typeof window === 'undefined') return 'pt'
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLanguage(fromUrl)) return fromUrl
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLanguage(stored)) return stored
  } catch {
    // Storage can be disabled; the PT default still applies.
  }
  return 'pt'
}

interface I18nValue {
  language: Language
  setLanguage: (language: Language) => void
  t: Translation
}

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(initialLanguage)

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Ignore storage failures.
    }
    const url = new URL(window.location.href)
    url.searchParams.set('lang', next)
    window.history.replaceState(null, '', url.toString())
  }, [])

  useEffect(() => {
    const dict = dictionaries[language]
    document.documentElement.lang = htmlLangs[language]
    document.title = dict.meta.title

    const setMeta = (selector: string, value: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector)
      if (element) element.setAttribute('content', value)
    }
    setMeta('meta[name="description"]', dict.meta.description)
    setMeta('meta[property="og:title"]', dict.meta.title)
    setMeta('meta[property="og:description"]', dict.meta.description)
    setMeta('meta[property="og:locale"]', ogLocales[language])
    setMeta('meta[property="og:image:alt"]', dict.hero.photoAlt)
    setMeta('meta[name="twitter:title"]', dict.meta.title)
    setMeta('meta[name="twitter:description"]', dict.meta.description)
  }, [language])

  const value = useMemo<I18nValue>(
    () => ({ language, setLanguage, t: dictionaries[language] }),
    [language, setLanguage],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within I18nProvider')
  return context
}
