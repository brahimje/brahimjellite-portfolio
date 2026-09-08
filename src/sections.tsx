import {
  ACADEMIC,
  FIND_ME,
  LINKS,
  MARQUEE,
  PERSON,
  PROJECTS,
  SERVICES,
  STATUS,
  VELOCITY,
} from './data'
import Terminal from './components/Terminal'

function Section({ id, num, label, children }: { id: string; num: string; label: string; children: React.ReactNode }) {
  return (
    <section className="sec" id={id}>
      <div className="wrap reveal">
        <div className="label">
          [ {num} · {label} ]
        </div>
        {children}
      </div>
    </section>
  )
}

/* ---------------- HERO ---------------- */

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero-eyebrow">
          AIN CHEGGAG, MOROCCO → GLOBAL <span className="blink">▌</span>
        </div>
        <h1 className="hero-h1">
          BRAHIM
          <br />
          JELLITE
        </h1>
        <div className="hero-role">THE WORK TALKS. I JUST BUILD IT.</div>
        <div className="hero-row">
          <p className="hero-sub">
            I build SaaS platforms, mobile apps, and Play Store releases — mathematics first,
            shipping always. AI as the accelerator. Available for premium remote contracts.
          </p>
          <div className="hero-cta">
            <a className="btn solid" href="#work">
              See the proof ↓
            </a>
            <a className="btn" href={LINKS.whatsapp} target="_blank" rel="noreferrer">
              Start a contract →
            </a>
          </div>
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-inner">
          {[...MARQUEE, ...MARQUEE].map((w, i) => (
            <span key={i}>
              {w}
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}

/* ---------------- ME ---------------- */

export function Me() {
  return (
    <Section id="me" num="01" label="ME">
      <h2 className="h2">The guy behind the commits.</h2>
      <p className="ac-quote">“{PERSON.statement}”</p>
      <div style={{ height: 32 }} />
      <div className="find-grid">
        {STATUS.map((s) => (
          <div className="find" key={s.k}>
            <div className="find-place">{s.k}</div>
            <div className="find-note">{s.v}</div>
          </div>
        ))}
      </div>
      <div style={{ height: 40 }} />
      <div className="label">STUDIES</div>
      {ACADEMIC.map((a) => (
        <div className="ac-row" key={a.degree}>
          <div className="ac-degree">{a.degree}</div>
          <div>
            <div className="ac-field">{a.field}</div>
            <div className="ac-school">{a.school}</div>
            <div className="ac-topics">{a.topics}</div>
          </div>
        </div>
      ))}
    </Section>
  )
}

/* ---------------- PROOF LOG ---------------- */

export function ProofLog() {
  return (
    <Section id="work" num="02" label="PROOF LOG">
      <h2 className="h2">The work.</h2>
      <p className="sub">No case-study essays. Just what shipped.</p>
      <div style={{ height: 32 }} />
      <div className="proj-grid">
        {PROJECTS.map((p) => (
          <article className="proj" key={p.name}>
            <div className="proj-top">
              <span className="proj-tag">{p.tag}</span>
              <span className="proj-status">{p.status}</span>
            </div>
            <h3 className="proj-name">{p.name}</h3>
            <div className="proj-stack">{p.stack}</div>
            <p className="proj-text">{p.result}</p>
            {p.link && (
              <a className="proj-link" href={p.link} target="_blank" rel="noreferrer">
                {p.linkLabel} ↗
              </a>
            )}
            {p.repo && (
              <a className="proj-link" href={p.repo} target="_blank" rel="noreferrer">
                {p.repoLabel} ↗
              </a>
            )}
            {!p.repo && p.repoLabel && <span className="proj-link">{p.repoLabel}</span>}
          </article>
        ))}
      </div>
    </Section>
  )
}

/* ---------------- SERVICES ---------------- */

export function Services() {
  return (
    <Section id="services" num="03" label="SERVICES">
      <h2 className="h2">What I build.</h2>
      <p className="sub">Clear scope. Real deliverables. No slides.</p>
      <div style={{ height: 32 }} />
      <div className="find-grid">
        {SERVICES.map((s) => (
          <div className="find" key={s.k}>
            <div className="find-place">{s.k}</div>
            <div className="find-note">{s.v}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ---------------- VELOCITY ---------------- */

export function Velocity() {
  return (
    <Section id="velocity" num="04" label="VELOCITY">
      <h2 className="h2">Speed is a skill.</h2>
      <p className="sub">Any project. Four phases. Three paces.</p>
      <div style={{ height: 40 }} />
      <div className="route">
        {VELOCITY.map((v, i) => (
          <span key={v.from + v.to}>
            <span className="route-node">{v.from}</span>
            <span className="route-sep">──</span>
            <span className="route-days">{v.days}</span>
            <span className="route-sep">──▶</span>
            {i === VELOCITY.length - 1 && <span className="route-node">{v.to}</span>}
          </span>
        ))}
      </div>
      <p className="ac-quote">“Approximate time: a couple of days. Maybe two.”</p>
    </Section>
  )
}

/* ---------------- TERMINAL ---------------- */

export function TerminalSection({ onTheme }: { onTheme: () => void }) {
  return (
    <Section id="terminal" num="05" label="HIDDEN SKILLS TERMINAL">
      <h2 className="h2">Buried skills.</h2>
      <p className="sub">
        The stuff no résumé covers. Type <code style={{ fontFamily: 'var(--font-mono)' }}>help</code> — or
        try <code style={{ fontFamily: 'var(--font-mono)' }}>sudo ego</code>.
      </p>
      <div style={{ height: 32 }} />
      <Terminal onTheme={onTheme} />
    </Section>
  )
}

/* ---------------- FIND ME ---------------- */

export function FindMe() {
  return (
    <Section id="findme" num="06" label="WHERE YOU CAN FIND ME">
      <h2 className="h2">Find me.</h2>
      <p className="sub">I don't attend conferences. Find me where the work is.</p>
      <div style={{ height: 32 }} />
      <div className="find-strip">
        {FIND_ME.map((f) =>
          f.href ? (
            <a key={f.place} href={f.href} target="_blank" rel="noreferrer">
              {f.place} ↗
            </a>
          ) : (
            <span key={f.place}>{f.place}</span>
          ),
        )}
      </div>
    </Section>
  )
}

/* ---------------- ENGAGE ---------------- */

export function Engage() {
  return (
    <Section id="contact" num="07" label="ENGAGE">
      <div className="engage">
        <div className="badge">ACCEPTING CONTRACTS · Q4 2026</div>
        <h2 className="h2">
          The work
          <br />
          talks.
        </h2>
        <p className="engage-sub">— BRAHIM JELLITE</p>
        <div className="hero-cta" style={{ justifyContent: 'center' }}>
          <a className="btn solid" href={LINKS.whatsapp} target="_blank" rel="noreferrer">
            Hire me →
          </a>
          <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer">
            Read the commits ↗
          </a>
        </div>
      </div>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 BRAHIM JELLITE — THE WORK TALKS.</span>
      <span>www.brahimjellite.online</span>
      <span>PRESS T TO INVERT.</span>
      <span>BUILT BY HAND. NO TEMPLATE SURVIVED.</span>
    </footer>
  )
}
