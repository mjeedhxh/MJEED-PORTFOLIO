import { useEffect, useState } from 'react'

const links = [
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#1F1D1B]/10 bg-[#AEB1AD]/85 shadow-sm backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-[#1F1D1B] transition-colors hover:text-[#7B3034]"
        >
          Abdulmjeed<span className="text-[#7B3034]">.</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-[#1F1D1B]/80 transition-colors hover:bg-white/30 hover:text-[#1F1D1B] sm:block"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:abdulmjeedalqurashi@gmail.com"
            className="ml-2 rounded-full bg-[#1F1D1B] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#7B3034] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F1D1B]"
          >
            Email Me
          </a>
        </div>
      </nav>
    </header>
  )
}
