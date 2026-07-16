import Reveal from './Reveal.jsx'
import { ArrowUpRight } from './Icons.jsx'

// Prefix a public asset path with Vite's base URL so it resolves both in local
// dev ("/") and under the GitHub Pages sub-path ("/MJEED-PORTFOLIO/"). Vite does
// not rewrite absolute string-literal paths, so we do it explicitly here.
const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const projects = [
  {
    index: '01',
    eyebrow: 'Mobile App · Al-Wahda Club',
    title: 'Midan',
    subtitle: 'Sports Talent Management Platform',
    description:
      'An end-to-end digital platform built for Al-Wahda Club to optimize sports management and connect coaches with players.',
    gallery: [
      {
        src: '/midan/login.webp',
        label: 'Onboarding',
        alt: 'Midan app onboarding screen with Al-Wehda branding and login',
      },
      {
        src: '/midan/team.webp',
        label: 'Team & Formation',
        alt: 'Team screen showing the 4-3-3 formation, upcoming match, and player availability',
      },
      {
        src: '/midan/stats.png',
        label: 'Player Ratings',
        alt: 'Player ratings screen with a radar chart comparing the player to the team average',
      },
      {
        src: '/midan/accessibility.png',
        label: 'Accessibility',
        alt: 'Accessibility settings with adjustable text size and colour-blind support',
      },
      {
        src: '/midan/players.webp',
        label: 'Squad',
        alt: 'Players screen with search and a grid of squad member cards',
      },
    ],
    tags: ['UX Research', 'React Native', 'Expo', 'Accessibility (WCAG)'],
    links: [
      { label: 'Read Case Study', href: '#/midan', primary: true },
      {
        label: 'Figma',
        href: 'https://www.figma.com/design/MgW3g5o5ttX74B320i8R5m/Untitled?node-id=0-1&t=KyJkqiN0QDfqavNn-1',
      },
      { label: 'Source Code', href: 'https://github.com/osama147854/maydan' },
    ],
  },
  {
    index: '02',
    eyebrow: 'Corporate Web · Responsive Redevelopment',
    title: 'Khatib & Alami',
    subtitle: 'Corporate Digital Interface',
    description:
      'Redevelopment of a corporate responsive website with dynamic search and filtering mechanisms.',
    showcase: {
      desktop: {
        src: '/ka/desktop.png',
        alt: 'Khatib & Alami corporate homepage on desktop — "Over 50 Years of Excellence in Engineering and Consultancy"',
      },
      phones: [
        {
          src: '/ka/mobile.png',
          label: 'Home · RTL',
          alt: 'Khatib & Alami homepage on mobile in Arabic right-to-left layout',
        },
        {
          src: '/ka/partners.png',
          label: 'Partners',
          alt: 'Khatib & Alami partners section on mobile showing Qiddiya and Tamm',
        },
      ],
    },
    tags: ['Figma', 'HTML5', 'CSS3', 'JavaScript', 'RTL Support'],
    links: [
      { label: 'Read Case Study', href: '#/khatib-alami', primary: true },
      {
        label: 'Figma',
        href: 'https://www.figma.com/design/GYoDrULxVqZE0psbUraf2h/%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%AA%D8%AD%D8%B3%D9%8A%D9%86-%D9%85%D9%88%D9%82%D8%B9-%D8%AE%D8%B7%D9%8A%D8%A8-%D9%88%D8%B9%D9%84%D9%85%D9%8A?node-id=0-1&t=uPrixHZYUuGJGCiN-1',
      },
      { label: 'Source Code', href: 'https://github.com/mjeedhxh/-2' },
      { label: 'Live Website', href: 'https://mjeedhxh.github.io/-2/' },
    ],
  },
  {
    index: '03',
    eyebrow: 'UI Design · Digital Library',
    title: 'Nathr',
    subtitle: 'Mobile Interface Design Project',
    description:
      'Designing the user interface for a digital library application to improve the digital reading experience through innovative features and a responsive, user-friendly design.',
    gallery: [
      {
        src: '/nathr/wireframe.png',
        label: 'Wireframe',
        alt: 'Low-fidelity wireframe of the Nathr home screen with placeholder book slots',
      },
      {
        src: '/nathr/home.png',
        label: 'Home · Dark',
        alt: 'Nathr home screen in the dark teal theme with recommended books and tagged quotes',
      },
      {
        src: '/nathr/browse.png',
        label: 'Home · Light',
        alt: 'Nathr home screen in the light theme with recommended books and tagged quotes',
      },
      {
        src: '/nathr/shelves.png',
        label: 'My Shelves',
        alt: 'Nathr library screen with want-to-read and read shelves and popular reading lists',
      },
    ],
    galleryVariant: 'card',
    tags: ['UI/UX Design', 'Figma', 'Mobile Interface'],
    links: [
      {
        label: 'Figma',
        href: 'https://www.figma.com/design/vNEfvlaR01RzGCWN7pri0V/%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D8%A7%D9%84%D9%88%D8%A7%D8%AC%D9%87%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%AD%D9%85%D9%88%D9%84%D8%A9-(1)?node-id=0-1&t=5zEU72ZptP1wO3sv-1',
        primary: true,
      },
    ],
  },
]

