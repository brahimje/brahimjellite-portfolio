// ============================================================
//  THE WORK TALKS. — content source of truth.
//  Every metric below is computed from real build sessions
//  (2026-08-11 → 2026-08-28) and real GitHub activity.
// ============================================================

export const LINKS = {
  github: 'https://github.com/brahimje',
  linkedin: 'https://www.linkedin.com/in/brahim-jellite',
  whatsapp: 'https://wa.me/212604290937',
  whatsappLabel: '+212 604 290 937',
  site: 'https://www.brahimjellite.online',
}

export const NAV = [
  { label: 'ME', href: '#me' },
  { label: 'WORK', href: '#work' },
  { label: 'SERVICES', href: '#services' },
  { label: 'VELOCITY', href: '#velocity' },
  { label: 'TERMINAL', href: '#terminal' },
  { label: 'FIND ME', href: '#findme' },
]

export const PERSON = {
  statement: 'Contracts get Brahim Jellite. Everything else gets TCHACH.',
}

export const STATUS = [
  { k: 'ROLE', v: 'BUILDER · ENGINEER · FOUNDER' },
  { k: 'BASE', v: 'AIN CHEGGAG, MOROCCO' },
  { k: 'EDUCATION', v: 'FSDM — LICENCE SMI · MASTER MSID · PH.D.' },
  { k: 'CALLSIGN', v: 'TCHACH' },
  { k: 'STATUS', v: 'ACCEPTING CONTRACTS · Q4 2026' },
  { k: 'MOTTO', v: '“THE WORK TALKS.”' },
]

export const MARQUEE = [
  'KOTLIN',
  'JETPACK COMPOSE',
  'REACT',
  'TYPESCRIPT',
  'SUPABASE',
  'STRIPE',
  'FLUTTER',
  'PYTHON',
  'FASTAPI',
  'DOCKER',
  'VUE',
  'SWIFT',
  'POSTGRESQL',
  'OCR PIPELINES',
]

export type Project = {
  tag: string
  name: string
  status: string
  stack: string
  repo?: string
  repoLabel?: string
  link?: string
  linkLabel?: string
  problem: string
  solution: string
  result: string
}

export const PROJECTS: Project[] = [
  {
    tag: 'CLIENT BUILD · FLAGSHIP',
    name: 'Chicago MFA Website',
    status: 'SHIPPED',
    stack: 'Design-to-deploy client website',
    problem: 'A client whose name carries weight needed a website that carried it too.',
    solution: 'Full build delivered end-to-end: structure, design system, and deployment.',
    result: 'Client website delivered end-to-end — design, build, deployment, handover.',
  },
  {
    tag: 'SAAS PLATFORM · FOUNDER',
    name: 'AutoFleet',
    status: 'LIVE',
    stack: 'React · TypeScript · Supabase · Stripe · Vercel',
    repo: 'https://github.com/brahimje/car-rental-buisiness',
    repoLabel: 'github.com/brahimje/car-rental-buisiness',
    link: 'https://www.autofleet.ma',
    linkLabel: 'autofleet.ma',
    problem:
      'Sell one car-rental platform to many agencies — each with its own subdomain, users, cars and billing — without one tenant ever touching another\u2019s data.',
    solution:
      'Multi-tenant Supabase with hardened RLS policies, automated tenant provisioning, Stripe Checkout + webhooks, and a CIH bank-transfer fallback for MAD since Stripe refuses the currency.',
    result:
      'Live multi-tenant SaaS — real agencies onboard, lifetime pricing, 7-day trials, AR/FR, Stripe + bank-transfer billing.',
  },
  {
    tag: 'CROSS-PLATFORM APP',
    name: 'Islamic-Todo-App',
    status: 'SHIPPED',
    stack: 'Flutter · Dart',
    repo: 'https://github.com/brahimje/Islamic-Todo-App',
    repoLabel: 'github.com/brahimje/Islamic-Todo-App',
    problem:
      'A comprehensive Islamic productivity app for organizing daily prayers, tasks and spiritual activities.',
    solution:
      'Cross-platform build with Flutter — clean, minimal UI, shipped and published.',
    result:
      'Cross-platform productivity app — prayers, tasks and organization, shipped in Flutter.',
  },
  {
    tag: 'CLIENT BUILD · JREQ TECH',
    name: 'DAP Database',
    status: 'LIVE',
    stack: 'Vue · deterministic scoring engine · SEO layer',
    repo: 'https://github.com/jreqtech/dap-database',
    repoLabel: 'github.com/jreqtech/dap-database',
    problem:
      'Turn enthusiast chaos into decision support: hundreds of digital audio players, specs scattered everywhere.',
    solution:
      'A Vue SPA over 251 source-backed DAP entries, a finder wizard powered by a deterministic scoring engine (the Pickr method), plus an affiliate buy-links layer.',
    result:
      'Shipped for an external client — 251 source-backed entries, finder engine, affiliate layer.',
  },
]

