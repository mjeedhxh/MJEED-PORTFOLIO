import Reveal from './Reveal.jsx'
import { ArrowUpRight } from './Icons.jsx'

// Prefix a public asset path with Vite's base URL (see CaseStudies.jsx).
const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

// This case study uses the project's own theme — Khatib & Alami's dark + orange
// corporate look — while keeping the portfolio's layout language.
const ORANGE = '#EA6A24'

const meta = [
  { label: 'My Role', value: 'End-to-end — Analysis · UI Design · Front-End · Testing · Deployment' },
  { label: 'Type', value: 'Cooperative Training (COOP) · 6 months' },
  { label: 'Timeline', value: '2 Mar – 21 Aug 2025 · ~560 training hours' },
  { label: 'Client', value: 'Khatib & Alami — engineering & consultancy' },
  { label: 'Stack', value: 'Figma · HTML5 · CSS3 · JavaScript' },
  { label: 'Deployment', value: 'Static site on GitHub Pages' },
]

const inScope = [
  'Static UI pages',
  'Front-end interactivity in JavaScript (search / filter / navigation)',
  'Responsive design with full RTL support',
  'Public deployment via GitHub Pages',
]
const outScope = ['Backend server / database', 'Membership / login system', 'Full CMS (content management)']

const targetUsers = [
  {
    role: 'Government Entities',
    need: 'Ministries, municipalities, and regulatory authorities needing planning and design for national infrastructure, transport, water, and energy projects.',
  },
  {
    role: 'Private Sector & Developers',
    need: 'Companies and real-estate developers seeking engineering design and urban planning for residential, commercial, and industrial projects.',
  },
  {
    role: 'Mega Projects',
    need: 'Large-scale, multi-disciplinary initiatives — like smart cities — needing integrated engineering coordination and advanced tech (GIS, sustainable energy).',
  },
]

const features = [
  { title: 'Instant Client-Side Search', text: 'A content listing page with real-time search and filters by category, date, and tags — no page reloads.' },
  { title: 'Content Detail Pages', text: 'Structured detail views with title, summary, body, date, and tags for each item.' },
  { title: 'Full RTL & Arabic', text: 'Complete right-to-left layout with proper Arabic fonts, plus an English translation.' },
  { title: 'No-Backend Content', text: 'Content stored as JSON / Markdown in the repo — fast, simple, and easy to update.' },
  { title: 'Shareable Links', text: 'Hash-based routing gives every page a stable, shareable URL on a static host.' },
  { title: 'Accessible UI', text: 'Keyboard navigation and aria-labels, with readable contrast and a fixed navbar and footer.' },
]

const timeline = [
  { m: 'Month 1', t: 'Requirements analysis, SRS, GitHub repo & design planning' },
  { m: 'Month 2', t: 'Figma UI design — screens and states' },
  { m: 'Month 3', t: 'Project setup, structure/navigation & homepage' },
  { m: 'Month 4', t: 'Search / filter / detail pages + initial content' },
  { m: 'Month 5', t: 'Performance & accessibility, full testing & bug fixes' },
  { m: 'Month 6', t: 'Docs, GitHub Pages deployment & final handoff' },
]

const contributions = [
  { title: 'Analysis', text: 'Defined the goals, target audience, sitemap, and scope — and analysed similar sites to shape the information architecture.' },
  { title: 'UI Design (Figma)', text: 'Built low-fi wireframes through to a hi-fi interactive prototype, with a style guide for colours, fonts, and components.' },
  { title: 'Front-End Development', text: 'Coded the site in HTML, CSS, and JavaScript — homepage, about, projects, contact, and the search/filter behaviour.' },
  { title: 'Testing & Deployment', text: 'Ran cross-browser testing and performance/accessibility passes, then deployed the live site on GitHub Pages.' },
]

const skills = [
  { group: 'Technical', items: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'Responsive Design', 'Cross-browser Testing', 'Git / GitHub', 'GitHub Pages'] },
  { group: 'Analytical', items: ['Requirements Analysis', 'UX Design', 'Content Organization'] },
  { group: 'Soft Skills', items: ['Teamwork', 'Time Management', 'Presentation'] },
]

const quality = [
  'Responsive from small phones to large desktops',
  'Fast load on mid-range devices',
  'Readable contrast and easy navigation',
  'Tested across Chrome, Firefox, Edge & Safari',
]

function SectionLabel({ children }) {
  return <p className="text-xs font-medium uppercase tracking-[0.22em]" style={{ color: ORANGE }}>{children}</p>
}

