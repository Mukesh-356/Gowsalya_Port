import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const LoadingAnimation = () => {
  const loadingRef = useRef(null)
  const textRef = useRef(null)
  const spinnerRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Spinner animation
    tl.to(spinnerRef.current, {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: "power2.inOut"
    })

    // Text animation
    tl.fromTo(textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=1.5"
    )

  }, [])

  return (
    <div 
      ref={loadingRef}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* Spinner */}
        <div 
          ref={spinnerRef}
          className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full mx-auto mb-8"
          style={{
            boxShadow: '0 0 20px #00D8FF'
          }}
        />
        
        {/* Text */}
        <h2 
          ref={textRef}
          className="text-4xl font-bold text-white"
          style={{
            background: 'linear-gradient(135deg, #00D8FF 0%, #7928CA 50%, #FF0080 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Gowsalya 
        </h2>
      </div>
    </div>
  )
}

export default LoadingAnimation