import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.1,
        ease: "power2.out"
      })
      
      gsap.to(follower, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    document.addEventListener('mousemove', moveCursor)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-50"
        style={{
          boxShadow: '0 0 20px #00D8FF'
        }}
      />
      <div
        ref={followerRef}
        className="fixed w-10 h-10 border-2 border-cyan-400 rounded-full pointer-events-none z-40 opacity-50"
        style={{
          boxShadow: '0 0 20px #00D8FF'
        }}
      />
    </>
  )
}

export default CustomCursor