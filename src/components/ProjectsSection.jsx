import React, { useState } from 'react'
import './ProjectsSection.css'

/*
  ── EDIT YOUR PROJECTS HERE ────────────────────────────────────
  Add, remove, or edit project objects in the PROJECTS array.
  Fields:
    title      — project name
    subtitle   — one-line descriptor
    tags       — array of skill/tech strings
    description — 2-3 sentence description
    link       — optional external URL (set to null to hide button)
    linkLabel  — optional label for the button (default: "View Project")
    accent     — optional CSS color for the tag accent line
  ──────────────────────────────────────────────────────────────
*/
const PROJECTS = [
  {
    title: 'Meridian',
    subtitle: 'A minimal health-tracking interface',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    description: `A quiet application that watches patterns — in sleep, in breath, in rhythm.
                  Designed with the belief that data should illuminate, not overwhelm.
                  The interface responds to the user the way water responds to light.`,
    link: null,
    linkLabel: 'View Project',
    accent: '#C8A96E',
  },
  {
    title: 'Lingering Notes',
    subtitle: 'Generative ambient music from written words',
    tags: ['Python', 'Machine Learning', 'Web Audio API', 'Flask'],
    description: `A system that reads the emotional texture of text and translates it into
                  ambient sound. Give it a poem about rain, and it will compose something that
                  feels like rain. Still, diffuse, and unexpectedly moving.`,
    link: null,
    linkLabel: 'Listen',
    accent: '#A8B8C8',
  },
  {
    title: 'Parchment',
    subtitle: 'A writing tool that disappears',
    tags: ['Vue.js', 'Rust', 'SQLite', 'Electron'],
    description: `Built for writers who find most software too insistent.
                  Parchment holds your words without commentary. No word counts, no suggestions —
                  only text, the cursor, and whatever you are trying to say.`,
    link: null,
    linkLabel: 'View Project',
    accent: '#B8C4A8',
  },
  {
    title: 'Silhouette',
    subtitle: 'Computer vision for gesture-based art',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'WebSocket'],
    description: `An experiment in letting the body become the brush.
                  Using a camera and hand-tracking, users paint in the air —
                  slow gestures yielding ink-wash strokes on a shared digital canvas.`,
    link: null,
    linkLabel: 'View Demo',
    accent: '#C8B0A8',
  },
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className={`project-card ${hovered ? 'project-card--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Accent line */}
      <div
        className="project-card__accent"
        style={{ background: project.accent || 'var(--gold)' }}
      />

      {/* Index numeral */}
      <span className="project-card__index" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Title area */}
      <div className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
      </div>

      {/* Description */}
      <p className="project-card__desc">{project.description}</p>

      {/* Tags */}
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>

      {/* Link */}
      {project.link && (
        <a
          href={project.link}
          className="project-card__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{project.linkLabel || 'View Project'}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      )}

      {/* Corner decoration */}
      <div className="project-card__corner" aria-hidden="true" />
    </article>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      {/* Floating cloud background shapes */}
      <div className="projects-bg-clouds" aria-hidden="true">
        <svg viewBox="0 0 1440 300" preserveAspectRatio="xMidYMid slice">
          <path
            d="M0,140 Q120,90 280,130 Q440,168 600,120 Q760,72 920,115 Q1080,155 1240,105 Q1360,70 1440,100 L1440,300 L0,300 Z"
            fill="rgba(240,235,225,0.55)"
          />
          <path
            d="M0,200 Q200,160 400,185 Q600,208 800,172 Q1000,138 1200,165 Q1360,185 1440,170 L1440,300 L0,300 Z"
            fill="rgba(235,228,218,0.35)"
          />
        </svg>
      </div>

      <div className="section-inner">
        {/* Section marker */}
        <div className="section-marker">
          <span className="section-marker__line" />
          <span className="section-marker__text">Selected Work</span>
          <span className="section-marker__line" />
        </div>

        {/* Section heading */}
        <div className="projects-heading">
          <h2 className="projects-heading__title">Projects</h2>
          <p className="projects-heading__sub">
            Things I built because I couldn't stop thinking about them.
          </p>
        </div>

        {/* Project grid */}
        <div className="project-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