export type Velocity = {
  from: string
  to: string
  days: string
}

// The lifecycle of any project — real pace on each transition.
export const VELOCITY: Velocity[] = [
  { from: 'PROBLEM', to: 'SOLUTION', days: '<1 DAY' },
  { from: 'SOLUTION', to: 'BUILT', days: '2 DAYS' },
  { from: 'BUILT', to: 'DELIVERED', days: '3 DAYS' },
]

export type TimelineItem = {
  date: string
  title: string
  desc: string
}

export const TIMELINE: TimelineItem[] = [
  {
    date: '2026-08-28',
    title: 'AutoFleet LIVE · Charika engine shipped',
    desc: 'autofleet.ma goes live with agencies onboarding. The lead engine ships the same day.',
  },
  {
    date: '2026-08-25',
    title: 'AutoFleet full-stack audit',
    desc: 'Health check across frontend, backend, billing and provisioning. Every gap closed before launch.',
  },
  {
    date: '2026-08-13',
    title: 'OfflineVault v1 pushed',
    desc: 'FastAPI + yt-dlp stack pushed to GitHub. 12 QA-reported bugs closed in one pass.',
  },
  {
    date: '2026-08-11',
    title: 'OfflineVault spec day',
    desc: 'From a written spec to a running stack: backend, queue, streaming, frontend.',
  },
  {
    date: '2025',
    title: 'Flutter & Swift consumer apps',
    desc: 'Islamic-Todo-App, salat_minimalist, Salat-Minimal-Reminder. Cross-platform before the SaaS era.',
  },
  {
    date: '2023–24',
    title: 'Java Android fundamentals',
    desc: 'The origin story: activities, adapters, sensors, shared preferences. Built to understand the machine.',
  },
]

export type Achievement = { icon: string; title: string; desc: string }

export const ACHIEVEMENTS: Achievement[] = [
  { icon: '◈', title: 'SHIPPED STRIPE', desc: 'Checkout + webhooks live in production. First try, no refund rage.' },
  { icon: '◈', title: '12 BUGS · 1 PASS', desc: 'OfflineVault QA cycle closed in a single session. The bugs didn\u2019t stand a chance.' },
  { icon: '◈', title: 'STRIPE CAN\u2019T DO MAD', desc: 'So I built the CIH bank-transfer fallback instead of complaining. Deal closed.' },
  { icon: '◈', title: '251 VERIFIED DAPS', desc: 'Source-backed rows for a paying client. Citations over vibes.' },
  { icon: '◈', title: 'SPEC → PUSH IN 48H', desc: 'OfflineVault: first message to a pushed repo in 2 days.' },
  { icon: '◈', title: 'IDEA → LIVE IN <1 DAY', desc: 'Charika engine: scraper + OCR + Places API, wired into the super-admin the same day.' },
  { icon: '◈', title: 'PLAY STORE, REPEATEDLY', desc: 'Full publisher cycle — listings, releases, compliance. Still at it.' },
  { icon: '◈', title: 'MODELS BEFORE IT WAS COOL', desc: 'Trained AI models from scratch, datasets built by hand. The old days, no wizard buttons.' },
  { icon: '◈', title: 'PH.D. LEFT ON READ', desc: 'Dropped out. Deployed instead. The thesis never shipped — the products did.' },
  { icon: '◈', title: 'FREE TIER NEVER SLEEPS', desc: 'A cron keepalive keeps Supabase warm. The free plan fears me.' },
  { icon: '◈', title: 'ONE CODEBASE, MANY TENANTS', desc: 'AutoFleet: one platform, one agency per subdomain, zero data leaks.' },
  { icon: '◈', title: 'THE WORK TALKS. LITERALLY.', desc: 'Even this portfolio ships with a terminal. This site is the receipt.' },
]

export const ACADEMIC = [
  {
    degree: 'LICENCE',
    field: 'Sciences Mathématiques & Informatique (SMI)',
    school: 'FSDM — Faculté des Sciences Dhar El Mahraz, Fès',
    topics:
      'Algèbre · Analyse · Probabilités & Statistiques · Algorithmique · Structures de Données · Bases de Données · Programmation Orientée Objet',
  },
  {
    degree: 'MASTER',
    field: 'MSID — Systèmes Intelligents & Décisionnels',
    school: 'FSDM — Faculté des Sciences Dhar El Mahraz, Fès',
    topics:
      'Intelligence Artificielle · Machine Learning · Data Mining · Optimisation & Recherche Opérationnelle · Logique Floue · Aide à la Décision Multicritère · Business Intelligence',
  },
  {
    degree: 'PH.D.',
    field: 'Cybersecurity × AI',
    school: 'Year 2 — status: DROPPED OUT, for production',
    topics:
      'Android security · AI threat detection · datasets built by hand · models trained from scratch — the old days, before every tool had a model inside it',
  },
]

