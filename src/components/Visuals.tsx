/**
 * MISSÃO 02 — Hybrid Arcade + RPG + Technology
 *
 * Original decorative graphics only. No characters, avatars, logos, scores,
 * XP, levels, attributes or invented data. Every element here is purely
 * visual and hidden from assistive technology (aria-hidden / focusable=false).
 *
 * Shapes are built on a 4px/8px grid with shapeRendering="crispEdges" so the
 * pixel-art finish stays sharp at any DPI without shipping image assets.
 */

type Tone = 'blue' | 'gold' | 'cyan' | 'magenta' | 'green' | 'violet'

function toneVar(tone: Tone): string {
  switch (tone) {
    case 'blue':
      return 'var(--accent)'
    case 'gold':
      return 'var(--arcade)'
    case 'cyan':
      return 'var(--pixel-cyan)'
    case 'magenta':
      return 'var(--pixel-magenta)'
    case 'green':
      return 'var(--pixel-green)'
    case 'violet':
      return 'var(--pixel-violet)'
  }
}

/* ------------------------------------------------------------------ shared */

const DIVIDER_TONES: readonly Tone[] = ['blue', 'gold', 'cyan', 'violet', 'green', 'gold', 'blue']

/** Stepped pixel divider — the recurring "pixel-art is present everywhere" mark. */
export function PixelDivider() {
  return (
    <div className="pixel-divider" aria-hidden="true">
      <span className="pixel-divider-rule" />
      <span className="pixel-divider-cells">
        {DIVIDER_TONES.map((tone, index) => (
          <i key={index} style={{ backgroundColor: toneVar(tone) }} />
        ))}
      </span>
      <span className="pixel-divider-rule is-flip" />
    </div>
  )
}

/** Abstract luminous segments — reads as a digital panel, never as a score. */
export function StatusStrip({
  tones = ['blue', 'gold', 'cyan', 'blue', 'violet', 'gold', 'cyan'],
  compact = false,
}: {
  tones?: readonly Tone[]
  compact?: boolean
}) {
  return (
    <span className={`status-strip${compact ? ' is-compact' : ''}`} aria-hidden="true">
      {tones.map((tone, index) => (
        <i key={index} style={{ backgroundColor: toneVar(tone) }} />
      ))}
    </span>
  )
}

/** Small window/panel chrome: three stepped cells plus a rule. */
export function PanelHeader() {
  return (
    <span className="panel-header" aria-hidden="true">
      <span className="panel-cells">
        <i />
        <i />
        <i />
      </span>
      <span className="panel-rule" />
      <StatusStrip tones={['blue', 'cyan', 'gold', 'green']} compact />
    </span>
  )
}

/* -------------------------------------------------------------------- Hero */

interface Wall {
  x: number
  y: number
  w: number
  h: number
}

interface Maze {
  walls: Wall[]
  pellets: Array<[number, number]>
  tiles: Array<[number, number, Tone]>
}

/**
 * Concentric corridors with alternating openings — an original maze/circuit
 * motif inspired by arcade cabinets, not a reproduction of any game map.
 */