function ProjectLink({ link }) {
  const base =
    'group/link inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
  const style = link.primary
    ? 'bg-white text-[#7B3034] hover:bg-[#AEB1AD] hover:text-[#1F1D1B]'
    : 'border border-white/30 text-white hover:border-white hover:bg-white hover:text-[#7B3034]'

  // Real external URLs open in a new tab so visitors don't lose the portfolio.
  const isExternal = /^https?:\/\//.test(link.href)
  const externalProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <a href={link.href} {...externalProps} className={`${base} ${style}`}>
      {link.label}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
    </a>
  )
}

// Horizontally scroll-snapping gallery of portrait phone mockups (used for mobile-app case studies).
// variant 'device' — transparent-background mockups that float (drop shadow follows the silhouette).
// variant 'card'   — opaque screenshots presented as rounded cards; kept smaller so low-res shots stay crisp.
function PhoneGallery({ shots, variant = 'device' }) {
  const imgClass =
    variant === 'card'
      ? 'h-[280px] w-auto rounded-xl shadow-2xl shadow-black/40 ring-1 ring-black/5 transition-transform duration-500 ease-out hover:-translate-y-1.5 sm:h-[320px]'
      : 'h-[340px] w-auto rounded-[2rem] drop-shadow-2xl transition-transform duration-500 ease-out hover:-translate-y-1.5 sm:h-[400px] lg:h-[440px]'

  return (
    <div className="relative min-w-0">
      <ul className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5 pl-1 pt-2 [-webkit-overflow-scrolling:touch] [scrollbar-color:rgba(255,255,255,0.35)_transparent] [scrollbar-width:thin]">
        {shots.map((shot) => (
          <li key={shot.src} className="shrink-0 snap-start">
            <figure className="flex flex-col items-center">
              <img
                src={asset(shot.src)}
                alt={shot.alt}
                loading="lazy"
                className={imgClass}
              />
              <figcaption className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                {shot.label}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      {/* Right-edge fade cueing that the gallery scrolls */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-[#7B3034] to-transparent"
      />
      <p className="mt-1 flex items-center gap-2 text-xs font-medium tracking-wide text-white/45">
        <span aria-hidden="true">←</span>
        Swipe to explore all {shots.length} screens
        <span aria-hidden="true">→</span>
      </p>
    </div>
  )
}

// Responsive-web showcase: a desktop hero with the mobile (RTL) views presented as cards beneath.
function ResponsiveShowcase({ desktop, phones }) {
  return (
    <div className="min-w-0">
      <figure className="drop-shadow-2xl">
        <img
          src={asset(desktop.src)}
          alt={desktop.alt}
          loading="lazy"
          className="mx-auto w-full max-w-[560px] transition-transform duration-500 ease-out hover:-translate-y-1"
        />
      </figure>
      <div className="mt-6 flex justify-center gap-5 sm:gap-7">
        {phones.map((phone) => (
          <figure key={phone.src} className="flex flex-col items-center">
            <img
              src={asset(phone.src)}
              alt={phone.alt}
              loading="lazy"
              className="w-[132px] rounded-xl shadow-2xl shadow-black/40 ring-1 ring-white/10 transition-transform duration-500 ease-out hover:-translate-y-1.5 sm:w-[150px]"
            />
            <figcaption className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
              {phone.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, reverse, first }) {
  return (
    <article
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
        first ? '' : 'border-t border-white/10 pt-16 lg:pt-24'
      }`}
    >
      <Reveal className={`min-w-0 ${reverse ? 'lg:order-2' : ''}`.trim()}>
        {project.gallery ? (
          <PhoneGallery shots={project.gallery} variant={project.galleryVariant} />
        ) : project.showcase ? (
          <ResponsiveShowcase
            desktop={project.showcase.desktop}
            phones={project.showcase.phones}
          />
        ) : (
          <div className="group relative">
            <div className="overflow-hidden rounded-2xl bg-white/5 shadow-2xl shadow-black/30 ring-1 ring-white/15">
              <img
                src={asset(project.image)}
                alt={project.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          </div>
        )}
      </Reveal>

      <Reveal delay={120} className={reverse ? 'lg:order-1' : ''}>
        <div className="flex items-center gap-4">
          <span className="font-display text-lg italic text-white/50">{project.index}</span>
          <span aria-hidden="true" className="h-px w-10 bg-white/30" />
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/55">
            {project.eyebrow}
          </span>
        </div>

        <h3 className="mt-5 font-display text-3xl tracking-tight sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium uppercase tracking-[0.14em] text-white/50">
          {project.subtitle}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 lg:text-lg">
          {project.description}
        </p>

        <ul aria-label="Skills and technologies" className="mt-8 flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <ProjectLink key={link.label} link={link} />
          ))}
        </div>
      </Reveal>
    </article>
  )
}

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="bg-[#7B3034] text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/55">
            Selected Work
          </p>
          <h2
            id="case-studies-heading"
            className="mt-4 font-display text-4xl tracking-tight sm:text-5xl lg:text-6xl"
          >
            Case Studies
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            Three projects where research, design, and accessibility meet — each one grounded
            in real users and built with care.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 lg:mt-24 lg:space-y-24">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              reverse={i % 2 === 1}
              first={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