export type FindMe = { place: string; note: string; href?: string; hrefLabel?: string }

export const MORE_REPOS = [
  {
    name: 'Chicago MFA Website',
    desc: 'Full client website build — design to deploy.',
    lang: 'CLIENT BUILD',
    year: '—',
  },
  {
    name: 'Islamic-Todo-App',
    repo: 'https://github.com/brahimje/Islamic-Todo-App',
    desc: 'Islamic productivity app — prayers, tasks, spiritual activities. Cross-platform.',
    lang: 'FLUTTER · DART',
    year: '2025–26',
  },
  {
    name: 'Stock_Scraping_Python',
    repo: 'https://github.com/brahimje/Stock_Scraping_Python',
    desc: 'Financial data scraping & dashboards — TSLA, AMZN, AMD, GME.',
    lang: 'PYTHON',
    year: '2022',
  },
  {
    name: 'DataMining',
    repo: 'https://github.com/brahimje/DataMining',
    desc: 'Data mining experiments — from the MSID era.',
    lang: 'PYTHON',
    year: '2022–23',
  },
  {
    name: 'DLProjects',
    repo: 'https://github.com/brahimje/DLProjects',
    desc: 'Deep learning experiments — models trained the hard way.',
    lang: 'PYTHON',
    year: '2022–23',
  },
]

export const SERVICES = [
  { k: 'NATIVE & CROSS-PLATFORM APPS', v: 'Android and Flutter apps — from idea to Play Store.' },
  { k: 'SAAS & MULTI-TENANT PLATFORMS', v: 'Platforms you can sell to many clients — tenants, billing, admin dashboards.' },
  { k: 'AI-ACCELERATED ENGINEERING', v: 'Production-quality builds, faster — AI used as a power tool, not a gamble.' },
  { k: 'GOOGLE PLAY PUBLISHING', v: 'Full cycle: build, store listing, releases, compliance.' },
  { k: 'AUTOMATION & INTERNAL TOOLS', v: 'Scrapers, OCR pipelines, cron jobs — work that runs itself.' },
  { k: 'WEB — DESIGN TO DEPLOY', v: 'Client sites and dashboards, delivered end-to-end.' },
]

export const FIND_ME: FindMe[] = [
  {
    place: 'AIN CHEGGAG',
    note: 'Morocco. ~7,000 km from Silicon Valley, 0 km from the keyboard.',
  },
  {
    place: 'VS CODE',
    note: 'Primary habitat. Seen at 03:00 AM, most days.',
  },
  {
    place: 'GITHUB',
    note: 'Where the commits live. Public and unapologetic.',
    href: LINKS.github,
    hrefLabel: 'github.com/brahimje',
  },
  {
    place: 'LINKEDIN',
    note: 'The professional layer. Updated when the work is worth it.',
    href: LINKS.linkedin,
    hrefLabel: 'linkedin.com/in/brahim-jellite',
  },
  {

    place: 'WHATSAPP',
    note: 'Fastest way to reach a human. Replies measured in hours, not days.',
    href: LINKS.whatsapp,
    hrefLabel: LINKS.whatsappLabel,
  },
  {
    place: 'THIS DOMAIN',
    note: 'You are already here. The work is below.',
    href: LINKS.site,
    hrefLabel: 'www.brahimjellite.online',
  },
]

export const STACK = [
  {
    group: 'ANDROID',
    items: ['Kotlin', 'Jetpack Compose', 'Coroutines · Flow', 'Room', 'Android SDK'],
  },
  {
    group: 'CROSS-PLATFORM',
    items: ['Flutter', 'Dart', 'Swift (macOS)'],
  },
  {
    group: 'FRONTEND & SAAS',
    items: ['React', 'TypeScript', 'Vite', 'Vue'],
  },
  {
    group: 'BACKEND & DATA',
    items: ['Supabase · PostgreSQL', 'Auth + RLS', 'FastAPI', 'Python', 'Docker', 'Vercel'],
  },
  {
    group: 'PAYMENTS & INTEGRATIONS',
    items: ['Stripe (Checkout + Webhooks)', 'Resend', 'Google OAuth', 'GA4', 'Google Places'],
  },
  {
    group: 'LOGIC & DATA SCIENCE',
    items: ['Scoring engines', 'Tesseract OCR', 'Python / ML (SMI background)'],
  },
  {
    group: 'AI-ACCELERATED BUILDING',
    items: ['AI-native development workflows', 'DeepSeek pipelines', 'prompt → production'],
  },
  {
    group: 'PUBLISHING',
    items: ['Google Play Console', 'Release lifecycle — idea → live'],
  },
]
