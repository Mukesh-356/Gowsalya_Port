import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Projects = () => {
  const sectionRef = useRef(null)
  const projectsRef = useRef([])

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI and smooth animations",
      tech: ["React", "Node.js", "MongoDB"],
      image: "🛒"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio with advanced animations and responsive design",
      tech: ["React", "GSAP", "Tailwind"],
      image: "💼"
    },
    {
      title: "Task Management App",
      description: "Productivity app with real-time updates and intuitive UI",
      tech: ["Vue.js", "Firebase", "SCSS"],
      image: "✅"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with interactive charts and maps",
      tech: ["React", "Chart.js", "API"],
      image: "🌤️"
    }
  ]

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

    gsap.fromTo(projectsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current[0],
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    )
  }, [])

  const addToRefs = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el)
    }
  }

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 min-h-screen flex items-center bg-black">
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
            My Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Some of my recent work that I'm proud of
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="h-48 flex items-center justify-center text-6xl"
                   style={{
                     background: 'linear-gradient(135deg, rgba(0, 216, 255, 0.1) 0%, rgba(121, 40, 202, 0.1) 100%)'
                   }}>
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm text-cyan-300"
                      style={{
                        background: 'rgba(0, 216, 255, 0.1)',
                        border: '1px solid rgba(0, 216, 255, 0.3)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects