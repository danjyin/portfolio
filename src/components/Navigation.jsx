import React, { useState, useEffect } from 'react'
import { PHASE } from '../constants.js'
import './Navigation.css'

const NAV_ITEMS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

function CloudButton({ label, href, delay }) {
  const handleClick = (e) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="cloud-btn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <svg className="cloud-btn__bg" viewBox="0 0 140 56" preserveAspectRatio="none" aria-hidden="true">
        <path d="
          M20,42
          Q10,42 8,34
          Q2,32 4,24
          Q4,14 14,14
          Q16,6 26,6
          Q30,2 40,4
          Q48,2 54,8
          Q62,4 72,6
          Q82,2 90,8
          Q100,4 108,10
          Q116,8 120,16
          Q130,16 132,26
          Q136,36 128,42
          Q122,48 112,46
          Q100,50 88,46
          Q76,50 64,46
          Q52,50 40,46
          Q30,50 20,42
          Z
        " />
      </svg>
      <span className="cloud-btn__label">{label}</span>
    </a>
  )
}

export default function Navigation({ phase }) {
  const visible =
    phase === PHASE.NAV_FORM ||
    phase === PHASE.NAMES_APPEAR ||
    phase === PHASE.COMPLETE

  const settled =
    phase === PHASE.NAMES_APPEAR ||
    phase === PHASE.COMPLETE

  return (
    <nav
      className={`cloud-nav ${visible ? 'cloud-nav--visible' : ''} ${settled ? 'cloud-nav--settled' : ''}`}
      aria-label="Main navigation"
    >
      <div className="cloud-nav__inner">
        {NAV_ITEMS.map((item, i) => (
          <CloudButton
            key={item.label}
            label={item.label}
            href={item.href}
            delay={i * 100}
          />
        ))}
      </div>
    </nav>
  )
}
