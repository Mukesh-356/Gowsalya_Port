import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Skills = () => {
  const sectionRef = useRef(null)
  const skillBarsRef = useRef([])
  const numbersRef = useRef([])

  const skills = [
    { name: "React", level: 90, color: "from-cyan-400 to-blue-500", icon: "⚛️" },
    { name: "JavaScript", level: 88, color: "from-yellow-400 to-orange-500", icon: "🟨" },
    { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-cyan-500", icon: "🎨" },
    { name: "GSAP", level: 86, color: "from-green-400 to-green-600", icon: "✨" },
    { name: "Node.js", level: 82, color: "from-green-500 to-emerald-600", icon: "🟢" },
    { name: "UI/UX Design", level: 88, color: "from-purple-400 to-pink-500", icon: "🎯" }
  ]

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })

    // Section animation
    tl.fromTo(sectionRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    )

    // Animate numbers counting up
    numbersRef.current.forEach((number, index) => {
      const targetValue = skills[index].level
      gsap.fromTo(number,
        { textContent: 0 },
        {
          textContent: targetValue,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: number,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      )
    })

    // Animate skill bars filling
    skillBarsRef.current.forEach((bar, index) => {
      const targetWidth = skills[index].level + '%'
      gsap.fromTo(bar,
        { width: "0%" },
        {
          width: targetWidth,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      )
    })

    // Add floating animation to skill cards
    gsap.to(".skill-card", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    })

  }, [])

  const addSkillBarRef = (el) => {
    if (el && !skillBarsRef.current.includes(el)) {
      skillBarsRef.current.push(el)
    }
  }

  const addNumberRef = (el) => {
    if (el && !numbersRef.current.includes(el)) {
      numbersRef.current.push(el)
    }
  }

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 min-h-screen flex items-center bg-black">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white"
              style={{
                background: 'linear-gradient(135deg, #00D8FF 0%, #7928CA 50%, #FF0080 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            My Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="skill-card rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <span className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
                <span 
                  ref={addNumberRef}
                  className="text-cyan-400 font-bold text-lg transform group-hover:scale-110 transition-transform duration-300"
                >
                  0%
                </span>
              </div>
              
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden relative z-10">
                <div 
                  ref={addSkillBarRef}
                  className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 transform origin-left`}
                  style={{ width: '0%' }}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-white/30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
            </div>
          ))}
        </div>

        {/* Additional Info with Animation */}
        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 max-w-2xl mx-auto relative overflow-hidden"
               style={{
                 background: 'rgba(255, 255, 255, 0.05)',
                 backdropFilter: 'blur(20px)',
                 border: '1px solid rgba(255, 255, 255, 0.1)'
               }}>
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <div className="absolute inset-[2px] bg-black rounded-2xl -z-10"></div>
            
            <h3 className="text-2xl font-bold mb-4 text-white"
                style={{
                  background: 'linear-gradient(135deg, #00D8FF 0%, #7928CA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
              Always Learning
            </h3>
            <p className="text-gray-300">
              I'm constantly exploring new technologies and frameworks to stay at the forefront of web development. 
              Currently diving deeper into <span className="text-cyan-300 font-semibold">Three.js</span> and{' '}
              <span className="text-purple-300 font-semibold">WebGL</span> for immersive 3D web experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills