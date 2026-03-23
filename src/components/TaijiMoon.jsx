import React from 'react'
import { PHASE } from '../constants.js'
import './TaijiMoon.css'

/*
  Moon → Taiji animation strategy:
  - The SVG always renders the full taiji structure
  - A white overlay circle (moon-mask) sits on top, opacity=1 initially
  - As the symbol spins, the overlay fades out → taiji reveals underneath
  - The outer dark circle and small dots are also initially hidden then fade in
  - A soft gold halo pulses gently once settled
*/

export default function TaijiMoon({ phase }) {
  const isTaiji   = phase === PHASE.TAIJI_SHOW
  const isSettled = phase === PHASE.NAMES_APPEAR || phase === PHASE.COMPLETE

  return (
    <div
      className={[
        'taiji-wrap',
        isTaiji   ? 'taiji-wrap--taiji'   : '',
        isSettled ? 'taiji-wrap--settled' : '',
      ].join(' ')}
    >
      {/* Atmospheric halo */}
      <div className="taiji-halo" aria-hidden="true" />

      {/* The SVG symbol */}
      <svg
        className="taiji-svg"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Taiji — yin and yang"
      >
        <defs>
          <filter id="glow-soft">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="ink-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise"/>
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise"/>
            <feBlend in="SourceGraphic" in2="grayNoise" mode="soft-light" result="blend"/>
            <feComposite in="blend" in2="SourceGraphic" operator="in"/>
          </filter>
        </defs>

        {/* ── Outer dark circle (fades in on transform) ── */}
        <circle
          cx="100" cy="100" r="98"
          className="taiji__dark-bg"
          fill="#1A1710"
        />

        {/* ── White (yang) half — S-shaped path ── */}
        {/*
          Path construction for right (yang/white) half:
          M100,2        → top center
          A98,98 0,0,1,100,198  → large CW arc (right half of outer circle) to bottom
          A49,49 0,0,0,100,100  → small CCW arc (bottom S-curve, left bulge) to center
          A49,49 0,0,1,100,2    → small CW arc (top S-curve, right bulge) back to top
        */}
        <path
          d="M100,2 A98,98 0,0,1,100,198 A49,49 0,0,0,100,100 A49,49 0,0,1,100,2 Z"
          className="taiji__yang-half"
          fill="#FAF7F0"
        />

        {/* ── Small dark dot in white (yang) half ── */}
        <circle
          cx="100" cy="51" r="16"
          className="taiji__yin-dot"
          fill="#1A1710"
        />

        {/* ── Small white dot in dark (yin) half ── */}
        <circle
          cx="100" cy="149" r="16"
          className="taiji__yang-dot"
          fill="#FAF7F0"
        />

        {/* ── Gold accent ring ── */}
        <circle
          cx="100" cy="100" r="98"
          className="taiji__ring"
          fill="none"
          stroke="#C8A96E"
          strokeWidth="0.6"
          strokeOpacity="0.35"
        />

        {/* ── Moon overlay: hides the taiji until transform ── */}
        <circle
          cx="100" cy="100" r="98"
          className="taiji__moon-mask"
          fill="#FAF7F0"
        />

        {/* ── Subtle moon surface texture (very faint) ── */}
        <circle
          cx="80" cy="78" r="28"
          className="taiji__moon-crater"
          fill="rgba(180,168,150,0.18)"
        />
        <circle
          cx="118" cy="115" r="16"
          className="taiji__moon-crater"
          fill="rgba(180,168,150,0.14)"
        />
      </svg>

      {/* Gold dust particles (visible when settled) */}
      <svg className="taiji-particles" viewBox="-120 -120 240 240" aria-hidden="true">
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2
          const r = 115 + (i % 3) * 8
          return (
            <circle
              key={i}
              cx={Math.cos(angle) * r}
              cy={Math.sin(angle) * r}
              r={0.8 + (i % 2) * 0.5}
              fill="#C8A96E"
              className="taiji-particle"
              style={{ animationDelay: `${i * 0.25}s` }}
            />
          )
        })}
      </svg>
    </div>
  )
}
