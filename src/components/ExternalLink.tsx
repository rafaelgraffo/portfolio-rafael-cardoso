import type { ReactNode } from 'react'
import { useI18n } from '../i18n'

interface ExternalLinkProps {
  href: string
  children: ReactNode
  className?: string
}

/** External link with a screen-reader-only hint that it opens a new tab. */
export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  const { t } = useI18n()

  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> {t.a11y.newTab}</span>
    </a>
  )
}