function buildMaze(): Maze {
  const walls: Wall[] = []
  const pellets: Array<[number, number]> = []
  const tiles: Array<[number, number, Tone]> = []
  const T = 6
  const G = 46

  for (let ring = 0; ring < 4; ring++) {
    const x0 = 40 + ring * 130
    const x1 = 1200 - x0
    const y0 = 40 + ring * 90
    const y1 = 760 - y0

    const topGap = x0 + (x1 - x0) * (ring % 2 === 0 ? 0.34 : 0.62)
    const bottomGap = x0 + (x1 - x0) * (ring % 2 === 0 ? 0.63 : 0.3)
    const leftGap = y0 + (y1 - y0) * 0.42
    const rightGap = y0 + (y1 - y0) * 0.7

    const topEnd = Math.min(topGap + G, x1)
    const bottomEnd = Math.min(bottomGap + G, x1)
    const leftEnd = Math.min(leftGap + G, y1)
    const rightEnd = Math.min(rightGap + G, y1)

    walls.push({ x: x0, y: y0, w: Math.max(0, topGap - x0), h: T })
    walls.push({ x: topEnd, y: y0, w: Math.max(0, x1 - topEnd), h: T })
    walls.push({ x: x0, y: y1 - T, w: Math.max(0, bottomGap - x0), h: T })
    walls.push({ x: bottomEnd, y: y1 - T, w: Math.max(0, x1 - bottomEnd), h: T })
    walls.push({ x: x0, y: y0, w: T, h: Math.max(0, leftGap - y0) })
    walls.push({ x: x0, y: leftEnd, w: T, h: Math.max(0, y1 - leftEnd) })
    walls.push({ x: x1 - T, y: y0, w: T, h: Math.max(0, rightGap - y0) })
    walls.push({ x: x1 - T, y: rightEnd, w: T, h: Math.max(0, y1 - rightEnd) })

    for (let x = x0 + 30; x < x1 - 20; x += 44) {
      pellets.push([x, y0 + 24])
      pellets.push([x, y1 - 24])
    }
    for (let y = y0 + 48; y < y1 - 36; y += 44) {
      pellets.push([x0 + 24, y])
      pellets.push([x1 - 24, y])
    }
  }

  const tileTones: readonly Tone[] = ['cyan', 'magenta', 'green', 'violet', 'gold']
  for (let index = 0; index < 14; index++) {
    const x = 60 + ((index * 197) % 1080)
    const y = 60 + ((index * 131) % 620)
    const tone = tileTones[index % tileTones.length] ?? 'blue'
    tiles.push([x, y, tone])
  }

  return { walls, pellets, tiles }
}

/** Arcade maze backdrop for the Hero. */
export function MazeBackdrop() {
  const { walls, pellets, tiles } = buildMaze()
  return (
    <svg
      className="maze-svg"
      viewBox="0 0 1200 760"
      preserveAspectRatio="xMidYMid slice"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      <g className="maze-walls">
        {walls.map((wall, index) => (
          <rect key={index} x={wall.x} y={wall.y} width={wall.w} height={wall.h} />
        ))}
      </g>
      <g className="maze-pellets">
        {pellets.map(([x, y], index) => (
          <rect key={index} x={x} y={y} width={5} height={5} />
        ))}
      </g>
      <g className="maze-tiles">
        {tiles.map(([x, y, tone], index) => (
          <rect key={index} x={x} y={y} width={12} height={12} fill={toneVar(tone)} />
        ))}
      </g>
      <g className="maze-power">
        <rect x={96} y={96} width={14} height={14} />
        <rect x={1090} y={96} width={14} height={14} />
        <rect x={96} y={650} width={14} height={14} />
        <rect x={1090} y={650} width={14} height={14} />
      </g>
    </svg>
  )
}

/** Arcade cabinet chrome above/below the untouched portrait. */
export function CabinetChrome({ position }: { position: 'top' | 'bottom' }) {
  return (
    <div className={`cabinet-chrome is-${position}`} aria-hidden="true">
      <span className="cabinet-leds">
        <i />
        <i />
        <i />
      </span>
      <span className="cabinet-segments">
        {Array.from({ length: 14 }, (_, index) => (
          <i key={index} />
        ))}
      </span>
      <span className="cabinet-notch" />
    </div>
  )
}

/* --------------------------------------------------------------- Experience */

