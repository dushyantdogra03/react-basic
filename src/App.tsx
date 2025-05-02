import '/public/css/styles.css';
import About from './components/About';
import Nav from './components/Nav';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Projects from './components/Projects';

function App() {

  return (
    <>
      <Nav />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Interests />
    </>
  )
}

export default App
