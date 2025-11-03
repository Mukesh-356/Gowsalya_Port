import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LoadingAnimation from './components/Loading/LoadingAnimation'
import Navbar from './components/Layout/Navbar'
import CustomCursor from './components/Layout/CustomCursor'
import Hero from './components/Sections/Hero'
import About from './components/Sections/About'
import Skills from './components/Sections/Skills'
import Projects from './components/Sections/Projects'
import Resume from './components/Sections/Resume'
import Contact from './components/Sections/Contact'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingAnimation />
  }

  return (
    <div className="bg-black min-h-screen font-sans overflow-hidden">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      
      {/* Simple Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <p>© 2024 Gowsalya . All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App