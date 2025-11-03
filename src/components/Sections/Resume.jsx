import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Resume = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

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

    gsap.fromTo(cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    )
  }, [])

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  const openResume = () => {
    // Replace with your actual Google Drive link
    window.open('https://drive.google.com/file/d/1ItXBwfT-xWHJ5RoN6XlH3TNdxcCwFzZG/view?usp=drive_link', '_blank')
  }

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading frontend development team in creating modern web applications using React, GSAP, and Tailwind CSS.",
      achievements: ["Improved performance by 40%", "Led team of 5 developers", "Implemented CI/CD pipeline"]
    },
    {
      title: "UI/UX Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Created intuitive user interfaces and implemented smooth animations for various web applications.",
      achievements: ["Redesigned 10+ applications", "Improved user engagement by 60%", "Created design system"]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2016 - 2020",
      description: "Specialized in Web Technologies and User Interface Design"
    }
  ]

  return (
    <section id="resume" ref={sectionRef} className="py-20 px-6 min-h-screen flex items-center bg-black">
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
            My Resume
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Download my complete resume to learn more about my experience and qualifications
          </p>
          
          {/* Download Button */}
          <button
            onClick={openResume}
            className="px-8 py-4 rounded-full text-lg font-bold text-white transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto mb-12"
            style={{
              background: 'linear-gradient(135deg, #FF0080 0%, #7928CA 100%)'
            }}
          >
            <span className="text-2xl">📄</span>
            <span>Download Resume (PDF)</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-cyan-300 flex items-center">
              <span className="mr-3">💼</span>
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  ref={addToRefs}
                  className="rounded-2xl p-6 transition-all duration-300 hover:scale-105 group"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-purple-300 font-semibold mt-1">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-semibold text-cyan-300"
                          style={{
                            background: 'rgba(0, 216, 255, 0.1)',
                            border: '1px solid rgba(0, 216, 255, 0.3)'
                          }}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-center text-gray-400">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-purple-300 flex items-center">
              <span className="mr-3">🎓</span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  ref={addToRefs}
                  className="rounded-2xl p-6 transition-all duration-300 hover:scale-105 group"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-cyan-300 font-semibold mt-1">{edu.institution}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-semibold text-purple-300"
                          style={{
                            background: 'rgba(121, 40, 202, 0.1)',
                            border: '1px solid rgba(121, 40, 202, 0.3)'
                          }}>
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <h3 className="text-3xl font-bold mb-8 text-pink-300 flex items-center mt-12">
              <span className="mr-3">🏆</span>
              Certifications
            </h3>
            <div className="space-y-4">
              {[
                "Advanced React Development",
                "UI/UX Design Professional",
                "GSAP Animation Master",
                "Full Stack Development"
              ].map((cert, index) => (
                <div 
                  key={index}
                  ref={addToRefs}
                  className="rounded-xl p-4 transition-all duration-300 hover:scale-105 group"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-pink-400 text-lg">✅</span>
                    <span className="text-white group-hover:text-pink-300 transition-colors">
                      {cert}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 max-w-2xl mx-auto"
               style={{
                 background: 'rgba(255, 255, 255, 0.05)',
                 backdropFilter: 'blur(20px)',
                 border: '1px solid rgba(255, 255, 255, 0.1)'
               }}>
            <h3 className="text-2xl font-bold mb-4 text-white">Interested in working together?</h3>
            <p className="text-gray-300 mb-6">Let's discuss how I can help bring your ideas to life!</p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #00D8FF 0%, #7928CA 100%)'
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume