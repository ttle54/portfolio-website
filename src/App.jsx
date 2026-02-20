import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

import './index.css';

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <div className="animated-grid-bg"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
