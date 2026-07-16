import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import Footer from './components/Footer.jsx'
import MidanCaseStudy from './components/MidanCaseStudy.jsx'
import KACaseStudy from './components/KACaseStudy.jsx'

// Minimal hash routing: "#/midan" opens the Midan case study, anything else is the home page.
// Hash routing needs no server config, so it works as-is on GitHub Pages.
function useHashRoute() {
  const [hash, setHash] = useState(() =>
    typeof window !== 'undefined' ? window.location.hash : '',
  )
  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return hash
}

export default function App() {
  const hash = useHashRoute()
  const route = hash === '#/midan' ? 'midan' : hash === '#/khatib-alami' ? 'ka' : 'home'

  // Scroll to top only when switching between a case study and the home page,
  // so in-page anchor links (#case-studies, #contact) keep working normally.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [route])

  return (
    <div className="bg-[#AEB1AD] font-sans text-[#1F1D1B] antialiased selection:bg-[#7B3034] selection:text-white">
      {route === 'midan' ? (
        <MidanCaseStudy />
      ) : route === 'ka' ? (
        <KACaseStudy />
      ) : (
        <>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#1F1D1B] focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">
            <Hero />
            <CaseStudies />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