/** RPG map terrain: stepped stone path, two portals and scenery objects. */
export function RpgTerrain() {
  const steps: Array<[number, number]> = []
  for (let index = 0; index < 15; index++) {
    const x = 70 + index * 76
    const y = 470 - index * 20 + Math.sin(index * 0.9) * 26
    steps.push([x, y])
  }

  return (
    <svg
      className="terrain-svg"
      viewBox="0 0 1200 620"
      preserveAspectRatio="xMidYMax slice"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      <g className="terrain-bands">
        <rect x={0} y={520} width={1200} height={100} />
        <rect x={0} y={556} width={1200} height={64} />
        <rect x={0} y={592} width={1200} height={28} />
      </g>
      <g className="terrain-grid">
        {Array.from({ length: 22 }, (_, index) => (
          <rect key={index} x={index * 56} y={520} width={4} height={100} />
        ))}
      </g>
      <g className="terrain-path">
        {steps.map(([x, y], index) => (
          <g key={index}>
            <rect x={x} y={y} width={26} height={26} />
            <rect x={x + 5} y={y + 5} width={16} height={16} className="terrain-step-core" />
          </g>
        ))}
      </g>
      {/* Two original stepped portals */}
      <g className="terrain-portal">
        <rect x={232} y={286} width={10} height={96} />
        <rect x={322} y={286} width={10} height={96} />
        <rect x={232} y={286} width={100} height={10} />
        <rect x={248} y={302} width={68} height={8} />
      </g>
      <g className="terrain-portal is-dim">
        <rect x={870} y={186} width={8} height={76} />
        <rect x={946} y={186} width={8} height={76} />
        <rect x={870} y={186} width={84} height={8} />
      </g>
      {/* Scenery: original "sign" and "chest"-like blocks (no characters) */}
      <g className="terrain-prop">
        <rect x={520} y={392} width={34} height={22} />
        <rect x={532} y={372} width={10} height={20} />
        <rect x={526} y={384} width={22} height={6} />
      </g>
      <g className="terrain-prop is-alt">
        <rect x={690} y={300} width={28} height={20} />
        <rect x={690} y={300} width={28} height={6} />
        <rect x={700} y={308} width={8} height={8} />
      </g>
      <g className="terrain-sparks">
        <rect x={180} y={410} width={6} height={6} />
        <rect x={430} y={250} width={6} height={6} />
        <rect x={760} y={410} width={6} height={6} />
        <rect x={1020} y={330} width={6} height={6} />
        <rect x={600} y={200} width={6} height={6} />
      </g>
    </svg>
  )
}

/** Waypoint marker used on each experience milestone. */
export function PathNode() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <rect x={9} y={1} width={6} height={4} />
        <rect x={5} y={5} width={14} height={4} />
        <rect x={1} y={9} width={22} height={6} />
        <rect x={5} y={15} width={14} height={4} />
        <rect x={9} y={19} width={6} height={4} />
      </g>
      <rect x={9} y={9} width={6} height={6} fill="var(--bg)" />
    </svg>
  )
}

/* ------------------------------------------------- Technologies / Inventory */

/** Small gem/slot icon — four shapes, deliberately no level or progress bars. */
export function InventoryGlyph({ tone, index }: { tone: Tone; index: number }) {
  const shape = index % 4
  const fill = toneVar(tone)
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
      {shape === 0 ? (
        <g fill={fill}>
          <rect x={5} y={1} width={6} height={2} />
          <rect x={3} y={3} width={10} height={2} />
          <rect x={1} y={5} width={14} height={6} />
          <rect x={3} y={11} width={10} height={2} />
          <rect x={5} y={13} width={6} height={2} />
        </g>
      ) : null}
      {shape === 1 ? (
        <g fill={fill}>
          <rect x={2} y={2} width={12} height={12} />
          <rect x={5} y={5} width={6} height={6} fill="var(--bg-elev)" />
        </g>
      ) : null}
      {shape === 2 ? (
        <g fill={fill}>
          <rect x={6} y={0} width={4} height={4} />
          <rect x={2} y={4} width={12} height={4} />
          <rect x={0} y={8} width={16} height={4} />
          <rect x={4} y={12} width={8} height={4} />
        </g>
      ) : null}
      {shape === 3 ? (
        <g fill={fill}>
          <rect x={1} y={5} width={4} height={6} />
          <rect x={5} y={1} width={6} height={14} />
          <rect x={11} y={5} width={4} height={6} />
          <rect x={6} y={5} width={4} height={6} fill="var(--bg-elev)" />
        </g>
      ) : null}
    </svg>
  )
}

