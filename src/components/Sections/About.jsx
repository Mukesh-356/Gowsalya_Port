import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 min-h-screen flex items-center bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white"
                style={{
                  background: 'linear-gradient(135deg, #00D8FF 0%, #7928CA 50%, #FF0080 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
              About Me
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a passionate <span className="text-cyan-300 font-semibold">Creative Developer</span> and{' '}
                <span className="text-purple-300 font-semibold">UI/UX Designer</span> with over 3 years of 
                experience in crafting digital experiences.
              </p>
              <p>
                My expertise lies in creating responsive, performant web applications using modern technologies 
                like <span className="text-cyan-300">React</span>, <span className="text-cyan-300">GSAP</span>, and{' '}
                <span className="text-cyan-300">Tailwind CSS</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="px-6 py-3 rounded-full text-white"
                   style={{
                     background: 'rgba(255, 255, 255, 0.05)',
                     backdropFilter: 'blur(20px)',
                     border: '1px solid rgba(255, 255, 255, 0.1)'
                   }}>
                <span className="text-cyan-300 font-semibold">3+</span> Years Experience
              </div>
              <div className="px-6 py-3 rounded-full text-white"
                   style={{
                     background: 'rgba(255, 255, 255, 0.05)',
                     backdropFilter: 'blur(20px)',
                     border: '1px solid rgba(255, 255, 255, 0.1)'
                   }}>
                <span className="text-purple-300 font-semibold">50+</span> Projects Completed
              </div>
            </div>
          </div>

          {/* Image/Graphic */}
          <div className="relative">
            <div className="rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500"
                 style={{
                   background: 'rgba(255, 255, 255, 0.05)',
                   backdropFilter: 'blur(20px)',
                   border: '1px solid rgba(255, 255, 255, 0.1)'
                 }}>
              <div className="rounded-2xl h-80 flex items-center justify-center"
                   style={{
                     background: 'linear-gradient(135deg, rgba(0, 216, 255, 0.1) 0%, rgba(121, 40, 202, 0.1) 100%)'
                   }}>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👩‍💻</span>
                  </div>
                  <p className="text-lg font-semibold text-white">Creative Developer</p>
                  <p className="text-gray-400">& UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About