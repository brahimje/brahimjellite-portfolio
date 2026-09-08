import { useEffect, useState } from 'react'
import { NAV } from './data'
import {
  Engage,
  FindMe,
  Footer,
  Hero,
  Me,
  ProofLog,
  Services,
  TerminalSection,
  Velocity,
} from './sections'
import './styles.css'

type Theme = 'dark' | 'light'

function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') return saved
  } catch {
    /* storage unavailable */
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
  return 'dark'
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.08 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return
      if (e.key === 't' || e.key === 'T') toggle()
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // toggle uses functional setState — stable across renders
  }, [])

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />
      <nav className="nav">
        <div className="wrap nav-inner">
          <a className="nav-brand" href="#top">
            BJ — THE WORK TALKS.
          </a>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>
                {n.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button className="theme-btn" onClick={toggle} aria-label="Toggle theme" title="Press T">
              {theme === 'dark' ? '☾ DARK' : '☀ LIGHT'}
            </button>
            <button
              className="mobile-btn"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Me />
        <ProofLog />
        <Services />
        <Velocity />
        <TerminalSection onTheme={toggle} />
        <FindMe />
        <Engage />
      </main>

      <div className="wrap">
        <Footer />
      </div>
    </>
  )
}
