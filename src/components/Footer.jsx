import Reveal from './Reveal.jsx'
import { ArrowUpRight, GitHubIcon, LinkedInIcon, PhoneIcon } from './Icons.jsx'

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mjeed-q-b60839271/',
    icon: LinkedInIcon,
  },
  { label: 'GitHub', href: 'https://github.com/mjeedhxh', icon: GitHubIcon },
  { label: '0559102964', href: 'tel:+966559102964', icon: PhoneIcon },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-white/15 bg-[#7B3034] text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/55">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Let&rsquo;s build something great together.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 lg:text-lg">
            Have a role, a project, or an idea worth exploring? My inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <a
            href="mailto:abdulmjeedalqurashi@gmail.com"
            className="group mt-12 inline-flex max-w-full flex-wrap items-center gap-x-4 gap-y-2 break-all font-display text-[clamp(1.35rem,4.6vw,3.6rem)] leading-tight tracking-tight text-white underline decoration-white/25 decoration-2 underline-offset-8 transition-colors duration-300 hover:decoration-[#AEB1AD]"
          >
            abdulmjeedalqurashi@gmail.com
            <ArrowUpRight className="h-[0.6em] w-[0.6em] shrink-0 text-white/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#AEB1AD]" />
          </a>
        </Reveal>

        <Reveal delay={200}>
          <ul className="mt-14 flex flex-wrap gap-3">
            {socials.map(({ label, href, icon: Icon }) => {
              const isExternal = /^https?:\/\//.test(href)
              return (
                <li key={label}>
                  <a
                    href={href}
                    {...(isExternal
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white/90 transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#7B3034] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </Reveal>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/15 pt-8 text-sm text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Abdulmjeed Alqurashi. All rights reserved.</p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
