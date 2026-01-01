import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';

const MainSite = () => {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <Activities />
      <Gallery />
      <Contact />
    </>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
