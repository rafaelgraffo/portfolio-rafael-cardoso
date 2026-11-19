/** Small pixel-art identity details — decoration only, never content. */
export function PixelMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        <rect x="9" y="2" width="6" height="3" />
        <rect x="6" y="5" width="12" height="3" />
        <rect x="3" y="8" width="18" height="8" />
        <rect x="6" y="16" width="12" height="3" />
        <rect x="9" y="19" width="6" height="3" />
      </g>
      <rect x="10" y="10" width="4" height="4" fill="var(--bg)" />
    </svg>
  )
}

export function PixelDots({ count = 7 }: { count?: number }) {
  return (
    <span className="pixel-dots" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <i key={index} />
      ))}
    </span>
  )
}
