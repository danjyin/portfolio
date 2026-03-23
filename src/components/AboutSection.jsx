import React, { useEffect, useRef } from 'react'
import './AboutSection.css'

const INTRO_PARAGRAPHS = [
  `A quiet boundary between logic and feeling — not fully defined, but not random either.`,
  `I build things that sit in that space: precise, but not rigid; expressive, but not chaotic.`,
]

const PATH_STAGES = [
  {
    num: '01',
    title: 'Pharmacy',
    desc: 'The human body — where complexity is natural.',
  },
  {
    num: '02',
    title: 'Biostatistics',
    desc: 'Data as evidence — learning to work with uncertainty.',
  },
  {
    num: '03',
    title: 'Data Science',
    desc: 'Shaping data into something usable and constructed.',
  },
  {
    num: '04',
    title: 'Computer Science',
    desc: 'Systems — how they are designed and scaled.',
  },
  {
    num: '05',
    title: 'Human-Centered Systems',
    desc: 'Building systems that respond to something meaningful.',
  },
]

/*
  SVG viewBox: 0 0 1000 240
  Even nodes  (i=0,2,4) sit at y=160  →  CSS top = 160/240 = 66.667%  (wave trough → content below)
  Odd  nodes  (i=1,3)   sit at y=80   →  CSS top =  80/240 = 33.333%  (wave crest  → content above)
  Wave path: smooth S-curves connecting all 5 nodes
*/
const NODE_Y_BELOW = '66.667%'   // y=160 in SVG
const NODE_Y_ABOVE = '33.333%'   // y=80  in SVG

const WAVE_PATH =
  'M 100,160 C 200,160 200,80 300,80 C 400,80 400,160 500,160 C 600,160 600,80 700,80 C 800,80 800,160 900,160'

function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function AboutSection() {
  const introRef    = useReveal(0.2)
  const timelineRef = useReveal(0.08)

  return (
    <section id="about" className="about-section">

      <div className="section-clouds" aria-hidden="true">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="xMidYMid slice">
          <path
            d="M0,80 Q80,40 200,70 Q320,95 480,60 Q640,25 800,65 Q960,100 1120,55 Q1280,15 1440,60 L1440,0 L0,0 Z"
            fill="rgba(250,247,240,0.9)"
          />
        </svg>
      </div>

      <div className="thread-inner">

        {/* Section marker */}
        <div className="section-marker">
          <span className="section-marker__line" />
          <span className="section-marker__text">Thread</span>
          <span className="section-marker__line" />
        </div>

        {/* ── Intro ── */}
        <div className="thread-intro" ref={introRef}>
          {INTRO_PARAGRAPHS.map((p, i) => (
            <p key={i} className="thread-intro__p" style={{ '--i': i }}>
              {p}
            </p>
          ))}
        </div>

        {/* Connector spark */}
        <div className="thread-spark" aria-hidden="true">
          <svg viewBox="0 0 240 14" preserveAspectRatio="xMidYMid meet">
            <line x1="0"   y1="7" x2="108" y2="7" stroke="rgba(200,169,110,0.20)" strokeWidth="0.8" />
            <circle cx="120" cy="7" r="2.6" fill="rgba(200,169,110,0.52)" />
            <line x1="132" y1="7" x2="240" y2="7" stroke="rgba(200,169,110,0.20)" strokeWidth="0.8" />
          </svg>
        </div>

        {/* ── Timeline ── */}
        <div className="thread-timeline" ref={timelineRef}>
          <div className="timeline-stages">

            {/* Wavy connecting path — revealed left-to-right on scroll */}
            <svg
              className="timeline-wave"
              viewBox="0 0 1000 240"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="timeline-wave__path"
                d={WAVE_PATH}
                fill="none"
                stroke="rgba(180,168,150,0.52)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Stages */}
            {PATH_STAGES.map((stage, i) => {
              const isAbove = i % 2 === 1
              const nodeY   = isAbove ? NODE_Y_ABOVE : NODE_Y_BELOW
              return (
                <div
                  key={stage.num}
                  className={`timeline-stage ${isAbove ? 'timeline-stage--above' : 'timeline-stage--below'}`}
                  style={{ '--delay': `${i * 0.13}s`, '--node-y': nodeY }}
                >
                  <div className="timeline-stage__node" aria-hidden="true" />

                  <div className="timeline-stage__body">
                    <span className="timeline-stage__num">{stage.num}</span>
                    <h3 className="timeline-stage__title">{stage.title}</h3>
                    <p className="timeline-stage__desc">{stage.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Ink divider */}
        <div className="ink-divider" aria-hidden="true">
          <svg viewBox="0 0 400 20" preserveAspectRatio="xMidYMid meet">
            <path
              d="M0,10 Q50,5 100,10 Q150,15 200,10 Q250,5 300,10 Q350,15 400,10"
              fill="none"
              stroke="rgba(180,168,150,0.35)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>

      </div>
    </section>
  )
}
