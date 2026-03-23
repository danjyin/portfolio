import React, { useState, useEffect } from 'react'
import Navigation    from './components/Navigation.jsx'
import HeroSection   from './components/HeroSection.jsx'
import AboutSection  from './components/AboutSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import ContactSection  from './components/ContactSection.jsx'
import { PHASE }    from './constants.js'

// Animation phase timeline (ms):
// 0      – page loads
// 100    – taiji appears directly
// 1600   – taiji fades into moon
// 2600   – clouds burst outward
// 3800   – clouds rise and form nav bar
// 5000   – names fade in
// 6000   – animation complete, scroll unlocked

export default function App() {
  const [phase, setPhase] = useState(PHASE.INIT)

  useEffect(() => {
    const schedule = [
      [100,  PHASE.TAIJI_SHOW],
      [1600, PHASE.TRANSFORM],
      [2600, PHASE.CLOUDS_OUT],
      [3800, PHASE.NAV_FORM],
      [5000, PHASE.NAMES_APPEAR],
      [6000, PHASE.COMPLETE],
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
