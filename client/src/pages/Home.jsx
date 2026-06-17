import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Education from '../components/Education.jsx'
import Contact from '../components/Contact.jsx'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}

export default Home