import type { ReactNode } from 'react'
import { PixelDivider } from './Visuals'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
  className?: string
  /** Decorative full-bleed scene, rendered behind the content. */
  scene?: ReactNode
}

export function Section({ id, eyebrow, title, intro, children, className = '', scene }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`.trim()} aria-labelledby={`${id}-title`}>
      {scene ? (
        <div className="scene-layer" aria-hidden="true">
          {scene}
        </div>
      ) : null}
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">
            <span className="eyebrow-square" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="section-title">
            {title}
          </h2>
          {intro ? <p className="section-intro">{intro}</p> : null}
        </div>
        <PixelDivider />
        {children}
      </div>
    </section>
  )
}
