import React, { useState, useEffect } from 'react'
import Navigation    from './components/Navigation.jsx'
import HeroSection   from './components/HeroSection.jsx'
import AboutSection  from './components/AboutSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import ContactSection  from './components/ContactSection.jsx'
import { PHASE }    from './constants.js'

// Animation phase timeline (ms):
// 0      – page loads, moon fades in
// 500    – moon begins spinning
// 2800   – spin slows, taiji reveals
// 4000   – clouds burst outward from behind taiji
// 5200   – clouds rise and form nav bar
// 6400   – names fade in
// 7400   – animation complete, scroll unlocked

export default function App() {
  const [phase, setPhase] = useState(PHASE.INIT)

  useEffect(() => {
    const schedule = [
      [100,  PHASE.MOON_APPEAR],
      [2000, PHASE.MOON_SPIN],
      [4300, PHASE.TRANSFORM],
      [5500, PHASE.CLOUDS_OUT],
      [6700, PHASE.NAV_FORM],
      [7900, PHASE.NAMES_APPEAR],
      [8900, PHASE.COMPLETE],
    ]
    const timers = schedule.map(([delay, p]) =>
      setTimeout(() => setPhase(p), delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  const isComplete = phase === PHASE.COMPLETE

  return (
    <>
      <Navigation phase={phase} />
      <main style={{ overflowY: isComplete ? 'auto' : 'hidden', height: isComplete ? 'auto' : '100vh' }}>
        <HeroSection   phase={phase} />
        <AboutSection  phase={phase} />
        <ProjectsSection phase={phase} />
        <ContactSection  phase={phase} />
      </main>
    </>
  )
}
