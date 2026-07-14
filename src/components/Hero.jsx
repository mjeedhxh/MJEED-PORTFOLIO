import Reveal from './Reveal.jsx'
import { ArrowDown, ArrowUpRight } from './Icons.jsx'

const disciplines = [
  'UX Research',
  'UI Design',
  'Inclusive Design',
  'Accessibility (WCAG)',
  'Figma',
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#AEB1AD]">
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -bottom-48 -left-32 h-[30rem] w-[30rem] rounded-full bg-[#7B3034]/10 blur-3xl" />
        <div className="absolute right-[6%] top-[16%] hidden h-72 w-72 rounded-full border border-[#1F1D1B]/10 lg:block" />
        <div className="absolute right-[13%] top-[30%] hidden h-40 w-40 rounded-full border border-[#7B3034]/15 lg:block" />
      </div>

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pb-20 pt-32 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#1F1D1B]/15 bg-white/30 px-4 py-1.5 text-xs font-medium tracking-wide text-[#1F1D1B]/80 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7B3034] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7B3034]" />
            </span>
            Abdulmjeed Alqurashi — HCI Graduate &amp; Accessibility Designer
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.06] tracking-tight text-[#1F1D1B] sm:text-6xl lg:text-7xl">
            Bridging the gap between{' '}
            <em className="italic text-[#7B3034]">empathic design</em> and{' '}
            <em className="italic text-[#7B3034]">technical implementation</em>.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#1F1D1B]/75 lg:text-xl">
            I&rsquo;m an HCI graduate and designer focused on inclusive, accessible
            experiences — pairing UX research with thoughtful interface design in Figma to
            build products that work for everyone, not just the average user.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#case-studies"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#7B3034] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#7B3034]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#7B3034]/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B3034]"
            >
              View Case Studies
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#1F1D1B]/25 px-8 py-4 text-sm font-semibold text-[#1F1D1B] transition-all duration-300 hover:border-[#1F1D1B] hover:bg-[#1F1D1B] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F1D1B]"
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <ul className="mt-20 flex flex-wrap items-center gap-x-3 gap-y-2.5 border-t border-[#1F1D1B]/15 pt-7 text-xs font-medium uppercase tracking-[0.18em] text-[#1F1D1B]/60">
            {disciplines.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#7B3034]/50" />
                )}
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
