import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Plans from './components/Plans'
import Footer from './components/Footer'
import Lenis from 'lenis'
import 'remixicon/fonts/remixicon.css'

function App() {

  useEffect(() => {
        // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
      
    }

    requestAnimationFrame(raf);
      
        return () => {
      lenis.destroy();
    };
  }, [])
  

  return (
    <div>
      <NavBar />
      <Hero />
      <HowItWorks />
      <Plans />
      <Footer />
    </div>
  )
}

export default App
