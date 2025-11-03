import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ProjectsGrid from '../components/Projects/ProjectsGrid'

const Projects = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(pageRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
  }, [])

  return (
    <div ref={pageRef} className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold text-center mb-4">My Projects</h1>
        <p className="text-xl text-gray-300 text-center mb-12">
          Here are some of my recent works
        </p>
        <ProjectsGrid />
      </div>
    </div>
  )
}

export default Projects