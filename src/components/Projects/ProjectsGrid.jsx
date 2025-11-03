import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const ProjectsGrid = () => {
  const projectsRef = useRef([])

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React & Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/api/placeholder/400/250"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio with animations and responsive design",
      tech: ["React", "GSAP", "Tailwind"],
      image: "/api/placeholder/400/250"
    },
    {
      title: "Task Management App",
      description: "Productivity app with real-time updates",
      tech: ["Vue.js", "Firebase", "SCSS"],
      image: "/api/placeholder/400/250"
    }
  ]

  useEffect(() => {
    gsap.fromTo(projectsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }
    )
  }, [])

  const addToRefs = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el)
    }
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {projects.map((project, index) => (
        <div
          key={index}
          ref={addToRefs}
          className="bg-secondary/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
        >
          <div className="h-48 bg-gradient-to-br from-accent to-purple-600"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-primary px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsGrid