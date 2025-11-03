import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Hero from '../components/Home/Hero'

const Home = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    )
  }, [])

  return (
    <div ref={pageRef} className="pt-20">
      <Hero />
    </div>
  )
}

export default Home