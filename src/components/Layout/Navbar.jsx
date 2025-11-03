import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Navbar = () => {
  const navRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
    )
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Function to open resume
  const openResume = () => {
    // Replace with your actual Google Drive link
    window.open('https://drive.google.com/file/d/1ItXBwfT-xWHJ5RoN6XlH3TNdxcCwFzZG/view?usp=drive_link', '_blank')
  }
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
]

  return (
    <nav ref={navRef} className="fixed top-0 w-full z-50 py-4" 
         style={{
           background: 'rgba(255, 255, 255, 0.05)',
           backdropFilter: 'blur(20px)',
           borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
         }}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold text-white">Gowsalya </span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            
            {/* Resume Button */}
            <button
              onClick={openResume}
              className="px-6 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              style={{
                background: 'linear-gradient(135deg, #FF0080 0%, #7928CA 100%)'
              }}
            >
              <span>📄</span>
              <span>View Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar