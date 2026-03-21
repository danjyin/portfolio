import React, { useState } from 'react'
import './ContactSection.css'

/*
  ── EDIT YOUR CONTACT INFO HERE ────────────────────────────────
  Replace the values in CONTACT_INFO with your own details.
  Set any item's href to null to hide it.
  ──────────────────────────────────────────────────────────────
*/
const CONTACT_INFO = {
  invitation: `If something I've made has moved you,
               or if you have a question that doesn't have a tidy answer —
               I would be glad to hear from you.`,
  email:    'danjing@example.com',
  github:   'https://github.com/yourusername',
  linkedin: null,       // set to your LinkedIn URL, or null to hide
  wechat:   null,       // set to your WeChat ID string, or null to hide
}

function ContactLink({ label, href, glyph, value }) {
  if (!href && !value) return null

  const inner = (
    <>
      <span className="contact-link__glyph">{glyph}</span>
      <span className="contact-link__text">
        <span className="contact-link__label">{label}</span>
        <span className="contact-link__value">{value || href}</span>
      </span>
      {href && (
        <svg className="contact-link__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className="contact-link" target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    )
  }

  return <div className="contact-link contact-link--static">{inner}</div>
}

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', message: '', sent: false })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with your actual form handling (e.g., Formspree, EmailJS, etc.)
    setFormState(s => ({ ...s, sent: true }))
  }

  return (
    <section id="contact" className="contact-section">
      {/* Cloud top transition */}
      <div className="contact-clouds-top" aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="xMidYMid slice">
          <path
            d="M0,60 Q180,20 360,55 Q540,88 720,45 Q900,5 1080,50 Q1260,90 1440,55 L1440,0 L0,0 Z"
            fill="rgba(250,247,240,0.9)"
          />
        </svg>
      </div>

      <div className="section-inner contact-inner">
        {/* Section marker */}
        <div className="section-marker">
          <span className="section-marker__line" />
          <span className="section-marker__text">Get in touch</span>
          <span className="section-marker__line" />
        </div>

        {/* Heading */}
        <div className="contact-heading">
          <h2 className="contact-title">Contact</h2>
        </div>

        {/* Invitation text */}
        <p className="contact-invitation">
          {CONTACT_INFO.invitation}
        </p>

        {/* Two-column layout: links + form */}
        <div className="contact-layout">
          {/* Left: contact links */}
          <div className="contact-links">
            <ContactLink
              label="Email"
              href={`mailto:${CONTACT_INFO.email}`}
              value={CONTACT_INFO.email}
              glyph="✉"
            />
            {CONTACT_INFO.github && (
              <ContactLink
                label="GitHub"
                href={CONTACT_INFO.github}
                value={CONTACT_INFO.github.replace('https://', '')}
                glyph="◉"
              />
            )}
            {CONTACT_INFO.linkedin && (
              <ContactLink
                label="LinkedIn"
                href={CONTACT_INFO.linkedin}
                value={CONTACT_INFO.linkedin.replace('https://www.linkedin.com/in/', '')}
                glyph="◈"
              />
            )}
            {CONTACT_INFO.wechat && (
              <ContactLink
                label="WeChat"
                href={null}
                value={CONTACT_INFO.wechat}
                glyph="⊡"
              />
            )}
          </div>

          {/* Right: message form */}
          <div className="contact-form-wrap">
            {formState.sent ? (
              <div className="contact-sent">
                <p>Your message has been received.<br/>
                   I'll find my way back to you.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="contact-name" className="form-label">Your name</label>
                  <input
                    id="contact-name"
                    type="text"
                    className="form-input"
                    value={formState.name}
                    onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                    placeholder="How shall I address you?"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    rows="5"
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                    placeholder="What's on your mind?"
                    required
                  />
                </div>
                <button type="submit" className="form-submit">
                  <span>Send</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Closing footer */}
        <footer className="contact-footer">
          <div className="contact-footer__divider" aria-hidden="true">
            <svg viewBox="0 0 200 30" preserveAspectRatio="xMidYMid meet">
              <path d="M0,15 Q50,5 100,15 Q150,25 200,15"
                fill="none" stroke="rgba(180,168,150,0.3)" strokeWidth="1"/>
            </svg>
          </div>
          <div className="contact-footer__content">
            <span className="contact-footer__name">Yin Danjing</span>
            <span className="contact-footer__sep" aria-hidden="true">·</span>
            <span className="contact-footer__year">© {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    </section>
  )
}
