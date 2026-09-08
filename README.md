# Brahim Jellite — The Work Talks.

Personal portfolio — hard black/white, built by hand. No template survived.

**Live:** https://www.brahimjellite.online

## Stack

- Vite + React + TypeScript (no UI library — pure custom CSS)
- Hard B/W design system (`#000` / `#fff`, dark/light toggle, hover inversion)
- Interactive terminal easter eggs (`help`, `stack`, `services`, `sudo ego`…)

## Run

```bash
npm install
npm run dev      # local dev (port may be 5174 if 5173 is busy)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

## Deploy

The build uses relative paths (`base: './'`) — `dist/` works on any static host.

### Option A — Hostinger (domain already there)

1. Open Hostinger → **hPanel → Websites → File Manager** (or connect FTP).
2. Go to the `public_html` folder of the domain `brahimjellite.online`.
3. Upload the **contents** of `dist/` (the `assets/` folder, `index.html`, `robots.txt`, `sitemap.xml`).
4. Make sure `www` subdomain also points to the same folder (Hostinger handles this automatically for the main domain).
5. Visit `https://brahimjellite.online` — done.

- Needs: any Hostinger web hosting plan (cheapest shared plan is enough — the site is fully static).
- HTTPS: enable the free SSL in hPanel (usually on by default).

### Option B — Vercel (free, auto-deploys on push)

1. Push this repo to GitHub (private or public).
2. Vercel → **Add New Project** → import the repo → framework: **Vite** → build `npm run build`, output `dist`.
3. Vercel → **Settings → Domains** → add `brahimjellite.online` and `www.brahimjellite.online`.
4. In **Hostinger → Domains → brahimjellite.online → DNS / Nameservers**:
   - Add the records Vercel shows (A record for the apex + CNAME `www → cname.vercel-dns.com`).
5. Every `git push` to the main branch redeploys automatically.

- Free SSL, global CDN, no hosting fees.

`public/robots.txt` and `public/sitemap.xml` are copied into `dist/` automatically.

## Editing content

All copy lives in `src/data.ts` — projects, services, status grid, studies, find-me links, terminal commands (`src/components/Terminal.tsx`). Sections in `src/sections.tsx`. Design tokens in `src/styles.css`.

## Keyboard

- `T` — invert theme
- `Esc` — close mobile menu