export default function KACaseStudy() {
  return (
    <div className="bg-[#141518] font-sans text-white">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#141518]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#/" className="group inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white">
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5">←</span>
            Back to portfolio
          </a>
          <a
            href="https://mjeedhxh.github.io/-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-[#141518] transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: ORANGE }}
          >
            Visit Live Site
          </a>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-white/10 bg-[#0F1013]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full blur-3xl" style={{ backgroundColor: 'rgba(234,106,36,0.15)' }} />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em]" style={{ color: ORANGE }}>
              Case Study · Cooperative Training
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-6xl tracking-tight sm:text-7xl">Khatib &amp; Alami</h1>
            <p className="mt-3 font-display text-2xl italic text-white/70 sm:text-3xl">
              Corporate Website Redevelopment
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
              A six-month project rebuilding the corporate site for Khatib &amp; Alami — an
              engineering and consultancy firm — from Figma design through to a fast, responsive,
              fully RTL static site deployed on GitHub Pages.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://mjeedhxh.github.io/-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#141518] transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: ORANGE }}
              >
                Live Site
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.figma.com/design/GYoDrULxVqZE0psbUraf2h/%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%AA%D8%AD%D8%B3%D9%8A%D9%86-%D9%85%D9%88%D9%82%D8%B9-%D8%AE%D8%B7%D9%8A%D8%A8-%D9%88%D8%B9%D9%84%D9%85%D9%8A?node-id=0-1&t=uPrixHZYUuGJGCiN-1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                Figma
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://github.com/mjeedhxh/-2"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                Source Code
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <img
              src={asset('/ka/desktop.png')}
              alt="Khatib & Alami homepage on desktop"
              className="mt-14 w-full max-w-4xl drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            />
          </Reveal>

          {/* Meta */}
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-10 sm:grid-cols-3">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">{m.label}</dt>
                <dd className="mt-1.5 text-sm leading-snug text-white/85">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <main>
        {/* Overview / Scope */}
        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel>Overview &amp; Scope</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
              A fast, static site — scoped with intent
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              The goal was a modern, responsive corporate site that presents Khatib &amp; Alami’s work
              clearly. To keep it fast and maintainable on a static host, the scope was deliberately
              bounded.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <h3 className="font-display text-xl" style={{ color: ORANGE }}>In scope</h3>
                <ul className="mt-5 space-y-3 text-sm text-white/80">
                  {inScope.map((s) => (
                    <li key={s} className="flex gap-3">
                      <span aria-hidden="true" style={{ color: ORANGE }}>✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <h3 className="font-display text-xl text-white/70">Out of scope</h3>
                <ul className="mt-5 space-y-3 text-sm text-white/60">
                  {outScope.map((s) => (
                    <li key={s} className="flex gap-3">
                      <span aria-hidden="true" className="text-white/40">✕</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Target users */}
        <section className="bg-[#0F1013]">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
            <Reveal>
              <SectionLabel>Who it serves</SectionLabel>
              <h2 className="mt-4 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
                Built for national-scale clients
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {targetUsers.map((u, i) => (
                <Reveal key={u.role} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <span className="font-display text-lg italic" style={{ color: ORANGE }}>0{i + 1}</span>
                    <h3 className="mt-3 font-display text-xl">{u.role}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{u.need}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features + screens */}
        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel>What I built</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
              Interactive, without a backend
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              All interactivity runs client-side — instant search, filtering, and routing — with content
              kept in simple files in the repo.
            </p>
          </Reveal>

          {/* phones */}
          <Reveal delay={120}>
            <div className="mt-12 flex flex-wrap items-end justify-center gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              {[
                { src: '/ka/mobile.png', label: 'Home · RTL' },
                { src: '/ka/partners.png', label: 'Partners' },
              ].map((s) => (
                <figure key={s.src} className="flex flex-col items-center">
                  <img
                    src={asset(s.src)}
                    alt={`Khatib & Alami — ${s.label}`}
                    loading="lazy"
                    className="w-[150px] rounded-xl shadow-2xl shadow-black/50 ring-1 ring-white/10 sm:w-[170px]"
                  />
                  <figcaption className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                    {s.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="font-display text-lg">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* quality strip */}
          <Reveal delay={120}>
            <ul className="mt-12 flex flex-wrap gap-x-4 gap-y-3 border-t border-white/10 pt-8">
              {quality.map((q) => (
                <li key={q} className="flex items-center gap-2 text-sm text-white/70">
                  <span aria-hidden="true" style={{ color: ORANGE }}>●</span>
                  {q}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Process timeline */}
        <section className="bg-[#0F1013]">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
            <Reveal>
              <SectionLabel>Process</SectionLabel>
              <h2 className="mt-4 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
                Six months, start to launch
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                From requirements and Figma design to implementation, testing, and deployment — the
                timeline was fully respected, pausing only for official holidays.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {timeline.map((t, i) => (
                <Reveal key={t.m} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <p className="font-display text-2xl" style={{ color: ORANGE }}>{t.m}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{t.t}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Role + skills */}
        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <SectionLabel>My Contribution</SectionLabel>
                <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">End-to-end ownership</h2>
                <p className="mt-6 text-base leading-relaxed text-white/70">
                  I owned the project from analysis through deployment — a single throughline from
                  research and design into working, tested code.
                </p>
                <div className="mt-8 space-y-6">
                  {contributions.map((c) => (
                    <div key={c.title} className="border-l-2 pl-5" style={{ borderColor: ORANGE }}>
                      <h3 className="font-display text-lg">{c.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/65">{c.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <SectionLabel>Skills Applied</SectionLabel>
                <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">What it sharpened</h2>
                <div className="mt-8 space-y-8">
                  {skills.map((s) => (
                    <div key={s.group}>
                      <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">{s.group}</h3>
                      <ul className="mt-3 flex flex-wrap gap-2.5">
                        {s.items.map((it) => (
                          <li key={it} className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 text-xs font-medium text-white/85">
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Outcome / CTA */}
        <section className="border-t border-white/10 bg-[#0F1013]">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8 lg:py-24">
            <Reveal>
              <SectionLabel>Outcome</SectionLabel>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
                Delivered, on time, and live
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
                The project was completed to its academic requirements and shipped as a live, responsive,
                fully RTL site — take a look, or explore the source.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href="https://mjeedhxh.github.io/-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-7 py-3.5 text-sm font-semibold text-[#141518] transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: ORANGE }}
                >
                  Visit the Live Site
                </a>
                <a
                  href="#/"
                  className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
                >
                  Back to portfolio
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  )
}