/* --------------------------------------------- Certifications / File cards */

export function FileGlyph() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <rect x={2} y={1} width={11} height={3} />
        <rect x={2} y={4} width={16} height={15} />
        <rect x={13} y={1} width={5} height={3} fill="var(--arcade)" />
      </g>
      <g fill="var(--bg-elev)">
        <rect x={5} y={8} width={10} height={2} />
        <rect x={5} y={12} width={10} height={2} />
        <rect x={5} y={16} width={6} height={1} />
      </g>
    </svg>
  )
}

export function SealGlyph() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <rect x={5} y={0} width={6} height={3} />
        <rect x={2} y={3} width={12} height={3} />
        <rect x={0} y={6} width={16} height={4} />
        <rect x={2} y={10} width={12} height={3} />
        <rect x={5} y={13} width={6} height={3} />
      </g>
      <rect x={6} y={6} width={4} height={4} fill="var(--bg-elev)" />
    </svg>
  )
}

/* -------------------------------------------------------- Selected projects */

/** One original emblem per project — visual identity only, no invented data. */
export function ProjectGlyph({ variant }: { variant: number }) {
  const kind = ((variant % 3) + 3) % 3

  if (kind === 0) {
    /* PALCO Angola — stage towers + light beams */
    return (
      <svg viewBox="0 0 96 64" width="96" height="64" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
        <g fill="currentColor">
          <rect x={4} y={50} width={88} height={6} />
          <rect x={8} y={56} width={80} height={4} />
          <rect x={12} y={20} width={8} height={30} />
          <rect x={80} y={20} width={8} height={30} />
          <rect x={18} y={16} width={60} height={5} />
        </g>
        <g fill="var(--arcade)">
          <rect x={24} y={24} width={6} height={6} />
          <rect x={44} y={24} width={6} height={6} />
          <rect x={64} y={24} width={6} height={6} />
          <rect x={34} y={38} width={6} height={6} />
          <rect x={54} y={38} width={6} height={6} />
        </g>
        <g fill="currentColor" opacity="0.45">
          <rect x={22} y={30} width={4} height={8} />
          <rect x={42} y={30} width={4} height={8} />
          <rect x={62} y={30} width={4} height={8} />
          <rect x={32} y={44} width={4} height={6} />
          <rect x={52} y={44} width={4} height={6} />
        </g>
      </svg>
    )
  }

  if (kind === 1) {
    /* Nativo Sabe — browser window + content grid */
    return (
      <svg viewBox="0 0 96 64" width="96" height="64" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
        <g fill="currentColor">
          <rect x={6} y={8} width={84} height={48} />
        </g>
        <g fill="var(--bg-elev)">
          <rect x={10} y={12} width={76} height={8} />
          <rect x={10} y={24} width={34} height={28} />
          <rect x={48} y={24} width={38} height={6} />
          <rect x={48} y={34} width={38} height={6} />
          <rect x={48} y={44} width={26} height={8} />
        </g>
        <g fill="var(--arcade)">
          <rect x={12} y={14} width={4} height={4} />
          <rect x={19} y={14} width={4} height={4} />
          <rect x={26} y={14} width={4} height={4} />
        </g>
        <g fill="currentColor">
          <rect x={14} y={28} width={26} height={4} />
          <rect x={14} y={36} width={20} height={4} />
          <rect x={14} y={44} width={24} height={4} />
        </g>
      </svg>
    )
  }

  /* RETROGAMER-1986 — abstract cartridge */
  return (
    <svg viewBox="0 0 96 64" width="96" height="64" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <rect x={20} y={6} width={56} height={52} />
        <rect x={16} y={10} width={64} height={44} />
      </g>
      <g fill="var(--bg-elev)">
        <rect x={24} y={14} width={48} height={22} />
        <rect x={24} y={42} width={48} height={4} />
      </g>
      <g fill="var(--arcade)">
        <rect x={28} y={18} width={40} height={4} />
        <rect x={28} y={26} width={26} height={4} />
      </g>
      <g fill="var(--bg-elev)">
        <rect x={28} y={48} width={8} height={8} />
        <rect x={44} y={48} width={8} height={8} />
        <rect x={60} y={48} width={8} height={8} />
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ Contact */

/** Stepped concentric portal rings for the contact section. */
export function PortalField() {
  const rings = [
    { x: 300, y: 90, w: 600, h: 420, o: 0.13 },
    { x: 350, y: 130, w: 500, h: 340, o: 0.18 },
    { x: 400, y: 170, w: 400, h: 260, o: 0.24 },
    { x: 450, y: 210, w: 300, h: 180, o: 0.32 },
  ]
  const nodes: Array<[number, number, Tone]> = []
  const nodeTones: readonly Tone[] = ['gold', 'cyan', 'blue', 'violet', 'green', 'magenta']
  for (let index = 0; index < 20; index++) {
    const angle = (index / 20) * Math.PI * 2
    const x = Math.round(600 + Math.cos(angle) * 330)
    const y = Math.round(300 + Math.sin(angle) * 230)
    const tone = nodeTones[index % nodeTones.length] ?? 'blue'
    nodes.push([x, y, tone])
  }

  return (
    <svg
      className="portal-field"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      <g className="portal-rings" fill="none">
        {rings.map((ring, index) => (
          <rect
            key={index}
            x={ring.x}
            y={ring.y}
            width={ring.w}
            height={ring.h}
            strokeWidth={4}
            opacity={ring.o}
          />
        ))}
      </g>
      <g className="portal-nodes">
        {nodes.map(([x, y, tone], index) => (
          <rect key={index} x={x} y={y} width={8} height={8} fill={toneVar(tone)} />
        ))}
      </g>
      <g className="portal-core-lines">
        <rect x={580} y={250} width={40} height={4} />
        <rect x={580} y={346} width={40} height={4} />
        <rect x={540} y={290} width={4} height={20} />
        <rect x={656} y={290} width={4} height={20} />
      </g>
    </svg>
  )
}

/** Tiny portal glyph for the two connection cards. */
export function PortalGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth={3}>
        <rect x={2} y={2} width={20} height={20} />
        <rect x={7} y={7} width={10} height={10} />
      </g>
      <rect x={10} y={10} width={4} height={4} fill="var(--arcade)" />
    </svg>
  )
}

/* -------------------------------------------------------- sparse tile field */

/** Neutral pixel tiles used behind Technologies / Certifications / Projects. */
export function TileField({ variant = 0 }: { variant?: number }) {
  const tones: readonly Tone[] = ['blue', 'cyan', 'violet', 'gold', 'green', 'magenta']
  const offset = variant * 43
  const cells = Array.from({ length: 30 }, (_, index) => {
    const x = 24 + ((index * 157 + offset) % 1150)
    const y = 20 + ((index * 97 + offset * 2) % 560)
    const tone = tones[(index + variant) % tones.length] ?? 'blue'
    return { x, y, tone, size: index % 5 === 0 ? 10 : 6 }
  })

  return (
    <svg
      className="tile-field"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      <g className="tile-cells">
        {cells.map((cell, index) => (
          <rect
            key={index}
            x={cell.x}
            y={cell.y}
            width={cell.size}
            height={cell.size}
            fill={toneVar(cell.tone)}
          />
        ))}
      </g>
      <g className="tile-grid">
        {Array.from({ length: 12 }, (_, index) => (
          <rect key={index} x={index * 100} y={0} width={4} height={600} />
        ))}
      </g>
    </svg>
  )
}
