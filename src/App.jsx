import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-[#AEB1AD] font-sans text-[#1F1D1B] antialiased selection:bg-[#7B3034] selection:text-white">
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
    </div>
  )
}
