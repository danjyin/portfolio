import React from 'react'
import { PHASE } from '../constants.js'
import TaijiMoon  from './TaijiMoon.jsx'
import CraneScene from './CraneScene.jsx'
import './HeroSection.css'

// Floating sparkle dots around the "Yin" name
function Sparkles() {
  const sparks = [
    { cx:  8, cy: -28, r: 1.4, delay: 0    },
    { cx: -14, cy: -18, r: 1.0, delay: 0.6  },
    { cx:  18, cy:  -4, r: 1.2, delay: 1.2  },
    { cx:  -6, cy:  12, r: 0.9, delay: 0.3  },
    { cx:  24, cy: -30, r: 0.8, delay: 1.8  },
    { cx: -20, cy:  -2, r: 1.1, delay: 0.9  },
    { cx:   2, cy:  24, r: 1.0, delay: 1.5  },
    { cx:  30, cy:  10, r: 0.7, delay: 2.1  },
  ]
  return (
    <svg className="sparkles" viewBox="-40 -40 80 80" aria-hidden="true">
      {sparks.map((s, i) => (
        <circle
          key={i}
          cx={s.cx} cy={s.cy} r={s.r}
          fill="var(--gold-light)"
          className="sparkle-dot"
          style={{ animationDelay: `${s.delay}s` }}
        />
      ))}
    </svg>
  )
}

// Hero clouds that burst outward then drift up (become nav)
function HeroClouds({ phase }) {
  const visible = phase === PHASE.CLOUDS_OUT || phase === PHASE.NAV_FORM
  return (
    <div className={`hero-clouds ${visible ? 'hero-clouds--visible' : ''} ${phase === PHASE.NAV_FORM ? 'hero-clouds--rise' : ''}`} aria-hidden="true">
      {/* Left cloud */}
      <svg className="hero-cloud hero-cloud--left" viewBox="0 0 220 90" preserveAspectRatio="xMidYMid meet">
        <path d="M30,70 Q15,68 10,56 Q2,52 6,40 Q6,26 20,24 Q24,12 40,12 Q50,6 64,10 Q78,4 92,12 Q108,6 122,14 Q138,10 148,22 Q160,20 164,32 Q172,44 162,56 Q154,66 140,64 Q124,70 108,66 Q92,72 76,68 Q60,74 44,68 Q38,74 30,70 Z" />
      </svg>
      {/* Right cloud */}
      <svg className="hero-cloud hero-cloud--right" viewBox="0 0 220 90" preserveAspectRatio="xMidYMid meet">
        <path d="M30,70 Q15,68 10,56 Q2,52 6,40 Q6,26 20,24 Q24,12 40,12 Q50,6 64,10 Q78,4 92,12 Q108,6 122,14 Q138,10 148,22 Q160,20 164,32 Q172,44 162,56 Q154,66 140,64 Q124,70 108,66 Q92,72 76,68 Q60,74 44,68 Q38,74 30,70 Z" />
      </svg>
      {/* Center top cloud */}
      <svg className="hero-cloud hero-cloud--top" viewBox="0 0 260 80" preserveAspectRatio="xMidYMid meet">
        <path d="M30,62 Q14,60 10,48 Q2,44 6,32 Q8,20 22,18 Q26,8 44,8 Q56,2 72,8 Q86,2 102,8 Q118,2 134,10 Q150,4 166,12 Q182,6 196,16 Q210,12 216,26 Q224,38 214,50 Q204,62 188,60 Q170,66 152,62 Q134,68 116,64 Q98,70 80,64 Q62,70 46,64 Q38,68 30,62 Z" />
      </svg>
    </div>
  )
}

export default function HeroSection({ phase }) {
  const showNames =
    phase === PHASE.NAMES_APPEAR ||
    phase === PHASE.COMPLETE

  const showHero =
    phase !== PHASE.INIT

  return (
    <section
      id="home"
      className={`hero ${showHero ? 'hero--visible' : ''}`}
    >
      {/* Atmospheric background gradient */}
      <div className="hero__bg" aria-hidden="true" />

      {/* Subtle ink-wash vignette lines */}
      <div className="hero__vignette" aria-hidden="true" />

      {/* Clouds that burst then become nav */}
      <HeroClouds phase={phase} />

      {/* Center: Moon → Taiji */}
      <div className="hero__center">
        <TaijiMoon phase={phase} />

        {/* Name: Yin — left of taiji */}
        <div className={`hero__name hero__name--left ${showNames ? 'hero__name--visible' : ''}`}>
          <Sparkles />
          <span className="name-surname">Yin</span>
        </div>

        {/* Name: Danjing — right of taiji */}
        <div className={`hero__name hero__name--right ${showNames ? 'hero__name--visible' : ''}`}>
          <span className="name-given">Danjing</span>
        </div>
      </div>

      {/* Scroll hint — only shown when complete */}
      <div className={`hero__scroll-hint ${phase === PHASE.COMPLETE ? 'hero__scroll-hint--visible' : ''}`}>
        <span>scroll</span>
        <svg viewBox="0 0 24 40" aria-hidden="true">
          <rect x="9" y="4" width="6" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="10" r="2" fill="currentColor" className="scroll-dot"/>
        </svg>
      </div>

      {/* Lower left: Crane scene */}
      <div className="hero__crane-area">
        <CraneScene />
      </div>
    </section>
  )
}
