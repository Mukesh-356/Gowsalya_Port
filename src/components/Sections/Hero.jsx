import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const nameRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonsRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const tl = gsap.timeline()

    // Background particles animation
    particlesRef.current.forEach((particle, index) => {
      gsap.to(particle, {
        x: `random(-200, 200)`,
        y: `random(-200, 200)`,
        rotation: `random(0, 360)`,
        duration: `random(3, 6)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5
      })
    })

    // Title animation with typewriter effect
    tl.fromTo(titleRef.current,
      { 
        opacity: 0, 
        y: 100,
        scale: 0.8
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 1.5, 
        ease: "power4.out"
      }
    )

    // Name reveal with glow effect
    tl.fromTo(nameRef.current,
      { 
        scale: 0, 
        opacity: 0,
        textShadow: "0 0 0px #00D8FF"
      },
      { 
        scale: 1, 
        opacity: 1,
        textShadow: "0 0 20px #00D8FF, 0 0 40px #00D8FF",
        duration: 1,
        ease: "back.out(1.7)"
      },
      "-=0.5"
    )

    // Subtitle typing effect
    tl.to(subtitleRef.current, {
      duration: 2,
      text: {
        value: "Creative Developer & UI/UX Designer crafting extraordinary digital experiences with cutting-edge technologies and innovative design",
        speed: 1
      },
      ease: "power2.inOut"
    }, "-=0.3")

    // Buttons animation with stagger
    tl.fromTo(".cta-button",
      { 
        scale: 0, 
        rotation: -180,
        opacity: 0 
      },
      { 
        scale: 1, 
        rotation: 0,
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)" 
      },
      "-=0.5"
    )

    // Continuous floating animation
    gsap.to(".float-element", {
      y: 30,
      rotation: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 1
    })

  }, [])

  const addParticleRef = (el) => {
    if (el && !particlesRef.current.includes(el)) {
      particlesRef.current.push(el)
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" ref={heroRef} className="min-h-screen relative flex items-center justify-center overflow-hidden px-6 bg-black">
      
      {/* Animated Background Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          ref={addParticleRef}
          className="absolute w-2 h-2 rounded-full opacity-20"
          style={{
            background: `linear-gradient(135deg, #00D8FF, #7928CA)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Background Grid with Animation */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 216, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 216, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'pan 20s linear infinite'
        }}
      />

      <div className="text-center relative z-10 max-w-6xl mx-auto">
        
        {/* Main Title */}
        <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter text-white"
            style={{
              WebkitTextStroke: '2px #00D8FF',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 10px #00D8FF)'
            }}>
          DEVELOPER
        </h1>
        
        {/* Name Section */}
        <div ref={nameRef} className="mb-12 transform hover:scale-105 transition-transform duration-500">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Gowsalya Anbalagan <span style={{
              background: 'linear-gradient(135deg, #00D8FF 0%, #7928CA 50%, #FF0080 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 10px rgba(0, 216, 255, 0.5))'
            }}></span>
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full transform hover:scale-110 transition-transform duration-300"></div>
        </div>

        {/* Subtitle */}
        <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
          {/* Text will be typed automatically */}
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => scrollToSection('projects')}
            className="cta-button px-12 py-4 rounded-full text-lg font-bold text-white transition-all duration-300 hover:scale-110 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #00D8FF 0%, #7928CA 100%)'
            }}
          >
            <span className="relative z-10">🚀 View My Work</span>
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="cta-button px-8 py-4 rounded-full text-lg font-bold text-white border transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            📞 Get In Touch
          </button>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="float-element absolute top-20 left-20 w-6 h-6 bg-cyan-400 rounded-full opacity-40" 
           style={{filter: 'drop-shadow(0 0 10px #00D8FF)'}}></div>
      <div className="float-element absolute bottom-32 right-32 w-8 h-8 bg-purple-500 rounded-full opacity-40"
           style={{filter: 'drop-shadow(0 0 10px #7928CA)'}}></div>
      <div className="float-element absolute top-40 right-40 w-4 h-4 bg-pink-500 rounded-full opacity-40"
           style={{filter: 'drop-shadow(0 0 10px #FF0080)'}}></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-400 text-sm animate-pulse">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center hover:border-cyan-300 transition-colors duration-300">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce hover:bg-cyan-300 transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero