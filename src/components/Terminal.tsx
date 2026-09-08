import { useEffect, useRef, useState } from 'react'
import { LINKS } from '../data'

type Line = { kind: 'in' | 'out' | 'err'; text: string }

const BANNER = [
  '╔══════════════════════════════════════════════╗',
  '║  THE WORK TALKS. — hidden skills terminal   ║',
  '║  operator: Brahim Jellite · callsign: TCHACH ║',
  '╚══════════════════════════════════════════════╝',
  'type `help` to see what is buried here.',
  '',
]

function commands(onTheme: () => void): Record<string, () => string[]> {
  return {
    help: () => [
      'available commands:',
      '  whoami         — identify the operator',
      '  tchach         — the callsign. ask about it',
      '  ↑/↓ arrows     — recall previous commands',
      '  stack          — the toolchain',
      '  projects       — what was shipped',
      '  services       — what I can build for you',
      '  velocity       — the real speed numbers',
      '  theme          — invert the world',
      '  hire           — get in touch',
      '  sudo ego       — elevate (security included)',
      '  clear          — wipe the log',
    ],
    whoami: () => [
      'Brahim Jellite — builder from Ain Cheggag, Morocco.',
      'education: FSDM — Licence SMI · Master MSID · PhD (cybersecurity × AI).',
      'founder of AutoFleet — multi-tenant SaaS, live in production.',
      'google play publisher — full cycle, from idea to live.',
      'callsign: TCHACH.',
      'motto: "The Work Talks."',
    ],
    tchach: () => [
      'TCHACH — the callsign.',
      'contracts get Brahim Jellite. everything else gets TCHACH.',
      'if you can pronounce it, we can probably work together.',
    ],
    stack: () => [
      'android:  kotlin · jetpack compose · coroutines/flow · room',
      'frontend: react · typescript · vite · vue',
      'backend:  supabase (postgres · auth · RLS · storage · cron) · fastapi · python · docker',
      'payments: stripe checkout + webhooks · resend · GA4 · google oauth',
      'mobile:   flutter · dart · play console · swift (macOS)',
      'ai:       deepseek pipelines · ocr (tesseract) · prompt → production',
    ],
    projects: () => [
      'autofleet.ma        — multi-tenant rental SaaS (LIVE)',
      'chicago mfa website — client build, delivered',
      'islamic-todo-app    — flutter, published',
      'dap-database        — client build, 251 verified DAPs',
      'charika engine      — gazette+OCR+Places lead pipeline',
    ],
    services: () => [
      'native & cross-platform apps — android, flutter, idea → play store',
      'saas & multi-tenant platforms — tenants, billing, admin dashboards',
      'ai-accelerated engineering — production quality, faster',
      'google play publishing — store listing, releases, compliance',
      'automation & internal tools — scrapers, OCR, cron pipelines',
      'web — design to deploy, client sites and dashboards',
    ],
    velocity: () => [
      'any project: problem → solution → built → delivered',
      'problem → solution : <1 day',
      'solution → built   : 2 days',
      'built → delivered  : 3 days',
      '',
      'the pace, without commentary.',
    ],
    theme: () => {
      onTheme()
      return ['world inverted. hard black/white only here.']
    },
    hire: () => [
      'whatsapp : ' + LINKS.whatsappLabel,
      'linkedin : linkedin.com/in/brahim-jellite',
      'github   : github.com/brahimje',
      '',
      'open a conversation. the work will do the rest.',
    ],
    'sudo ego': () => [
      '[sudo] ego elevation granted.',
      '[sudo] root access acquired.',
      "[sudo] security check: passed. don't worry — I'll take care of your security too. :)",
      '[sudo] the work continues to talk. this terminal just gets quieter.',
    ],
    clear: () => [],
  }
}

export default function Terminal({ onTheme }: { onTheme: () => void }) {
  const [history, setHistory] = useState<Line[]>(BANNER.map((t) => ({ kind: 'out', text: t })))
  const [value, setValue] = useState('')
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [, setHistIdx] = useState(-1)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = bodyRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [history])

  const run = (raw: string) => {
    const cmd = raw.trim()
    const next: Line[] = [{ kind: 'in', text: 'visitor@theworktalks:~$ ' + cmd }]
    if (!cmd) {
      setHistory((h) => [...h, ...next])
      return
    }
    if (cmd !== 'clear') {
      setCmdHistory((h) => [...h, cmd])
      setHistIdx(-1)
    }
    const fn = commands(onTheme)[cmd]
    if (!fn) {
      next.push({ kind: 'err', text: `command not found: ${cmd} — try 'help'` })
    } else {
      const out = fn()
      if (cmd === 'clear') {
        setHistory([])
        setValue('')
        return
      }
      next.push(...out.map((t) => ({ kind: 'out' as const, text: t })))
    }
    setHistory((h) => [...h, ...next])
    setValue('')
  }

  return (
    <div className="term" onClick={() => document.getElementById('term-input')?.focus()}>
      <div className="term-head">
        <span>hidden-skills — zsh</span>
        <span>◎ ● ●</span>
      </div>
      <div className="term-body" ref={bodyRef}>
        {history.map((l, i) => (
          <div key={i} className={`term-line ${l.kind}`}>
            {l.text}
          </div>
        ))}
        <div className="term-input-row">
          <span className="term-prompt">visitor@theworktalks:~$</span>
          <input
            id="term-input"
            className="term-input"
            aria-label="Terminal input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                run(value)
                return
              }
              if (e.key === 'ArrowUp') {
                e.preventDefault()
                setHistIdx((i) => {
                  const next = i < 0 ? cmdHistory.length - 1 : Math.max(0, i - 1)
                  setValue(cmdHistory[next] ?? '')
                  return next
                })
              } else if (e.key === 'ArrowDown') {
                e.preventDefault()
                setHistIdx((i) => {
                  if (i < 0) return i
                  const next = i + 1
                  if (next >= cmdHistory.length) {
                    setValue('')
                    return -1
                  }
                  setValue(cmdHistory[next] ?? '')
                  return next
                })
              }
            }}
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  )
}
