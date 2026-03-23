import React from 'react'
import './CraneScene.css'

/*
  Ink-painting style scene: leaning trees + wandering red-crowned crane.
  All SVG, drawn in the spirit of Chinese brush painting (水墨画).
  Crane animates slowly — a gentle wander, subtle head tilt, slow steps.
*/

export default function CraneScene() {
  return (
    <svg
      className="crane-scene"
      viewBox="0 0 480 380"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Chinese ink painting scene with trees and red-crowned crane"
      preserveAspectRatio="xMinYMax meet"
    >
      <defs>
        {/* Ink wash texture for tree strokes */}
        <filter id="ink-wash" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        {/* Soft blur for atmospheric depth */}
        <filter id="soft-blur">
          <feGaussianBlur stdDeviation="0.6"/>
        </filter>
        {/* Very soft blur for distant elements */}
        <filter id="distant-blur">
          <feGaussianBlur stdDeviation="1.2"/>
        </filter>
      </defs>

      {/* ── Distant misty ground ─────────────────────────── */}
      <ellipse cx="180" cy="370" rx="200" ry="12"
        fill="rgba(180,170,155,0.18)" filter="url(#soft-blur)"/>

      {/* ── Far background: faint distant hills ─────────── */}
      <path
        d="M0,330 Q60,300 120,315 Q160,308 200,320 Q240,310 280,318 Q320,305 360,316 L380,380 L0,380 Z"
        fill="rgba(200,193,180,0.13)"
        filter="url(#distant-blur)"
      />

      {/* ═══════════════════════════════════════════════════
          TREES — ink-painting style
          Leaning slightly, asymmetric, brush-stroke quality
      ═══════════════════════════════════════════════════ */}

      {/* ── Main tree (large, left-leaning) ─────────────── */}
      <g filter="url(#ink-wash)" opacity="0.88">
        {/* Main trunk */}
        <path
          d="M90,380 C88,340 82,300 72,260 C66,230 60,210 55,185 C50,162 48,148 52,130"
          fill="none"
          stroke="#2C2920"
          strokeWidth="8"
          strokeLinecap="round"
          className="tree-trunk"
        />
        {/* Trunk slight kink */}
        <path
          d="M52,130 C56,114 54,96 50,78"
          fill="none"
          stroke="#2C2920"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Major branch right, mid */}
        <path
          d="M72,240 C90,230 108,222 128,215"
          fill="none"
          stroke="#2C2920"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M128,215 C144,208 158,204 168,197"
          fill="none"
          stroke="#2C2920"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Branch right upper */}
        <path
          d="M60,190 C76,180 96,172 115,162"
          fill="none"
          stroke="#2C2920"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M115,162 C128,155 140,150 150,142"
          fill="none"
          stroke="#2C2920"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Branch left, lower */}
        <path
          d="M78,268 C62,262 42,258 22,254"
          fill="none"
          stroke="#2C2920"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M22,254 C10,250 2,248 -4,246"
          fill="none"
          stroke="#2C2920"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Branch left upper */}
        <path
          d="M58,168 C44,158 30,146 18,136"
          fill="none"
          stroke="#2C2920"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Top branches */}
        <path
          d="M50,78 C40,66 36,54 40,42"
          fill="none"
          stroke="#2C2920"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M50,78 C58,66 66,52 74,40"
          fill="none"
          stroke="#2C2920"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M50,78 C48,60 50,44 54,30"
          fill="none"
          stroke="#2C2920"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Fine twig ends */}
        <path d="M40,42 C36,36 34,30 36,24" fill="none" stroke="#2C2920" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M40,42 C42,35 46,28 48,22" fill="none" stroke="#2C2920" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M74,40 C72,32 76,24 80,18" fill="none" stroke="#2C2920" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M74,40 C78,32 82,24 86,20" fill="none" stroke="#2C2920" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M54,30 C52,22 54,16 58,10" fill="none" stroke="#2C2920" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M168,197 C174,190 178,182 180,174" fill="none" stroke="#2C2920" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M150,142 C154,134 158,126 160,118" fill="none" stroke="#2C2920" strokeWidth="1.2" strokeLinecap="round"/>
      </g>

      {/* ── Secondary tree (smaller, right of main) ──────── */}
      <g filter="url(#ink-wash)" opacity="0.72">
        <path
          d="M170,380 C168,348 162,318 156,290 C152,270 148,252 146,232"
          fill="none"
          stroke="#2C2920"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <path
          d="M146,232 C144,212 142,196 145,178"
          fill="none"
          stroke="#2C2920"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M145,178 C147,160 150,148 152,134"
          fill="none"
          stroke="#2C2920"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Branches */}
        <path d="M155,280 C168,272 180,266 194,260" fill="none" stroke="#2C2920" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M148,240 C136,232 122,226 110,220" fill="none" stroke="#2C2920" strokeWidth="2" strokeLinecap="round"/>
        <path d="M146,210 C156,200 166,192 176,186" fill="none" stroke="#2C2920" strokeWidth="2" strokeLinecap="round"/>
        <path d="M148,188 C140,178 132,168 128,160" fill="none" stroke="#2C2920" strokeWidth="1.8" strokeLinecap="round"/>
        {/* Top */}
        <path d="M152,134 C148,118 152,106 158,96" fill="none" stroke="#2C2920" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M152,134 C156,118 162,108 170,100" fill="none" stroke="#2C2920" strokeWidth="2" strokeLinecap="round"/>
        <path d="M158,96 C156,88 158,80 162,72" fill="none" stroke="#2C2920" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M170,100 C172,90 174,82 178,74" fill="none" stroke="#2C2920" strokeWidth="1.2" strokeLinecap="round"/>
      </g>

      {/* ── Thin accent tree (farthest right, fainter) ───── */}
      <g filter="url(#ink-wash)" opacity="0.45">
        <path
          d="M250,380 C248,356 244,332 240,310 C238,296 236,282 236,268"
          fill="none"
          stroke="#3C3830"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M236,268 C236,250 238,238 242,224"
          fill="none"
          stroke="#3C3830"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M238,278 C250,272 262,268 274,265" fill="none" stroke="#3C3830" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M237,248 C226,242 218,236 210,230" fill="none" stroke="#3C3830" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Top sparse */}
        <path d="M242,224 C240,210 244,198 250,190" fill="none" stroke="#3C3830" strokeWidth="2" strokeLinecap="round"/>
        <path d="M242,224 C246,212 252,202 260,196" fill="none" stroke="#3C3830" strokeWidth="1.5" strokeLinecap="round"/>
      </g>

      {/* ── Green leaf clusters ──────────────────────────── */}
      <g filter="url(#soft-blur)">
        {[
          [40,42,20,'#5a7a3e',0.75], [58,10,15,'#4a6e32',0.70], [80,18,12,'#6b8a4e',0.65],
          [36,24,10,'#3d5e2a',0.72], [74,40,17,'#527040',0.68], [86,20,12,'#4e7238',0.60],
          [54,30,14,'#5a7a3e',0.65], [42,52,10,'#6b8a4e',0.55],
          [168,197,14,'#5a7a3e',0.62], [150,142,12,'#4a6e32',0.58],
          [158,96,12,'#527040',0.60], [170,100,10,'#3d5e2a',0.55], [178,74,10,'#6b8a4e',0.52],
          [162,72,8,'#4e7238',0.50], [110,220,8,'#5a7a3e',0.45],
        ].map(([cx,cy,r,fill,op],i) => (
          <ellipse key={i} cx={cx} cy={cy} rx={r} ry={r*0.75}
            fill={fill} opacity={op}/>
        ))}
      </g>

      {/* ── Falling leaves ───────────────────────────────── */}
      <g>
        {[
          { cx: 54, cy: 25, color: '#5a7a3e', cls: 'leaf-1', delay: '0s' },
          { cx: 78, cy: 18, color: '#4a6e32', cls: 'leaf-2', delay: '3s' },
          { cx: 42, cy: 38, color: '#6b8a4e', cls: 'leaf-3', delay: '6s' },
          { cx: 66, cy: 30, color: '#527040', cls: 'leaf-1', delay: '9s' },
          { cx: 50, cy: 15, color: '#3d5e2a', cls: 'leaf-2', delay: '12s' },
          { cx: 86, cy: 22, color: '#5a7a3e', cls: 'leaf-3', delay: '4.5s' },
        ].map((leaf, i) => (
          <ellipse
            key={i}
            cx={leaf.cx} cy={leaf.cy}
            rx="5" ry="8"
            fill={leaf.color}
            className={`falling-leaf ${leaf.cls}`}
            style={{ animationDelay: leaf.delay }}
            opacity="0"
          />
        ))}
      </g>

      {/* ═══════════════════════════════════════════════════
          RED-CROWNED CRANE
          Wandering slowly, ink-painting style
      ═══════════════════════════════════════════════════ */}
      <g className="crane" aria-label="Red-crowned crane">

        {/* ── Crane body ────────────────────────── */}
        {/* Main body — white, slightly elongated */}
        <ellipse
          cx="300" cy="295"
          rx="38" ry="22"
          fill="#FAF7F0"
          stroke="#2C2920"
          strokeWidth="0.8"
          className="crane__body"
        />

        {/* Wing fold detail — right wing */}
        <path
          d="M310,285 C326,280 342,278 356,282 C360,284 356,290 350,292 C338,296 324,296 310,295"
          fill="#EDE8DC"
          stroke="#2C2920"
          strokeWidth="0.6"
          className="crane__wing-r"
        />

        {/* Wing fold detail — left wing */}
        <path
          d="M292,285 C278,280 264,276 252,280 C248,282 252,290 258,292 C270,296 284,296 295,295"
          fill="#EDE8DC"
          stroke="#2C2920"
          strokeWidth="0.6"
          className="crane__wing-l"
        />

        {/* Black tail feathers */}
        <path
          d="M265,288 C256,290 248,294 242,300 C238,304 240,308 244,306 C250,302 258,298 266,296 Z"
          fill="#1A1710"
          className="crane__tail"
        />
        <path
          d="M262,292 C254,296 247,302 243,308"
          fill="none"
          stroke="#1A1710"
          strokeWidth="0.8"
        />

        {/* ── Neck ─────────────────────────────── */}
        {/* White neck, elegantly curved */}
        <path
          d="M312,280 C316,264 318,248 314,234 C312,228 310,224 308,220"
          fill="none"
          stroke="#FAF7F0"
          strokeWidth="9"
          strokeLinecap="round"
          className="crane__neck"
        />
        {/* Neck outline */}
        <path
          d="M312,280 C316,264 318,248 314,234 C312,228 310,224 308,220"
          fill="none"
          stroke="#2C2920"
          strokeWidth="0.7"
          strokeLinecap="round"
        />

        {/* Black neck marking (lower neck, rear) */}
        <path
          d="M304,270 C306,260 308,250 310,240"
          fill="none"
          stroke="#1A1710"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.55"
          className="crane__neck"
        />

        {/* ── Head ─────────────────────────────── */}
        {/* Head body */}
        <ellipse
          cx="308" cy="216"
          rx="10" ry="8"
          fill="#FAF7F0"
          stroke="#2C2920"
          strokeWidth="0.7"
          className="crane__head"
        />

        {/* Red crown — the signature marking */}
        <ellipse
          cx="308" cy="209"
          rx="7" ry="4.5"
          fill="#C0392B"
          opacity="0.92"
          className="crane__crown"
        />
        {/* Crown highlight */}
        <ellipse
          cx="307" cy="208"
          rx="3" ry="2"
          fill="#E74C3C"
          opacity="0.6"
          className="crane__crown"
        />

        {/* Black cheek / face marking */}
        <path
          d="M302,218 C298,218 296,220 296,222 C296,224 298,225 300,225"
          fill="#1A1710"
          stroke="none"
          opacity="0.8"
        />

        {/* Beak — long, straight, pointed */}
        <path
          d="M316,216 L342,212"
          fill="none"
          stroke="#5C5040"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="crane__beak"
        />
        {/* Beak lower line */}
        <path
          d="M316,218 L340,215"
          fill="none"
          stroke="#4C4030"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="crane__beak"
        />

        {/* Eye */}
        <circle cx="314" cy="215" r="2" fill="#1A1710" className="crane__head"/>
        <circle cx="314.5" cy="214.5" r="0.6" fill="white"/>

        {/* ── Legs ─────────────────────────────── */}
        {/* Right leg */}
        <path
          d="M308,316 L306,348 L304,364"
          fill="none"
          stroke="#8C7860"
          strokeWidth="2"
          strokeLinecap="round"
          className="crane__leg-r"
        />
        {/* Right foot */}
        <path
          d="M304,364 L296,372 M304,364 L310,372 M304,364 L302,374"
          fill="none"
          stroke="#8C7860"
          strokeWidth="1.4"
          strokeLinecap="round"
          className="crane__leg-r"
        />

        {/* Left leg */}
        <path
          d="M294,316 L292,344 L290,360"
          fill="none"
          stroke="#8C7860"
          strokeWidth="2"
          strokeLinecap="round"
          className="crane__leg-l"
        />
        {/* Left foot */}
        <path
          d="M290,360 L282,368 M290,360 L296,368 M290,360 L288,370"
          fill="none"
          stroke="#8C7860"
          strokeWidth="1.4"
          strokeLinecap="round"
          className="crane__leg-l"
        />

      </g>

      {/* ── Crane shadow ─────────────────────────────────── */}
      <ellipse
        cx="300" cy="374"
        rx="28" ry="5"
        fill="rgba(26,23,16,0.08)"
        className="crane__shadow"
        filter="url(#soft-blur)"
      />

      {/* ── Ink brush stroke accent (ground) ─────────────── */}
      <path
        d="M60,375 C90,370 140,372 190,368 C240,365 300,370 360,366"
        fill="none"
        stroke="rgba(60,50,40,0.12)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
