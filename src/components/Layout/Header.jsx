import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

const Header = () => {
  const headerRef = useRef(null)
  const navItemsRef = useRef([])
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' }
  ]

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
    )
    
    tl.fromTo(navItemsRef.current,
      { y: -50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.1,
        ease: "back.out(1.7)"
      },
      "-=0.5"
    )
  }, [])

  const addToRefs = (el) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current.push(el)
    }
  }

  return (
    <header ref={headerRef} className="fixed top-0 w-full glass z-50">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-12">
          {navItems.map((item, index) => (
            <li key={item.path} ref={addToRefs}>
              <Link
                to={item.path}
                className={`
                  relative px-6 py-3 text-lg font-semibold transition-all duration-500
                  ${location.pathname === item.path 
                    ? 'gradient-text' 
                    : 'text-white hover:text-cyan-300'
                  }
                `}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 neon-glow"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header