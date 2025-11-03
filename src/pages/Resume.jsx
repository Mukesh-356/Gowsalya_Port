import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Resume = () => {
  const pageRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    ).fromTo(sectionsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.5"
    )
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "GSAP", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "UI/UX Design", level: 80 }
  ]

  return (
    <div ref={pageRef} className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-12">Resume</h1>
        
        {/* Skills Section */}
        <section ref={addToRefs} className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-accent">Skills</h2>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-secondary/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-primary rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-accent to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section ref={addToRefs} className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-accent">Experience</h2>
          <div className="space-y-6">
            <div className="bg-secondary/50 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
              <p className="text-gray-300 mb-2">Tech Company • 2022 - Present</p>
              <p className="text-gray-400">Developed modern web applications using React, GSAP, and Tailwind CSS.</p>
            </div>
          </div>
        </section>

        {/* Download Button */}
        <div ref={addToRefs} className="text-center">
          <button className="bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default Resume