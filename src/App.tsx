import { languageNames, useI18n } from './i18n'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Technologies } from './components/Technologies'
import { Certifications } from './components/Certifications'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const { language, t } = useI18n()

  return (
    <>
      <a className="skip-link" href="#main">
        {t.a11y.skip}
      </a>
      {/* Announces the active language when the dictionary swaps. */}
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {languageNames[language]}
      </span>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Technologies />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
