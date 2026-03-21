import React from 'react'
import './AboutSection.css'

/*
  ── EDIT YOUR CONTENT HERE ──────────────────────────────────────
  Replace the placeholder text in ABOUT_CONTENT with your own words.
  The structure (intro, body paragraphs, traits) can be adjusted freely.
  ─────────────────────────────────────────────────────────────────
*/
const ABOUT_CONTENT = {
  greeting: 'A brief introduction',
  intro: `I am Yin Danjing — someone who moves between the world of technology
          and the world of feeling, and believes the two are never truly separate.`,
  paragraphs: [
    `I grew up learning that beauty is not decoration but structure.
     That what is elegant is what is true. This shapes the way I build things —
     with patience, with intention, and with a certain attention to the poetry
     hiding inside ordinary problems.`,
    `My work lives at the intersection of engineering and imagination.
     I am drawn to systems that feel alive, to interfaces that speak quietly,
     to code that has rhythm. I care less about what is trending and more about
     what will remain meaningful three years from now.`,
    `Outside of work, I find myself reaching for tea before screens,
     for long walks before long meetings, for one beautiful sentence
     before one thousand efficient ones.`,
  ],
  traits: [
    { label: 'Discipline',    glyph: '', description: 'I believe in careful, intentional craft.' },
    { label: 'Curiosity',     glyph: '', description: 'Every system contains an unanswered question.' },
    { label: 'Sensitivity',   glyph: '', description: 'Feeling is a form of intelligence.' },
    { label: 'Imagination',   glyph: '', description: 'The best ideas begin as impossible ones.' },
  ],
}

function TraitCard({ label, glyph, description }) {
  return (
    <div className="trait-card">
      <span className="trait-glyph">{glyph}</span>
      <h3 className="trait-label">{label}</h3>
      <p className="trait-desc">{description}</p>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      {/* Subtle cloud background */}
      <div className="section-clouds" aria-hidden="true">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="xMidYMid slice">
          <path
            d="M0,80 Q80,40 200,70 Q320,95 480,60 Q640,25 800,65 Q960,100 1120,55 Q1280,15 1440,60 L1440,0 L0,0 Z"
            fill="rgba(250,247,240,0.9)"
          />
        </svg>
      </div>

      <div className="section-inner">
        {/* Section marker */}
        <div className="section-marker">
          <span className="section-marker__line" />
          <span className="section-marker__text">{ABOUT_CONTENT.greeting}</span>
          <span className="section-marker__line" />
        </div>

        {/* Main content */}
        <div className="about-grid">
          {/* Left: decorative column number */}
          <div className="about-left" aria-hidden="true">
            <div className="about-vertical-rule" />
          </div>

          {/* Right: text content */}
          <div className="about-text">
            <p className="about-intro">{ABOUT_CONTENT.intro}</p>
            {ABOUT_CONTENT.paragraphs.map((p, i) => (
              <p key={i} className="about-para">{p}</p>
            ))}
          </div>
        </div>

        {/* Trait cards */}
        <div className="trait-grid">
          {ABOUT_CONTENT.traits.map((t) => (
            <TraitCard key={t.label} {...t} />
          ))}
        </div>

        {/* Decorative ink line */}
        <div className="ink-divider" aria-hidden="true">
          <svg viewBox="0 0 400 20" preserveAspectRatio="xMidYMid meet">
            <path
              d="M0,10 Q50,5 100,10 Q150,15 200,10 Q250,5 300,10 Q350,15 400,10"
              fill="none"
              stroke="rgba(180,168,150,0.4)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
